import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from '../../contexts/AuthProvider';
import useToken from '../../hooks/useToken';

const SocialLogin = () => {
    const { signInWithGoogle } = useContext(AuthContext);

    const [createdGoogleEmail, setCreatedGoogleEmail] = useState('');

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const [token] = useToken(createdGoogleEmail);

    if (token) {
        navigate(from, { replace: true });
    }

    const provider = new GoogleAuthProvider();

    const handleGoogleLogin = () => {
        signInWithGoogle(provider)
            .then(result => {
                const user = result.user;
                console.log(user);

                saveUser(user.displayName, user.email);
                setCreatedGoogleEmail(user.email);
            })
            .catch(error => console.error(error));
    };

    const saveUser = (name, email) => {
        const user = {
            name,
            email,
            role: 'buyer',
            verification: 'N/A'
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
                    //
                }
            })
    };

    return (
        <div>
            <div className="divider">OR</div>
            <button onClick={handleGoogleLogin} className='btn btn-ghost border-2 border-gray-500 w-full mt-6'><FaGoogle className='text-blue-500 mr-1 text-lg'></FaGoogle>CONTINUE WITH GOOGLE </button>
        </div>
    );
};

export default SocialLogin;