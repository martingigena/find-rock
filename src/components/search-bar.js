import React from "react";
import "./search-bar.css";
import logo from "../logo.svg";
import { Link } from "react-router-dom";

class SearchBar extends React.Component {
  state = {
    barraBusqueda: "",
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    //console.log(e.target.name, e.target.value);
  };
  handleClick = (e) => {
    e.preventDefault(); //Para prevenir la recarga del submit
   // console.log(e.target.name, "Me apretaron");
  };
  handleSubmit = (e) => {
    e.preventDefault(); //Para prevenir la recarga del submit
  //  console.log(e.target.name);
  };

  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-md-2">
            <Link to="/">
              <img className="logo-barra" src={logo} alt="" />
            </Link>
          </div>
          <div className="col-md-4">
            <form
              className="form-inline"
              name="Form"
              onSubmit={this.handleSubmit}
            >
              <div className="busqueda">
                <input
                  type="text"
                  name="barraBusqueda"
                  id="buscar"
                  value={this.props.barraBusqueda}
                  placeholder="Busca una banda"
                  onChange={this.props.onChange}
                />
              </div>
            </form>
          </div>
        </div>
        <hr />
      </React.Fragment>
    );
  }
}

export default SearchBar;
