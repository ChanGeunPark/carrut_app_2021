import React from 'react';
import { Link } from "react-router-dom";
import './Navigation.css';

function Navigation(){
    return <div className="navigation">
        <Link className="home" to="/">Home</Link>
        <Link className="about" to={{
            pathname:"/about",
            state:{
                fromNavigation:true
            }

        }}>About</Link>
    </div>
};

export default Navigation;