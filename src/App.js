import { Provider } from 'react-redux';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import store from './components/redux/store/configStore';
import Greeting from './components/greetings/greeting';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Greeting />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
