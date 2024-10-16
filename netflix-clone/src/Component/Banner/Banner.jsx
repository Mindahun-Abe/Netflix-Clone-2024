import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from '../utils/axios';
import requests from '../utils/requests';
import './Banner.css';



const Banner = () => {
	const [movie, setMovie] = useState([]);
	useEffect(()=>{
		(async () => {
			try{
	const request = await axios.get(requests.fetchNetflixOriginals)
	setMovie(request.data.results[Math.floor(Math.random()*request.data.results.length)
	]);
	}catch(error){
	console.log('error', error);
	}
		})();
	},[]); 
	  function truncate(str,n){
return str?.length>n>str.substr(0,n-1)+'...';str;
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
		    <h1 className='banner_description'>{truncate(movie?.overview,150)}</h1> 
		</div>
		<div className='banner_fadeButton'/>
		</div>
	);
};


Banner.propTypes = {

};


export default Banner;
