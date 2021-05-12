import React from "react";
import Badge from 'react-bootstrap/Badge';
import Toast from 'react-bootstrap/Toast';

export default function ToDoItem(props)
{
    const { todo } = props;

    const deleteItem = () =>
    {
      console.log('delete!', todo);
      props.onDelete(todo.id);
    }

    const pillText = todo.completed ? 'Complete' : 'Pending';
    const pillVariant = todo.completed ? 'danger' : 'success';

    return (
        <Toast onClose={deleteItem}>
            <Toast.Header>
                <Badge pill variant={pillVariant}>{pillText}</Badge>
                <strong className="ml-2 mr-auto">{todo.assignedTo}</strong>
            </Toast.Header>
            <Toast.Body>
                {todo.title}
                <div className="text-right">
                    <small>Difficulty: {todo.difficulty}</small>
                </div>
            </Toast.Body>
        </Toast>
    )
}