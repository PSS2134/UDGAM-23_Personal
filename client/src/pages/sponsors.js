import React from 'react'
import { Button } from '@cred/neopop-web/lib/components';
import './sponsors.css'
import sponsordemo from '../icons/sponsordemo.png'
import Navbar from '../components/Navbar';
import Tata from '../sponsors/TATA.svg';
import lt from '../sponsors/lt.svg';
import gfg from '../sponsors/gfg.svg';
import ghaskhabar from '../sponsors/ghaskhabar.svg';
import INA from '../sponsors/INA.svg';
import INB from '../sponsors/INB.svg';
import jordan from '../sponsors/jordan.svg';
import kota from '../sponsors/kota.svg';
import startuplab from '../sponsors/startuplab.svg';
import technalogy from '../sponsors/technalogy.svg';
import UIV from '../sponsors/UIV.svg';
import venture from '../sponsors/venture.svg';
import whev from '../sponsors/whev.svg';


function Sponsors() {
    return (
        <body class="sponsorpage">
            <Navbar />
            <div class="sponsorbox">
                <h1>Sponsors</h1>
            </div>
            <div class="containersponsorbox">
                <div class="title-sponsor">
                    
                    <img src={Tata} className="tatalogo"></img>
                    <h3>Title Sponsor</h3>
                </div>

                <div class="associate-title">
                    <div class="individual-associate">
                        <img src={lt}></img>
                        <h3>Ecosystem Partner</h3>
                    </div>

                    <div class="individual-associate">
                        <img src={startuplab}></img>
                        <h3>Events Partner</h3>
                    </div>

                    <div class="individual-associate">
                        <img src={gfg}></img>
                        <h3>Campus Ambassador Partner</h3>
                    </div>

                </div>
                <div class="associate-title">
                    <div class="individual-associate">
                        <img src={INA}></img>
                        <h3>Accelerator Partner</h3>
                    </div>
                    <div class="individual-associate">
                        <img src={UIV}></img>
                        <h3>Mentorship Partner</h3>
                    </div>
                </div>

                <div class="partners event-partner">
                    <h3>CAP Partners</h3>
                    <div class="associate-title">
                        <div class="individual-associate">
                            <img src={INB}></img>
                            <h3 className='partners-subtitle'>Learning Partner <br/>CAP</h3>
                        </div>
                        <div class="individual-associate">
                            <img src={technalogy}></img>
                            <h3  className='partners-subtitle'>Knowledge Partner <br/>CAP</h3>
                        </div>

                    </div>
                </div>

                <div class="partners event-partner">
                    <h3>Disrupt Partners</h3>
                    <div class="associate-title">
                        <div class="individual-associate">
                            <img src={whev}></img>
                            <h3  className='partners-subtitle'>Title Sponsor</h3>
                        </div>
                        <div class="individual-associate">
                            <img src={jordan}></img>
                            <h3  className='partners-subtitle'>Law Partner</h3>
                        </div>
                        <div class="individual-associate">
                            <img src={venture}></img>
                            <h3  className='partners-subtitle'>Mentorship Partner</h3>
                        </div>
                    </div>
                </div>

                <div class="partners event-partner">
                    <h3>Media Partners</h3>
                    <div class="associate-title">
                        <div class="individual-associate">
                            <img src={ghaskhabar} className="lastsponsor"></img>
                           
                        </div>
                        <div class="individual-associate">
                            <img src={kota}  className="lastsponsor"></img>
                        </div>

                    </div>
                </div>
                
                <div class="text-button">
                    <h1>want to become our sponsor?</h1>
                    <button>Connect With Us</button>
                </div>
            </div>
        </body>
    );
}

export default Sponsors
