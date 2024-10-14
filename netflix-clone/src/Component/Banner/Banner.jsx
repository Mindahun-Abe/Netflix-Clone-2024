import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from '../Utilities/axios';
import requests from '../Utilities/requests';




const Banner = () => {
	const [movie, setMovie] = useState([]);
	useEffect(() => {
		fetchmovie();
	  }, []);
	
	  const fetchmovie = async () => {
		try {
		  const request = await axios.get('requests.fetchNetflixOriginals');
		  setmovie(request.data.results[Math.floor(Math.random()*request.data.results.length)
		  ]);
		} catch (error) {
		  console.log('Error fetching movie:', error);
		}
	  };  


	return (
		<div className='Banner' 
		style={{
			backgroundSize: 'cover',
            backImage: 'url("https://image.tmdb.org/t/p/original${movie?backdrop_path}")',
			backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
		}}
		>
		<div className='Banner_contents'>
          <h1 className='Banner_title'>
            {movie?.title || movie?.name || movie.original_name}
           </h1>
		   <div className='banner_buttons'>
			<button className='banner__button play'>Play</button>
            <button className='banner__button play'>My List</button>
		   </div>
		   {/* <h1 className='banner_description'>{truncate(movie?.overview. 150)}</h1> */}
		</div>
		<div className='banner_fadeButton'/>
		</div>
	);
};


Banner.propTypes = {

};


export default Banner;
