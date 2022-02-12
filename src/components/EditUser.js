import React,{useState, useContext, useEffect} from 'react';
import { Form, FormGroup, Label, Input, Button} from 'reactstrap';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalState';

export const EditUser = () => {

  const [selectedUser, setSelectedUser] = useState({
    id:'',
    name:''
  });
  const { users, editUser } = useContext(GlobalContext);
  const navigate = useNavigate();
  const getCurrentUserId = useParams();

  useEffect(() =>{
    const userId = getCurrentUserId.id;
    const selectedUser = users.find( user => user.id === userId);
    console.log(selectedUser);
    setSelectedUser(selectedUser);
  }, [getCurrentUserId.id, users]); // It will run If these values are changing

  const onSubmit = () => {
    editUser(selectedUser);
    navigate('/');
  }

  const onChange = (e) => {
    console.log(e.target.value);
    setSelectedUser({...selectedUser, [e.target.name]: e.target.value});
  }

  return (
    <Form onSubmit={onSubmit}>
        <FormGroup>
            <Label>Name</Label>
            <Input type='text' name="name" value={selectedUser.name} onChange={onChange} placeholder='Edit Name' ></Input>
        </FormGroup>
        <Button type='submit' style={{marginRight:"1rem"}}>Edit</Button>
        <Link to="/" className='btn btn-danger ml-2'>Cancel</Link>
    </Form>
  )
}
