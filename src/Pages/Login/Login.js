import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
// import { AuthContext } from '../../contexts/AuthProvider';
import toast from 'react-hot-toast'
import SocialLogin from './SocialLogin';
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton';
import { AuthContext } from '../../contexts/AuthProvider';
import useToken from '../../hooks/useToken';
// import useToken from '../../hooks/useToken';

const Login = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [loginError, setLoginError] = useState('');
    const [userEmailForModal, setUserEmailForModal] = useState(null);

    const { signIn, resetPassword } = useContext(AuthContext);

    const [loginUserEmail, setLoginUserEmail] = useState('');
    const [token] = useToken(loginUserEmail);

    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    if (token) {
        navigate(from, { replace: true });

    }


    const handleLogin = data => {
        console.log(data);
        setLoginError('');
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success(`Welcome ${user?.displayName}`);
                setLoginUserEmail(data.email);
                reset();
            })
            .catch(error => {
                console.log(error.message)
                setLoginError(error.message);
            });
    }

    const handleEmailOnChange = event => {
        let email = event.target.value;
        setUserEmailForModal(email);
        // console.log(email);

    };




    const handleSendResetEmail = () => {
        const modalEmail = document.getElementById('resetemail').value;
        // console.log(modalEmail);
        setUserEmailForModal(modalEmail);

        resetPassword(userEmailForModal)
            .then(() => {
                toast.success(`Reset email sent to ${userEmailForModal}`);
                setUserEmailForModal(null);
            })
            .catch(error => {
                console.error(error);
                toast.error('Something went wrong');
            });
    };

    return (
        <div className='h-[800px] flex justify-center items-center my-10'>
            <div className='w-96 p-7 shadow-lg rounded-xl'>
                <h2 className='text-2xl text-center font-lighter mb-9 text-secondary'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)} className=''>

                    <div onChange={handleEmailOnChange} className="form-control w-full max-w-xs mb-6">
                        {/* <label className="label font-medium"><span className="label-text">Email</span></label> */}
                        <input type="email"
                            {...register("email", { required: "Email Address is required", maxLength: { value: 30, message: "Email Address can't be more than 20 characters" } })}
                            className="input input-bordered w-full max-w-xs rounded-none border-0 border-b-4" placeholder='Email' />
                        {errors.email && <p className='text-error font-semibold p-2' role="alert">{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        {/* <label className="label font-medium"><span className="label-text">Password</span></label> */}
                        <input type="password"
                            {...register("password", { required: "Password is required", minLength: { value: 6, message: 'Password Must be at least 6 characters' }, maxLength: 20 })}
                            className="input input-bordered w-full max-w-xs rounded-none border-0 border-b-4" placeholder='Password' />
                        {errors.password && <p className='text-error font-semibold p-2' role="alert">{errors.password?.message}</p>}
                        {/* <label className="label"> <span className="label-text text-blue-600 hover:text-secondary font-medium">Forget Password?</span></label> */}

                        <label htmlFor="reset-modal" className="label"
                            onClick={() => {
                                if (userEmailForModal === null) {
                                    toast.error('First try to login please! Enter your email');
                                }
                            }}
                        >
                            <span className="label-text text-secondary hover:text-violet-600 font-medium">Forgot Password?</span>
                        </label>

                    </div>

                    <input type="submit" value="Login" className='btn w-full border-0 bg-gradient-to-r from-purple-500 to-pink-500 text-white mt-8' />
                    <div>
                        {
                            loginError && <p className='text-error p-1 font-medium'>{loginError}</p>
                        }
                    </div>
                </form>
                <label className="label font-medium "><span className="label-text text-center flex-grow mt-4 mb-3">New to Wheel Mania? <Link to='/signup' className='text-secondary hover:text-blue-600'>Create a new account.</Link></span></label>

                <SocialLogin></SocialLogin>
            </div>
            {/* reset modal  */}
            {
                userEmailForModal && <React.Fragment>
                    <input type="checkbox" id="reset-modal" className="modal-toggle" />
                    <div className="modal">
                        <div className="modal-box relative">
                            <label htmlFor="reset-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                            <h3 className="text-lg text-secondary font-semibold">Do you want us to send the 'Reset Password Email' to this address?</h3>
                            <input onChange={handleEmailOnChange} type="text" id='resetemail' name='resetemail' placeholder="Your Email" defaultValue={userEmailForModal} className="input w-full border-2 border-gray-400 my-6" />
                            <br />
                            <div className='text-end'>
                                <button className='btn btn-secondary text-white font-semibold'
                                    disabled={userEmailForModal.length === 0}
                                    onClick={handleSendResetEmail}
                                >Send Email</button>
                            </div>
                        </div>
                    </div>
                </React.Fragment>

            }

        </div>
    );
};

export default Login;