import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button, Table } from 'react-bootstrap';

const AllPosts = () => {
    const [allPosts, setAllPosts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/places')
            .then(res => res.json())
            .then(data => setAllPosts(data));
    }, [allPosts]);



    const { _id, image, travelerName, email, travelLocation, description, travelCategory, cost, address, status } = allPosts;

    // approve post
    const handleApprove = id => {
        const proceed = window.confirm('Publish this post?')

        if (proceed) {
            const url = `http://localhost:5000/places/${id}`;
            fetch(url, {
                method: 'PUT'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount) {
                        alert('Posted');
                    } else {
                        alert('Error Unkown, Cant post this')
                    }
                })
        }

    }

    // delete post
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure you want to delete')

        if (proceed) {
            const url = `http://localhost:5000/places/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Deleted Successfully')
                        const remainingData = allPosts.filter(post => post._id !== id)
                        setAllPosts(remainingData);
                    }
                })
        }
    }

    // approve button will be disabled if the post is already approved
    const postStatus = (id, post) => {
        if (post.status == 'approved') {
            return <Button onClick={() => handleApprove(id)} variant="outline-dark" className='mx-auto my-1 p-1 disabled'>Approved</Button>
        }
        else {
            return <Button onClick={() => handleApprove(id)} variant="outline-dark" className='mx-auto my-1 p-1 '>Approve</Button>
        }
    }


    return (
        <Table responsive bordered hover variant="">
            <thead>
                <tr>
                    <th>Travel Location</th>
                    <th>Image</th>
                    <th>Author</th>
                    <th>Travel Category</th>
                    <th>Description</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
            </thead>

            <tbody>
                {
                    allPosts.slice(0).reverse().map(post => <tr>
                        <td>{post.travelLocation}</td>
                        <td> <img className='w-50 img-fluid' src={post.image} alt="" srcset="" /> </td>
                        <td>{post.travelerName}</td>
                        <td>{post.travelCategory}</td>
                        <td className='w-25'>{post.description.substr(0, 120)}</td>
                        <td>{post.status}</td>

                        <td className='d-flex flex-column p-3'>
                            {postStatus(post._id, post)}
                            {/* <Button onClick={() => handleApprove(post._id)} variant="outline-dark" className='mx-auto my-1 p-1 disabled'>Approve</Button> */}

                            <Button onClick={() => handleDelete(post._id)} variant="outline-danger" className='mx-auto px-2 my-1 p-1'>Delete</Button>
                        </td>
                    </tr>)
                }
            </tbody>
        </Table>
    );
};

export default AllPosts;