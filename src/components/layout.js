import React from "react";
import Footer from "./footer";
/* class Footer extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-12 centrar">
          <p>Todos los derechos reservados 2020 @escueladevrock</p>
        </div>
      </div>
    );
  }
} 

export default Footer;
*/

//Componente funcional
function Layout(props) {
  const children = props.children;

  return (
    <React.Fragment>
      {children}
      <Footer />
    </React.Fragment>
  );
}

export default Layout;
