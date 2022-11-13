import React from 'react'
import covid from '../../assests/covid.png'
import netflix from '../../assests/netfilx.png'
import educational from '../../assests/educational.png'
import pharmacy from '../../assests/pharmacy.png'
import upet from '../../assests/upet.png'
import ehsaas from '../../assests/ehsaas.png'
import context from '../../assests/context.png'
import foodapp from '../../assests/food.png'
import './ProjectGallery.css'
import { FiLink } from 'react-icons/fi'
import { VscLiveShare } from 'react-icons/vsc'
import PortfolioImg from '../../components/PortfolioImg'
const ProjectGallery = () => {
  return (
    <>
      {/* <section id="projectgallery" className="projectgallery s> */}
      <section className="portfolio-section section-show" id="portfolio">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
            <div className="section-title">
                        <h2>Project Gallery</h2>

                        <p>Explore my work</p></div>
            </div>
          </div>
          <div className="portfolio-menu mt-2 mb-4">
            <nav className="controls">
              <button type="button" className="control outline" data-filter="all">All</button>
              <button type="button" className="control outline" data-filter=".web">Web Design</button>
              <button type="button" className="control outline" data-filter=".dev">Development</button>
              <button type="button" className="control outline" data-filter=".wp">WordPress</button>
            </nav>
          </div>
          <div className="row portfolio-item">
            <PortfolioImg
              image={covid}
              projectName="Covid-19 Tracker"
              githublink="https://github.com/Reeba12/covidtracker"
              live="https://reeba12.github.io/covidtracker/"
            />
            <PortfolioImg
              image={netflix}
              projectName="Netflix Clone"
              githublink="https://github.com/Reeba12/Netflix-clone-react"
              live="https://reeba12.github.io/Netflix-clone-react/"
            />
            <PortfolioImg
              image={educational}
              projectName="Educational Website"
              githublink="https://github.com/Reeba12/educationalwebsite"
              live="https://educatinalwebsite-fa0e7.web.app/"
            />
            <PortfolioImg
              image={pharmacy}
              projectName="Pharmacy Management System"
              githublink="https://github.com/Reeba12/Pharmacy-Management-System"
            />
            <PortfolioImg
              image={ehsaas}
              projectName="Ehssas Welfare"
              githublink="https://github.com/Reeba12/ehsaas"
              live="https://saylanihomepage-c9c67.web.app/"
            />
            <PortfolioImg
              image={upet}
              projectName="Upet Form"
              githublink="https://github.com/Reeba12/ehsaas"
              live="https://upetform.herokuapp.com/"
            />
            <PortfolioImg
              image={context}
              projectName="Context Sample Page"
              githublink="https://github.com/Reeba12/context/"
              live="https://reeba12.github.io/context/"
            />
            <PortfolioImg
              image={foodapp}
              projectName="Food App"
              githublink="https://github.com/Reeba12/context/"
              // live="https://reeba12.github.io/context/"
            />
          </div>
        </div>
        {/* </section> */}

      </section>
    </>
  )
}

export default ProjectGallery
