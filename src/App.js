import React, { useContext } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Landing, Template1, Template2, ResumeCreate, FourNotFour, Contributors } from './pages'
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
          <Route path="/template/1" exact>
            <PDFViewer>
              <Template1 resume={resume}/>
            </PDFViewer>
          </Route>

          <Route path="/template/2" exact>
            <PDFViewer>
              <Template2 resume={resume}/>
            </PDFViewer>
          </Route>

          <Route path="/create" exact>
            <ResumeCreate />
          </Route>

          <Route path="/contributors" exact>
            <Contributors />
          </Route>

          <Route component={FourNotFour} />

        </Switch>
      </Router>
    </div>
  );
}

export default App;
