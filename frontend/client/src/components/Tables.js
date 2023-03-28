import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import '../styles/Table.css';
import axios from 'axios';

const Tables = () => {

  const [data, setData] = useState([]);
  // studentData();

  const studentData = async () => {
    await axios.get('http://localhost:5000/classes')
    .then(res => res.data)
    .then(res_ => {
      // response = response.data.data;
      setData(res_.data);
      // console.log('------',data);
      //console.log('....',res.data.data);
    });
  }

  useEffect(() => {studentData()},[])

  useEffect(() => {
    // studentData();
    console.log('///////////////',data);
    // console.log(studentData());
    // const value = studentData();
    // setData(value);
    // console.log(value)
    // console.log(data)
  },[data]);

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Roll no</th>
          <th>Name</th>
          <th>Fee</th>
          <th>Total Due Fee</th>
          <th>Mobile</th>
          <th>Address</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {
          data.map((item) => { return <tr>
              <td>{item.name}</td>
              <td>{item.name}</td>
              <td>{item.name}</td>
              <td>{item.name}</td>
              <td>{item.name}</td>
              <td>{item.name}</td>
              <td>{item.name}</td>
            </tr>
          })
        }
      </tbody>
    </Table>
  );
}

export default Tables