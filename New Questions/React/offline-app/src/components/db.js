import { openDB } from "idb";

export const dbPromise = openDB("todo-db",1,{
    upgrade(db){
        db.createObjectStore("todos",{keyPath:"id"});
        db.createObjectStore("pending",{autoIncrement: true})
    }
})