import axios from 'axios';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../styles/AddNewUserForm.css';


const AddNewUserForm = () => {

    const [section, setsection] = useState('4');
    const [name, setName] = useState('');
    const [fee, setFee] = useState('');
    const [duefee, setDuefee] = useState('');
    const [mobile, setMobile] = useState('');
    const [address, setAddress] = useState('');



    const handleSection = (e) => {
        setsection(e.target.value)
    }


    const handleName = (e) => {
        setName(e.target.value)
    }


    const handleFee = (e) => {
        setFee(e.target.value)
    }

    const handleDuefee = (e) => {
        setDuefee(e.target.value)
    }

    const handleMobile = (e) => {
        setMobile(e.target.value)
    }

    const handleAddress = (e) => {
        setAddress(e.target.value)
    }

    const resetentry = () => {
        setName('');
        setFee('');
        setDuefee('');
        setMobile('');
        setAddress('')
    }



    const submit = async (e) => {
        e.preventDefault()
        const data_ = {
            section: section,
            name: name,
            fee: fee,
            duefee: duefee,
            mobile: mobile,
            address: address
        }

        if ((section && name && fee && duefee) !== null) {
            await axios.post('http://localhost:5000/addstudent', data_)
                .then((result) => {
                    console.log(result);
                })

                .catch(err => {
                    console.log(err);
                })

        }


    }

    return (
        <div className='addnewuser'>
            <Form className=' addstudntform' onSubmit={submit}>
                <Form.Group className="mb-3" controlId="formBasicNumber">
                    <Form.Label>Class :</Form.Label>
                    <Form.Control
                        as="select"
                        value={section}
                        onChange={handleSection}
                    >
                        <option value="4">class 4</option>
                        <option value="5">class 5</option>
                        <option value="6">class 6</option>
                        <option value="7">class 7</option>
                        <option value="8">class 8</option>
                        <option value="9">class 9</option>
                        <option value="10">class 10</option>
                        <option value="11">class 11</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formName">
                    <Form.Label>Name :</Form.Label>
                    <Form.Control type="text" placeholder="Enter Your Name" name='name' value={name} onChange={handleName} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicNumber">
                    <Form.Label>Fee :</Form.Label>
                    <Form.Control type="number" placeholder="Submit Fee" name='fee' value={fee} onChange={handleFee} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicNumber">
                    <Form.Label>Due Fee :</Form.Label>
                    <Form.Control type="number" placeholder="Submit Due Fee" name='duefee' value={duefee} onChange={handleDuefee} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicNumber">
                    <Form.Label>Mobile Number :</Form.Label>
                    <Form.Control type="number" placeholder="Enter Mobile Number" name='mobile' value={mobile} onChange={handleMobile} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicAddress">
                    <Form.Label>Address :</Form.Label>
                    <Form.Control type="text" placeholder="Enter Your Address" name='address' value={address} onChange={handleAddress} />
                </Form.Group>
                <Button variant="primary" type="submit" >
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default AddNewUserForm;