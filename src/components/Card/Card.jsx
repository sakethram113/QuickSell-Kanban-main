import React from 'react'
import './Card.css';
import userImg from '../userImg/WhatsApp Image 2023-04-10 at 22.51.29.jpg'

const Card = () => {
  return (
    <div className="cardContainer">
        <div className="cardHeading">
            <span style={{textTransform : "uppercase"}} className='span'>CAM-1</span>
            <div className="imageContainer relative" style={{ width : "30px", height : "30px"}}>
                <img style={{width : "100%", height : "100%",  borderRadius : "50%" }}  src={userImg} alt="UserImage" />
                <div className="Status"></div>
            </div>
        </div>
        <div className="cardTitle" style={{fontWeight : 200}} >
            <p>Heading for the Card</p>
        </div>
        <div className="cardTags">
        <div className="tags"> ... </div>
        <div className="tags"> <span>•</span> Feature</div>
        </div>
    </div>
  )
}

export default Card;