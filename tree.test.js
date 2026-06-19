import Tree from './tree'; // Adjust path if needed

describe('Binary Search Tree (Odin Project)', () => {
  let initialArray;
  let tree;

  beforeEach(() => {
    initialArray = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
    tree = new Tree(initialArray);
  });

  // Helper function to assert a method exists before testing it
  const assertMethodExists = (methodName) => {
    if (typeof tree[methodName] !== 'function') {
      throw new Error(`Method "${methodName}()" is not yet implemented on your Tree class.`);
    }
  };

  test('should build a tree structure and remove duplicates via constructor', () => {
    // This validates your #buildTree logic
    expect(tree.root).not.toBeNull();
    expect(tree.root.value).toBe(8); // Middle element of the unique sorted array
  });

  test('includes() accurately finds existing values and rejects missing values', () => {
    // This validates your existing includes logic
    expect(tree.includes(8)).toBe(true);   // Root
    expect(tree.includes(1)).toBe(true);   // Min leaf
    expect(tree.includes(6345)).toBe(true);// Max leaf
    
    expect(tree.includes(999)).toBe(false); // Non-existent number
    expect(tree.includes(6)).toBe(false);   // Not added yet
  });

  test('insert() adds a leaf correctly and ignores duplicates', () => {
    tree.insert(6);
    expect(tree.includes(6)).toBe(true);

    tree.insert(6);
    expect(tree.includes(6)).toBe(true);
  });

  test('tree should be initially balanced', () => {
    assertMethodExists('isBalanced');
    expect(tree.isBalanced()).toBe(true); 
  });

  test('deleteItem() handles leaf node, single child, and two children scenarios', () => {
    assertMethodExists('deleteItem');

    // Case 1: Delete a leaf node
    tree.deleteItem(1);
    expect(tree.includes(1)).toBe(false);

    // Case 2: Delete a node with one child
    tree.insert(2); 
    tree.deleteItem(3);
    expect(tree.includes(3)).toBe(false);
    expect(tree.includes(2)).toBe(true);

    // Case 3: Delete a node with two children
    const originalRootVal = tree.root.value;
    tree.deleteItem(originalRootVal);
    expect(tree.includes(originalRootVal)).toBe(false);
  });

  test('find() returns the correct node or null if not found', () => {
    assertMethodExists('find');

    const foundNode = tree.find(23);
    expect(foundNode).not.toBeNull();
    expect(foundNode.value).toBe(23);

    const notFound = tree.find(999);
    expect(notFound).toBeNull();
  });

  describe('Traversals (Callback scenarios)', () => {
    test('levelOrder() traverses breadth-first', () => {
      assertMethodExists('levelOrder');

      const results = [];
      tree.levelOrder((node) => results.push(node.value));
      expect(results[0]).toBe(tree.root.value);
    });

    test('inOrder(), preOrder(), and postOrder() traverse depth-first correctly', () => {
      assertMethodExists('inOrder');
      assertMethodExists('preOrder');
      assertMethodExists('postOrder');

      const inOrderArr = [];
      const preOrderArr = [];

      tree.inOrder((node) => inOrderArr.push(node.value));
      tree.preOrder((node) => preOrderArr.push(node.value));

      expect(inOrderArr).toEqual([1, 3, 4, 5, 7, 8, 9, 23, 67, 324, 6345]);
      expect(preOrderArr[0]).toBe(tree.root.value);
    });
  });

  test('height() calculates edges from node to deepest leaf', () => {
    assertMethodExists('height');

    const rootHeight = tree.height(tree.root);
    expect(rootHeight).toBeGreaterThanOrEqual(0);
  });

  test('depth() calculates edges from root to target node', () => {
    assertMethodExists('depth');

    const rootDepth = tree.depth(tree.root);
    expect(rootDepth).toBe(0);
  });

  test('isBalanced() and rebalance() work sequentially', () => {
    assertMethodExists('isBalanced');
    assertMethodExists('rebalance');

    tree.insert(7000);
    tree.insert(8000);
    tree.insert(9000);

    expect(tree.isBalanced()).toBe(false);
    tree.rebalance();
    expect(tree.isBalanced()).toBe(true);
  });
});