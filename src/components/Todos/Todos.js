import {useEffect, useState} from "react";

import {todosService} from "../../services";
import {Todo} from "../Todo/Todo";


export function Todos(){

   let [todos,setTodo]=useState([])

    useEffect(()=>{
        todosService.getAllTodos().then(({data}) =>
        {
            setTodo(data)
        })
    },[])

    return(<div>
        <hr/>
        Todos
        <hr/>
        {todos.map(todo =><Todo todo={todo} key={todo.id}/> )}
    </div>)

}