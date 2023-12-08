import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";

import "./Contact.css";

const Contact = () => {
  return (
    <section className="c-wrapper">
      <div className="paddings innerWidth flexCenter   c-container">
        {/* Left side */}
        <div className=" flexColStart c-left">
          <span className="orangeText">Our Contacts</span>
          <span className="primaryText">Contact Us</span>
          <span className="secondarText">
            We Believe That Communication Is The Key and We Are Ready To Help 24/7
          </span>
          <div className="flexColStart contactModes">
            {/* First Row */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Ring</span>
                    <span className="secondaryText">8867674084</span>
                  </div>
                </div>
                <div className="flexCenter button">Ring Now</div>
              </div>
              {/* Second Mode */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Ping Now</span>
                    <span className="secondaryText">8867674084</span>
                  </div>
                </div>
                <div className="flexCenter button">Ping Now</div>
              </div>
            </div>
            {/* Second Row */}
            {/* third mode */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText"> Video Call</span>
                    <span className="secondaryText">8867674084</span>
                  </div>
                </div>
                <div className="flexCenter button"> VideoCall Now</div>
              </div>
              {/* fourth  Mode */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Text Now</span>
                    <span className="secondaryText">8867674084</span>
                  </div>
                </div>
                <div className="flexCenter button">Text Now</div>
              </div>
            </div>
          </div>
        </div>
        {/* Right Side */}
        <div className="c-right">
          <div className="image-container">
            <img src="./contact.jpg " alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
