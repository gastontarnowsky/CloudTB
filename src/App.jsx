import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UIProvider } from './contexts';
import { HomePage } from './pages';

function App() {

  return (
    <UIProvider>
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </UIProvider>
  )
}

export default App
