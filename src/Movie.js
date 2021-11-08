import React from "react";
import PropTypes from "prop-types";

function Movie({id, year, title, summary, poster}){
    return <h4>{title}</h4>;
}

Movie.prototype = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired

}//isRequired = 필수적으로 있어야한다.

export default Movie;