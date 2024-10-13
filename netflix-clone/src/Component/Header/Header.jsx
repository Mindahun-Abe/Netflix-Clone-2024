import React from 'react';
import PropTypes from 'prop-types';
import './Header.css'
import NetflixLogo from '../../assets/images/Netflix_logo.png'

//import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import NotificationImportantIcon from '@mui/icons-material/NotificationImportant';


function Header() {
	
	return (
<>
	<div className='header_outer_container'>		
       <div className='header_container'>
        <div className='header-left'>
          <ul> 
           <li><img src={NetflixLogo} alt="Netflix_logo" width='60' ></img></li >
	       <li>Home</li>
	       <li>TVShow</li>
	       <li>Movies</li>
	       <li>Latest</li>
	       <li>MyList</li>
	       <li>Browse by languages</li>
	     </ul>
        </div>
		<div className='header-right'>
			<ul>
			 <li><SearchIcon/></li>
			 <li><NotificationImportantIcon/></li>
			 <li><AccountBoxIcon/></li>
			 <li><ArrowDropDownIcon/></li>
			</ul>
		   </div>
     </div>
    </div>
</>
	);
};


Header.propTypes = {

};


export default Header;
