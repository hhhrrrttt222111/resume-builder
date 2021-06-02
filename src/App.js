import React, { useContext } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Landing, Test1, ResumeCreate } from './pages'
import { DetailsContext } from './contexts/DetailsContext'
import { PDFViewer } from '@react-pdf/renderer';
import './App.css';

function App() {

  const { resume } = useContext(DetailsContext);



  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/" exact>
            <Landing />
          </Route>
          <Route path="/template/:id" exact>
            <PDFViewer>
              <Test1 resume={resume}/>
            </PDFViewer>
          </Route>

          <Route path="/create" exact>
            <ResumeCreate />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
