import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../Component/Header/Header'
import Footer from '../../Component/Footer/Footer';
import Banner from '../../Component/Banner/Banner';



const Home = () => {
	return (
		<div>
  <Header/>
<Banner/>

  <Footer/>

		</div>
	);
};


Home.propTypes = {

};


export default Home;
