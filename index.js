class Node {
    constructor(value) {
        this.value = value || null;
        this.nextNode = null;
    }
}

class LinkedList {
    constructor() {
        this.headNode = null;
    }

    append(value) {
        if (this.headNode === null) {
            this.prepend(value);
        } else {
            let node = this.headNode;
            while (node.nextNode !== null) {
                node = node.nextNode;
            }
            node.nextNode = new Node(value);
        }
    }

    prepend(value) {
        if (this.headNode === null) {
            this.headNode = new Node(value);
        } else {
            const currentHead = this.headNode;
            this.headNode = new Node(value);
            this.headNode.nextNode = currentHead;
        }
    }

    size() {
        
    }

    head() {
        return this.headNode;
    }
}

const list = new LinkedList();

list.prepend('1');
list.prepend('2');
list.prepend('3');

list.append('6');

console.log(list.head());

//console.log(list);