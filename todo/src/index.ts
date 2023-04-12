import { TodoItem } from "./todoItem";
import { TodoCollection } from "./todoCollection";

let todos: TodoItem[] = [
    new TodoItem(1, "Kupić Kwiaty"), new TodoItem(2, "odebrać Kota"),
    new TodoItem(3, "Zamówić czekoladę"), new TodoItem(4, "Zadzwonić do Zuzi", true)];

    let collection: TodoCollection = new TodoCollection("Patryk", todos);

    console.clear();
    console.log(`Lista ${collection.userName}a`
    + `(liczba zadań pozostałych do zrobienia: ${ collection.getItemCounts().incomplete})`);
    collection.getTodoItems(true).forEach(item => item.printDetails());
    //collection.addTodo(todoItem);

