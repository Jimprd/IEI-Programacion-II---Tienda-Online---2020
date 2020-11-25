import React from "react";
// import { Button } from "semantic-ui-react";

import TopBar from "./TopBar";
import Menu from "./Menu";

// creamos un componente funcional o de funcion. La alternativa es una className (ver Productos_class)
export default function Header() {
  return (
    <div>
      <TopBar />
      <Menu />
    </div>
  );
}
