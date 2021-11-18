import React from 'react';
import { useEffect } from 'react';
import "./About.css";

import { useParams } from "react-router-dom";

function About(props){
    const {slug} = useParams();
    const getMovie = async () => {
        const json = await(
            await fetch(`https://yts.mx/api/v2/list_movies.json?${slug}`)
            ).json();
        console.log(json);
    };
    console.log(slug);
    useEffect(()=>{
        getMovie();
    },[]);


    return <div className="about_page">
        <h3>About this page: I built it because I love movies.</h3>
    </div>;
}

export default About;