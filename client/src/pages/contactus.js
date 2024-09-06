import Navbar from "../components/Navbar";
import "./contactus.css"
import { Button } from '@cred/neopop-web/lib/components';
function Contactus() {
  return (
    <>
      <Navbar />
      {/* Anurag code */}
      <body className="contact_us">

        <div className="row euro">
          <div className="col-lg-8 col-sm-12">
            <div className="container-fluid mt-3 boat">
              <div className="hello">Contact Us </div>
              <div className="names" >
                <input type="text" className="first_name" placeholder="First name..." />
                <input type="text" className="last_name" placeholder="Last name..." />
              </div>
              <p className="email_input">
                <input type="email" className="mail_input" placeholder="Type your mail..." />
              </p>
              <form action="#" className="son">
                <label for="lang" className="H21">Reason for Contacting</label>
                <select name="languages" id="lang" className="levi">
                  <option value="javascript">Sponsorship</option>
                  <option value="php">NO Reason</option>
                  <option value="java">Intern lagwa do</option>

                </select>

              </form>
              <div className="aot">
                <textarea type="text" className="Eren" placeholder="Any message for us?..." />
              </div>
              <br />
              <div className="submit_contactus">
              <Button
            variant="primary"
            kind="elevated"
            size="big"
            colorMode="light"
            colorConfig={{backgroundColor:"#D4F34A",borderColor:"#000000",edgeColors:{right:"#FC97D9",bottom:"#FC97D9"}}}
            onClick={() => {
                console.log("I'm clicked");
            }}
        >
            <div style={{color:"black"}}>SUBMIT</div>
    </Button>

              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-12">
            <div className="side_box">
            <svg width="346" height="276" viewBox="0 0 346 276" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M338.927 78.7631L334.583 84.0862C290.859 137.609 247.136 191.144 203.413 244.692L46.1402 176.908L41.6655 174.979L179.73 25.3071C232.803 43.1341 285.869 60.9528 338.927 78.7631Z" fill="#EF4570" stroke="#231F20" stroke-width="0.57" stroke-miterlimit="10"/>
<path d="M338.927 85.5398L203.413 251.469C149.497 228.223 95.5815 204.985 41.6655 181.756L46.1402 176.908L203.413 244.693C247.136 191.145 290.859 137.61 334.583 84.0869C336.035 84.5128 337.475 85.0388 338.927 85.5398Z" fill="#AA2949" stroke="#010101" stroke-width="0.28" stroke-miterlimit="10"/>
<path d="M206.861 274.953L45.113 205.239L41.6655 174.979L83.9915 193.216L203.413 244.693L206.861 274.953Z" fill="#AA2949" stroke="#010101" stroke-width="0.57" stroke-miterlimit="10"/>
<path d="M345.208 133.772L206.861 274.952C205.704 264.857 204.555 254.771 203.413 244.692C247.884 190.084 292.355 135.48 336.826 80.8799L338.892 78.7632L345.208 133.772Z" fill="#AA2949" stroke="#010101" stroke-width="0.57" stroke-miterlimit="10"/>
<path d="M100.709 208.508L50.1543 188.093L30.5675 161.114L85.9632 183.033L100.709 208.508Z" fill="#B42F50" stroke="#010101" stroke-width="0.57" stroke-miterlimit="10"/>
<path d="M254.051 42.2536C248.147 49.6605 241.032 55.8764 233.047 60.6025C227.451 63.6742 221.71 66.4375 215.845 68.8814C212.894 70.1339 210.025 71.2987 207.262 72.3382L201.595 62.5438L199.588 59.087C189.695 66.2332 180.232 74.0262 171.253 82.4207C170.32 83.2975 169.387 84.1742 168.455 85.076C152.759 100.152 138.639 116.978 126.341 135.263L133.425 147.587C131.381 157.663 128.081 167.405 123.614 176.557C117.803 188.549 110.05 199.364 100.709 208.508L85.9631 183.083C101.726 144.52 124.567 109.671 153.153 80.5671C155.113 78.5506 157.109 76.5842 159.163 74.6178L161.973 71.95C187.396 48.1942 216.514 29.3017 248.03 16.1143L254.051 42.2536Z" fill="#AA2949" stroke="#010101" stroke-width="0.28" stroke-miterlimit="10"/>
<path d="M254.051 42.2536C248.147 49.6605 241.032 55.8764 233.047 60.6025C227.451 63.6742 221.71 66.4375 215.845 68.8814C212.894 70.1339 210.025 71.2987 207.262 72.3382L201.595 62.5438L199.588 59.087C189.695 66.2332 180.232 74.0262 171.253 82.4207C170.32 83.2975 169.387 84.1742 168.455 85.076C152.759 100.152 138.639 116.978 126.341 135.263L133.425 147.587C131.381 157.663 128.081 167.405 123.614 176.557C117.803 188.549 110.05 199.364 100.709 208.508L85.9631 183.083C101.726 144.52 124.567 109.671 153.153 80.5671C155.113 78.5506 157.109 76.5842 159.163 74.6178L161.973 71.95C187.396 48.1942 216.514 29.3017 248.03 16.1143L254.051 42.2536Z" fill="#AA2949" stroke="#010101" stroke-width="0.57" stroke-miterlimit="10"/>
<path d="M248.03 16.0641C216.52 29.2647 187.404 48.1559 161.973 71.8998L159.163 74.5676C157.109 76.5465 155.113 78.5129 153.153 80.5169C124.565 109.62 101.725 144.469 85.9632 183.033C79.1627 180.344 72.3583 177.639 65.5499 174.917L30.5675 161.114C62.9553 87.4647 121.048 30.0445 192.587 0.97168L248.03 16.0641Z" fill="#EF4570" stroke="#231F20" stroke-width="0.57" stroke-miterlimit="10"/>
<path d="M68.7967 186.226C67.5078 190.659 65.5371 194.836 62.9643 198.588C61.1697 201.193 49.7057 216.636 32.0197 215.86C22.5037 215.446 15.2192 209.485 11.1224 205.201C7.07277 196.634 2.25575 182.995 4.28646 167.251C6.42342 150.63 14.3691 145.783 34.0268 118.003C54.2512 89.4341 73.6963 59.362 84.9714 56.6316C88.6816 55.6396 92.5929 55.9247 96.1403 57.4457C97.5274 58.1711 98.7856 59.1457 99.8593 60.3264" stroke="#FFCC42" stroke-width="5.67" stroke-linejoin="round"/>
<path d="M225.137 110.539L205.975 103.024L205.373 98.4277L208.667 99.7178L224.535 105.968L225.137 110.539Z" fill="#FFCC42" stroke="#231F20" stroke-width="0.57" stroke-linejoin="round"/>
<path d="M238.986 93.5929L225.137 110.539L224.535 105.967L235.68 92.3154L238.384 89.0088L238.986 93.5929Z" fill="#FFCC42" stroke="#231F20" stroke-width="0.57" stroke-linejoin="round"/>
<path d="M238.384 89.0084L235.68 92.315L224.535 105.967L208.667 99.7172L205.373 98.4271L219.175 81.5562L238.384 89.0084Z" fill="#FEDB7C" stroke="#231F20" stroke-width="0.57" stroke-linejoin="round"/>
<path d="M250.993 120.997L231.831 113.47L231.229 108.886L234.523 110.176L250.391 116.413L250.993 120.997Z" fill="#FFCC42" stroke="#231F20" stroke-width="0.57" stroke-linejoin="round"/>
<path d="M264.842 104.051L250.993 120.997L250.391 116.413L261.536 102.773L264.24 99.4668L264.842 104.051Z" fill="#FFCC42" stroke="#231F20" stroke-width="0.57" stroke-linejoin="round"/>
<path d="M264.24 99.4672L261.536 102.774L250.391 116.413L234.523 110.176L231.229 108.886L245.031 92.0024L264.24 99.4672Z" fill="#FEDB7C" stroke="#231F20" stroke-width="0.57" stroke-linejoin="round"/>
<path d="M277.251 131.869L258.089 124.341L257.487 119.757L260.781 121.047L276.648 127.285L277.251 131.869Z" fill="#FFCC42" stroke="#231F20" stroke-width="0.57" stroke-linejoin="round"/>
<path d="M291.1 114.923L277.251 131.869L276.649 127.285L287.794 113.645L290.497 110.339L291.1 114.923Z" fill="#FFCC42" stroke="#231F20" stroke-width="0.57" stroke-linejoin="round"/>
<path d="M290.497 110.339L287.794 113.645L276.648 127.285L260.781 121.048L257.487 119.757L271.288 102.874L290.497 110.339Z" fill="#FEDB7C" stroke="#231F20" stroke-width="0.57" stroke-linejoin="round"/>
<path d="M232.705 143.642L213.543 136.115L212.941 131.531L216.235 132.821L232.103 139.058L232.705 143.642Z" fill="#FFCC42" stroke="#231F20" stroke-width="0.57" stroke-linejoin="round"/>
<path d="M246.554 126.696L232.705 143.642L232.103 139.058L243.248 125.418L245.952 122.112L246.554 126.696Z" fill="#FFCC42" stroke="#231F20" stroke-width="0.57" stroke-linejoin="round"/>
<path d="M245.952 122.112L243.248 125.419L232.103 139.058L216.235 132.821L212.941 131.531L226.743 114.647L245.952 122.112Z" fill="#FEDB7C" stroke="#231F20" stroke-width="0.57" stroke-linejoin="round"/>
<path d="M258.962 154.514L239.801 146.986L239.198 142.402L242.492 143.692L258.36 149.93L258.962 154.514Z" fill="#FFCC42" stroke="#231F20" stroke-width="0.57" stroke-linejoin="round"/>
<path d="M272.811 137.567L258.962 154.514L258.36 149.93L269.506 136.29L272.209 132.983L272.811 137.567Z" fill="#FFCC42" stroke="#231F20" stroke-width="0.57" stroke-linejoin="round"/>
<path d="M272.209 132.983L269.506 136.29L258.36 149.929L242.492 143.692L239.198 142.402L253 125.519L272.209 132.983Z" fill="#FEDB7C" stroke="#231F20" stroke-width="0.57" stroke-linejoin="round"/>
<path d="M240.202 176.858L221.04 169.331L220.438 164.747L223.732 166.037L239.6 172.274L240.202 176.858Z" fill="#FFCC42" stroke="#231F20" stroke-width="0.57" stroke-linejoin="round"/>
<path d="M254.051 159.912L240.202 176.858L239.6 172.274L250.745 158.635L253.449 155.328L254.051 159.912Z" fill="#FFCC42" stroke="#231F20" stroke-width="0.57" stroke-linejoin="round"/>
<path d="M253.449 155.328L250.745 158.635L239.6 172.274L223.732 166.037L220.438 164.747L234.24 147.863L253.449 155.328Z" fill="#FEDB7C" stroke="#231F20" stroke-width="0.57" stroke-linejoin="round"/>
<path d="M206.589 133.196L187.427 125.669L186.825 121.084L190.119 122.375L205.987 128.612L206.589 133.196Z" fill="#FFCC42" stroke="#231F20" stroke-width="0.57" stroke-linejoin="round"/>
<path d="M220.438 116.25L206.589 133.196L205.987 128.612L217.132 114.973L219.836 111.666L220.438 116.25Z" fill="#FFCC42" stroke="#231F20" stroke-width="0.57" stroke-linejoin="round"/>
<path d="M219.836 111.666L217.132 114.973L205.987 128.612L190.119 122.375L186.825 121.085L200.627 104.201L219.836 111.666Z" fill="#FEDB7C" stroke="#231F20" stroke-width="0.57" stroke-linejoin="round"/>
<path d="M188.655 155.365L169.494 147.838L168.891 143.253L172.185 144.543L188.053 150.781L188.655 155.365Z" fill="#FFCC42" stroke="#231F20" stroke-width="0.57" stroke-linejoin="round"/>
<path d="M202.504 138.419L188.655 155.365L188.053 150.781L199.198 137.142L201.902 133.835L202.504 138.419Z" fill="#FFCC42" stroke="#231F20" stroke-width="0.57" stroke-linejoin="round"/>
<path d="M201.902 133.835L199.199 137.141L188.053 150.781L172.185 144.544L168.891 143.254L182.693 126.37L201.902 133.835Z" fill="#FEDB7C" stroke="#231F20" stroke-width="0.57" stroke-linejoin="round"/>
<path d="M213.225 166.174L194.063 158.647L193.461 154.062L196.755 155.353L212.622 161.59L213.225 166.174Z" fill="#FFCC42" stroke="#231F20" stroke-width="0.57" stroke-linejoin="round"/>
<path d="M227.073 149.228L213.224 166.174L212.622 161.59L223.768 147.951L226.471 144.644L227.073 149.228Z" fill="#FFCC42" stroke="#231F20" stroke-width="0.57" stroke-linejoin="round"/>
<path d="M226.471 144.644L223.768 147.951L212.622 161.59L196.755 155.353L193.461 154.063L207.262 137.179L226.471 144.644Z" fill="#FEDB7C" stroke="#231F20" stroke-width="0.57" stroke-linejoin="round"/>
<path d="M196.188 188.556L177.014 181.028L176.412 176.444L179.706 177.734L195.574 183.972L196.188 188.556Z" fill="#FFCC42" stroke="#231F20" stroke-width="0.57" stroke-linejoin="round"/>
<path d="M210.025 171.61L196.188 188.556L195.574 183.972L206.731 170.332L209.435 167.026L210.025 171.61Z" fill="#FFCC42" stroke="#231F20" stroke-width="0.57" stroke-linejoin="round"/>
<path d="M209.435 167.026L206.731 170.333L195.574 183.972L179.706 177.735L176.412 176.445L190.214 159.562L209.435 167.026Z" fill="#FEDB7C" stroke="#231F20" stroke-width="0.57" stroke-linejoin="round"/>
<path d="M169.8 178.185L150.627 170.658L150.036 166.074L153.319 167.364L169.186 173.601L169.8 178.185Z" fill="#FFCC42" stroke="#231F20" stroke-width="0.57" stroke-linejoin="round"/>
<path d="M183.649 161.239L169.8 178.185L169.187 173.601L180.332 159.962L183.047 156.655L183.649 161.239Z" fill="#FFCC42" stroke="#231F20" stroke-width="0.57" stroke-linejoin="round"/>
<path d="M183.047 156.655L180.332 159.962L169.186 173.601L153.319 167.364L150.036 166.074L163.838 149.19L183.047 156.655Z" fill="#FEDB7C" stroke="#231F20" stroke-width="0.57" stroke-linejoin="round"/>
<path d="M221.914 199.503L202.752 191.976L202.15 187.392L205.444 188.682L221.312 194.919L221.914 199.503Z" fill="#FFCC42" stroke="#231F20" stroke-width="0.57" stroke-linejoin="round"/>
<path d="M235.763 182.557L221.914 199.503L221.312 194.919L232.457 181.279L235.161 177.973L235.763 182.557Z" fill="#FFCC42" stroke="#231F20" stroke-width="0.57" stroke-linejoin="round"/>
<path d="M235.161 177.973L232.457 181.279L221.312 194.919L205.444 188.681L202.15 187.391L215.952 170.508L235.161 177.973Z" fill="#FEDB7C" stroke="#231F20" stroke-width="0.57" stroke-linejoin="round"/>
<path d="M144.865 26.7729L144.299 88.9838C122.174 113.524 103.823 141.601 89.9183 172.186C90.7054 138.227 91.4925 104.268 92.2796 70.3093C108.05 53.5531 125.712 38.93 144.865 26.7729Z" fill="white"/>
</svg>

            </div>
          </div>
        </div>

      </body>
    </>

  );
}

export default Contactus;
