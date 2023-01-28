import { Provider } from 'react-redux';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Greeting from './components/greetings/Greeting';
import store from './redux/store/configStore';

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
