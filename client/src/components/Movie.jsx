import React from 'react';

var MovieItem = function(props) {
	return <li key={props.id}>{props.movie.title}</li>
};

export default MovieItem;