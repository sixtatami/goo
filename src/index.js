import React from "react";
import { render } from "react-dom";

export default function Goo() {
  return <div>hello goodness suckers</div>;
}

render(<Goo />, document.getElementById("root"));
