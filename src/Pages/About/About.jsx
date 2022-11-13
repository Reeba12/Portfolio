import React from 'react'
import './About.css'
import { IoIosArrowForward } from 'react-icons/io'
import { MdDeveloperMode, MdOutlineDevicesOther } from 'react-icons/md'
import { TiTick } from 'react-icons/ti'
import { GiDatabase } from 'react-icons/gi'

const About = () => {
  return (
    <>
      <section id="about" class="about section-show">
        <div class="about-me container">
          <div class="section-title">
            <h2>About</h2>
            <p>Learn more about me</p>
          </div>
          <div class="row">
            <div class="col-lg-12 pt-4 pt-lg-0 content" data-aos="fade-left">
              <h3>Web Developer</h3>
              <p class="fst-italic"> I'm a professional enthusiastic and passionate website developer. It is a pleasure to have you go through my profile..</p>
              <p> I am a web developer having experience in frontend, database, and backend to develop responsive web applications. I worked on web-based applications which includes developing dynamic UI's on React, Deployment, and responsive. I am currently doing BSCS from Dawood University of Engineering & Technology. I am aware of project managing tools like GitHub, firebase.</p>
              <div class="row">
                <div class="col-lg-6">
                  <ul>
                    <li>
                      <IoIosArrowForward className='icon' />
                      <strong>Website:</strong>
                      <span>www.example.com</span>
                    </li>
                    <li>
                      <IoIosArrowForward className='icon' />
                      <strong>Phone:</strong>
                      <span><a href='tel:+92 333 1653260'>+92 333 1653260</a></span></li><li><IoIosArrowForward className='icon' />
                      <strong>City:</strong>
                      <span>Karachi, Pakistan</span>
                    </li>
                  </ul>
                </div>
                <div class="col-lg-6">
                  <ul>
                    <li>
                      <IoIosArrowForward className='icon' />
                      <strong>Degree:</strong>
                      <span>Undergraduation (BSCS)</span>
                    </li>
                    <li>
                      <IoIosArrowForward className='icon' />
                      <strong>Email:</strong>
                      <span><a href='mailto:reebasiddiqui456@gmail.com'>reebasiddiqui456@gmail.com</a></span>
                    </li>
                    <li>
                      <IoIosArrowForward className='icon' />
                      <strong>Freelance:</strong>
                      <span>Available</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="counts container">
          <div class="row">
            <div class="col-lg-4 col-md-6">
              <div class="count-box">
                <div className='devicon'>
                  <MdDeveloperMode /></div>
                <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="0" class="purecounter">Frontend</span>
                <ul>
                  <li>
                    <TiTick className='icon' />
                    <p>Next JS</p>
                  </li>
                  <li>
                    <TiTick className='icon' />
                    <p>React/React Native</p>
                  </li>
                  <li>
                    <TiTick className='icon' />
                    <p>Redux</p>
                  </li>
                  <li>
                    <TiTick className='icon' />
                    <p>Javascript</p>
                  </li>
                  <li>
                    <TiTick className='icon' />
                    <p>PHP</p>
                  </li>
                  <li>
                    <TiTick className='icon' />
                    <p>HTML5/CSS3</p>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 mt-5 mt-md-0">
              <div class="count-box">
                <div className='devicon'>
                  <GiDatabase /></div>
                <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="0" class="purecounter">Backend</span>
                <ul>
                  <li>
                    <TiTick className='icon' />
                    <p>Node JS</p>
                  </li>
                  <li>
                    <TiTick className='icon' />
                    <p>Laravel</p>
                  </li>
                  <li>
                    <TiTick className='icon' />
                    <p>Express JS</p>
                  </li>
                  <li>
                    <TiTick className='icon' />
                    <p>MongoDB</p>
                  </li>
                  <li>
                    <TiTick className='icon' />
                    <p>MySQL</p>
                  </li>
                  <li>
                    <TiTick className='icon' />
                    <p>PostgreSQL</p>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 mt-5 mt-lg-0">
              <div class="count-box">
                <div className='devicon'>
                  <MdOutlineDevicesOther /></div>
                <span data-purecounter-start="0" data-purecounter-end="1463" data-purecounter-duration="0" class="purecounter">Others</span>
                <ul>
                  <li>
                    <TiTick className='icon' />
                    <p>BootStrap/MUI</p>
                  </li>
                  <li>
                    <TiTick className='icon' />
                    <p>UI kit/Ant Design</p>
                  </li>
                  <li>
                    <TiTick className='icon' />
                    <p>GIT/Git Desktop</p>
                  </li>
                  <li>
                    <TiTick className='icon' />
                    <p>Jest (unit testing)</p>
                  </li>
                  <li>
                    <TiTick className='icon' />
                    <p>Firebase Auth/Database</p>
                  </li>

                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* <div class="interests container">
          <div class="section-title">
            <h2>Interests</h2>
          </div>
          <div class="row">
            <div class="col-lg-3 col-md-4">
              <div class="icon-box">
                <i class="ri-store-line" style="color: #ffbb2c;"></i>
                <h3>Lorem Ipsum</h3>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 mt-4 mt-md-0">
              <div class="icon-box">
                <i class="ri-bar-chart-box-line" style="color: #5578ff;"></i>
                <h3>Dolor Sitema</h3>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 mt-4 mt-md-0">
              <div class="icon-box">
                <i class="ri-calendar-todo-line" style="color: #e80368;"></i>
                <h3>Sed perspiciatis</h3>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 mt-4 mt-lg-0">
              <div class="icon-box">
                <i class="ri-paint-brush-line" style="color: #e361ff;"></i>
                <h3>Magni Dolores</h3>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 mt-4">
              <div class="icon-box">
                <i class="ri-database-2-line" style="color: #47aeff;"></i>
                <h3>Nemo Enim</h3>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 mt-4">
              <div class="icon-box">
                <i class="ri-gradienter-line" style="color: #ffa76e;"></i>
                <h3>Eiusmod Tempor</h3>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 mt-4">
              <div class="icon-box">
                <i class="ri-file-list-3-line" style="color: #11dbcf;"></i>
                <h3>Midela Teren</h3>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 mt-4">
              <div class="icon-box">
                <i class="ri-price-tag-2-line" style="color: #4233ff;"></i>
                <h3>Pira Neve</h3>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 mt-4">
              <div class="icon-box">
                <i class="ri-anchor-line" style="color: #b2904f;"></i>
                <h3>Dirada Pack</h3>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 mt-4">
              <div class="icon-box">
                <i class="ri-disc-line" style="color: #b20969;"></i>
                <h3>Moton Ideal</h3>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 mt-4">
              <div class="icon-box">
                <i class="ri-base-station-line" style="color: #ff5828;"></i>
                <h3>Verdo Park</h3>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 mt-4">
              <div class="icon-box">
                <i class="ri-fingerprint-line" style="color: #29cc61;"></i>
                <h3>Flavor Nivelanda</h3>
              </div>
            </div>
          </div>
        </div> */}
      </section>
    </>


  )
}

export default About
