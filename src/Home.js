import Badge from 'react-bootstrap/Badge';
import ToDoForm from './ToDoForm';
import ToDoItem from './ToDoItem';

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

export default function Home(){
  const incompleteCount = list.filter(todo => !todo.completed).length;

  return(
    <>
      <h1>
        To Do List Manager <Badge variant="secondary">{incompleteCount}</Badge>
      </h1>
      <ToDoForm />
      {list.map(item => (
          <ToDoItem todo={item} />
      ))}
    </>
  );
}