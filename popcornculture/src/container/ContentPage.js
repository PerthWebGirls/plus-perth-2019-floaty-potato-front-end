import React, { Component } from "react";

class MovieGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posterImage: [], //not sure about the types just put array for now
      title: [],
      provider: [],
      release_date : '',
      duration: '',
      genre : [],
      classifications :{}

    };
  }
}
componentWillMount() {
    //are we going to limit the number of movies fetched ? or it's controled with Js
    //api url will modified when it's ready
    fetch("/api/movies")
      .then(results => {
        return results.json();
      })
      .then(data => {
        let posterImage = data.results.map(pic ,title ,provider=> {
          return (
            <div>
                <ul>
                    <li key={pic.results} > <img src={pic.picture.medium} /></li>
                    <li key={title.results}><span>{title.movieTitle}</span></li>
                    <li key={provider.results}><span>{provider.providers}</span></li>
                </ul>
            </div>
          );
        });
        this.setState({ posterImage: posterImage });
        this.setState({ movieTitle: movieTitle });
        this.setState({ providers: providers });
      })
}


    render(){
    return(
        <div>
            
        </div>

    )
}
