import React from 'react';
import Header from '../../Shared/Header/Header';
import Services from '../Services/Services';
import img20 from '../../../images/img20.jpg';
import '../Home/Home.css'
// import Banner from '../../Banner/Banner';


const Home = () => {
    return (
        <div>
            <div className='banner-area'>
                <img src={img20} alt="" className='img-fluid' />
            </div>
            <Services></Services>
        </div>
    );
};

export default Home;