import React from 'react';
import ReactDOM  from 'react-dom';
import MovieItem from './components/Movie.jsx'


class MovieList extends React.Component {
  constructor(props) {
    super(props);

    this.id = 0;

    this.state = {
    	movieList : [
			  {title: 'Mean Girls'},
			  {title: 'Hackers'},
			  {title: 'The Grey'},
			  {title: 'Sunshine'},
			  {title: 'Ex Machina'},
			]
    };
  }

  render() {
    return (
      <div>
      	<ul>
      	  {this.state.movieList.map(movie => <MovieItem movie={movie} key={this.id++}/>)}      	
      	</ul>
      </div>
    )
  }
}

ReactDOM.render( <MovieList />, document.getElementById('app'));
