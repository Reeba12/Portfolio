import React from 'react'
import './contact.css'
import { InfoCircleOutlined, UserOutlined, EyeInvisibleOutlined, DraftsIcon } from '@ant-design/icons';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { CiFacebook } from 'react-icons/ci'
import { AiFillLinkedin, AiFillFacebook, AiFillGithub, AiTwotoneMail } from 'react-icons/ai'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { ImLocation2 } from 'react-icons/im'
import { Input, Tooltip } from 'antd';
import fb from '../../assests/facebook.png'
import linkedin from '../../assests/linkedin.png'
import envelope from '../../assests/envelope.png'
import github from '../../assests/GitHub.png'
import TextareaAutosize from '@mui/material/TextareaAutosize';

// import ResponsiveAppBar from '../../Components/AppBar';
const { TextArea } = Input;

const Contactus = () => {
  return (
    <>
      <section id="contact" className="contact section-show">

        <div className="container">
          <div className='row'>

            <div className="col-lg-6 col-sm-12 contact_info">
              <div className="section-title">
                <h2>Let's Talk</h2>

                <p>Contact Me</p>
              </div>
              <h6>Your Name</h6>
              <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required=""></input>
              <h6>Your Email</h6>
              <input type="text" name="name" className="form-control" id="name" placeholder="Your Email" required=""></input>
              <h6>Your Message</h6>
              <textarea class="form-control" name="message" rows="5" placeholder="Message" required=""></textarea>
              <button className='contact_btn'>Submit</button>
            </div>
            <div className="col-lg-6 col-sm-12 contact_right_img">
              <div class="col-md-12 d-flex align-items-stretch">
                <div class="info-box">
                  <div class="bx bx-map">
                    <ImLocation2 />
                  </div>
                  <h3>My Address</h3>
                  <p>1907/2 Azizabad FB Area Karachi, Pakistan</p>
                </div>
              </div>
              <div class="col-md-12 d-flex align-items-stretch">
                <div class="info-box">
                  <div class="bx bx-map">
                    <BsFillTelephoneFill />
                  </div>
                  <h3>Call me</h3>
                  <p>0333 1653260</p>
                </div>
              </div>
              <div class="col-md-12 d-flex align-items-stretch">
                <div class="info-box">
                  <div class="bx bx-map">
                    <AiTwotoneMail />
                  </div>
                  <h3>Email</h3>
                  <p>reebasiddiqui456@gmail.com</p>
                </div>
              </div>
              {/* <div className="img">
                <img src={envelope} alt="" srcset="" />
              </div>
              <div className="address">
                <div className="icon_text">
                  <LocationOnIcon />
                  <p>1910/2 Azizabad FB Area Karachi, Pakistan</p>
                </div>
                <div className="icon_text">
                  <LocalPhoneIcon />
                  <p>+92 333 1653260</p>
                </div>
                <div className="icon_text">
                  <EmailIcon />
                  <p>reebasiddiqui456@gmail.com</p>
                </div>
              </div>*/}
              <div className="social">
                <a href='' style={{textDecoration:'none', color:"#ffff"}} target='_blank'>
                <AiFillFacebook style={{ width: '5em', height: '3em',cursor:'pointer' }} /></a>
              <a href='https://www.linkedin.com/in/reeba-siddiqui-679b851a9/' target='_blank' style={{textDecoration:'none', color:"#ffff"}}>  <AiFillLinkedin style={{ width: '5em', height: '3em',cursor:'pointer'}} /></a>
                <a href='https://github.com/Reeba12' target='_blank' style={{textDecoration:'none', color:"#ffff"}}><AiFillGithub style={{ width: '5em', height: '3em',cursor:'pointer' }} /></a>
              </div> 
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contactus