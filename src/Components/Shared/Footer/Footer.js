import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faTwitter, faInstagram, faTelegram } from "@fortawesome/free-brands-svg-icons"
import { faCopyright } from '@fortawesome/free-solid-svg-icons'
import './Footer.css'

const Footer = () => {
    const facebookIcon = <FontAwesomeIcon icon={faFacebook} />
    const telegramIcon = <FontAwesomeIcon icon={faTelegram} />
    const instraIcon = <FontAwesomeIcon icon={faInstagram} />
    const twitterIcon = <FontAwesomeIcon icon={faTwitter} />
    const copyRight = <FontAwesomeIcon icon={faCopyright} />
    return (
        <div className="footer">
            <h2 className='text-white'>Mongo Travel Agency</h2>

            <p><span className="text-white">{facebookIcon}</span>  <span className="ps-2 text-white">{instraIcon} </span>  <span className="ps-2 text-white">{telegramIcon}</span> <span className="ps-2 text-white">{twitterIcon}</span> </p>
            <br />

            <small className="text-white">Copyright <span>{copyRight}</span>2021 All rights reserved | Rahat Mahmud</small>


        </div>
    );
};

export default Footer;