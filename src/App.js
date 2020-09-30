import React from 'react';
import 'office-ui-fabric-react/dist/css/fabric.css'
import './App.css';

import Navigation from './Navigation';
import CardSection from './CardSection';
import OperationsTable from './OperationsTable'
function App() {
  return (
    <div className="ms-Grid" dir="ltr">
      <div className="ms-Grid-row">
        <div className="ms-Grid-col ms-sm-1 ms-xl1">
          <Navigation/>
        </div>
        <div className="ms-Grid-col ms-sm-11 ms-xl11 main-element">
        <div className="ms-Grid-row">
          <CardSection/>
        </div>
        <div className="ms-Grid-row">
          <OperationsTable/>
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
