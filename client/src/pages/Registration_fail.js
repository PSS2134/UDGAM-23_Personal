

import './Registration_fail.css'
import dummyQR from "../icons/dummyQR.png"
import final1 from "../icons/final1.png"
import errorpng from "../icons/Error 1.svg"
import Navbar from '../components/Navbar';
function RegFail() {
  return (
    <body style={{ backgroundImage: "#060213", backgroundSize: "cover", height: "150vh" }}>
       <Navbar />
      <div className='paymentFailEntireBox'>
        <div class="paymentFailBoxLeft">
          <img src={errorpng} />
        </div>
        <div class="paymentFailBoxRight">
          <h1 className='paymentFail'>Payment Failed</h1>
          <div className='tryAgainButton'>
            <div class="butpaymentFail"><button>Try Again</button></div>
            <div class="boxpaymentFail"></div>
          </div>
          <div class="FacedOtherIssueBox">
            <p>Faced any other issue</p>
            <svg width="27" height="10" viewBox="0 0 27 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 4.49997H0.5L0.5 5.49997H1L1 4.49997ZM1 5.49997L16.2 5.49997V4.49997L1 4.49997L1 5.49997ZM13.4032 2C13.4032 3.94784 15.0286 5.5 17 5.5V4.5C15.5508 4.5 14.4032 3.36587 14.4032 2L13.4032 2ZM17 4.5C15.0287 4.5 13.4032 6.05214 13.4032 8H14.4032C14.4032 6.63415 15.5507 5.5 17 5.5V4.5Z" fill="white" />
            </svg>
          </div>
        </div>
      </div>



      <div className='lowerDivFailPAge'>
        <div class="five_paymentFail">

          <p>Bought the ticket and didnt recieve any mail ?<br></br> Type your Email here.</p>
          <div class="row1_paymentFail">
            <input type="email" placeholder="Enter your mail here" />
            <div class="sq_paymentFail"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.99953 11.0005H17.1695L14.2895 8.12047C13.8995 7.73047 13.8995 7.10047 14.2895 6.71047C14.6795 6.32047 15.3095 6.32047 15.6995 6.71047L20.2895 11.3005C20.6795 11.6905 20.6795 12.3205 20.2895 12.7105L15.6995 17.3005C15.3095 17.6905 14.6795 17.6905 14.2895 17.3005C13.8995 16.9105 13.8995 16.2805 14.2895 15.8905L17.1695 13.0005H3.99953C3.44953 13.0005 2.99953 12.5505 2.99953 12.0005C2.99953 11.4505 3.44953 11.0005 3.99953 11.0005Z" fill="#323232" />
            </svg>
            </div>
          </div>
          {/* <div class="boxback_paymentFail"></div> */}

        </div>


        <div className='mailbtnfailParent'>
          <div className="mailbtnfail">
            <svg width="210" height="68" viewBox="0 0 210 68" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_139_1660)">
                <path
                  d="M62.3337 11.334H5.69533L5.66699 56.6673H62.3337V11.334ZM56.667 51.0006H11.3337V22.6673L34.0003 36.834L56.667 22.6673V51.0006ZM34.0003 31.1673L11.3337 17.0007H56.667L34.0003 31.1673Z"
                  fill="#DDF140" />
              </g>
              <g clip-path="url(#clip1_139_1660)">
                <path d="M118.333 28.6673L113 23.334V27.334H93V30.0007H113V34.0007L118.333 28.6673Z"
                  fill="#DDF140" />
                <path d="M91.667 39.3333L97.0003 44.6667V40.6667H117V38H97.0003V34L91.667 39.3333Z"
                  fill="#DDF140" />
              </g>
              <g clip-path="url(#clip2_139_1660)">
                <path
                  d="M176.001 32.0007C182.262 32.0007 187.334 26.929 187.334 20.6673C187.334 14.4057 182.262 9.33398 176.001 9.33398C169.739 9.33398 164.667 14.4057 164.667 20.6673C164.667 26.929 169.739 32.0007 176.001 32.0007ZM176.001 15.0007C179.117 15.0007 181.667 17.5507 181.667 20.6673C181.667 23.784 179.117 26.334 176.001 26.334C172.884 26.334 170.334 23.784 170.334 20.6673C170.334 17.5507 172.884 15.0007 176.001 15.0007ZM176.001 34.834C168.436 34.834 153.334 38.6307 153.334 46.1673V54.6673H198.667V46.1673C198.667 38.6307 183.566 34.834 176.001 34.834ZM193.001 49.0007H159.001V46.1957C159.567 44.1557 168.351 40.5007 176.001 40.5007C183.651 40.5007 192.434 44.1557 193.001 46.1673V49.0007Z"
                  fill="#DDF140" />
              </g>
              <defs>
                <clipPath id="clip0_139_1660">
                  <rect width="68" height="68" fill="white" />
                </clipPath>
                <clipPath id="clip1_139_1660">
                  <rect width="32" height="32" fill="white" transform="translate(89 18)" />
                </clipPath>
                <clipPath id="clip2_139_1660">
                  <rect width="68" height="68" fill="white" transform="translate(142)" />
                </clipPath>
              </defs>
            </svg>

            <p>Your Mail ID will be your user profile and will be used for further communication</p>

          </div>
        </div>
      </div>



    </body>
  );
}

export default RegFail;
