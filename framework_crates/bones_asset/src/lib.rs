//! An asset interface for Bones.

#![warn(missing_docs)]
// This cfg_attr is needed because `rustdoc::all` includes lints not supported on stable
#![cfg_attr(doc, allow(unknown_lints))]
#![deny(rustdoc::all)]

use serde::{de::DeserializeSeed, Deserializer};

/// Helper to export the same types in the crate root and in the prelude.
macro_rules! pub_use {
    () => {
        pub use crate::{asset::*, cid::*, handle::*, io::*, network_handle::*, server::*};
        pub use anyhow;
        pub use bones_schema::prelude::*;
        pub use dashmap;
        pub use path_absolutize::Absolutize;
        pub use semver::Version;
    };
}
pub_use!();

/// The prelude.
pub mod prelude {
    pub_use!();
    pub use super::{Maybe, Maybe::*};
}

mod asset;
mod cid;
mod handle;
mod io;
mod network_handle;
mod parse;
mod server;

/// An equivalent to [`Option<T>`] that has a stable memory layout and implements [`HasSchema`].
#[derive(HasSchema, Clone, Copy, PartialEq, Eq, Hash, PartialOrd, Ord, Default, Debug)]
#[type_data(SchemaMetaAssetLoader(maybe_loader))]
#[repr(C, u8)]
pub enum Maybe<T> {
    /// The value is not set.
    #[default]
    Unset,
    /// The value is set.
    Set(T),
}

impl<T> Maybe<T> {
    /// Convert this [`Maybe`] into an [`Option`].
    pub fn option(self) -> Option<T> {
        self.into()
    }

    /// Returns `true` if the option is a `Set` value.
    pub fn is_set(&self) -> bool {
        matches!(self, Maybe::Set(_))
    }

    /// Returns `true` if the option is an `Unset` value.
    pub fn is_unset(&self) -> bool {
        matches!(self, Maybe::Unset)
    }

    /// Returns `true` if the option is a `Set` value.
    pub fn is_some(&self) -> bool {
        matches!(self, Maybe::Set(_))
    }

    /// Returns `true` if the option is an `Unset` value.
    pub fn is_none(&self) -> bool {
        matches!(self, Maybe::Unset)
    }

    /// Returns `true` if the option is a `Set` value containing the given value.
    pub fn contains<U>(&self, x: &U) -> bool
    where
        U: PartialEq<T>,
    {
        match self {
            Maybe::Set(y) => x == y,
            Maybe::Unset => false,
        }
    }

    /// Converts from `&Maybe<T>` to `Maybe<&T>`.
    pub fn as_ref(&self) -> Maybe<&T> {
        match *self {
            Maybe::Unset => Maybe::Unset,
            Maybe::Set(ref x) => Maybe::Set(x),
        }
    }

    /// Converts from `&mut Maybe<T>` to `Maybe<&mut T>`.
    pub fn as_mut(&mut self) -> Maybe<&mut T> {
        match *self {
            Maybe::Unset => Maybe::Unset,
            Maybe::Set(ref mut x) => Maybe::Set(x),
        }
    }

    /// Returns the contained `Set` value, consuming the `self` value.
    pub fn expect(self, msg: &str) -> T {
        self.option().expect(msg)
    }

    /// Returns the contained `Set` value, consuming the `self` value.
    pub fn unwrap(self) -> T {
        self.option().unwrap()
    }

    /// Returns the contained `Set` value or a provided default.
    pub fn unwrap_or(self, default: T) -> T {
        self.option().unwrap_or(default)
    }

    /// Returns the contained `Set` value or computes it from a closure.
    pub fn unwrap_or_else<F: FnOnce() -> T>(self, f: F) -> T {
        self.option().unwrap_or_else(f)
    }

    /// Maps a `Maybe<T>` to `Maybe<U>` by applying a function to a contained value.
    pub fn map<U, F: FnOnce(T) -> U>(self, f: F) -> Maybe<U> {
        self.option().map(f).into()
    }

    /// Returns `Unset` if the option is `Unset`, otherwise calls `f` with the wrapped value and returns the result.
    pub fn and_then<U, F: FnOnce(T) -> Maybe<U>>(self, f: F) -> Maybe<U> {
        self.option().and_then(|x| f(x).option()).into()
    }

    /// Returns `Unset` if the option is `Unset`, otherwise returns `optb`.
    pub fn and<U>(self, optb: Maybe<U>) -> Maybe<U> {
        self.option().and(optb.option()).into()
    }

    /// Returns `Unset` if the option is `Unset`, otherwise calls `predicate` with the wrapped value and returns:
    pub fn filter<P: FnOnce(&T) -> bool>(self, predicate: P) -> Maybe<T> {
        self.option().filter(predicate).into()
    }

    /// Returns the option if it contains a value, otherwise returns `optb`.
    pub fn or(self, optb: Maybe<T>) -> Maybe<T> {
        self.option().or(optb.option()).into()
    }

    /// Returns the option if it contains a value, otherwise calls `f` and returns the result.
    pub fn or_else<F: FnOnce() -> Maybe<T>>(self, f: F) -> Maybe<T> {
        self.option().or_else(|| f().option()).into()
    }

    /// Returns `Set` if exactly one of `self`, `optb` is `Set`, otherwise returns `Unset`.
    pub fn xor(self, optb: Maybe<T>) -> Maybe<T> {
        self.option().xor(optb.option()).into()
    }

    /// Inserts `v` into the option if it is `Unset`, then returns a mutable reference to the contained value.
    pub fn get_or_insert(&mut self, v: T) -> &mut T {
        if let Maybe::Unset = self {
            *self = Maybe::Set(v);
        }
        match self {
            Maybe::Set(ref mut v) => v,
            Maybe::Unset => unreachable!(),
        }
    }

    /// Inserts a value computed from `f` into the option if it is `Unset`, then returns a mutable reference to the contained value.
    pub fn get_or_insert_with<F: FnOnce() -> T>(&mut self, f: F) -> &mut T {
        if let Maybe::Unset = self {
            *self = Maybe::Set(f());
        }
        match self {
            Maybe::Set(ref mut v) => v,
            Maybe::Unset => unreachable!(),
        }
    }

    /// Takes the value out of the option, leaving an `Unset` in its place.
    pub fn take(&mut self) -> Maybe<T> {
        std::mem::replace(self, Maybe::Unset)
    }

    /// Replaces the actual value in the option by the value given in parameter, returning the old value if present.
    pub fn replace(&mut self, value: T) -> Maybe<T> {
        std::mem::replace(self, Maybe::Set(value))
    }

    /// Zips `self` with another `Maybe`.
    pub fn zip<U>(self, other: Maybe<U>) -> Maybe<(T, U)> {
        self.option().zip(other.option()).into()
    }

    /// Unzips a `Maybe` containing a tuple of two `Maybe`s.
    pub fn unzip<T1, T2>(self) -> (Maybe<T1>, Maybe<T2>)
    where
        T: Into<(T1, T2)>,
    {
        let (a, b) = self.option().unzip();
        (a.into(), b.into())
    }

    /// Transposes a `Maybe` of a `Result` into a `Result` of a `Maybe`.
    pub fn transpose<E>(self) -> Result<Maybe<T>, E>
    where
        T: Into<Result<T, E>>,
    {
        self.option().transpose().map(Into::into)
    }

    /// Returns `Set` if the option is `Set` and the value inside of it matches a predicate.
    pub fn is_some_and<F>(self, f: F) -> bool
    where
        F: FnOnce(&T) -> bool,
    {
        self.option().is_some_and(f)
    }

    /// Returns the contained `Set` value, consuming the `self` value, without checking that the value is not `Unset`.
    pub unsafe fn unwrap_unchecked(self) -> T {
        self.option().unwrap_unchecked()
    }

    /// Maps a `Maybe<T>` to `U` by applying a function to a contained value, or returns a default.
    pub fn map_or<U, F: FnOnce(T) -> U>(self, default: U, f: F) -> U {
        self.option().map_or(default, f)
    }

    /// Maps a `Maybe<T>` to `U` by applying a function to a contained value, or computes a default.
    pub fn map_or_else<U, D: FnOnce() -> U, F: FnOnce(T) -> U>(self, default: D, f: F) -> U {
        self.option().map_or_else(default, f)
    }

    /// Returns an iterator over the possibly contained value.
    pub fn iter(&self) -> std::option::Iter<'_, T> {
        self.option().iter()
    }

    /// Returns a mutable iterator over the possibly contained value.
    pub fn iter_mut(&mut self) -> std::option::IterMut<'_, T> {
        self.option().iter_mut()
    }

    /// Returns the contained `Set` value or a default.
    pub fn unwrap_or_default(self) -> T
    where
        T: Default,
    {
        self.option().unwrap_or_default()
    }

    /// Transforms the `Maybe<T>` into a `Result<T, E>`, mapping `Set(v)` to `Ok(v)` and `Unset` to `Err(err)`.
    pub fn ok_or<E>(self, err: E) -> Result<T, E> {
        self.option().ok_or(err)
    }

    /// Transforms the `Maybe<T>` into a `Result<T, E>`, mapping `Set(v)` to `Ok(v)` and `Unset` to `Err(err())`.
    pub fn ok_or_else<E, F: FnOnce() -> E>(self, err: F) -> Result<T, E> {
        self.option().ok_or_else(err)
    }
}

impl<T> From<Maybe<T>> for Option<T> {
    fn from(value: Maybe<T>) -> Self {
        match value {
            Maybe::Set(s) => Some(s),
            Maybe::Unset => None,
        }
    }
}

impl<T> From<Option<T>> for Maybe<T> {
    fn from(value: Option<T>) -> Self {
        match value {
            Some(s) => Maybe::Set(s),
            None => Maybe::Unset,
        }
    }
}

fn maybe_loader(
    ctx: &mut MetaAssetLoadCtx,
    ptr: SchemaRefMut<'_>,
    deserialzer: &mut dyn erased_serde::Deserializer,
) -> anyhow::Result<()> {
    deserialzer.deserialize_option(MaybeVisitor { ctx, ptr })?;

    Ok(())
}

struct MaybeVisitor<'a, 'srv> {
    ctx: &'a mut MetaAssetLoadCtx<'srv>,
    ptr: SchemaRefMut<'a>,
}

impl<'a, 'srv, 'de> serde::de::Visitor<'de> for MaybeVisitor<'a, 'srv> {
    type Value = ();

    fn expecting(&self, formatter: &mut std::fmt::Formatter) -> std::fmt::Result {
        write!(formatter, "an optional value")
    }

    fn visit_unit<E>(self) -> Result<Self::Value, E>
    where
        E: serde::de::Error,
    {
        Ok(())
    }
    fn visit_none<E>(self) -> Result<Self::Value, E>
    where
        E: serde::de::Error,
    {
        Ok(())
    }

    fn visit_some<D>(self, deserializer: D) -> Result<Self::Value, D::Error>
    where
        D: Deserializer<'de>,
    {
        // Write the enum discriminant for the `Set` variant
        // SOUND: we know the discriminant due to the `#[repr(C, u8)]` annotation.
        unsafe {
            self.ptr.as_ptr().cast::<u8>().write(1);
        }

        // Get the pointer to the enum value
        let value_offset = self.ptr.schema().field_offsets()[0].1;
        // NOTE: we take the schema of the first argument of the second enum variant of the
        // [`Maybe`] enum because we know that the `Set` variant only has one argument at offset 0
        // and we actually want to deserialize the inner type, not a typle of length zero.
        let value_schema = self.ptr.schema().kind.as_enum().unwrap().variants[1]
            .schema
            .kind
            .as_struct()
            .unwrap()
            .fields[0]
            .schema;
        // SOUND: the schema asserts this is valid.
        let value_ref = unsafe {
            SchemaRefMut::from_ptr_schema(self.ptr.as_ptr().add(value_offset), value_schema)
        };

        // Load the enum value
        SchemaPtrLoadCtx {
            ctx: self.ctx,
            ptr: value_ref,
        }
        .deserialize(deserializer)
    }
}
