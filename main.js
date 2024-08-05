import HashMap from "./HashMap.js";

const map = new HashMap;
map.set("Bjorn", "Bergen");
map.set("Olav", "Oslo");
console.log(map.hash("Olav"));
console.log(map.buckets);

