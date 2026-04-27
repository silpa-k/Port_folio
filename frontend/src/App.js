import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Portfolio from './components/Portfolio';
import CaseStudy from './components/CaseStudy';
import { Toaster } from './components/ui/sonner';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/case-study/:id" element={<CaseStudy />} />
        </Routes>
      </BrowserRouter>
      <Toaster
        position="bottom-right"
        theme="dark"
        toastOptions={{
          style: {
            background: 'rgba(20,20,43,0.9)',
            color: '#fff',
            border: '1px solid rgba(255,255,255,0.1)',
            backdropFilter: 'blur(12px)',
          },
        }}
      />
    </div>
  );
}

export default App;
