import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Movie.css";

function Movie({slug, year, title, summary, poster, genres}){
    return (
    <div className="movie">
        <img src={poster} alt={title} title={title} />
        <div className="movie__data">
            <Link to={`/about/${slug}`}><h3 className="movie__title">{title}</h3></Link>
            <h4 className="movie__year">{year}</h4>
            <ul className="movie__genres">
                {genres.map((genres, index) => <li key={index} className="genres__genre">{genres}</li>)}
            </ul>
            <p className="movie_summary">{summary.slice(0,140)}...</p>
        </div>
    </div>
    );
} 

Movie.prototype = {
    id: PropTypes.number.isRequired,
    slug : PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired

}//isRequired = 필수적으로 있어야한다.

export default Movie;