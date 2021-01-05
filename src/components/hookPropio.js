import React from "react";

//Hook Propio
function useCuenta(init, max) {
  const [cuenta, setCuenta] = React.useState(init);
  if (cuenta > max) {
    setCuenta(0);
  }
  return [cuenta, setCuenta];
}

function HookPropio() {
  const [cuenta, setCuenta] = useCuenta(0, 5);
  return (
    <button
      onClick={() => {
        setCuenta(cuenta + 1);
      }}
    >
      Hook Propio "useCuenta" - Contador {cuenta}
    </button>
  );
}

export default HookPropio;
