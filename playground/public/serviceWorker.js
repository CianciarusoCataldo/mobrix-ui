const isLocalhost=()=>"undefined"!=typeof window&&Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function register(e){if("production"===process.env.NODE_ENV&&"serviceWorker"in navigator){if(new URL(process.env.PUBLIC_URL,window.location.href).origin!==window.location.origin)return;window.addEventListener("load",()=>{const o=`${process.env.PUBLIC_URL}/service-worker.js`;isLocalhost()?(checkValidServiceWorker(o,e),navigator.serviceWorker.ready.then(()=>{console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):registerValidSW(o,e)})}}function registerValidSW(e,o){navigator.serviceWorker.register(e).then(e=>{e.onupdatefound=(()=>{const n=e.installing;null!=n&&(n.onstatechange=(()=>{"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed."),o&&o.onUpdate&&o.onUpdate(e)):(console.log("Content is cached for offline use."),o&&o.onSuccess&&o.onSuccess(e)))}))})}).catch(e=>{console.error("Error during service worker registration:",e)})}function checkValidServiceWorker(e,o){fetch(e,{headers:{"Service-Worker":"script"}}).then(n=>{const r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then(e=>{e.unregister().then(()=>{window.location.reload()})}):registerValidSW(e,o)}).catch(()=>{console.log("No internet connection found. mobrix-ui-app is running in offline mode.")})}function unregister(){"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(e=>{e.unregister()}).catch(e=>{console.error(e.message)})}