import './style/style.scss';
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

const HEART = '❤️';

function App() {
  let [hearts, setHearts] = useState(HEART);

  useEffect(()=>{
    setTimeOut(()=> {
      let h = hearts + HEART;
      h = h === HEART.repeat(4) ? HEART : h;
      setHearts(h);
    }, 1000);
  }, [hearts]);

  return <h1>React + Webpack {hearts}</h1>;
}

React.render(documnet.querySelector("#app"), App)
