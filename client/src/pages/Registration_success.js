

import './Registration_success.css'
import dummyQR from "../icons/dummyQR.png"
import final1 from "../icons/final1.png"
import Navbar from '../components/Navbar';
function RegSuc() {
  return (
    <body style={{ height: "150vh" }}>
       <Navbar />
      <div className="mainbtnsuccess">
        <div className="col1btnsuccess">
          <div className="passbtnsuccess">
            <p className="para1btnsuccess">Your Udgam Pass is Ready, You will recieve a mail confirming the payment and your
              tickets will be attached along !</p>
            <div className="secondbtnsuccess">
              <button className="fstbtnsuccess">
                Buy our cool Merch
              </button>
              <button className="scndbtnsuccess">
                Didn't recive any mail?
              </button>


            </div>
            <button className="thrdbtnsuccess">
              Face other issue
              <svg width="30" height="10" viewBox="0 0 30 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M13.4375 4.49997L12.9375 4.49997L12.9375 5.49997L13.4375 5.49997L13.4375 4.49997ZM13.4375 5.49997L28.6375 5.49997L28.6375 4.49997L13.4375 4.49997L13.4375 5.49997ZM25.8407 2C25.8407 3.94784 27.4661 5.5 29.4375 5.5L29.4375 4.5C27.9883 4.5 26.8407 3.36587 26.8407 2L25.8407 2ZM29.4375 4.5C27.4662 4.5 25.8407 6.05214 25.8407 8H26.8407C26.8407 6.63415 27.9882 5.5 29.4375 5.5V4.5Z"
                  fill="white" />
              </svg>

            </button>
            <div className='mailbtnsuccessParent'>
              <div className="mailbtnsuccess">
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

        </div>




        <div className="col2btnsuccess">
          <img src={final1} ALT="ll" style={{ width: "100%" }} />
          <div className="name_passsuccess">Divyesh Vankar</div>
          <div className="mailId_passsuccess">divyeshvankar.com</div>
          <img className="qr_passsuccess" src={dummyQR} alt="" />




        </div>
      </div>
    </body>
  );
}

export default RegSuc;
