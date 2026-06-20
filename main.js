import Tree from "./tree.js";

const randomArray = [15, 48, 2, 76, 39, 91, 64, 22, 53, 8, 87, 30, 71, 44, 99];

const tree1 = new Tree(randomArray);



console.log(`Is the tree balanced? ${tree1.isBalanced()}`);
tree1.prettyPrint();

let levelArray = [];
tree1.levelOrderForEach((value) => levelArray.push(value));
console.log(`level Array: ${levelArray}`);

let preArray = [];
tree1.preOrderForEach((value) => preArray.push(value));
console.log(`pre Array: ${preArray}`)

let postArray = [];
tree1.postOrderForEach((value) => postArray.push(value));
console.log(`post Array: ${postArray}`);

let inOrderArray = []
tree1.inOrderForEach((value) => inOrderArray.push(value));
console.log(`in Order Array: ${inOrderArray}`);


tree1.insert(152);
tree1.insert(382);
tree1.insert(1382);
tree1.insert(5362);
console.log("TREE INSERTIONS COMPLETED");
tree1.prettyPrint();
console.log(`Is the tree balanced? ${tree1.isBalanced()}`);
tree1.rebalance();
console.log("TREE REBALANCED");
tree1.prettyPrint();
console.log(`Is the tree balanced? ${tree1.isBalanced()}`);

levelArray = [];
tree1.levelOrderForEach((value) => levelArray.push(value));
console.log(`level Array: ${levelArray}`);

preArray = [];
tree1.preOrderForEach((value) => preArray.push(value));
console.log(`pre Array: ${preArray}`)

postArray = [];
tree1.postOrderForEach((value) => postArray.push(value));
console.log(`post Array: ${postArray}`);

inOrderArray = []
tree1.inOrderForEach((value) => inOrderArray.push(value));
console.log(`in Order Array: ${inOrderArray}`);