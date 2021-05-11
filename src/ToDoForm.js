import { Form, FormControl, FormGroup, Col, FormLabel, InputGroup, Button } from 'react-bootstrap';
import ProgressBar from 'react-bootstrap/ProgressBar';

export default function ToDoHeader() {
  return (
    <h1>Add To Do Item</h1>  
  )}

  AddToDoForm()
  {
    <Form>
      <FormGroup controlId="AddToDo">
        <FormLabel>To Do Item</FormLabel>
        <FormControl type="text" placeholder="Item Details" />
      </FormGroup>
      <FormGroup controlId="AssignedTo">
        <FormLabel>Assigned To</FormLabel>
        <FormControl type="text" placeholder="Assignee Name" />
      </FormGroup>
    </Form>
  };

DifficultyLevel(){
  return 
<ProgressBar difficulty={4} />
}

<>
  <Button variant="addItem">Primary</Button>{'Add Item'}
</>
