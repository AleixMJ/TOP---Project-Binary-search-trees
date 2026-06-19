class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructor(array) {
        const cleanSorted = [...new Set(array)].toSorted((a, b) => a - b);
        this.root = this.#buildTree(cleanSorted, 0, cleanSorted.length - 1);
    }


    #buildTree(array, start, end) {

        if (start > end) {
            return null;
        }

        const mid = Math.floor((start + end) / 2);
        const node = new Node(array[mid]);

        if (start === end) {
            node.left = null;
            node.right = null;
            return node;
            
        }

        node.left = this.#buildTree(array, start, mid - 1);
        node.right = this.#buildTree(array, mid + 1, end);
        
        return node;
    }

    prettyPrint() {
        this.#printNode(this.root);
    }

    #printNode(node, prefix = '', isLeft = true) {
        if (node === null || node === undefined) return;

        this.#printNode(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
        console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.value}`);
        this.#printNode(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
    }

    includes(value, node = this.root) {

        if (node === null ) return false;

        if (node.value === value) {
            return true
        }

        if (value > node.value) {
            return this.includes(value, node.right);
        } else if (value < node.value) {
            return this.includes(value, node.left);
        }
    }
}    
        
export default Tree;