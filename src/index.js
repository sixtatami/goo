import React from "react";
import { render } from "react-dom";

export default function Goo() {
  return <div>hello goodness</div>;
}

render(<Goo />, document.getElementById("root"));
