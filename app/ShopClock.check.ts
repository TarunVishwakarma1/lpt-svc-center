// Run: bun app/ShopClock.check.ts
import assert from "node:assert/strict";
import { status } from "./ShopClock";

assert.deepEqual(status(1, 9), { open: false, text: "Opens at 10 AM" });
assert.deepEqual(status(3, 10), { open: true, text: "Open until 8 PM" });
assert.deepEqual(status(3, 19), { open: true, text: "Open until 8 PM" });
assert.deepEqual(status(5, 20), { open: false, text: "Opens Saturday, 10 AM" });
assert.deepEqual(status(6, 21), { open: false, text: "Opens Monday, 10 AM" });
assert.deepEqual(status(0, 12), { open: false, text: "Opens Monday, 10 AM" });
console.log("shop hours ok");
