import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.css';
import Introduction from './components/Introduction';
import Projects from './components/Projects';
import Interests from './components/Interests';

function App() {
  return (
    <div className="magicpattern">
        <div className="row">
          <Introduction />
          <div className="col-8">
            <Projects />
            <Interests />
          </div>
        </div>
    </div>
  );
}

export default App;
