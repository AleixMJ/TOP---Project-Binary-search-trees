import Tree from "./tree.js";

const array1 = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];

const tree1 = new Tree(array1, 0, array1.length - 1);

tree1.prettyPrint();