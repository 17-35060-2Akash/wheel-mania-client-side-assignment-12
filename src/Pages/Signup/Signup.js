import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../contexts/AuthProvider';
import toast from 'react-hot-toast';
import SocialLogin from '../Login/SocialLogin';
// import useToken from '../../hooks/useToken';

const Signup = () => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [signupError, setSignupError] = useState('');

    //password matching handling
    const [passwordMatchError, setPasswordMatchError] = useState('');

    const [createdUserEmail, setCreatedUserEmail] = useState('');

    const navigate = useNavigate();
    /*  const [token] = useToken(createdUserEmail);
 
     if (token) {
         navigate('/');
     } */

    const { createUser, updateUser } = useContext(AuthContext);

    const handleSignUp = data => {
        console.log(data);
        setSignupError('');

        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success(`Welcome ${data.name}`);
                // toast.success(`Welcome!`);


                const profile = {
                    displayName: data.name
                }
                updateUser(profile)
                    .then(() => {

                        saveUser(data.name, data.email, data.accountType);
                        reset();

                    })
                    .catch(error => console.error(error))

            })
            .catch(error => {
                console.error(error)
                setSignupError(error.message)
            })

    }

    const saveUser = (name, email, accountType) => {
        const user = {
            name,
            email,
            role: accountType
        };

        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    navigate('/'); //have to remove this when token is set
                }
                setCreatedUserEmail(email);
            })
    };


    const handleConfirmPassword = event => {
        const mainPass = document.getElementById('password').value;
        // console.log('mainpass', mainPass);
        const confirmPass = event.target.value;
        // console.log('confirmpass', confirmPass);
        setPasswordMatchError('');
        if (!mainPass.startsWith(confirmPass)) {
            setPasswordMatchError("Password doesn't match confirm password.");
        }
    }




    return (
        <div className='h-[800px] flex justify-center items-center my-24'>
            <div className='w-96 p-7 shadow-lg rounded-xl'>
                <h2 className='text-2xl text-center font-lighter mb-9 text-primary'>Sign Up</h2>
                <form onSubmit={handleSubmit(handleSignUp)}>

                    <div className="form-control w-full max-w-xs mb-6">
                        {/* <label className="label font-medium"><span className="label-text">Name</span></label> */}
                        <input type="text" {...register("name",
                            { required: "Name is required.", maxLength: { value: 20, message: "Name can't be more than 30 chracters." } })}
                            className="input input-bordered w-full max-w-xs rounded-none border-0 border-b-4" placeholder='Name' />
                        {errors.name && <p className='text-error p-1'>{errors.name.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs mb-6">
                        {/* <label className="label font-medium"><span className="label-text">Email</span></label> */}
                        <input type="email" {...register("email",
                            { required: 'Email is required.' }
                        )} className="input input-bordered w-full max-w-xs rounded-none border-0 border-b-4" placeholder='Email' />
                        {errors.email && <p className='text-error p-1'>{errors.email.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs mb-6">
                        {/* <label className="label font-medium"><span className="label-text">Password</span></label> */}
                        <input type="password" id='password' {...register("password",
                            {
                                required: "Password is required.", minLength: { value: 6, message: "Password has to be minimum 6 characters long." },
                                pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])/, message: "Password Must be strong." }
                            }
                        )}
                            className="input input-bordered w-full max-w-xs rounded-none border-0 border-b-4" placeholder='Password' title='Password has to be minimum 6 characters, at least one uppercase and one special sign.' />
                        {errors.password && <p className='text-error p-1'>{errors.password.message}</p>}
                    </div>

                    <div onChange={handleConfirmPassword} className="form-control w-full max-w-xs mb-6">
                        {/* <label className="label font-medium"><span className="label-text">Password</span></label> */}
                        <input type="password" {...register("confirmPassword",
                            {
                                required: "Confirm Password is required."
                            }
                        )}
                            className="input input-bordered w-full max-w-xs rounded-none border-0 border-b-4" placeholder='Confirm Password' />
                        {errors.confirmPassword && <p className='text-error p-1'>{errors.confirmPassword.message}</p>}
                        {
                            passwordMatchError && <p className='text-error p-1'>{passwordMatchError}</p>
                        }
                    </div>
                    <h2 className='mb-4 text-md font-semibold text-gray-600 mt-7'>Choose an account type:</h2>

                    <div className="form-control">
                        <label className="label cursor-pointer">
                            <span className="label-text text-lg font-lighter">Seller Account</span>
                            <input type="radio" name="accountType" {...register('accountType')} value='seller' className="radio checked:bg-red-500" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label cursor-pointer">
                            <span className="label-text text-lg font-lighter">Buyer Account</span>
                            <input type="radio" name="accountType" {...register('accountType')} value='buyer' className="radio checked:bg-blue-500" defaultChecked />
                        </label>
                    </div>



                    <input type="submit" value="Sign Up" className='btn btn-neutral w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white border-0 mt-8' />
                    <div>
                        {
                            signupError && <p className='text-error p-1 font-medium'>{signupError}</p>
                        }
                    </div>
                </form>
                <label className="label font-medium mt-4 mb-7"><span className="label-text text-center flex-grow">Already have an account? <Link to='/login' className='text-primary'>Login</Link> here.</span></label>

                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Signup;