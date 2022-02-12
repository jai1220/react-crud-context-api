import React, { useContext, useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalState';
import { v4 as uuid } from 'uuid';


export const AddUser = () => {

  const [name, setName] = useState('');
  const { addUser } = useContext(GlobalContext);
  const navigate = useNavigate();

  const onSubmit = () => {
    const newuser = {
      id: uuid(),
      name: name
    }

    addUser(newuser);
    navigate('/');
  }

  const onChange = (e) => {
    setName(e.target.value);
  }

  return (
    <Form onSubmit={onSubmit}>
      <FormGroup>
        <Label>Name</Label>
        <Input type='text' value={name} onChange={onChange} placeholder='Enter Name' ></Input>
      </FormGroup>
      <Button type='submit' style={{ marginRight: "1rem" }}>Submit</Button>
      <Link to="/" className='btn btn-danger ml-2'>Cancel</Link>
    </Form>
  )
}
