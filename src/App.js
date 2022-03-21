import NavigationBar from './components/Navigation/NavigationBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './views/Home/HomePage';
import AboutPage from './views/About/AboutPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
