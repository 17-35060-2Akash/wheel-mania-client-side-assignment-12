import React, { useContext } from 'react';
import { useNavigation } from 'react-router-dom';
import Loader from '../../components/Loader';
import { AuthContext } from '../../contexts/AuthProvider';

const Home = () => {
    const { loading } = useContext(AuthContext);
    /*  const navigation = useNavigation();
 
     if (navigation.state === 'loading') {
         return <Loader></Loader>
     } */

    if (loading) {
        return <Loader></Loader>
    }


    return (
        <div>
            <h2>This is Home</h2>
        </div>
    );
};

export default Home;