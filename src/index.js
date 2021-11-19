import "./style/style.css";
import { hot } from "react-hot-loader/root";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Language from "./Language";
import Button from "./components/Button";
import { init as initi18n } from "./i18n";

const HEART = "❤️";
const MAX_COUNT = 5;

initi18n();

function App() {
  const [hearts, setHearts] = useState(HEART);

  useEffect(() => {
    setTimeout(() => {
      let h = hearts + HEART;
      h = h === HEART.repeat(MAX_COUNT + 1) ? HEART : h;
      setHearts(h);
    }, 1000);
  }, [hearts]);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>React + yarn + webpack</h1>
      <Language />
      <h1>{hearts}</h1>
      <Button size="medium">Click me!</Button>
    </div>
  );
}

const AppWrapper = hot(() => (
  <React.StrictMode>
    <App />
  </React.StrictMode>
));

ReactDOM.render(<AppWrapper />, document.querySelector("#app"));
