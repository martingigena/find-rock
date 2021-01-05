import React from "react";
import "./modal.css";
import Hook from "./hook.js";
import HookPropio from "./hookPropio.js";

class Modal extends React.Component {
  state = {
    estado: this.props.estado,
  };
  handleClick = (e) => {
    e.preventDefault();
    this.setState({
      estado: false,
    });
  };
  componentDidUpdate(prevProps, prevState) {
    if (this.props.estado !== prevState.estado) {
      this.setState({
        estado: this.props.estado,
      });
    }
  }
  render() {
    if (this.state.estado !== true) return null;
    return (
      <React.Fragment>
        <div className="modale">
          <div className="cardModal">
            <button className="salir" onClick={this.handleClick}>
              X
            </button>
            {this.props.children}
            <Hook></Hook>
            <HookPropio></HookPropio>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Modal;
