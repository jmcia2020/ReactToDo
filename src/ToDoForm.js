import { Form, Button } from 'react-bootstrap';
import './App.css';

export default function ToDoForm() {
  const handleSubmit = e => {
    e.preventDefault();
    console.log(e.target.ToDoItem.value, e.target.ToDoAssigned.value);
  }
  return (
    <div className="todo-form">
      <h4>Add To Do Item</h4>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="AddToDo">
          <Form.Label>To Do Item</Form.Label>
          <Form.Control type="text" name="ToDoItem" placeholder="Item Details" />
        </Form.Group>
        <Form.Group controlId="AssignedTo">
          <Form.Label>Assigned To</Form.Label>
          <Form.Control type="text" name="ToDoAssigned" placeholder="Assignee Name" />
        </Form.Group>
        <Form.Group controlId="Difficulty">
          <Form.Label>Difficulty</Form.Label>
          <Form.Control type="range" min="0" max="5" step="1" name="difficulty"/>
        </Form.Group>
        <Button type="submit" variant="primary" >Add Item</Button>
      </Form>
    </div>
  );
};
