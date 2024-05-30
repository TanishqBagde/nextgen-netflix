import React from 'react';
import Header from './Header';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {  useSelector } from 'react-redux';
import MainContainer from './MainContainer';
import MovieContainer from './MovieContainer';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRated from '../hooks/useTopRated';
import useUpcoming from '../hooks/useUpcoming';
import SearchMovies from './SearchMovies';

const Browse = () => {
     const user = useSelector(store => store.app.user);
     const navigate = useNavigate();
     const toggle = useSelector(store => store.movie.toggle);
     //Custom Hooks
     useNowPlayingMovies();
     usePopularMovies();
     useTopRated();
     useUpcoming();
    
     useEffect(()=> {
         if(!user) {
             navigate("/");
         }
        
     });

    return (
        <div>
            <Header/>
            <div className='mt-20 '>
                {
                    toggle ? <SearchMovies/> : (   //if toggled then switch to the searchMovies else the browse page should be there
                       <>
                        <MainContainer/>
                        <MovieContainer/>
                       </>
                        
                    )
                }
             
            </div>
        </div>
    )
}
export default Browse;