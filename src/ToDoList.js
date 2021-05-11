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

    return (
        <h3>{todo.title}</h3>
    )
}