import ToDoList from "../components/List";
import { useState } from "react";

export default function ListView(){
    const [toDos]=useState<string[]>([]);
    return (
        <ToDoList tdItems={toDos}/>
    )
}