import React from 'react'
import './App.css'
// import covid from '../assests/covid.png'
// import netflix from '../assests/netfilx.png'
import { FiLink } from 'react-icons/fi'
import { VscLiveShare } from 'react-icons/vsc'

const PortfolioImg = (props) => {
    return (
        <>
            <div className="col-lg-3 col-md-4 col-12 col-sm-6 cont">
                <img src={props.image} alt="Avatar" className="image" style={{ width: '100%' }} />
                <div className="middle">
                    <p>{props.projectName}</p>
                    <div>
                        <a href={props.githublink} target="_blank"><FiLink className='icon' /></a>
                        <a href={props.live} target="_blank"><VscLiveShare className='icon' /></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PortfolioImg
