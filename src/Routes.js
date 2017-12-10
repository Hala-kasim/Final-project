import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import App from './App';
import SecondPage from './components/SecondPage';


const Routes = () => {
  return (

    <BrowserRouter>
    <div>
      <Route path="/" component={App} />
      <Route path="/second" component={SecondPage} />
      </div>
    </BrowserRouter>
  )
};
export default Routes;
