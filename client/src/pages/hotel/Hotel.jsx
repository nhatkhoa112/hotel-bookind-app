import "./hotel.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";


const Hotel = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  

  const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
  function dayDifference(date1, date2) {
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
    return diffDays;
  }


  const handleOpen = (i) => {
  
  };

  const handleMove = (direction) => {
   
  };

  const handleClick = () => {
   
  };


  return (
    <div>
      <Navbar />
      <Header type="list" />
      
        <div className="hotelContainer">
          {open && (
            <div className="slider">
              <FontAwesomeIcon
                icon={faCircleXmark}
                className="close"
                onClick={() => setOpen(false)}
              />
              <FontAwesomeIcon
                icon={faCircleArrowLeft}
                className="arrow"
                onClick={() => handleMove("l")}
              />
              <div className="sliderWrapper">
                <img
                  src="https://cf.bstatic.com/xdata/images/city/max500/690334.webp?k=b99df435f06a15a1568ddd5f55d239507c0156985577681ab91274f917af6dbb&o="
                  alt=""
                  className="sliderImg"
                />
              </div>
              <FontAwesomeIcon
                icon={faCircleArrowRight}
                className="arrow"
                onClick={() => handleMove("r")}
              />
            </div>
          )}
          <div className="hotelWrapper">
            <button className="bookNow">Reserve or Book Now!</button>
            <h1 className="hotelTitle">{}</h1>
            <div className="hotelAddress">
              <FontAwesomeIcon icon={faLocationDot} />
              <span>{}</span>
            </div>
            <span className="hotelDistance">
              Excellent location – {}m from center
            </span>
            <span className="hotelPriceHighlight">
              Book a stay over ${} at this property and get a
              free airport taxi
            </span>
            <div className="hotelImages">

                <div className="hotelImgWrapper" >
                  <img
                    onClick={() => handleOpen()}
                    src="https://cf.bstatic.com/xdata/images/city/max500/690334.webp?k=b99df435f06a15a1568ddd5f55d239507c0156985577681ab91274f917af6dbb&o="
                    alt=""
                    className="hotelImg"
                  />
                </div>
              
            </div>
            <div className="hotelDetails">
              <div className="hotelDetailsTexts">
                <h1 className="hotelTitle">{}</h1>
                <p className="hotelDesc">{}</p>
              </div>
              <div className="hotelDetailsPrice">
                <h1>Perfect for a {}-night stay!</h1>
                <span>
                  Located in the real heart of Krakow, this property has an
                  excellent location score of 9.8!
                </span>
                <h2>
                  <b>${}</b> ({}{" "}
                  nights)
                </h2>
                <button onClick={handleClick}>Reserve or Book Now!</button>
              </div>
            </div>
          </div>
          <MailList />
          <Footer />
        </div>
     
      {/* {openModal && <Reserve setOpen={setOpenModal} hotelId={id}/>} */}
    </div>
  );
};

export default Hotel;
