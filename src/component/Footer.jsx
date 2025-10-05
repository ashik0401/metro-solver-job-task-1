import React from 'react';
import { FaArrowDown } from 'react-icons/fa';
import { RiGeminiLine } from 'react-icons/ri';
import uk from '../assets/uk.png';
import { IoCallOutline, IoLocationOutline } from 'react-icons/io5';
import { CiMail } from 'react-icons/ci';
import googleLogo from '../assets/g.png';
import googleMarketingLogo from '../assets/google-marketing-platform.png';
import microsoftLogo from '../assets/kisspng-microsoft-corporation-microsoft-software-assurance-26-microsoft-1713948935718.webp';
import amazonLogo from '../assets/images (4).png';
import metaLogo from '../assets/images (5).jpg';
import awsLogo from '../assets/8968d0640f2c4053333ce7334314ef83.webp';
import tiktokLogo from '../assets/transparent-social-media-1713858561643.webp';


const Footer = () => {
    return (
        <div className='md:w-9/12 mx-auto pb-10 p-5'>
            <div className='bg-gray-500/10 p-6 md:p-10 rounded-xl'>
                <div className='flex flex-col md:flex-row items-center md:justify-center gap-4 md:gap-6 mb-8'>
                    <img
                        src='/Materiel/Frame_1.gif'
                        alt=""
                        className='w-20 h-20 md:w-24 md:h-24'
                    />
                    <div className='text-center md:text-left'>
                        <h2 className='font-bold text-xl md:text-2xl'>METRO SOLVER</h2>
                        <p className='font-extralight text-sm md:text-base'>your it partner</p>
                    </div>
                </div>
                <div className='flex flex-col lg:flex-row justify-around gap-6 md:gap-10 items-center'>
                    <div className='text-center lg:text-left'>
                        <h2 className='font-bold text-2xl md:text-3xl'>Subscribe to Our Newsletter</h2>
                        <p className='text-sm md:text-base font-extralight mt-2'>join the 25000+ client, in our company</p>
                    </div>
                    <div className='relative w-full sm:w-auto'>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder='Enter Your Email..'
                            className='bg-white text-black w-full sm:w-96 rounded-full px-5 py-3 pr-32 outline-none'
                        />
                        <button
                            className="absolute right-1 top-1/2 -translate-y-1/2 px-6 py-2 rounded-full text-white border border-white bg-gradient-to-b from-[#6331F1] via-[#6D43E4] to-[#9F63FF] transition-all flex items-center gap-2 cursor-pointer"
                        >
                            <RiGeminiLine className='text-lg' />
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>

            <footer className="footer sm:footer-horizontal text-neutral-content py-10">
                <nav className='space-y-3'>
                    <h2 className='text-2xl font-semibold'>Got Question? <br /> Call us!</h2>
                    <div className='flex gap-2 items-center'>
                        <IoLocationOutline size={25} />
                        <div>
                            <span>Head office: Merto Solver Limited</span><br />
                            <span>Grantham Road, London E12</span><br />
                            <span>5LX, United Kingdom</span>
                        </div>
                    </div>
                    <span className='flex gap-2 items-center'>
                        <IoCallOutline size={25} />
                        +447936455446
                    </span>
                    <span className='flex gap-2 items-center'>
                        <CiMail size={25} />
                        official@metrosolver.com
                    </span>
                    <div>
                        <h3 className='text-xl'>Country Currency</h3>
                        <div className="mt-5 rounded-full p-[1px] bg-gradient-to-r from-[#C16EFD] to-[#FFFFFF]">
                            <button className="px-6 py-2 rounded-full cursor-pointer text-white bg-gradient-to-b from-[#41295A] to-[#2F0743] w-full flex gap-3 items-center">
                                <img className='w-5 h-5 rounded-full' src={uk} alt="" />
                                GBP - British Pound <FaArrowDown />
                            </button>
                        </div>
                    </div>
                </nav>
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Social</h6>
                    <a className="link link-hover">Twitter</a>
                    <a className="link link-hover">Instagram</a>
                    <a className="link link-hover">Facebook</a>
                    <a className="link link-hover">GitHub</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Explore</h6>
                    <a className="link link-hover">Features</a>
                    <a className="link link-hover">Enterprise</a>
                    <a className="link link-hover">Security</a>
                    <a className="link link-hover">Pricing</a>
                </nav>
            </footer>

            <h2 className='text-xl text-gray-500'>Our Future Partners</h2>
            <div className='flex flex-wrap justify-center items-center gap-10 mt-10'>
                <div className='flex items-center gap-2'>
                    <img src={metaLogo} alt="Google" className='w-12 h-12 object-contain rounded-full' />
                    <div>
                        <span className='text-3xl font-semibold'>Meta</span>
                        <br />
                        <span>Partner</span></div>               </div>
                <div className='flex items-center gap-2'>
                    <img src={googleLogo} alt="Google" className='w-12 h-12 object-contain rounded-full' />
                    <div>
                        <span className='text-3xl font-semibold'>Google</span><br />
                        <span>Partner</span>
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <img src={googleMarketingLogo} alt="Google Marketing Platform" className='w-12 h-12 object-contain rounded-full' />
                    <div>
                        <span className='text-3xl font-semibold'>Google Marketing Platform</span><br />
                        <span>Partner</span>
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <img src={microsoftLogo} alt="Microsoft" className='w-12 h-12 object-contain rounded-full' />
                    <div>
                        <span className='text-3xl font-semibold'>Microsoft LQE</span><br />
                        <span>PartnerPartner</span>
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <img src={amazonLogo} alt="Amazon" className='w-12 h-12 object-contain rounded-full' />
                    <div>
                        <span className='text-3xl font-semibold'>Amazon</span> <br />
                        <span>partner</span>
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <img src={awsLogo} alt="Amazon" className='w-12 h-12 object-contain rounded-full' />
                    <div>
                        <span className='text-3xl font-semibold'>AWS</span> <br />
                        <span>partner</span>
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <img src={tiktokLogo} alt="TikTok" className='w-12 h-12 object-contain rounded-full' />
                    <div>
                        <span className='text-3xl font-semibold'>TikTok</span><br />
                        <span>Partner</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
