"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const todoItem_1 = require("./todoItem");
const todoCollection_1 = require("./todoCollection");
let todos = [
    new todoItem_1.TodoItem(1, "Kupić Kwiaty"), new todoItem_1.TodoItem(2, "odebrać Kota"),
    new todoItem_1.TodoItem(3, "Zamówić czekoladę"), new todoItem_1.TodoItem(4, "Zadzwonić do Zuzi", true)
];
let collection = new todoCollection_1.TodoCollection("Patryk", todos);
console.clear();
console.log(`Lista ${collection.userName}a`);
let newId = collection.addTodo("Iść pobiegać");
let todoItem = collection.getTodoById(newId);
todoItem.printDetails();
//collection.addTodo(todoItem);
