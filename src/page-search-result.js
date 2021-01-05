import React from "react";
import SearchBar from "./components/search-bar.js";
import SearchResult from "./components/search-result.js";

class PageSearchResult extends React.Component {
  constructor(props) {
    super(props);
    // No llamar this.setState() aca!
    this.state = { barraBusqueda: "" };
    ///console.log("Constructor - Antes del render");
  }
  componentDidMount() {
    // console.log("Did mount - Despues del render");
    let search = this.props.history.location.search
      .substr(1)
      .replaceAll("%20", " ");
    //console.log(search);

    this.setState({
      barraBusqueda: search,
    });
  }
  changeHandle = (e) => {
    /*console.log(
      "change page search result " + [e.target.name] + " " + e.target.value
    );*/
    this.setState({
      barraBusqueda: e.target.value,
    });

    this.props.history.push("/busqueda?" + e.target.value);
  };
  render() {
    //console.log("Render");
    return (
      <React.Fragment>
        <SearchBar
          onChange={this.changeHandle}
          barraBusqueda={this.state.barraBusqueda}
        />
        <SearchResult barraBusqueda={this.state.barraBusqueda} />
      </React.Fragment>
    );
  }
}
export default PageSearchResult;
