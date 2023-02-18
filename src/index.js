import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import { Authentication } from './components/pages/Authentication';
import { Database } from './components/pages/Database';
import { Storage } from './components/pages/Storage';
import { Hosting } from './components/pages/Hosting';
import { MachineLearning } from './components/pages/MachineLearning';
import { Functions } from './components/pages/Functions';
import { ThemeProvider } from '@emotion/react';
import { dashboardTheme } from './dashboardTheme';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={dashboardTheme}>
          <Router>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path="authentication" element={<Authentication/>} />
          <Route path="database" element={<Database/>} />
          <Route path="storage" element={<Storage/>} />
          <Route path="hosting" element={<Hosting/>} />
          <Route path="functions" element={<Functions/>} />
          <Route path="machine-learning" element={<MachineLearning/>} />
        </Route>

      </Routes>
    </Router>
    </ThemeProvider>

  </React.StrictMode>
);


