import React from 'react'
import "./hamburger.css"
import { Button } from '@cred/neopop-web/lib/components';
import "./Home/navbar_landing.css";
import Icon from "../icons/icon.png"
import Buy from "../icons/Ticket.png"

import Navbar from './Navbar';
function Hamburger() {
    return (
        <>

            <body className="humburg">

                <div className="row biro">
                    <div className="col-lg-6 col-sm-12">
                        <div className="gon">
                        <div> <a href="/events" className="nav-item humnav">Events </a></div>
                            <div> <a href="/events" className="nav-item humnav">Schedule </a></div>
                            <div><a href="/#merch" className="nav-item humnav">merch </a></div>
                        </div>
                        <div className="CoC">Lost the pass you bought? We got you covered.</div>
                        <div><br /><input className="input_pass" placeholder="Enter Your Mail..." /></div>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <div className="mr-3 nav-right">
                            <div className="netero" >
                                <p className="killus humnav"><a href="/contactus" className='humnav' >Contact Us</a></p>
                                <p className="hisoka humnav"  ><a href="/speakers" className='humnav'>Speakers</a></p>
                                <p className="kurapika humnav" ><a href="/team" className='humnav'>Our Team</a></p>
                                <p className="leo humnav"><a href="/sponsors" className='humnav' >Sponsors</a></p>
                            </div>
                            <p className="Among_Us humnav">
                                About Us
                            </p>
                            <div className="brrr">
            <div><Button
              variant="primary"
              kind="elevated"
              size="big"
              colorMode="light"
              colorConfig={{ backgroundColor: "#F0E266", borderColor: "black", edgeColors: { right: "#736B1F", bottom: "#736B1F" } }}
              spacingConfig={{  }}
              onClick={() => {
                console.log("I'm clicked");
              }}
            >
             <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_51_181)">
              <path d="M0 3.01953C0 2.2912 0.254919 1.69034 0.764734 1.21695C1.27455 0.743532 1.93733 0.506836 2.75304 0.506836C3.5542 0.506836 4.20239 0.739883 4.69765 1.20602C5.20747 1.68671 5.46239 2.31305 5.46239 3.08508C5.46239 3.78427 5.21477 4.36691 4.7195 4.83305C4.20969 5.31374 3.53963 5.55408 2.70934 5.55408H2.6875C1.88634 5.55408 1.23815 5.31374 0.742885 4.83305C0.247621 4.35236 0 3.74785 0 3.01953ZM0.284044 22.1379V7.54239H5.13465V22.1379H0.284044ZM7.82214 22.1379H12.6727V13.988C12.6727 13.4782 12.731 13.0849 12.8475 12.8081C13.0515 12.3129 13.361 11.8941 13.7761 11.5518C14.1913 11.2095 14.712 11.0383 15.3384 11.0383C16.9698 11.0383 17.7855 12.1381 17.7855 14.3376V22.1379H22.6361V13.7695C22.6361 11.6137 22.1263 9.97862 21.1067 8.86429C20.087 7.74996 18.7396 7.1928 17.0645 7.1928C15.1854 7.1928 13.7215 8.00123 12.6727 9.6181V9.6618H12.6509L12.6727 9.6181V7.54239H7.82214C7.85127 8.00851 7.86584 9.45785 7.86584 11.8905C7.86584 14.323 7.85127 17.7388 7.82214 22.1379Z" fill="#1A074E"/>
              </g>
              <defs>
              <clipPath id="clip0_51_181">
              <rect width="22.6361" height="22.6361" fill="white"/>
              </clipPath>
              </defs>
              </svg>
              

              
            </Button>
            </div>
            <div><Button
              variant="primary"
              kind="elevated"
              size="big"
              colorMode="light"
              colorConfig={{ backgroundColor: "#F0E266", borderColor: "black", edgeColors: { right: "#736B1F", bottom: "#736B1F" } }}
              spacingConfig={{  }}
              onClick={() => {
                console.log("I'm clicked");
              }}
            >
             <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_51_181)">
              <path d="M0 3.01953C0 2.2912 0.254919 1.69034 0.764734 1.21695C1.27455 0.743532 1.93733 0.506836 2.75304 0.506836C3.5542 0.506836 4.20239 0.739883 4.69765 1.20602C5.20747 1.68671 5.46239 2.31305 5.46239 3.08508C5.46239 3.78427 5.21477 4.36691 4.7195 4.83305C4.20969 5.31374 3.53963 5.55408 2.70934 5.55408H2.6875C1.88634 5.55408 1.23815 5.31374 0.742885 4.83305C0.247621 4.35236 0 3.74785 0 3.01953ZM0.284044 22.1379V7.54239H5.13465V22.1379H0.284044ZM7.82214 22.1379H12.6727V13.988C12.6727 13.4782 12.731 13.0849 12.8475 12.8081C13.0515 12.3129 13.361 11.8941 13.7761 11.5518C14.1913 11.2095 14.712 11.0383 15.3384 11.0383C16.9698 11.0383 17.7855 12.1381 17.7855 14.3376V22.1379H22.6361V13.7695C22.6361 11.6137 22.1263 9.97862 21.1067 8.86429C20.087 7.74996 18.7396 7.1928 17.0645 7.1928C15.1854 7.1928 13.7215 8.00123 12.6727 9.6181V9.6618H12.6509L12.6727 9.6181V7.54239H7.82214C7.85127 8.00851 7.86584 9.45785 7.86584 11.8905C7.86584 14.323 7.85127 17.7388 7.82214 22.1379Z" fill="#1A074E"/>
              </g>
              <defs>
              <clipPath id="clip0_51_181">
              <rect width="22.6361" height="22.6361" fill="white"/>
              </clipPath>
              </defs>
              </svg>
              

              
            </Button>
            </div>
            <div><Button
              variant="primary"
              kind="elevated"
              size="big"
              colorMode="light"
              colorConfig={{ backgroundColor: "#F0E266", borderColor: "black", edgeColors: { right: "#736B1F", bottom: "#736B1F" } }}
              spacingConfig={{  }}
              onClick={() => {
                console.log("I'm clicked");
              }}
            >
             <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_51_181)">
              <path d="M0 3.01953C0 2.2912 0.254919 1.69034 0.764734 1.21695C1.27455 0.743532 1.93733 0.506836 2.75304 0.506836C3.5542 0.506836 4.20239 0.739883 4.69765 1.20602C5.20747 1.68671 5.46239 2.31305 5.46239 3.08508C5.46239 3.78427 5.21477 4.36691 4.7195 4.83305C4.20969 5.31374 3.53963 5.55408 2.70934 5.55408H2.6875C1.88634 5.55408 1.23815 5.31374 0.742885 4.83305C0.247621 4.35236 0 3.74785 0 3.01953ZM0.284044 22.1379V7.54239H5.13465V22.1379H0.284044ZM7.82214 22.1379H12.6727V13.988C12.6727 13.4782 12.731 13.0849 12.8475 12.8081C13.0515 12.3129 13.361 11.8941 13.7761 11.5518C14.1913 11.2095 14.712 11.0383 15.3384 11.0383C16.9698 11.0383 17.7855 12.1381 17.7855 14.3376V22.1379H22.6361V13.7695C22.6361 11.6137 22.1263 9.97862 21.1067 8.86429C20.087 7.74996 18.7396 7.1928 17.0645 7.1928C15.1854 7.1928 13.7215 8.00123 12.6727 9.6181V9.6618H12.6509L12.6727 9.6181V7.54239H7.82214C7.85127 8.00851 7.86584 9.45785 7.86584 11.8905C7.86584 14.323 7.85127 17.7388 7.82214 22.1379Z" fill="#1A074E"/>
              </g>
              <defs>
              <clipPath id="clip0_51_181">
              <rect width="22.6361" height="22.6361" fill="white"/>
              </clipPath>
              </defs>
              </svg>
              

              
            </Button>
            </div>
            <div><Button
              variant="primary"
              kind="elevated"
              size="big"
              colorMode="light"
              colorConfig={{ backgroundColor: "#F0E266", borderColor: "black", edgeColors: { right: "#736B1F", bottom: "#736B1F" } }}
              spacingConfig={{  }}
              onClick={() => {
                console.log("I'm clicked");
              }}
            >
             <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_51_181)">
              <path d="M0 3.01953C0 2.2912 0.254919 1.69034 0.764734 1.21695C1.27455 0.743532 1.93733 0.506836 2.75304 0.506836C3.5542 0.506836 4.20239 0.739883 4.69765 1.20602C5.20747 1.68671 5.46239 2.31305 5.46239 3.08508C5.46239 3.78427 5.21477 4.36691 4.7195 4.83305C4.20969 5.31374 3.53963 5.55408 2.70934 5.55408H2.6875C1.88634 5.55408 1.23815 5.31374 0.742885 4.83305C0.247621 4.35236 0 3.74785 0 3.01953ZM0.284044 22.1379V7.54239H5.13465V22.1379H0.284044ZM7.82214 22.1379H12.6727V13.988C12.6727 13.4782 12.731 13.0849 12.8475 12.8081C13.0515 12.3129 13.361 11.8941 13.7761 11.5518C14.1913 11.2095 14.712 11.0383 15.3384 11.0383C16.9698 11.0383 17.7855 12.1381 17.7855 14.3376V22.1379H22.6361V13.7695C22.6361 11.6137 22.1263 9.97862 21.1067 8.86429C20.087 7.74996 18.7396 7.1928 17.0645 7.1928C15.1854 7.1928 13.7215 8.00123 12.6727 9.6181V9.6618H12.6509L12.6727 9.6181V7.54239H7.82214C7.85127 8.00851 7.86584 9.45785 7.86584 11.8905C7.86584 14.323 7.85127 17.7388 7.82214 22.1379Z" fill="#1A074E"/>
              </g>
              <defs>
              <clipPath id="clip0_51_181">
              <rect width="22.6361" height="22.6361" fill="white"/>
              </clipPath>
              </defs>
              </svg>
              

              
            </Button>
            </div>
            </div>
                        </div>
                    </div>
                </div>
            </body>
        </>
    );
}

export default Hamburger
