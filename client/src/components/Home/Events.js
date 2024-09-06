import React from 'react';
import udgamLogoPink from "../../icons/udgamLogoPink.svg";
import Vector from "../../icons/Vector.svg";
import Vector2 from "../../icons/Vector2.png";
import check from "../../icons/check.png";
import live from "../../icons/live.png";
import view from "../../icons/view.png";
import barcode from "../../icons/barcode.svg";
import Vector3 from "../../icons/Vector3.svg";
import "./Events.css"; import { Link } from 'react-router-dom';
import { Button } from '@cred/neopop-web/lib/components';
function Events() {
    const renderer = ({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
          // Render a completed state
          return <span>Registration closed</span>;
        } else {
          // Render a countdown
          return <span>{days} days: {hours} hr: {minutes} min</span>;
        }
      };
    return (

        <div id="containerevent" >
            <div id="up">
                <div id="heading">
                    <p>WHY AM I HERE?</p>
                </div>
                <div id="moreEvents">
                    <Link to={"/events"} params={{ event: 1 }}>
                        <button className='topbutevent' >More Events</button>
                    </Link>

                </div>
            </div>
            <div id="down">
                <div id="events">
                    <div className="containerevent">
                        <div className="count">
                            <p>1</p>
                        </div>
                        <div className="content2">
                            <div className="heading">
                                <p>INTERNFAIR</p>
                                <div className="check">
                                    <img src={check} alt="" />
                                </div>
                            </div>
                            <div className="text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita facere, sequi ut suscipit officia, corporis culpa nam animi repellat quia doloribus ipsa consequuntur nesciunt iusto ipsam inventore dolorum numquam aspernatur.
                            </div>
                            <div className="register">
                                <button className="reg">
                                    Register
                                    <img src={Vector2} alt="" />
                                </button>
                                <button className="live1">
                                    <img src={live} alt="" />
                                    ends in 03:09:54
                                </button>
                            </div>

                        </div>
                    </div>
                    <div className="containerevent">
                        <div className="count">
                            <p>1</p>
                        </div>
                        <div className="content2">
                            <div className="heading">
                                <p>INTERNFAIR</p>
                                <div className="check">
                                    <img src={check} alt="" />
                                </div>
                            </div>
                            <div className="text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita facere, sequi ut suscipit officia, corporis culpa nam animi repellat quia doloribus ipsa consequuntur nesciunt iusto ipsam inventore dolorum numquam aspernatur.
                            </div>
                            <div className="register">
                                <button className="reg">
                                    Register
                                    <img src={Vector2} alt="" color="#3A10AD" />
                                </button>
                                <button className="live1">
                                    <img src={live} alt="" />
                                    ends in 03:09:54
                                </button>
                            </div>

                        </div>
                    </div>
                    <div className="containerevent">
                        <div className="count">
                            <p>1</p>
                        </div>
                        <div className="content2">
                            <div className="heading">
                                <p>INTERNFAIR</p>
                                <div className="check">
                                    <img src={check} alt="" />
                                </div>
                            </div>
                            <div className="text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita facere, sequi ut suscipit officia, corporis culpa nam animi repellat quia doloribus ipsa consequuntur nesciunt iusto ipsam inventore dolorum numquam aspernatur.
                            </div>
                            <div className="register">
                                <button className="reg">
                                    View Results
                                    <img src={view} alt="" />
                                </button>
                                <button className="closed">
                                    Registration closed
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
                <div id="udgamPass">
                    <div className="pass">
                        <p>Udgam pass</p>
                        <img src={udgamLogoPink} alt="" />
                    </div>
                    <div id="priceDate">
                        <div id="price">
                            <p className="pdHeading">Price</p>
                            <p className="price">
                                ₹199</p>

                        </div>
                        <div id="date">
                            <p className="pdHeading">
                                Date
                            </p>
                            <p className="date">
                                19-22 Jan
                            </p>

                        </div>

                    </div>
                    <div className='buttonwrappass'>
                    <Button
                            variant="primary"
                            kind="elevated"
                            size="big"
                            colorMode="light"
                            colorConfig={{ backgroundColor: "#F0E266", borderColor: "black", edgeColors: { right: "#FC97D9", bottom: "#FC97D9" } }}
                            spacingConfig={{ height: "60px" }}
                            onClick={() => {
                                console.log("I'm clicked");
                            }}
                        >
                            <div className="GetTkt" style={{ color: "black" }}>COUNT ME IN</div>
                        </Button>
                    </div>
                    <div className="buyPass">
                        <div className="time">
                            <img src={live} alt="" />
                            ends in 03:09:54
                        </div>
                    </div>
                    <div id="barcode">
                        <img src={barcode} alt="" />
                    </div>
                </div>
            </div>

        </div>

    );
}

export default Events;