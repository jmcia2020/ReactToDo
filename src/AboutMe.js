import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import { useAuth } from './contexts/Auth';

export default function AboutMe(props){

  //const {user} = props;
  const { user } = useAuth();

  // <> is a React.Fragment
  return(
    <>
      <h1>Let's Get Acquainted.</h1>
      <Alert variant="success">Our first alert!</Alert>
      <Alert variant="danger">Our first alert, {user.username}!</Alert>
            <Button variant="danger">Hi!</Button>
    </>
  )

  
}