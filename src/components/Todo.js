import React from 'react';
import Button from './Button'

const onClick = (e) => {
    console.log("This is clicked ");
}

const todos = [
    {
        id: 1,
        title: "title1",
        description: "description1"
    },
    {
        id: 2,
        title: "updatedtitle2",
        description: "description2"
    }
]

const Todo = ({ title }) => {
    return (
        <>
            {todos.map((task) => (<todo className={"container"} key={task.id}>
                <h2>{task.title}</h2>
                <Button text="Delete" onClick={onClick} />
                </todo>))}
        </>
    )
}

export default Todo;