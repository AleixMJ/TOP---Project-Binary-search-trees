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

    insert(value, node = this.root) {
        
        if (this.root === null) {
                this.root = new Node(value);
                return;
        }
        
        
        if (node.value === value)  return;
        

        if (value > node.value) {
            if (node.right === null) {
                node.right = new Node(value);
                return;
            }
            
            return this.insert(value, node.right);

        } else {
            if (node.left === null) {
                node.left = new Node(value);
                return;
            }
            return this.insert(value, node.left);
        }
    }

    #getMinValueNode(node) {
        let current = node;

        while (current.left != null) {
            current = current.left;
        }
        return current;
    }

    deleteItem(value, node = this.root) {

        if (node === null) return null;

        if (value > node.value) {
            node.right = this.deleteItem(value, node.right);
            return node;
        } else if (value < node.value) {
            node.left = this.deleteItem(value, node.left);
            return node;
        }

        else {
            if (node.left === null) return node.right;
            if (node.right === null) return node.left;

            else {
                const replacement = this.#getMinValueNode(node.right);
                node.value = replacement.value;
                node.right = this.deleteItem(replacement.value, node.right);

                return node;

            }
        }



    }
   
    levelOrderForEach(callback) {

        if (!callback) {
            throw Error('a call back is required');
        }

        let queue = [this.root];

        while (queue.length > 0  ) {
           
            const current = queue.shift();
            if (current.left !== null) {
                queue.push(current.left);
            }
            if (current.right !== null) {
                queue.push(current.right);
            }
            callback(current.value);
        }      
        return;
    }
}    
        
export default Tree;