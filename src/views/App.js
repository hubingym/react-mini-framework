import React from 'react';
import './App.css';

import { greet } from '../states';
import { greetService } from '../services';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <p>
          greet.val = "{greet.val}"
          <br/>
          <button onClick={greetService.changeGreet} style={{marginRight: '10px'}}>改变</button>
          <button onClick={greetService.clear}>清除</button>
        </p>

      </header>
    </div>
  );
}

export default App;
