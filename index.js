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
        let size = 1;
        let node = this.headNode;

        if (this.headNode === null) return 0;

        while (node.nextNode !== null) {
            size += 1;
            node = node.nextNode;
        }

        return size;
    }

    head() {
        return this.headNode;
    }

    tail() {
        let node = this.headNode;

        while (node.nextNode !== null) node = node.nextNode

        return node;
    }
}

const list = new LinkedList();

list.prepend('1');
list.prepend('2');
list.prepend('3');

list.append('6');

console.log(list.tail());

//console.log(list);