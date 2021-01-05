import React from "react";
import "./page-home.css";
import logo from "./logo.svg";
import ReactDOM from "react-dom";
import Modal from "./components/modal.js";

class PageHome extends React.Component {
  state = {
    modal: false,
    barraBusqueda: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    //console.log("Page Home submit");
    this.props.history.push("/busqueda?" + this.state.barraBusqueda);
  };

  onChange = (e) => {
    this.setState({
      barraBusqueda: e.target.value,
    });
  };
  handleClick = (e) => {
    e.preventDefault();
    //console.log("pin");
    this.setState({
      modal: true,
    });
  };
  render() {
    return (
      <div className="container">
        <div className="row centrado">
          <div className="col-md-6 centrar">
            <img src={logo} alt="" id="logo" />
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
                  value={this.state.barrabusqueda}
                  placeholder="Busca una banda"
                  onChange={this.onChange}
                />
              </div>
              <div className="actions">
                <button className="btng" type="submit">
                  Search Similar Artist
                </button>
                <button className="btng" onClick={this.handleClick}>
                  Modal con Portal + Hook Example
                </button>
              </div>
            </form>
          </div>
        </div>
        {ReactDOM.createPortal(
          <Modal estado={this.state.modal}>
            <h4>Esto es un H4 dentro del modal</h4>
          </Modal>,
          document.getElementById("teleport")
        )}
      </div>
    );
  }
}
export default PageHome;
