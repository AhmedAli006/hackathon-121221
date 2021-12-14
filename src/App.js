import './App.css';
import Approuter from './config/router';
import { Provider } from "react-redux";
import store from "./config/redux/store";
function App() {
  return (
    <div className="App">
      <Provider store={store}>
     <Approuter/>
     </Provider>
    </div>
  );
}

export default App;
