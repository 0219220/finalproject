import React from "react";

function Card(props){
    return(
        <div>
            <h2>Flight to {props.destination}! </h2>
                <img src={props.imgurl} alt="avatar_img"/>
                <p> Leaves: {props.date} at {props.departure}</p>
                <p> Duration: {props.duration}</p>
                
        </div>
    );
}



export default Card;