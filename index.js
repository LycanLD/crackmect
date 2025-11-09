// /api/index.js
import { Hono } from 'hono';
import { serve } from '@hono/node-server'; // This line is optional for Vercel but good for local dev

// 1. The payload object is identical
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

// 2. The makeHeaders function is also identical
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

// 3. Initialize the Hono app
const app = new Hono();

// 4. Define the route - this looks very clean and familiar!
app.get('/getcect', (c) => {
  const jsonString = JSON.stringify(payload, null, 4);
  const headers = makeHeaders(jsonString);

  // Set headers and return the response
  // Hono's `c` (Context) object works much like a Worker's `fetch` environment
  return new Response(jsonString, { status: 200, headers });
});

// 5. Export the default handler for Vercel
export default app;