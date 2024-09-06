import React from 'react';
import Vector from '../icons/Vector007.svg'
import Merch from '../components/Merch_Button';
import Vector1 from '../icons/Icon.svg'
import Vector2 from '../icons/arrow.svg'
import Checkout from '../components/Checkout';
import Vector3 from '../icons/udgam.svg';
import Navbar from '../components/Navbar';
import './Registration.css';
import axios from 'axios'
import { useState } from 'react';

function Registration() {
  const [name, setName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [outlook, setOutlook] = useState(null);
  const [rollNo, setRollNo] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (password !== confirmPassword) {
        console.log('passwords do not match');
        return
      }

      const response = await axios.post('http://localhost:8000/register', { name, lastName, email, outlook, rollNo, password, confirmPassword });
      {/* will have to add cookies here later */ }

      const success = response.status === 201;
      if (success) { }
      {/* i will write some logic to navigate to some other page depending upon the flow of the site */ }
    }

    catch (error) {
      console.log(error);
    }

  }
  return (
      <body style={{ height: "150vh" }}>
      <Navbar />
      <div className='register_entire_page'>

        <div className="register_dabba">
          <div className='register-progressbar'>
            <div className='c1_reg'>
              PERSONAL DETAILS
            </div>
            <div className='c2_reg'>
              PAYMENT
            </div>


          </div>
          <form className="registerform" onSubmit={handleSubmit}>
            <h1 className="Pinfo">PERSONAL INFORMATION</h1>
            <p className="H21 info_reg_txt">
              * Indicates required field
            </p>
            <div className='registerform_div'>
              <div className="first_last_flex">
                <input className='wid_text_Field_100' type="text" name="firstname" required={true} placeholder="First name..."
                  onChange={(e) => setName(e.target.value)} />
                <input className='wid_text_Field_100' type="text" name="lastname" placeholder="Last name..." onChange={(e) => setLastName(e.target.value)} />
              </div>
              <br /><br />
              <div className="first_last_flex">

                <input className='wid_text_Field_100' type="email" id='email' name="email" required={true} placeholder="Type your Email..." onchange={(e) => setEmail(e.target.value)} />
              </div>
              <br></br>
              <p className="H21 info_reg_txt">Only for IIT Guwahati Students</p>
              <div className="first_last_flex">
                <input className='wid_text_Field_100' type="email" name="Outlook" id='outlookid' placeholder="Outlook mail id..." onchange={(e) => setOutlook(e.target.value)} />
                <input className='wid_text_Field_100' type="text" name="RollNo" id='rollno' placeholder="Roll no..." onchange={(e) => setRollNo(e.target.value)} />
              </div>
              <br></br>
              <p className="H21 info_reg_txt">Password shoud have at least 8 characters</p>
              <div className="first_last_flex last_field_regg">
                <input className='wid_text_Field_100' type="password" name="CreatePass" placeholder="Create Password" onchange={(e) => setPassword(e.target.value)} />
                <input className='wid_text_Field_100' type="password" name="ConfirmPassword" placeholder="Confirm Password" onchange={(e) => setConfirmPassword(e.target.value)} />
              </div>
            </div>
          </form >
        </div>
        <div className="pass_Card_register">
          {/* the submission design of the form has not decided yet , once it is complete i will continue from it */}

          <p className='delta1'>Accepted Payments</p>
          <div className="vector">
            <img className=" img1" src={Vector} alt="img1" />
            <img className="img1 img2" src={Vector} alt="img2" />
            <img className="img1 img3" src={Vector} alt="img3" />
            <img className="img1 img4" src={Vector} alt="img4" />

          </div>
          <br />
          <div className="card_of_pass_register">
            <img className='cardphoto' src={require("../icons/udgamPassBG.png")} alt="CardBG"></img>
            <img className="udgam7" src={Vector3} />

            <p className="alpha">Udgam pass</p>
            <p className="beta">Total Price -</p>
            <p className="beta beta1">Udgam Pass -</p>
            <p className="beta beta2">Merchkit Addon -</p>
            <p className="beta beta3">Events List - Internfair, Pmx, Fun events  </p>
            <p className="beta beta4">Exclusive Perks - Voiceflow thing, Discount</p>

            <p className="beta beta4 beta5"><br />Coupons</p>

            <p className="gamma">$199</p>
            <p className="gamma1">$199</p>
            <p className="gamma1 gamma2">$199</p>
            <div className="Checkout"><Checkout title="CHECK OUT →" /></div>
          </div>

          {/* <div className="vector">
          <img className=" img1" src={Vector} alt="img1" />
          <img className="img1 img2" src={Vector} alt="img2" />
          <img className="img1 img3" src={Vector} alt="img3" />
          <img className="img1 img4" src={Vector} alt="img4" />

        </div>
        <div className='Merch'><Merch icon={Vector1} title=" Merch kit addon" /></div> */}

        </div>
      </div>
      
  </body>
  )

}

export default Registration;