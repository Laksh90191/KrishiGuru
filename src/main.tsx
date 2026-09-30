import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { registerSW } from 'virtual:pwa-register';

// Register service worker with auto-update for offline PWA compliance
registerSW({
  immediate: true,
  onNeedRefresh() {
    console.log('KrishiGuru update available - service worker refreshed.');
  },
  onOfflineReady() {
    console.log('KrishiGuru is ready to work offline.');
  },
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
