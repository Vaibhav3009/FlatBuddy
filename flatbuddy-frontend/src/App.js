import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";

import store from "./store";
import Routes from './routes';
import './App.css';
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </div>
    </Provider>
  );
}


export default App;
