import React from 'react';
import './Footer.css'
import { IoLogoVimeo } from "react-icons/io";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import Contact from '../contact/Contact';
const Footer = () => {
  return (
    <div className="new">
    <footer className="footer-distributed">

			<div className="footer-left" >
				<div className="logo">
				<IoLogoVimeo/>
				
				<h3>ista</h3>
			</div>
				

				<p class="footer-company-name">Vista © 2024</p>

				<div class="footer-icons">

					<a href="#"><i class="fa fa-facebook"><FaSquareXTwitter /></i></a>
					<a href="https://www.instagram.com/imdad_kaisar?igsh=bndjanloanlnbTZx"><i class=" fa fa-twitter"><FaInstagram /></i></a>
					<a href="#"><i class="fa fa-linkedin"><CiLinkedin /></i></a>
					<a href="#"><i class="fa fa-github"><FaGithub /></i></a>

				</div>
				<div className="mail">
					<h2>Email: ikaisar345@gmail.com</h2>
				</div>

			</div>

			<Contact />

		</footer>
        </div>
  );
};

export default Footer;