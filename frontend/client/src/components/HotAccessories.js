import React from 'react';
import "../styles/HotAccessories.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const HotAccessories = (props) => {
  return (
    <div className='maindiv'>
      <div>
        <img src={props.music} alt="image" />
      </div>
      <div>
        <img src={props.data2} alt="image" />
      </div>
    </div>
  )
}

export default HotAccessories

