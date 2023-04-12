"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const todoItem_1 = require("./todoItem");
const todoCollection_1 = require("./todoCollection");
const inquirer = require("inquirer");
let todos = [
    new todoItem_1.TodoItem(1, "Kupić Kwiaty"), new todoItem_1.TodoItem(2, "odebrać Kota"),
    new todoItem_1.TodoItem(3, "Zamówić czekoladę"), new todoItem_1.TodoItem(4, "Zadzwonić do Zuzi", true)
];
let collection = new todoCollection_1.TodoCollection("Patryk", todos);
function displayTodoList() {
    console.log(`Lista ${collection.userName}a `
        + `(liczba zadań pozostałych do zrobienia: ${collection.getItemCounts().incomplete})`);
    collection.getTodoItems(true).forEach(item => item.printDetails());
}
var Commands;
(function (Commands) {
    Commands["Quit"] = "Koniec";
})(Commands || (Commands = {}));
function promptUser() {
    console.clear();
    displayTodoList();
    inquirer.prompt({
        type: "list",
        name: "command",
        message: "Wybierz opcję",
        choices: Object.values(Commands)
    }).then(answers => {
        if (answers["command"] !== Commands.Quit) {
        }
    });
}
promptUser();
