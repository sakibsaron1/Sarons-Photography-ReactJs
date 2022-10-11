import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({service}) => {
    const navigate = useNavigate();

    const navigateToServiceDetailPage = id =>{
        navigate(`/service/${id}`);
    }

    const {id, name, img, description, price} = service;
    return (
        <div className='service'>
            <img className='w-100' src={img} alt="" />
            <h5>{name}</h5>
            <h5>Price: {price}</h5>
            <p><small>{description.slice(0, 150)}</small>...</p>
            <button onClick={() => navigateToServiceDetailPage(id)} className='btn btn-primary btnimpo'>Book: {name}</button>
        </div>
    );
};

export default Service;