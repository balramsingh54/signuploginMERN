import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import '../styles/Table.css';
import axios from 'axios';

const Tables = () => {

  const [data, setData] = useState([]);

  const studentData = async () => {
    await axios.get('http://localhost:5000/classes').then(response => {
      response = response.data.data;
      setData(response);
      console.log(response);
    });
  }

  useEffect(() => {
    studentData();
    // console.log(studentData());
    // const value = studentData();
    // setData(value);
    // console.log(value)
    // console.log(setData);
  },[]);

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
          // data.map((datas) => {
          //   <tr>
          //     <td>{datas.name}</td>
          //     <td>{datas.name}</td>
          //     <td>{datas.name}</td>
          //     <td>{datas.name}</td>
          //     <td>{datas.name}</td>
          //     <td>{datas.name}</td>
          //     <td>{datas.name}</td>
          //   </tr>
          // })
        }
      </tbody>
    </Table>
  );
}

export default Tables