import React from 'react';
import PropTypes from 'prop-types';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import './Footer.css';
import CopyrightRoundedIcon from '@mui/icons-material/CopyrightRounded';


const Footer = () => {
	return (
		<div className='footer_outer_container'>
			<div className='footer_inner_container'>
			    <div className='footer_icons'>
				<FacebookOutlinedIcon/>
				<InstagramIcon/>
				<YouTubeIcon/>
			    </div>
				<div className='footer_data'>
					<div>
						<ul>
							<li>Audio description</li>
							<li>Invertor Relations</li>
							<li>Legal Notice</li>
						</ul>
					</div>
					<div>
						<ul>
							<li>help center</li>
							<li>Jobs</li>
							<li>Cockie Prefences</li>
						</ul>
					</div>
                    <div>
						<ul>
							<li>Gift Cards</li>
							<li>Terms of Use</li>
							<li>Corporate information</li>
						</ul>
					</div>
					<div>
						<ul>
							<li>Media Center</li>
							<li>Privacy</li>
							<li>Contact Us</li>
						</ul>
					</div>
					<div className='service_code'>
                        <p>Service Code</p>
					</div>
					<div className='copy-write'>
					<CopyrightRoundedIcon />:1997-2024 Netflix,Inc.
					</div>
				</div>
			</div>
		</div>
	);
};


Footer.propTypes = {

};


export default Footer;
