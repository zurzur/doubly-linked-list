const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
        let initNode = new Node();
        this._tail = initNode;
        this._head = initNode;
        this._head.next = this._tail;
        this._tail.prev = this._head;
    }

    append(data) {
        if (this.length === 0) {
            this._head.data = data;
        } else {
        let prevTail = this._tail;
        this._tail = new Node(data);
        prevTail.next = this._tail;
        this._tail.prev = prevTail;
    }
        this.length += 1;
        return this;
    }

    head() {
        return this._head.data;
    }

    tail() {
        return this._tail.data;
    }

    at(index) {
        
        let currNode = this._head;
        for (let i = 0; i < index; i++) {
            currNode = currNode.next;
        }
        return currNode.data;
           
    }

    insertAt(index, data) {
        let currNode = this._head;
        for (let i = 0; i < index; i++) {
            currNode = currNode.next;
        }
        currNode.data = data;        
        return this;
    }

    isEmpty() {
        return (this.length === 0) ? true : false;
    }

    clear() {
        this.length = 0;
        let initNode = new Node();
        this._tail = initNode;
        this._head = initNode;
        this._head.next = this._tail;
        this._tail.prev = this._head;        
        return this;
    }

    deleteAt(index) {
        let currNode = this._head;
        for (let i = 0; i < index; i++) {
            currNode = currNode.next;
        }
        currNode.prev.next = currNode.next;
        currNode.next.prev = currNode.prev;        
        return this;
    }

    reverse() {
        let currNode = this._tail;

        for (let i = 0; i<=this.length; i++) {
            let oldCurrNode = currNode;
            currNode.next = oldCurrNode.prev;
            currNode.prev = oldCurrNode.next;
            currNode = currNode.next;
        } 
        let oldHead = currNode;
        let oldTail = this._tail;
        this._head = oldTail;
        this._tail = oldHead;        
        return this;
    }

    indexOf(data) {
        let currNode = this._head;
        let index = 0;

        while ((currNode.data !== data)&&(currNode != this._tail)) {
            currNode = currNode.next;
            index += 1;
        } 

        return currNode.data === data ? index : -1;

    }
}

module.exports = LinkedList;

