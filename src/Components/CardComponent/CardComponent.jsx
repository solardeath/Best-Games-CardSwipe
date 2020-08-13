import React from 'react'
import './cards.css'



const CardComponent = ({imgsrc,title,text}) =>{
    return(
        <div className="card text-center">
            <div className="overflow">
                <img src={imgsrc} alt ="" className='card-img-top'></img>
            </div>
            <div className='card-body text-dark'>
                <h4 className='card-title'>{title}</h4>
                <p className='card-text text-secondary'>
                {text} 
                </p>
                <a href="#" className="btn btn-outline-success">Next</a>
            </div>
        </div>
    )
}

export default CardComponent

