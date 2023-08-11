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

    at(index) {
        let node = this.headNode;

        for (let i = 0; i < index; i++) {
            node = node.nextNode;
            if (node.nextNode === null && (i + 1) !== index) return 'Error, index out of range';
        }

        return node;
    }

    pop() {
        let node = this.headNode;
        let lastNode = node.nextNode;

        while (lastNode.nextNode !== null) {
            node = lastNode;
            lastNode = node.nextNode;
        }

        node.nextNode = null;
    }

    contains(value) {
        let node = this.headNode;

        while (node.nextNode !== null) {
            if (node.value === value) return true;
            node = node.nextNode;
        }

        if (node.value === value) return true;

        return false;
    }


}

const list = new LinkedList();

list.prepend('1');
list.prepend('2');
list.prepend('3');

list.append('6');

console.log(list.contains('6'));
