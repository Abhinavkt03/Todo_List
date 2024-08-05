import React from 'react';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
export default function TodoList() {
    let [todoList, setTodoList] = useState([{ task: "sampleList", key: uuidv4(), isDone: false }]);
    let [newValue, setNewValue] = useState("");
    let [style, setStyle] = useState();

    let valueChange = (event) => {
        setNewValue(event.target.value);
    };

    let addValue = () => {
        setTodoList((prevArr) => {
            return [...prevArr, { task: newValue, key: uuidv4() }]
        });
        setNewValue("");
    };

    let deleteTask = (id) => {
        setTodoList(todoList.filter((todo) => todo.key != id));
    }

    let markAsDone = (id) => {
        setTodoList(todoList.map((todo) => {
            if (todo.key === id) {
                return { ...todo, isDone: true };
            } else {
                return todo;
            }
        }))
    }

    return (
        <>
            <input type="text" placeholder='Enter your Text here' value={newValue} onChange={valueChange} />
            <button onClick={addValue}>Add</button>

            <hr />
            <h3>Todo Lists</h3>
            <ul>{todoList.map((todo) => (
                <li key={todo.key} >
                    <span style={todo.isDone ? { textDecoration: 'line-through' } : {}}>{todo.task}</span> 
                    &nbsp; &nbsp;
                    <button onClick={() => deleteTask(todo.key)}>Delete</button> &nbsp; &nbsp;
                    <button onClick={() => markAsDone(todo.key)}>Mark as Done</button>
                </li>
            ))
            }</ul>
        </>
    )
}