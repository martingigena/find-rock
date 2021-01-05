import React from "react";

//Hook useState
function Hook() {
  const [cuenta, setCuenta] = React.useState(0);
  return (
    <button
      onClick={() => {
        setCuenta(cuenta + 1);
      }}
    >
      React.useState - Contador {cuenta}
    </button>
  );
}

export default Hook;
