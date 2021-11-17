import React from 'react';
import { useEffect } from 'react';
import "./About.css";

import { useParams } from "react-router-dom";

function About(props){
    const {id} = useParams();
    console.log(id);
    useEffect(()=>{

    },[]);


    return <div className="about_page">
        <h3>About this page: I built it because I love movies.</h3>
    </div>;
}

export default About;