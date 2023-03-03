import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UIProvider } from './contexts';
import { HomePage } from './pages';

function App() {
/* colores tailwind

        azul: "#66b6f3",
        azulTwo: "#96ccf5",
        azulOscuro: '#0c0042',
        rojo: '#fd3456',
        probar: "#0fff0f",
rgba(248, 248, 253, 0.5), rgba(102, 182, 243, 0.99)),
  rgb(30 58 138) 
*/
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
