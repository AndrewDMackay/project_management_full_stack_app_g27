import react from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';


function App() {

  return (

    <Router>
      <>
        <div className="app-container">
          <head>
            <link rel="preconnect" href="https://fonts.googleapis.com"></link>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
            <link href="https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&family=Oswald:wght@200;300;400;500;600;700&family=Roboto+Condensed:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet"></link>
            <script src="https://kit.fontawesome.com/a68a14eaee.js" crossorigin="anonymous"></script>        
          </head>
          <div>
            <Switch>
              <Route exact path="/" component={MainContainer} />
              <Route exact path="/boards" component={BoardContainer} />
              <Route exact path="/tasks" component={TaskContainer} />
            </Switch>
          </div>
        </div>
      </>
    </Router>
  );
}


export default App;

