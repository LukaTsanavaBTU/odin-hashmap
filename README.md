# HashMap
Made for [The Odin Project](https://www.theodinproject.com/lessons/javascript-hashmap). The purpose of this project was to implement a hashmap using plain JavaScript. There are three files (and an extra file for testing): Node.js and LinkedList.js containing classes representing the nodes of a linked list and the linked list itself; HashMap.js containing a class representing the hashmap data structure. For the HashMap class, I've implemented several methods and properties:
- `hash(key)`: takes a key and produces a hash code with it;
- `set(key, value)`: takes two arguments, the first is a key and the second is a value that is assigned to this key. If a key already exists, then the old value is overwritten;
- `get(key)`: takes one argument as a key and returns the value that is assigned to this key. If a key is not found, return null;
- `has(key)`: takes a key as an argument and returns true or false based on whether or not the key is in the hash map;
- `remove(key)`: takes a key as an argument. If the given key is in the hash map, it should remove the entry with that key and return true. If the key isn’t in the hash map, it should return false;
- `length()`: returns the number of stored keys in the hash map;
- `clear()`: removes all entries in the hash map;
- `keys()`: returns an array containing all the keys inside the hash map;
- `values()`: returns an array containing all the values;
- `entries()`: returns an array that contains each key, value pair. Example: `[[firstKey, firstValue], [secondKey, secondValue]]`;

The main goal of the project was to get some practice with data structures and with js.