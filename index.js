// /api/index.js
import { Hono } from 'hono';

// The payload object is identical to your original Worker
const payloadadmiral = {
    "status": true,
    "data": {
        "real": "CODM-ADMIRAL-FREE-MOD-bf59783cef2feba7c25498b8570c450a-Vm8Lk7Uj2JmsjCPVPVjrLa7zgfx3uz9E",
        "token": "74ae822e99c1e5b4b6c217d3aab446aa",
        "modname": "UnoShibai Hacks",
        "mod_status": "Safe",
        "credit": "Cracked by Lyc4n",
        "ESP": true,
        "Item": true,
        "AIM": true,
        "SilentAim": true,
        "BulletTrack": true,
        "Floating": true,
        "Memory": true,
        "Setting": true,
        "EXP": "2090-11-09 24:60:60",
        "device": "50",
        "rng": 1862609543
    }
};

const payloadash = {
  "status": true,
  "data": {
    "real": "CRACKED-BY-LYC4N",
    "token": "ABC123",
    "modname": "Safe Working",
    "mod_status": "Safe",
    "credit": "Cracked by Lyc4n! ^w^",
    "ESP": "off",
    "Item": "on",
    "AIM": "on",
    "SilentAim": "on",
    "BulletTrack": "on",
    "Floating": "on",
    "Memory": "on",
    "Setting": "on",
    "device": "99999",
    "ZEROEXP": "2090-12-31 20:29:35",
    "rng": 1862691471
  }
};

// The makeHeaders function is also identical
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

// Initialize the Hono app
const app = new Hono();

// Use app.all() to handle ALL HTTP methods (GET, POST, etc.)
app.all('/getcect', (c) => {
  const jsonString = JSON.stringify(payloadadmiral, null, 4);
  const headers = makeHeaders(jsonString);

  return new Response(jsonString, { status: 200, headers });
});

app.all('/getct', (c) => {
  const jsonString = JSON.stringify(payloadash, null, 4);
  const headers = makeHeaders(jsonString);

  return new Response(jsonString, { status: 200, headers });
});

// Export the default handler for Vercel
export default app;