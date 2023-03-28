import React from 'react'
import '../styles/NineDot.css'
import { Link } from 'react-router-dom'

const NineDot = () => {
    return (
        <div>
            <div className='ninedot'>
                <div className="innerdot">
                    <Link className='content' to= "/classes">Class 4</Link>
                    <Link className='content'>Class 5</Link>
                    <Link className='content'>Class 6</Link>
                    <Link className='content'>Class 7</Link>
                    <Link className='content'>Class 8</Link>
                    <Link className='content'>Class 9</Link>
                    <Link className='content'>Class 10</Link>
                    <Link className='content'>Class 11</Link>
                </div>
            </div>
        </div>
    )
}

export default NineDot