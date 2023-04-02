import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import '../styles/Table.css';
import axios from 'axios';

const Tables = () => {

  const [data, setData] = useState([]);

  const studentData = async () => {
    await axios.get('http://localhost:5000/classes')
    .then(res => res.data)
    .then(res_ => {
      // response = response.data.data;
      setData(res_.data);
      // console.log('------',data);
      console.log('....',data);
    });
  }

  useEffect(() => {studentData()},[])

  useEffect(() => {
    // studentData();
    console.log('///////////////',data);
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
          data.map((item , i) => { return <tr key ={i}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.fee_status}</td>
              <td>{item.total_due_fee}</td>
              <td>{item.mobile_no}</td>
              <td>{item.address}</td>
              <td>{item.Advance}</td>
            </tr>
          })
        }
      </tbody>
    </Table>
  );
}

export default Tables