import React from "react";
//Componente de clase
/* class Footer extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-12 centrar">
          <p>Todos los derechos reservados 2020</p>
        </div>
      </div>
    );
  }
} 

export default Footer;
*/

//Componente funcional
function Footer(props) {
  return (
    <React.Fragment>
      <div className="row">
        <div className="col-md-12 centrar">
          <p>Todos los derechos reservados 2020</p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Footer;
