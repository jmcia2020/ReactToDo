import Badge from 'react-bootstrap/Badge';
import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList';

export default function HomeHeader(){
  return(
    <>
      <h1>
        To Do List Manager <Badge variant="secondary">(2)</Badge>
      </h1>
      <ToDoForm />
      <ToDoList />
    </>
    )
}