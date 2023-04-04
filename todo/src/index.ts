import { TodoItem } from "./todoItem";
import { TodoCollection } from "./todoCollection";

let todos: TodoItem[] = [
    new TodoItem(1, "Kupić Kwiaty"), new TodoItem(2, "odebrać Kota"),
    new TodoItem(3, "Zamówić czekoladę"), new TodoItem(4, "Zadzwonić do Zuzi", true)];

    let collection: TodoCollection = new TodoCollection("Patryk", todos);
    console.clear();
    console.log(`Lista ${collection.userName}a`);

    let newId = collection.addTodo("Iść pobiegać");
    let todoItem: TodoItem = collection.getTodoById(newId);
    todoItem.printDetails();

    //collection.addTodo(todoItem);

