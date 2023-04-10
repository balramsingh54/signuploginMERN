import React from 'react';
import '../styles/LeftDashboard.css';
import { AiOutlineDashboard } from "react-icons/ai";
import { FaUserPlus } from "react-icons/fa";
import { BiCodeAlt } from "react-icons/bi";
import { BiMath } from "react-icons/bi";
import { MdOutlineScience } from "react-icons/md";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { TfiComments } from "react-icons/tfi";
import { CiSettings } from "react-icons/ci";
import { MdDetails } from "react-icons/md";
import { MdCurrencyRupee } from "react-icons/md";
import { Link } from 'react-router-dom';
import { useState } from 'react';
//import AddNewUser from './AddNewUser';


const LeftDashboard = () => {

    const [show2, setshow2] = useState(true);


    return (
        <div>
            <div className="container">
                <div className="navigator">
                    <ul>
                        <li>
                            <Link to="/fee-submit">
                                <span className="icon"><MdCurrencyRupee /></span>
                                <span className="title"> Fee Submit</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/addstudent" onClick={() => setshow2(!show2)}>
                                <span className="icon"><FaUserPlus /></span>
                                <span className="title"> Add Student</span>
                            </Link>
                        </li>
                        <li>
                            <a href="!">
                                <span className="icon"><BiCodeAlt></BiCodeAlt></span>
                                <span className="title">Programming</span>
                            </a>
                        </li>
                        <li>
                            <a href="!">
                                <span className="icon"><BiMath></BiMath></span>
                                <span className="title">Maths</span>
                            </a>
                        </li>
                        <li>
                            <a href="!">
                                <span className="icon"><MdOutlineScience></MdOutlineScience></span>
                                <span className="title">Science</span>
                            </a>
                        </li>
                        <li>
                            <a href="!">
                                <span className="icon"><AiOutlineQuestionCircle></AiOutlineQuestionCircle></span>
                                <span className="title">Ask</span>
                            </a>
                        </li>
                        <li>
                            <a href="!">
                                <span className="icon"><TfiComments></TfiComments></span>
                                <span className="title">Feedback</span>
                            </a>
                        </li>
                        <li>
                            <a href="!">
                                <span className="icon"><CiSettings></CiSettings></span>
                                <span className="title">Setting</span>
                            </a>
                        </li>
                        <li>
                            <a href="!">
                                <span className="icon"><MdDetails></MdDetails></span>
                                <span className="title">Details</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default LeftDashboard;