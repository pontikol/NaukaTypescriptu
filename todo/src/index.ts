import { TodoItem } from "./todoItem";
import { TodoCollection } from "./todoCollection";
import * as inquirer from 'inquirer';

let todos: TodoItem[] = [
    new TodoItem(1, "Kupić Kwiaty"), new TodoItem(2, "odebrać Kota"),
    new TodoItem(3, "Zamówić czekoladę"), new TodoItem(4, "Zadzwonić do Zuzi", true)];

    let collection: TodoCollection = new TodoCollection("Patryk", todos);

    function displayTodoList(): void {
        console.log(`Lista ${collection.userName}a `
            + `(liczba zadań pozostałych do zrobienia: ${
        collection.getItemCounts().incomplete })`);
                collection.getTodoItems(true).forEach(item => item.printDetails());
        }

    enum Commands {
        Quit = "Koniec"
    }
    function promptUser(): void{
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
        })
    }
    promptUser();


