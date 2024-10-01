(function() {var type_impls = {
"bones_lib":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-MappedRwLockReadGuard%3C'a,+R,+T%3E\" class=\"impl\"><a href=\"#impl-Debug-for-MappedRwLockReadGuard%3C'a,+R,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a, R, T&gt; <a class=\"trait\" href=\"bones_lib/ecs/prelude/bones_schema/prelude/bones_utils/prelude/alloc/fmt/trait.Debug.html\" title=\"trait bones_lib::ecs::prelude::bones_schema::prelude::bones_utils::prelude::alloc::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"bones_lib/ecs/prelude/bones_schema/prelude/bones_utils/prelude/parking_lot/lock_api/struct.MappedRwLockReadGuard.html\" title=\"struct bones_lib::ecs::prelude::bones_schema::prelude::bones_utils::prelude::parking_lot::lock_api::MappedRwLockReadGuard\">MappedRwLockReadGuard</a>&lt;'a, R, T&gt;<div class=\"where\">where\n    R: <a class=\"trait\" href=\"bones_lib/ecs/prelude/bones_schema/prelude/bones_utils/prelude/parking_lot/lock_api/trait.RawRwLock.html\" title=\"trait bones_lib::ecs::prelude::bones_schema::prelude::bones_utils::prelude::parking_lot::lock_api::RawRwLock\">RawRwLock</a> + 'a,\n    T: <a class=\"trait\" href=\"bones_lib/ecs/prelude/bones_schema/prelude/bones_utils/prelude/alloc/fmt/trait.Debug.html\" title=\"trait bones_lib::ecs::prelude::bones_schema::prelude::bones_utils::prelude::alloc::fmt::Debug\">Debug</a> + 'a + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"bones_lib/ecs/prelude/bones_schema/prelude/bones_utils/prelude/alloc/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"bones_lib/ecs/prelude/bones_schema/prelude/bones_utils/prelude/alloc/fmt/struct.Formatter.html\" title=\"struct bones_lib::ecs::prelude::bones_schema::prelude::bones_utils::prelude::alloc::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.81.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"bones_lib/ecs/prelude/bones_schema/prelude/bones_utils/prelude/alloc/fmt/struct.Error.html\" title=\"struct bones_lib::ecs::prelude::bones_schema::prelude::bones_utils::prelude::alloc::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"bones_lib/ecs/prelude/bones_schema/prelude/bones_utils/prelude/alloc/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","bones_lib::ecs::prelude::bones_schema::prelude::bones_utils::prelude::parking_lot::MappedRwLockReadGuard"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Deref-for-MappedRwLockReadGuard%3C'a,+R,+T%3E\" class=\"impl\"><a href=\"#impl-Deref-for-MappedRwLockReadGuard%3C'a,+R,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a, R, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"bones_lib/ecs/prelude/bones_schema/prelude/bones_utils/prelude/parking_lot/lock_api/struct.MappedRwLockReadGuard.html\" title=\"struct bones_lib::ecs::prelude::bones_schema::prelude::bones_utils::prelude::parking_lot::lock_api::MappedRwLockReadGuard\">MappedRwLockReadGuard</a>&lt;'a, R, T&gt;<div class=\"where\">where\n    R: <a class=\"trait\" href=\"bones_lib/ecs/prelude/bones_schema/prelude/bones_utils/prelude/parking_lot/lock_api/trait.RawRwLock.html\" title=\"trait bones_lib::ecs::prelude::bones_schema::prelude::bones_utils::prelude::parking_lot::lock_api::RawRwLock\">RawRwLock</a> + 'a,\n    T: 'a + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Target\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Target\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"https://doc.rust-lang.org/1.81.0/core/ops/deref/trait.Deref.html#associatedtype.Target\" class=\"associatedtype\">Target</a> = T</h4></section></summary><div class='docblock'>The resulting type after dereferencing.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.deref\" class=\"method trait-impl\"><a href=\"#method.deref\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.81.0/core/ops/deref/trait.Deref.html#tymethod.deref\" class=\"fn\">deref</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.reference.html\">&amp;T</a></h4></section></summary><div class='docblock'>Dereferences the value.</div></details></div></details>","Deref","bones_lib::ecs::prelude::bones_schema::prelude::bones_utils::prelude::parking_lot::MappedRwLockReadGuard"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Display-for-MappedRwLockReadGuard%3C'a,+R,+T%3E\" class=\"impl\"><a href=\"#impl-Display-for-MappedRwLockReadGuard%3C'a,+R,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a, R, T&gt; <a class=\"trait\" href=\"bones_lib/ecs/prelude/bones_schema/prelude/bones_utils/prelude/alloc/fmt/trait.Display.html\" title=\"trait bones_lib::ecs::prelude::bones_schema::prelude::bones_utils::prelude::alloc::fmt::Display\">Display</a> for <a class=\"struct\" href=\"bones_lib/ecs/prelude/bones_schema/prelude/bones_utils/prelude/parking_lot/lock_api/struct.MappedRwLockReadGuard.html\" title=\"struct bones_lib::ecs::prelude::bones_schema::prelude::bones_utils::prelude::parking_lot::lock_api::MappedRwLockReadGuard\">MappedRwLockReadGuard</a>&lt;'a, R, T&gt;<div class=\"where\">where\n    R: <a class=\"trait\" href=\"bones_lib/ecs/prelude/bones_schema/prelude/bones_utils/prelude/parking_lot/lock_api/trait.RawRwLock.html\" title=\"trait bones_lib::ecs::prelude::bones_schema::prelude::bones_utils::prelude::parking_lot::lock_api::RawRwLock\">RawRwLock</a> + 'a,\n    T: <a class=\"trait\" href=\"bones_lib/ecs/prelude/bones_schema/prelude/bones_utils/prelude/alloc/fmt/trait.Display.html\" title=\"trait bones_lib::ecs::prelude::bones_schema::prelude::bones_utils::prelude::alloc::fmt::Display\">Display</a> + 'a + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"bones_lib/ecs/prelude/bones_schema/prelude/bones_utils/prelude/alloc/fmt/trait.Display.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"bones_lib/ecs/prelude/bones_schema/prelude/bones_utils/prelude/alloc/fmt/struct.Formatter.html\" title=\"struct bones_lib::ecs::prelude::bones_schema::prelude::bones_utils::prelude::alloc::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.81.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"bones_lib/ecs/prelude/bones_schema/prelude/bones_utils/prelude/alloc/fmt/struct.Error.html\" title=\"struct bones_lib::ecs::prelude::bones_schema::prelude::bones_utils::prelude::alloc::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"bones_lib/ecs/prelude/bones_schema/prelude/bones_utils/prelude/alloc/fmt/trait.Display.html#tymethod.fmt\">Read more</a></div></details></div></details>","Display","bones_lib::ecs::prelude::bones_schema::prelude::bones_utils::prelude::parking_lot::MappedRwLockReadGuard"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Drop-for-MappedRwLockReadGuard%3C'a,+R,+T%3E\" class=\"impl\"><a href=\"#impl-Drop-for-MappedRwLockReadGuard%3C'a,+R,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a, R, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"bones_lib/ecs/prelude/bones_schema/prelude/bones_utils/prelude/parking_lot/lock_api/struct.MappedRwLockReadGuard.html\" title=\"struct bones_lib::ecs::prelude::bones_schema::prelude::bones_utils::prelude::parking_lot::lock_api::MappedRwLockReadGuard\">MappedRwLockReadGuard</a>&lt;'a, R, T&gt;<div class=\"where\">where\n    R: <a class=\"trait\" href=\"bones_lib/ecs/prelude/bones_schema/prelude/bones_utils/prelude/parking_lot/lock_api/trait.RawRwLock.html\" title=\"trait bones_lib::ecs::prelude::bones_schema::prelude::bones_utils::prelude::parking_lot::lock_api::RawRwLock\">RawRwLock</a> + 'a,\n    T: 'a + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.drop\" class=\"method trait-impl\"><a href=\"#method.drop\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.81.0/core/ops/drop/trait.Drop.html#tymethod.drop\" class=\"fn\">drop</a>(&amp;mut self)</h4></section></summary><div class='docblock'>Executes the destructor for this type. <a href=\"https://doc.rust-lang.org/1.81.0/core/ops/drop/trait.Drop.html#tymethod.drop\">Read more</a></div></details></div></details>","Drop","bones_lib::ecs::prelude::bones_schema::prelude::bones_utils::prelude::parking_lot::MappedRwLockReadGuard"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-MappedRwLockReadGuard%3C'a,+R,+T%3E\" class=\"impl\"><a href=\"#impl-MappedRwLockReadGuard%3C'a,+R,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a, R, T&gt; <a class=\"struct\" href=\"bones_lib/ecs/prelude/bones_schema/prelude/bones_utils/prelude/parking_lot/lock_api/struct.MappedRwLockReadGuard.html\" title=\"struct bones_lib::ecs::prelude::bones_schema::prelude::bones_utils::prelude::parking_lot::lock_api::MappedRwLockReadGuard\">MappedRwLockReadGuard</a>&lt;'a, R, T&gt;<div class=\"where\">where\n    R: <a class=\"trait\" href=\"bones_lib/ecs/prelude/bones_schema/prelude/bones_utils/prelude/parking_lot/lock_api/trait.RawRwLock.html\" title=\"trait bones_lib::ecs::prelude::bones_schema::prelude::bones_utils::prelude::parking_lot::lock_api::RawRwLock\">RawRwLock</a> + 'a,\n    T: 'a + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.map\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"bones_lib/ecs/prelude/bones_schema/prelude/bones_utils/prelude/parking_lot/lock_api/struct.MappedRwLockReadGuard.html#tymethod.map\" class=\"fn\">map</a>&lt;U, F&gt;(\n    s: <a class=\"struct\" href=\"bones_lib/ecs/prelude/bones_schema/prelude/bones_utils/prelude/parking_lot/lock_api/struct.MappedRwLockReadGuard.html\" title=\"struct bones_lib::ecs::prelude::bones_schema::prelude::bones_utils::prelude::parking_lot::lock_api::MappedRwLockReadGuard\">MappedRwLockReadGuard</a>&lt;'a, R, T&gt;,\n    f: F,\n) -&gt; <a class=\"struct\" href=\"bones_lib/ecs/prelude/bones_schema/prelude/bones_utils/prelude/parking_lot/lock_api/struct.MappedRwLockReadGuard.html\" title=\"struct bones_lib::ecs::prelude::bones_schema::prelude::bones_utils::prelude::parking_lot::lock_api::MappedRwLockReadGuard\">MappedRwLockReadGuard</a>&lt;'a, R, U&gt;<div class=\"where\">where\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/function/trait.FnOnce.html\" title=\"trait core::ops::function::FnOnce\">FnOnce</a>(<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.reference.html\">&amp;T</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.reference.html\">&amp;U</a>,\n    U: ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div></h4></section></summary><div class=\"docblock\"><p>Make a new <code>MappedRwLockReadGuard</code> for a component of the locked data.</p>\n<p>This operation cannot fail as the <code>MappedRwLockReadGuard</code> passed\nin already locked the data.</p>\n<p>This is an associated function that needs to be\nused as <code>MappedRwLockReadGuard::map(...)</code>. A method would interfere with methods of\nthe same name on the contents of the locked data.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.try_map\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"bones_lib/ecs/prelude/bones_schema/prelude/bones_utils/prelude/parking_lot/lock_api/struct.MappedRwLockReadGuard.html#tymethod.try_map\" class=\"fn\">try_map</a>&lt;U, F&gt;(\n    s: <a class=\"struct\" href=\"bones_lib/ecs/prelude/bones_schema/prelude/bones_utils/prelude/parking_lot/lock_api/struct.MappedRwLockReadGuard.html\" title=\"struct bones_lib::ecs::prelude::bones_schema::prelude::bones_utils::prelude::parking_lot::lock_api::MappedRwLockReadGuard\">MappedRwLockReadGuard</a>&lt;'a, R, T&gt;,\n    f: F,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.81.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"bones_lib/ecs/prelude/bones_schema/prelude/bones_utils/prelude/parking_lot/lock_api/struct.MappedRwLockReadGuard.html\" title=\"struct bones_lib::ecs::prelude::bones_schema::prelude::bones_utils::prelude::parking_lot::lock_api::MappedRwLockReadGuard\">MappedRwLockReadGuard</a>&lt;'a, R, U&gt;, <a class=\"struct\" href=\"bones_lib/ecs/prelude/bones_schema/prelude/bones_utils/prelude/parking_lot/lock_api/struct.MappedRwLockReadGuard.html\" title=\"struct bones_lib::ecs::prelude::bones_schema::prelude::bones_utils::prelude::parking_lot::lock_api::MappedRwLockReadGuard\">MappedRwLockReadGuard</a>&lt;'a, R, T&gt;&gt;<div class=\"where\">where\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/function/trait.FnOnce.html\" title=\"trait core::ops::function::FnOnce\">FnOnce</a>(<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.reference.html\">&amp;T</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.81.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.reference.html\">&amp;U</a>&gt;,\n    U: ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div></h4></section></summary><div class=\"docblock\"><p>Attempts to make  a new <code>MappedRwLockReadGuard</code> for a component of the\nlocked data. The original guard is return if the closure returns <code>None</code>.</p>\n<p>This operation cannot fail as the <code>MappedRwLockReadGuard</code> passed\nin already locked the data.</p>\n<p>This is an associated function that needs to be\nused as <code>MappedRwLockReadGuard::try_map(...)</code>. A method would interfere with methods of\nthe same name on the contents of the locked data.</p>\n</div></details></div></details>",0,"bones_lib::ecs::prelude::bones_schema::prelude::bones_utils::prelude::parking_lot::MappedRwLockReadGuard"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-MappedRwLockReadGuard%3C'a,+R,+T%3E\" class=\"impl\"><a href=\"#impl-MappedRwLockReadGuard%3C'a,+R,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a, R, T&gt; <a class=\"struct\" href=\"bones_lib/ecs/prelude/bones_schema/prelude/bones_utils/prelude/parking_lot/lock_api/struct.MappedRwLockReadGuard.html\" title=\"struct bones_lib::ecs::prelude::bones_schema::prelude::bones_utils::prelude::parking_lot::lock_api::MappedRwLockReadGuard\">MappedRwLockReadGuard</a>&lt;'a, R, T&gt;<div class=\"where\">where\n    R: <a class=\"trait\" href=\"bones_lib/ecs/prelude/bones_schema/prelude/bones_utils/prelude/parking_lot/lock_api/trait.RawRwLockFair.html\" title=\"trait bones_lib::ecs::prelude::bones_schema::prelude::bones_utils::prelude::parking_lot::lock_api::RawRwLockFair\">RawRwLockFair</a> + 'a,\n    T: 'a + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.unlock_fair\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"bones_lib/ecs/prelude/bones_schema/prelude/bones_utils/prelude/parking_lot/lock_api/struct.MappedRwLockReadGuard.html#tymethod.unlock_fair\" class=\"fn\">unlock_fair</a>(s: <a class=\"struct\" href=\"bones_lib/ecs/prelude/bones_schema/prelude/bones_utils/prelude/parking_lot/lock_api/struct.MappedRwLockReadGuard.html\" title=\"struct bones_lib::ecs::prelude::bones_schema::prelude::bones_utils::prelude::parking_lot::lock_api::MappedRwLockReadGuard\">MappedRwLockReadGuard</a>&lt;'a, R, T&gt;)</h4></section></summary><div class=\"docblock\"><p>Unlocks the <code>RwLock</code> using a fair unlock protocol.</p>\n<p>By default, <code>RwLock</code> is unfair and allow the current thread to re-lock\nthe <code>RwLock</code> before another has the chance to acquire the lock, even if\nthat thread has been blocked on the <code>RwLock</code> for a long time. This is\nthe default because it allows much higher throughput as it avoids\nforcing a context switch on every <code>RwLock</code> unlock. This can result in one\nthread acquiring a <code>RwLock</code> many more times than other threads.</p>\n<p>However in some cases it can be beneficial to ensure fairness by forcing\nthe lock to pass on to a waiting thread if there is one. This is done by\nusing this method instead of dropping the <code>MappedRwLockReadGuard</code> normally.</p>\n</div></details></div></details>",0,"bones_lib::ecs::prelude::bones_schema::prelude::bones_utils::prelude::parking_lot::MappedRwLockReadGuard"],["<section id=\"impl-Send-for-MappedRwLockReadGuard%3C'a,+R,+T%3E\" class=\"impl\"><a href=\"#impl-Send-for-MappedRwLockReadGuard%3C'a,+R,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a, R, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"bones_lib/ecs/prelude/bones_schema/prelude/bones_utils/prelude/parking_lot/lock_api/struct.MappedRwLockReadGuard.html\" title=\"struct bones_lib::ecs::prelude::bones_schema::prelude::bones_utils::prelude::parking_lot::lock_api::MappedRwLockReadGuard\">MappedRwLockReadGuard</a>&lt;'a, R, T&gt;<div class=\"where\">where\n    R: <a class=\"trait\" href=\"bones_lib/ecs/prelude/bones_schema/prelude/bones_utils/prelude/parking_lot/lock_api/trait.RawRwLock.html\" title=\"trait bones_lib::ecs::prelude::bones_schema::prelude::bones_utils::prelude::parking_lot::lock_api::RawRwLock\">RawRwLock</a> + 'a,\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + 'a + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,\n    &lt;R as <a class=\"trait\" href=\"bones_lib/ecs/prelude/bones_schema/prelude/bones_utils/prelude/parking_lot/lock_api/trait.RawRwLock.html\" title=\"trait bones_lib::ecs::prelude::bones_schema::prelude::bones_utils::prelude::parking_lot::lock_api::RawRwLock\">RawRwLock</a>&gt;::<a class=\"associatedtype\" href=\"bones_lib/ecs/prelude/bones_schema/prelude/bones_utils/prelude/parking_lot/lock_api/trait.RawRwLock.html#associatedtype.GuardMarker\" title=\"type bones_lib::ecs::prelude::bones_schema::prelude::bones_utils::prelude::parking_lot::lock_api::RawRwLock::GuardMarker\">GuardMarker</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,</div></h3></section>","Send","bones_lib::ecs::prelude::bones_schema::prelude::bones_utils::prelude::parking_lot::MappedRwLockReadGuard"],["<section id=\"impl-Sync-for-MappedRwLockReadGuard%3C'a,+R,+T%3E\" class=\"impl\"><a href=\"#impl-Sync-for-MappedRwLockReadGuard%3C'a,+R,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a, R, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"bones_lib/ecs/prelude/bones_schema/prelude/bones_utils/prelude/parking_lot/lock_api/struct.MappedRwLockReadGuard.html\" title=\"struct bones_lib::ecs::prelude::bones_schema::prelude::bones_utils::prelude::parking_lot::lock_api::MappedRwLockReadGuard\">MappedRwLockReadGuard</a>&lt;'a, R, T&gt;<div class=\"where\">where\n    R: <a class=\"trait\" href=\"bones_lib/ecs/prelude/bones_schema/prelude/bones_utils/prelude/parking_lot/lock_api/trait.RawRwLock.html\" title=\"trait bones_lib::ecs::prelude::bones_schema::prelude::bones_utils::prelude::parking_lot::lock_api::RawRwLock\">RawRwLock</a> + 'a,\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + 'a + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div></h3></section>","Sync","bones_lib::ecs::prelude::bones_schema::prelude::bones_utils::prelude::parking_lot::MappedRwLockReadGuard"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()