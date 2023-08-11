class Node {
    constructor(value) {
        this.value = value || null;
        this.nextNode = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    append(value) {
        if (this.head === null) {
            this.prepend(value);
        } else {
            let node = this.head;
            while (node.nextNode !== null) {
                node = node.nextNode;
            }
            node.nextNode = new Node(value);
        }
    }

    prepend(value) {
        if (this.head === null) {
            this.head = new Node(value);
        } else {
            const currentHead = this.head;
            this.head = new Node(value);
            this.head.nextNode = currentHead;
        }
    }
}

const list = new LinkedList();

list.prepend('1');
list.prepend('2');
list.prepend('3');

list.append('6');

console.log(list);