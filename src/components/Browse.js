import React from 'react';
import Header from './Header';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Browse = () => {
     const user = useSelector(store => store.app.user);
     const navigate = useNavigate();

     useEffect(()=> {
         if(!user) {
             navigate("/");
         }
     });

    return (
        <div>
            <Header/>
            <div>
                Browse
            </div>
        </div>
    )
}
export default Browse;