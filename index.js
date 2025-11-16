import Fastify from 'fastify';

const fastify = Fastify({
  logger: false
});

const payloadadmiral = {
  status: true,
  data: {
    real: "CODM-ADMIRAL-FREE-MOD-bf59783cef2feba7c25498b8570c450a-Vm8Lk7Uj2JmsjCPVPVjrLa7zgfx3uz9E",
    token: "74ae822e99c1e5b4b6c217d3aab446aa",
    modname: "UnoShibai Hacks",
    mod_status: "Safe",
    credit: "Cracked by Lyc4n",
    ESP: true,
    Item: true,
    AIM: true,
    SilentAim: true,
    BulletTrack: true,
    Floating: true,
    Memory: true,
    Setting: true,
    EXP: "2090-11-09 24:60:60",
    device: "50",
    rng: 1862609543
  }
};

const payloadash = {
  status: true,
  data: {
    real: "CRACKED-BY-LYC4N",
    token: "ABC123",
    modname: "Safe Working",
    mod_status: "Safe",
    credit: "Cracked by Lyc4n! ^w^",
    ESP: "off",
    Item: "on",
    AIM: "on",
    SilentAim: "on",
    BulletTrack: "on",
    Floating: "on",
    Memory: "on",
    Setting: "on",
    device: "99999",
    ZEROEXP: "2090-12-31 20:29:35",
    rng: 1862691471
  }
};

const payloadtnv = {
  status: true,
  data: {
    message: "TNK-Mod - Cracked by Lyc4nLĐ",
    status: "active"
  }
};

const payloadtna = {
  message: "VIP login thành công - Cracked by Lyc4n",
  status: "vip",
  activated: true
};

function makeHeaders(jsonString) {
  return {
    "Connection": "Keep-Alive",
    "Keep-Alive": "timeout=5, max=100",
    "X-Powered-By": "PHP/7.4.33",
    "Cache-Control": "no-store, max-age=0, no-cache",
    "Content-Type": "application/json; charset=UTF-8",
    "Content-Length": Buffer.byteLength(jsonString).toString(),
    "Vary": "User-Agent",
    "Alt-Svc": 'h3=":443"; ma=2592000, h3-29=":443"; ma=2592000, h3-Q050=":443"; ma=2592000'
  };
}

function sendPayload(reply, payload) {
  const json = JSON.stringify(payload, null, 4);
  reply
    .code(200)
    .headers(makeHeaders(json))
    .send(json);
}

// =========================
//        ROUTES
// =========================

fastify.get('/getcect', (req, reply) => sendPayload(reply, payloadadmiral));
fastify.get('/getect', (req, reply) => sendPayload(reply, payloadadmiral));
fastify.get('/getct',  (req, reply) => sendPayload(reply, payloadash));
fastify.get('/tna',    (req, reply) => reply.send(JSON.stringify(payloadtna, null, 4)));
fastify.get('/tnv',    (req, reply) => sendPayload(reply, payloadtnv));

// 404 handler
fastify.setNotFoundHandler((req, reply) => {
  reply.code(404).send({ error: "Not found" });
});

// =========================
//      START SERVER
// =========================

fastify.listen({ port: 3000 }, (err, address) => {
  if (err) throw err;
  console.log(`API running at ${address}`);
});

