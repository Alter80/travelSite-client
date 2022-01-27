import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const MakeAdmin = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [email, setEmail] = useState('');

    const onSubmit = (data, e) => {

        // console.log(data.email);

        setEmail(data.email);

        console.log(email);

        const user = { email };

        fetch('https://murmuring-chamber-98588.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    alert('Admin Created Successfully!');
                }
                else {
                    alert(`Email not found`)
                }
            })

        e.preventDefault();
        e.target.reset();
    }

    return (
        <div className="container">

            <div className="row">

                <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                    <div className="card card-signin my-5">
                        <div className="card-body">
                            <h5 className="card-title text-center">Making new Admin</h5>

                            <form className="form-signin" onSubmit={handleSubmit(onSubmit)}>


                                <div className="form-label-group">
                                    <input type="text" className="text-center form-control p-2" placeholder="Enter Email address here" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
                                </div>


                                <Button className="btn btn-dark btn-block text-uppercase" type="submit" >Make Admin</Button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;