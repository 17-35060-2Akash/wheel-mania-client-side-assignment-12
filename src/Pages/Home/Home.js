import React, { useContext } from 'react';
import { useNavigation } from 'react-router-dom';
import Loader from '../../components/Loader';
import { AuthContext } from '../../contexts/AuthProvider';
import Carousel from './Carousel/Carousel';

const Home = () => {
    const { loading } = useContext(AuthContext);

    if (loading) {
        return <Loader></Loader>
    }


    return (
        <div>
            <Carousel></Carousel>
        </div>
    );
};

export default Home;