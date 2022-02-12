import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalState';
import { ListGroup, ListGroupItem, Button } from 'reactstrap';

export const UserList = () => {

    const {users, removeUser} = useContext(GlobalContext);
    console.log(users);

    return (
        <ListGroup>
            {users.length > 0 ? (
                <>
                    {users.map(user => (
                        <ListGroupItem className='d-flex' key={user.id}>
                            <strong>{user.name}</strong>
                            <div style={{ marginLeft: "auto" }}>
                                <Link to={`/edit/${user.id}`} className='btn btn-warning' style={{ marginRight: "1rem" }}>Edit</Link>
                                <Button onClick={() => removeUser(user.id)} color='danger'>Delete</Button>
                            </div>
                        </ListGroupItem>
                    ))}
                </>
            ) : (
                <h4 className='text-center'> No Users Found </h4>
            )}
        </ListGroup>
    )
}
