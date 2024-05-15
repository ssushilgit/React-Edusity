import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'
const About = ({setPlay}) => {
    return (
        <div className='about'>
            <div className="about-left">
                <img src={about_img} alt="" className='about_img' />
                <img src={play_icon} alt="" className='play_icon' onClick={()=>{
                    setPlay(true)
                }}/>
            </div>
            <div className="about-right">
                <h3>ABOUT UNIVERSITY</h3>
                <h2>Nurturing Tomorrow's Leaders Today</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam esse ut hic omnis vel nulla nobis! Harum ullam sapiente aut aperiam itaque est explicabo, natus quo, eaque cum iure tempora!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores fugit est, ratione praesentium necessitatibus ad libero magni quaerat fuga impedit consequuntur, enim quis! Natus maxime dolore provident nam? Harum, quam!</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat quasi autem, voluptas dignissimos placeat temporibus sed soluta. Aut, quo! Quibusdam accusamus ex amet hic ad autem aliquam. Id, dignissimos ipsum.</p>
            </div>
        </div>
    )
}
export default About
