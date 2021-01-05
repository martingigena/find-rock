import React from "react";
import ArtistCard from "./artist-card.js";
import Loading from "./loading.js";
import Error from "./error.js";

class SearchResult extends React.Component {
  state = {
    loading: false,
    error: null,
    data: {
      similarartists: {
        artist: [],
      },
    },
  };

  componentDidUpdate(prevProps) {
    // Uso tipico (no olvides de comparar las props):
    if (this.props.barraBusqueda !== prevProps.barraBusqueda) {
      let termino = this.props.barraBusqueda;
      //  console.log(" termino ", termino);
      if (termino)
        this.fetchData(
          `http://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&artist=${termino}&api_key=3655f4e219e139dd240a1f93a9730ab7&format=json`
        );
    }
  }

  // componentDidMount() {
  //   this.fetchData(
  //     "http://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&artist=cher&api_key=3655f4e219e139dd240a1f93a9730ab7&format=json"
  //   );
  // }

  fetchData = async (url) => {
    this.setState({
      loading: true,
    });
    const response = await fetch(url);
    const data = await response.json();
    //console.log(data, "lo que trae data");
    if (data.error) {
      this.setState({
        error: true,
        loading: false,
        errorMensaje: data.message,
      });
    } else {
      this.setState({
        error: false,
        data: data,
        loading: false,
      });
    }
  };

  render() {
    return (
      <React.Fragment>
        {this.state.loading && <Loading />}
        {this.state.error && <Error errorMensaje={this.state.errorMensaje} />}
        <div className="container">
          <div className="row">
            {/* Version final consumiendo API */}
            {!this.state.error &&
              this.state.data.similarartists.artist.map((item, i) => {
                return (
                  <ArtistCard
                    img={item.image[2]["#text"]}
                    titulo={item.name}
                    key={i}
                  />
                );
              })}
          </div>
          <h1>{this.props.barraBusqueda}</h1>
        </div>
      </React.Fragment>
    );
  }
}
export default SearchResult;
