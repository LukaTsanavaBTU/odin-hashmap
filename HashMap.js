import {Node, LinkedList} from "./Modules/LinkedList.js";

export default class HashMap {
    constructor() {
        this.capacity = 16;
        this.loadFactor = 0.8;
        this.buckets = [];
    }
    hash(key) {
        let hashCode = 0;
      
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
          hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
        }
     
        return hashCode;
    }
    set(key, value) {
        const bucketIndex = this.hash(key);
        const bucket = this.buckets[bucketIndex];
        if (bucket) {
            if (!bucket.containsKey(key)) {
                bucket.append(key, value);
            } else {
                const node = bucket.nodeAtKey(key)
                node.value = value;
            }
        } else {
            const list = new LinkedList;
            list.append(key, value);
            this.buckets[bucketIndex] = list;
        }
    }
    get(key) {
        const bucketIndex = this.hash(key);
        const bucket = this.buckets[bucketIndex];
        if (bucket && bucket.containsKey(key)) {
            const node = bucket.nodeAtKey(key);
            const value = node.value;
            return value;
        }
        return null;
    }
    has(key) {
        const bucketIndex = this.hash(key);
        const bucket = this.buckets[bucketIndex];
        if (bucket && bucket.containsKey(key)) {
            return true;
        }
        return false;
    }
    remove(key) {
        const bucketIndex = this.hash(key);
        const bucket = this.buckets[bucketIndex];
        if (bucket && bucket.containsKey(key)) {
            const nodeIndex = bucket.findKeyIndex(key);
            bucket.removeAt(nodeIndex);
            return true;
        }
        return false;
    }
    length() {
        let length = 0;
        this.buckets.forEach(bucket => {
            if (bucket) {
                length += bucket.size;
            }
        });
        return length;
    }
    clear() {
        this.capacity = 16;
        this.loadFactor = 0.8;
        this.buckets = [];
    }
    // keys() {
    //     let keys = [];
    //     this.buckets.forEach(bucket => {
    //         if (bucket) {
    //             key
    //         }
    //     });
    // }
}