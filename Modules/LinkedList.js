import Node from "./Node.js";

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    append(key, value) {
        const newNode = new Node(key, value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            let curNode = this.head; 
            while (curNode.next) {
                curNode = curNode.next;
            }
            curNode.next = newNode;
            this.tail = newNode;
        }
        this.size += 1;
    }
    prepend(key, value) {
        const newNode = new Node(key, value);
        newNode.next = this.head;
        this.head = newNode;
        if (!this.tail) {
            this.tail = newNode;
        }
        this.size += 1;
    }
    at(index) {
        index = (index >= 0) ? index : (this.size + index); 
        if (index < 0 || index > this.size) {
            throw new RangeError("Index out of range");
        }
        let curNode = this.head;
        for(let i = 0; i < index; i++) {
            curNode = curNode.next;
            if (!curNode) {
                return null;
            }
        }
        return {key: curNode.key, value: curNode.value};
    }
    nodeAtIndex(index) {
        index = (index >= 0) ? index : (this.size + index); 
        if (index < 0 || index > this.size) {
            throw new RangeError("Index out of range");
        }
        let curNode = this.head;
        for(let i = 0; i < index; i++) {
            curNode = curNode.next;
            if (!curNode) {
                return null;
            }
        }
        return curNode;
    }
    nodeAtKey(key) {
        const nodeIndex = this.findKeyIndex(key);
        return this.nodeAtIndex(nodeIndex);
    }
    pop() {
        let curNode = this.head;
        for(let i = 0; i < this.size - 2; i++) {
            curNode = curNode.next;
        }
        const returnVal = {key: curNode.next.key, value: curNode.next.value};
        curNode.next = null;
        this.tail = curNode;
        this.size -= 1;
        return returnVal;
    }
    containsKey(key) {
        let curNode = this.head;
        while (curNode) {
            if (curNode.key === key) {
                return true;
            }
            curNode = curNode.next;
        }
        return false;
    }
    findKeyIndex(key) {
        let curNode = this.head;
        let index = 0;
        while (curNode) {
            if (curNode.key === key) {
                return index;
            }
            curNode = curNode.next;
            index += 1;
        }
        return null;
    }
    toString() {
        if (!this.head) {
            return "null";
        }
        let curNode = this.head;
        let returnString = "";
        while (curNode) {
            returnString += `( ${curNode.key}: ${curNode.value} ) -> `;
            curNode = curNode.next;
        }
        returnString += "null"
        return returnString;
    }
    keys() {
        const keys = [];
        let curNode = this.head;
        while (curNode) {
            keys.push(curNode.key);
            curNode = curNode.next;
        }
        return keys;
    }
    insertAt(key, value, index) {
        // Make choosing element from the end using negative index possible
        index = (index >= 0) ? index : (this.size + index + 1); 
        if (index < 0 || index > this.size) {
            throw new RangeError("Index out of range");
        }
        else if (index === 0) {
            this.prepend(key, value);
        } else {
            const newNode = new Node(key, value);
            let curNode = this.head;
            for(let i = 0; i < index - 1; i++) {
                curNode = curNode.next;
            }
            newNode.next = curNode.next;
            curNode.next = newNode;
            if (!newNode.next) {
                this.tail = newNode;
            }
            this.size += 1;
        }
    }
    removeAt(index) {
        // Make choosing element from the end using negative index possible
        index = (index >= 0) ? index : (this.size + index); 
        if (index < 0 || index >= this.size) {
            throw new RangeError("Index out of range");
        }
        let returnVal;
        if (index === 0 ) {
            returnVal = {key: this.head.key, value: this.head.value};
            this.head = this.head.next;
            if (!this.head || !this.head.next) {
                this.tail = this.head;
            }
        } else {
            let curNode = this.head;
            for(let i = 0; i < index - 1; i++) {
                curNode = curNode.next;
            }
            returnVal = {key: curNode.next.key, value: curNode.next.value};
            curNode.next = curNode.next.next;
            if (!curNode.next) {
                this.tail = curNode;
            }
        }
        this.size -= 1;
        return returnVal;
    }
}

export {Node, LinkedList};