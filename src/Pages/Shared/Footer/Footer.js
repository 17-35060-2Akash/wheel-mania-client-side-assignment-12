import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/icons/11.png';
import { FaFacebookSquare, FaGithubSquare, FaGoogle, FaInstagram, FaLinkedin, FaWhatsappSquare } from "react-icons/fa";
import footer from '../../../assets/images/footercover.jpg';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="mx-auto" style={{
            background: `url(${footer})`,
            backgroundSize: 'cover'
        }}>
            <section className='' id="footer-contact">
                <div className="flex flex-col align-middle justify-center pt-20">
                    <div className='flex flex-col align-middle justify-center'>
                        <img className="w-40 mx-auto pb-6 footer-logo" src={logo} alt="" />
                        <p className="font-bold pb-5 text-xl comp-logo">
                            Your trusted and reliable<br /> Car Resellers since 2007
                        </p>

                    </div>

                    <p className="font-semibold pb-5 text-lg office-address">Office 41, 5/5 Monipuri Para, Bijoy Sharoni, Dhaka.</p>
                    {/* <div className='mt-4 links-list'>
                        <nav className="text-purple-600">
                            <Link to='/contacts' className='px-5 text-xl font-medium'>Contact Us</Link>
                            <Link to='/about' className='px-5 text-xl font-medium'>About Us</Link>
                        </nav>
                        <nav className="text-purple-600 py-4">
                            <Link to='/terms' className='px-5 text-xl font-medium'>Terms of Service</Link>
                            <Link to='/policy' className='px-5 text-xl font-medium'>Privacy Policy</Link>
                        </nav>

                    </div> */}
                    <div className='footer py-10 footer-div'>
                        <div className='mx-auto'>
                            <span className="text-rose-500 text-xl font-bold">Services</span>
                            <Link to='/' className="link link-hover">Branding</Link>
                            <Link to='/' className="link link-hover">Design</Link>
                            <Link to='/' className="link link-hover">Marketing</Link>
                            <Link to='/' className="link link-hover">Advertisement</Link>
                        </div>
                        <div className='mx-auto'>
                            <span className="text-rose-500 text-xl font-bold">Company</span>
                            <Link to='/' className="link link-hover">About us</Link>
                            <Link to='/' className="link link-hover">Contact</Link>
                            <Link to='/' className="link link-hover">Jobs</Link>
                            <Link to='/' className="link link-hover">Press kit</Link>
                        </div>
                        <div className='mx-auto'>
                            <span className="text-rose-500 text-xl font-bold">Legal</span>
                            <Link to='/' className="link link-hover">Terms of use</Link>
                            <Link to='/' className="link link-hover">Privacy policy</Link>
                            <Link to='/' className="link link-hover">Cookie policy</Link>
                        </div>
                    </div>

                    <div className="platform-icons flex flex-row align-middle justify-center my-4 social-tab">
                        <Link to='/google' className='px-4 text-4xl'><FaGoogle></FaGoogle></Link>
                        <Link to='/git' className='px-4 text-4xl'><FaGithubSquare></FaGithubSquare></Link>
                        <Link to='linkedin' className='px-4 text-4xl'><FaLinkedin></FaLinkedin> </Link>
                        <Link to='/insta' className='px-4 text-4xl'><FaInstagram></FaInstagram> </Link>
                        <Link to='/facebook' className='px-4 text-4xl'><FaFacebookSquare></FaFacebookSquare> </Link>
                        <Link to='/wapp' className='px-4 text-4xl'><FaWhatsappSquare></FaWhatsappSquare> </Link>

                    </div>
                    <p className='text-lg  font-bold text-[#4b0f0f] pb-4 mt-20 pb-32 copyright'>Copyright©2022-All right reserved by Nasin A Akash</p>

                </div>
            </section >
        </footer >
    );
};

export default Footer;