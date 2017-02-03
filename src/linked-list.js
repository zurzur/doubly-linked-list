const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
        this._head = new Node();
    }

    append(data) {
        if (this.length === 0) {
            var currNode = new Node(data);
            this._head = currNode;
            this._tail = currNode;
            this._head.next = currNode;
            this._tail.prev = currNode;
        } else if (this.length === 1){ 
            var newNode = new Node(data);
            this._head.next = newNode;
            this._tail = newNode;
            this._tail.prev = this._head;
        } else {
            var newNode = new Node(data);
            var currNode = this._tail;
            currNode.next = newNode;
            this._tail = newNode;
            this._tail.prev = currNode;
        } 
        this.length += 1;
    }

    head() {
        return this._head.data;
    }

    tail() {
        return this._tail.data;
    }

    at(index) {
        if (index <= this.length){
        var currNode = this._head;
        for (var i = 0; i < index; i++) {
            currNode = currNode.next;
        }
        if (currNode !== null) return currNode.data;
    }
    }

    insertAt(index, data) {
        if (index <= this.length) {
        var newNode = new Node(data);
        var currNode = this._head;
        for ( var i = 0; i < index; i++){
            currNode = currNode.next;
        }
        currNode.prev.next = newNode;
        newNode.prev = currNode.prev;
        newNode.next = currNode;
        this.length += 1;
        }
    }

    isEmpty() {
        if (this.length === 0) return true;
        else return false;
    }

    clear() {
    this.length = 0;
    this._head = new Node();
    this._tail = this._head;        
    }

    deleteAt(index) {
        var currNode = this._head;
        for (var i = 0; i < index; i++) {
            currNode = currNode.next;
            }
        if (i === index) {
            currNode.prev.next = currNode.next;
            currNode.next.prev = currNode.prev;
            currNode.next = null;
            currNode.prev = null;
            this.length -= 1;
        }
        
    }

    reverse() {}

    indexOf(data) {
        var currNode = this._head;
        var i = 0
        for ( i; i < this.length && currNode.data !== data; i++) {
            currNode = currNode.next;
        } 
        if (currNode.data === data) return i;
        else return -1;
    }
}

module.exports = LinkedList;

