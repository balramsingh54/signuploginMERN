import React, { useEffect, useState } from 'react'
import '../styles/Pagination.css';
import ReactPaginate from 'react-paginate';
import axios from 'axios';
import Table from 'react-bootstrap/Table';



const Pagination = () => {

    const [page, setPage] = useState([]);
    const [data, setData] = useState([]);


    const handlePageClick = (data) => {
        //console.log(data.selected)
        setPage(data.selected);
    }

    const fetchData = async () => {
        await axios.get(
            page ?
                `http://localhost:5000/classes? page=${page + 2}` :
                "http://localhost:5000/classes? page=3"
        )
            .then(res => {
                setData(res.data.data);
                return res.data.data;
            });
           
        // .then(res_ => {
        //     console.log(res_)
        //     setPage(res_);
        //     console.log(page)
        // });
    }

    //useEffect(() => { fetchData() }, []);


    useEffect(() => {
        fetchData()
    }, [page])

    console.log(page);

    return (
        <>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Roll no</th>
                        <th>Name</th>
                        <th>Fee</th>
                        <th>Total Due Fee</th>
                        <th>Mobile</th>
                        <th>Address</th>
                        <th>Section</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item, i) => {
                            return <tr key={i}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.fee_status}</td>
                                <td>{item.total_due_fee}</td>
                                <td>{item.mobile_no}</td>
                                <td>{item.address}</td>
                                <td>{item.section}</td>
                            </tr>
                        })
                    }
                </tbody>
            </Table>
            <ReactPaginate
                breakLabel="..."
                pageClassName='page-item'
                pageLinkClassName='page-link'
                containerClassName='pagination'
                previousClassName='page-item'
                previousLinkClassName='page-link'
                nextClassName='page-item'
                nextLinkClassName='page-link'
                nextLabel="next  >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={10}
                pageCount={5}
                previousLabel="<  previous"
                breakClassName='page-item'
                breakLinkClassName='page-link'
                activeClassName='active'
                //renderOnZeroPageCount={null}
            />
        </>
    )
}

export default Pagination