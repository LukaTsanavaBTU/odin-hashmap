import HashMap from "./HashMap.js";

const map = new HashMap;
map.set("Bjorn", "Bergen");
map.set("Alex", "Helsinki");
map.set("Olav", "Oslo");
map.remove("Olav");
console.log(map.buckets);
console.log(map.length());

