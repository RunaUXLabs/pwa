if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/pwa/service-worker.js', { scope: '/pwa/' })})}