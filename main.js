import Tree from "./tree.js";

const array1 = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];

const largeArray = [
    534, 12, 892, 45, 112, 76, 345, 901, 23, 654,
    88, 432, 11, 765, 99, 213, 54, 876, 321, 90,
    456, 73, 812, 65, 112, 883, 34, 521, 995, 142,
    632, 77, 892, 5, 290, 411, 618, 934, 22, 705,
    500, 12, 843, 66, 199, 385, 712, 944, 54, 603
];

const tree1 = new Tree(array1, 0, array1.length - 1);
const tree2 = new Tree(largeArray, 0, array1.length - 1);

tree1.prettyPrint();
tree2.prettyPrint();

console.log(tree1.includes(9));
console.log(tree1.includes(98));