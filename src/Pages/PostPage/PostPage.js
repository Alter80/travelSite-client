import React from 'react';
import { Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './PostPage.css';

const PostPage = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const { user, admin } = useAuth()

    const onSubmit = (data, e) => {
        e.preventDefault();
        e.target.reset();
        console.log(data);

        fetch(`https://murmuring-chamber-98588.herokuapp.com/places/`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(confirmData => {
                console.log(confirmData);
                if (confirmData.insertedId) {
                    alert('Posted! Waiting for Admin Approval.')
                }
                else {
                    alert('Post Failed')
                }
            })

    };

    // is admin? 
    const isAdmin = () => {
        if (admin == true) {
            return <input type="text" className="text-center form-control p-2" defaultValue='approve' value="approve" placeholder="approve" {...register("status", { maxLength: 20 })} />
        }
        else {
            return <input type="text" className="text-center form-control p-2" defaultValue='pending' value="pending" placeholder="pending" {...register("status", { maxLength: 20 })} />

        }
    }

    return (
        <div className="container" data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="500"
            data-aos-offset="0">

            <div className="row">

                <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                    <div className="card card-signin my-5">
                        <div className="card-body">
                            <h5 className="card-title text-center">Share your Experience</h5>


                            <form className="form-signin" onSubmit={handleSubmit(onSubmit)}>
                                {/* travel location */}
                                <div className="form-label-group">
                                    <input type="text" className="text-center form-control p-2" placeholder="Travel Location" {...register("travelLocation", { maxLength: 80 })} />
                                </div>

                                {/* address */}
                                <div className="form-label-group">
                                    <input type="text" className="text-center form-control p-2" placeholder="Exact address" {...register("address", { maxLength: 80 })} />
                                </div>

                                {/* image */}
                                <div className="form-label-group">
                                    <input type="url" className="text-center form-control p-2" placeholder="put image url here" {...register("image", {})} />
                                </div>
                                {/* travel category */}
                                <div className="form-label-group">
                                    <input type="text" className="text-center form-control p-2" placeholder="travelCategory" {...register("travelCategory", {})} />
                                </div>

                                {/* traveler name */}
                                <div className="form-label-group">
                                    <input type="text" className="text-center form-control p-2" placeholder="travelerName" {...register("travelerName", {})} />
                                </div>

                                {/* traveler email */}
                                <div className="form-label-group">
                                    <input type="text" className="text-center form-control p-2" defaultValue={user.email} placeholder="email" {...register("email", {})} />
                                </div>

                                {/* Extra travel date and time */}
                                {/* <div className="form-label-group">
                                    <input type="number" className="text-center form-control p-2" placeholder="year" {...register("year", { maxLength: 5 })} />
                                </div> */}

                                {/* travel cost */}
                                <div className="form-label-group">
                                    <input type="text" className="text-center form-control p-2" placeholder="cost" {...register("cost", { maxLength: 20 })} />
                                </div>

                                {/* POST pending/approve */}
                                <div className="form-label-group">
                                    {isAdmin()}
                                </div>

                                {/* description */}
                                <div className="form-label-group">
                                    <textarea type="text" className="description form-control p-2" placeholder="Description" {...register("description", {})} />
                                </div>


                                <Button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit" >Submit</Button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostPage;