import React from "react";
import SearchBar from "./components/search-bar.js";
import "./page-artist.css";
import SimilarArtist from "./components/similar-artist.js";
import Loading from "./components/loading.js";
import Error from "./components/error.js";

class PageArtist extends React.Component {
  state = {
    barraBusqueda: "",
    loading: false,
    error: null,
    data: {
      artist: {
        image: [
          { "#text": "" },
          { "#text": "" },
          { "#text": "" },
          { "#text": "" },
        ],
        bio: {
          summary: "",
        },
        similar: {
          artist: [
            {
              name: "",
              url: "",
              image: [
                { "#text": "" },
                { "#text": "" },
                { "#text": "" },
                { "#text": "" },
                { "#text": "" },
              ],
            },
          ],
        },
      },
    },
  };
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.fetchData();
    }
  }
  componentDidMount() {
    this.fetchData();
  }
  changeHandle = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  fetchData = async () => {
    let artista = this.props.history.location.search.substr(1);
    let url = `http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${artista}&api_key=3655f4e219e139dd240a1f93a9730ab7&format=json`;

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
        <SearchBar
          onChange={this.changeHandle}
          barraBusqueda={this.state.barraBusqueda}
        />
        {this.state.loading && <Loading />}
        {this.state.error && <Error errorMensaje={this.state.errorMensaje} />}
        <div className="container">
          <div className="row centrar">
            <div className="col-md-3" />
            <div className="col-md-6">
              <img
                className="pic-artist margenes50"
                src={this.state.data.artist.image[2]["#text"]}
                alt=""
              />
              <h2>{this.state.data.artist.name}</h2>
              <p>{this.state.data.artist.bio.summary}</p>
            </div>
          </div>
          {this.state.loading && <Loading />}
          <SimilarArtist data={this.state.data.artist.similar.artist} />
        </div>
      </React.Fragment>
    );
  }
}
export default PageArtist;
