import React, { useContext } from 'react';
import { useNavigation } from 'react-router-dom';
import Loader from '../../components/Loader';
import { AuthContext } from '../../contexts/AuthProvider';
import AdvertisedItems from './AdvertisedItems/AdvertisedItems';
import Carousel from './Carousel/Carousel';
import Intro from './Intro/Intro';
import ProductCategories from './ProductCategories/ProductCategories';
import UserReviews from './UserReviews/UserReviews';

const Home = () => {
    const { loading } = useContext(AuthContext);

    if (loading) {
        return <Loader></Loader>
    }


    return (
        <div>
            <Carousel></Carousel>
            <AdvertisedItems></AdvertisedItems>
            <ProductCategories></ProductCategories>
            <Intro></Intro>
            <UserReviews></UserReviews>
        </div>
    );
};

export default Home;