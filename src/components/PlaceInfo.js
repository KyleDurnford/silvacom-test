//Get the summary paragraph from Wikipedia for the selected city

import React, { useState, useEffect } from "react";

const PlaceInfo = (props) => {

    const [info, setinfo] = useState([])
    
    useEffect(()=>{
    const getInfo = () => {
        if (props.place) {
        fetch(`https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&origin=*&titles=${props.place}`)
            .then(function(response){
            return response.json();
            })
            .then(function(info) {
            setinfo(info)
            });
        }
    };
    getInfo()
    },[props])

    

    if (info.query) {
        return (
            <div className="excerpt">
                <h2 className="excerptTitle">{props.place}</h2>
                <p className="excerptInfo">{info.query.pages[Object.keys(info.query.pages)[0]].extract}</p>
                <p></p>
            </div>
        )
    } else {
        return (
            <div className="excerpt">
                <h2 className="excerptTitle">Travel Planner</h2>
                <p className="excerptInfo">Click on a city to learn more!</p>
                <p></p>
            </div>
        )
    }

}

export default PlaceInfo