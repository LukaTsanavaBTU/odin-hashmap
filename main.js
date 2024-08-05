import HashMap from "./HashMap.js";

const map = new HashMap;
map.set("Bjorn", "Bergen");
map.set("Alex", "Helsinki");
map.set("Olav", "Oslo");
map.remove("Olav");
map.remove("Alex");
map.remove("Bjorn");
console.log(map.buckets);

