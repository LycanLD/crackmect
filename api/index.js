// /api/index.js

const express = require('express');
const app = express();

// 1. The payload object remains the same
const payload = {
  status: true,
  data: {
    real: "CODM-ADMIRAL-FREE-MOD-bf59783cef2feba7c25498b8570c450a-Vm8Lk7Uj2JmsjCPVPVjrLa7zgfx3uz9E",
    token: "74ae822e99c1e5b4b6c217d3aab446aa",
    modname: "UnoShibai Hacks",
    mod_status: "Safe",
    credit: "Cracked by Lyc4n",
    ESP: true,
    Item: false,
    AIM: false,
    SilentAim: false,
    BulletTrack: false,
    Floating: false,
    Memory: false,
    Setting: false,
    EXP: "2090-11-09 24:60:60",
    device: "50",
    rng: 1862609543
  }
};

// 2. The makeHeaders function also remains the same
function makeHeaders(jsonString) {
  return {
    "Connection": "Keep-Alive",
    "Keep-Alive": "timeout=5, max=100",
    "X-Powered-By": "PHP/7.4.33",
    "Cache-Control": "no-store, max-age=0, no-cache",
    "Content-Type": "application/json; charset=UTF-8",
    "Content-Length": String(Buffer.byteLength(jsonString, "utf8")),
    "Vary": "User-Agent",
    "Alt-Svc": 'h3=":443"; ma=2592000, h3-29=":443"; ma=2592000, h3-Q050=":443"; ma=2592000',
  };
}

// 3. Define the route for the "/getcect" path
app.get('/getcect', (req, res) => {
  const jsonString = JSON.stringify(payload, null, 4);
  const headers = makeHeaders(jsonString);

  // Set all the custom headers using res.set()
  res.set(headers);

  // Send the response with a 200 status code
  res.status(200).send(jsonString);
});

// 4. Add a catch-all handler for other paths to return a 404
app.use((req, res) => {
  res.status(404).send("Not Found");
});

// 5. Export the Express app for Vercel
module.exports = app;