import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App.js';

// to bundle styles
import styles from './app.css';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
