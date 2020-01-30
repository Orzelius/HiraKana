import * as React from 'react';
import { Navbar } from './components/nav/Navbar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Learn from './components/Learn/Learn';
import Start from './components/Start/Start';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        {/* the Switch makes sure only the first element gets loaded */}
        <Switch>
          {/* <Route exact path="/" component={Dasboard}/> */}
          <Route exact path='/' component={Home}/>
          <Route exact path='/Start' component={Start}/>
          <Route exact path='/Learn' component={Learn}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
