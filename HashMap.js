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
    // set(key, value) {
    //     const bucket = this.hash(key);
    //     const newNode = new Node({key, value});
    //     if (!this.buckets[bucket]) {
    //         const list = new LinkedList;
    //         list.append(newNode);
    //     } else if (this.buckets[bucket].contains) {

    //     }
        
    // }
}