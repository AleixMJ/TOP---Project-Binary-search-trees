import Tree from './tree.js'; // Adjust paths if your file is located elsewhere

describe('Binary Search Tree - Full Odin Project Specifications', () => {
    let testArray;
    let tree;

    beforeEach(() => {
        // A simple, un-duplicated tree structure
        //        4
        //       / \
        //      2   6
        //     / \ / \
        //    1  3 5  7
        testArray = [4, 2, 6, 1, 3, 5, 7];
        tree = new Tree(testArray);
    });

    describe('Tree Initialization & Balancing', () => {
        test('should remove duplicates and sort array during initialization', () => {
            const duplicateTree = new Tree([3, 1, 2, 3, 2, 1]);
            expect(duplicateTree.root.value).toBe(2);
            expect(duplicateTree.root.left.value).toBe(1);
            expect(duplicateTree.root.right.value).toBe(3);
        });

        test('should create a balanced tree structure from an array', () => {
            expect(tree.root.value).toBe(4);
            expect(tree.root.left.value).toBe(2);
            expect(tree.root.right.value).toBe(6);
        });
    });

    describe('includes(value)', () => {
        test('should return true if a value is inside the tree', () => {
            expect(tree.includes(4)).toBe(true);
            expect(tree.includes(1)).toBe(true);
        });

        test('should return false if a value is not in the tree', () => {
            expect(tree.includes(100)).toBe(false);
        });
    });

    describe('insert(value)', () => {
        test('should successfully insert a brand new value into the correct branch', () => {
            tree.insert(8);
            expect(tree.includes(8)).toBe(true);
            expect(tree.root.right.right.right.value).toBe(8);
        });

        test('should do absolutely nothing if inserting a value that already exists', () => {
            tree.insert(4);
            expect(tree.root.left.value).toBe(2);
            expect(tree.root.right.value).toBe(6);
        });
    });

    describe('deleteItem(value)', () => {
        test('should remove a leaf node', () => {
            tree.deleteItem(1);
            expect(tree.includes(1)).toBe(false);
            expect(tree.root.left.left).toBeNull();
        });

        test('should remove a node with a single child branch', () => {
            tree.deleteItem(1); 
            tree.deleteItem(2);
            expect(tree.includes(2)).toBe(false);
            expect(tree.root.left.value).toBe(3);
        });

        test('should remove a complex node holding two children subtrees', () => {
            tree.deleteItem(2);
            expect(tree.includes(2)).toBe(false);
            expect(tree.root.left.value).toBe(3);
        });
    });

    describe('Traversals with Callbacks', () => {
        test('levelOrderForEach should execute callback row by row', () => {
            const values = [];
            tree.levelOrderForEach((val) => values.push(val));
            expect(values).toEqual([4, 2, 6, 1, 3, 5, 7]);
        });

        test('inOrderForEach should execute callback in sorted order', () => {
            const values = [];
            tree.inOrderForEach((val) => values.push(val));
            expect(values).toEqual([1, 2, 3, 4, 5, 6, 7]);
        });

        test('preOrderForEach should execute callback in Root -> Left -> Right order', () => {
            const values = [];
            tree.preOrderForEach((val) => values.push(val));
            expect(values).toEqual([4, 2, 1, 3, 6, 5, 7]);
        });

        test('postOrderForEach should execute callback in Left -> Right -> Root order', () => {
            const values = [];
            tree.postOrderForEach((val) => values.push(val));
            expect(values).toEqual([1, 3, 2, 5, 7, 6, 4]);
        });

        test('traversals should throw errors if missing a callback', () => {
            expect(() => tree.preOrderForEach()).toThrow('a call back is required');
            expect(() => tree.postOrderForEach()).toThrow('a call back is required');
        });
    });

describe('Tree Properties: height() and depth()', () => {
        test('height() should return the longest path down to a leaf from a node', () => {
            // PASS THE VALUES (NUMBERS) HERE:
            expect(tree.height(4)).toBe(2);                  // 4 is the root value
            expect(tree.height(1)).toBe(0);                  // 1 is a leaf node value
            expect(tree.height(999)).toBeUndefined();        // Missing value returns undefined
        });

        test('depth() should return the distance from the root to the given node', () => {
            expect(tree.depth(tree.root)).toBe(0);
            expect(tree.depth(tree.root.left)).toBe(1); 
            expect(tree.depth(tree.root.left.left)).toBe(2); 
        });
    });

    describe('Tree Balancing: isBalanced() and rebalance()', () => {
        test('isBalanced() should return true for a perfectly built balanced tree', () => {
            expect(tree.isBalanced()).toBe(true);
        });

        test('isBalanced() should return false if the tree gets severely warped', () => {
            tree.insert(8);
            tree.insert(9);
            tree.insert(10); // Extends the right branch significantly
            expect(tree.isBalanced()).toBe(false);
        });

        test('rebalance() should restore balance to an uneven tree structure', () => {
            tree.insert(8);
            tree.insert(9);
            tree.insert(10);
            expect(tree.isBalanced()).toBe(false);

            tree.rebalance();
            expect(tree.isBalanced()).toBe(true);
        });
    });
});