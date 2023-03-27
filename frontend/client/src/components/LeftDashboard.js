import React from 'react';
import '../styles/LeftDashboard.css';
import { AiOutlineDashboard } from "react-icons/ai";
import { TbUsers } from "react-icons/tb";
import { BiCodeAlt } from "react-icons/bi";
import { BiMath } from "react-icons/bi";
import { MdOutlineScience } from "react-icons/md";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { TfiComments } from "react-icons/tfi";
import { CiSettings } from "react-icons/ci";
import { MdDetails } from "react-icons/md";
// import { BiCodeAlt } from "react-icons/bi";


const LeftDashboard = () => {
    return (
        <div>
            <div className="container">
                <div className="navigator">
                    <ul>
                        <li>
                            <a href="!">
                                <span className="icon"><AiOutlineDashboard /></span>
                                <span className="title">Dashboard</span>
                            </a>
                        </li>
                        <li>
                            <a href="!">
                                <span className="icon"><TbUsers /></span>
                                <span className="title">Students</span>
                            </a>
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
                                <span className="title">Comments</span>
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