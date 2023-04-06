import React from 'react';
import { MuiOtpInput } from 'mui-one-time-password-input';
import { Outlet, Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import '../styles/otp.css';

const OTP = () => {
  const [otp, setOtp] = React.useState('')

  const handleChange = (newValue) => {
    setOtp(newValue)
  }

  return (
    <div>
      <Outlet></Outlet>
      <h1>Please Enter OTP</h1>
      <MuiOtpInput TextFieldsProps={{ placeholder: '-' }} value={otp} onChange={handleChange} />
      <Button
        className='otplink'
        type="submit"
        fullwidth="true"
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
      >Enter OTP
      </Button>
    </div>
  )
}

export default OTP;