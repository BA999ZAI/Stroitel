import React from "react";
import './infComplecs.scss';


const InfComplecs = ({image, title, body}) => {
    return <>
        <div className="FirstBlock">
            <div className="imageBlock">
                <img src={image} className="image" />
            </div>

            <div className="textBlock">
                <p className="Title">{title}</p>
                <p className="Body"><b>{body}</b></p>
            </div>
        </div>
    </>
};

export default InfComplecs;