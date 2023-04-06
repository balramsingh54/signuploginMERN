import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../styles/AddNewUserForm.css';


const AddNewUserForm = () => {

    const [name, setName] = useState('');
    const [type, setType] = useState('');


    return (
        <div className='addnewuser'>
            <Form className='addstudntform'>
                <Form.Group className="mb-3" controlId="formBasicNumber">
                    <Form.Label>Class</Form.Label>
                    <Form.Control
                        as="select"
                        value={type}
                        onChange={e => {
                            console.log("e.target.value", e.target.value);
                            setType(e.target.value);
                        }}
                    >
                        <option value="class 4">class 4</option>
                        <option value="class 5">class 5</option>
                        <option value="class 6">class 6</option>
                        <option value="class 7">class 7</option>
                        <option value="class 8">class 8</option>
                        <option value="class 9">class 9</option>
                        <option value="class 10">class 10</option>
                        <option value="class 11">class 11</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Your Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicNumber">
                    <Form.Label>Fee</Form.Label>
                    <Form.Control type="password" placeholder="Submit Fee" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicNumber">
                    <Form.Label>Due Fee</Form.Label>
                    <Form.Control type="number" placeholder="Submit Due Fee" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicNumber">
                    <Form.Label>Mobile Number</Form.Label>
                    <Form.Control type="number" placeholder="Enter Mobile Number" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicAddress">
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" placeholder="Enter Your Address" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default AddNewUserForm;