import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Toastifi() {
    const showToastMessage = () => {
        toast.success(' Login Succesfully !', {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
    };
    return (
        <div>
            <button onClick={showToastMessage}>Notify</button>
            <ToastContainer />
        </div>
    );
}
export default Toastifi;