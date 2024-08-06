import HashMap from "./HashMap.js";

const map = new HashMap;
map.set("Bjorn", "Bergen");
map.set("Simon", "Helsinki");
map.set("Olav", "Oslo");
map.set("Freya", "Tromso");
map.set("Erik", "Reykjavik");
map.set("Leif", "Copenhagen");
map.set("Ingrid", "Reine");
map.set("Astrid", "Trondheim");
map.set("Ivar", "Gothenburg");
map.set("Ozzie", "Uppsala");
map.set("Signe", "Lund");
map.set("Odin", "Orebro");
console.log(map.capacity);
map.set("Andrea", "Drammen");
console.log(map.capacity);
console.log(map.entries());

