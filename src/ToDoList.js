import Badge from 'react-bootstrap/Badge';
import Toast from 'react-bootstrap/Toast';

const list = [
    {
        "id": 37,
        "title": "Styling the project",
        "difficulty": 4,
        "assignedTo": "Francesco",
        "completed": false
      },
      {
        "id": 38,
        "title": "Conquer the world",
        "difficulty": 1,
        "assignedTo": "Francesco",
        "completed": false
      },
      {
        "id": 45,
        "title": "Testing",
        "difficulty": 4,
        "assignedTo": "Keith",
        "completed": false
      },
      {
        "id": 46,
        "title": "chicken",
        "difficulty": 5,
        "assignedTo": null,
        "completed": true
      }
];

export default function ToDoList()
{
    return (
        <>
            {list.map(item => (
                <ToDoItem todo={item} />
            ))}
        </>
    )
}

function ToDoItem(props)
{
    const { todo } = props;

    const pillText = todo.completed ? 'Complete' : 'Pending';
    const pillVariant = todo.completed ? 'danger' : 'success';

    return (
        <Toast>
            <Toast.Header>
                <Badge pill variant={pillVariant}>{pillText}</Badge>
                <strong class="ml-2 mr-auto">{todo.assignedTo}</strong>
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