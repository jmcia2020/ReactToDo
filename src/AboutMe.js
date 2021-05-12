import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

export default function AboutMe(props){

  const {user} = props;

  // <> is a React.Fragment
  return(
    <>
      <h1>Let's Get Acquainted.</h1>
      <Alert variant="success">Our first alert!</Alert>
      {/* <Alert variant="danger">Our first alert, {user.name}!</Alert> */}
            <Button variant="danger">Hi!</Button>
    </>
    
  )
}