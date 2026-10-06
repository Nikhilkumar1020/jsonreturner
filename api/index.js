export default function handler(req, res) {
  // Enable  CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Handle OPTIONS request for CORS preflight
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }
  
  res.status(200).json({
    "host": "194.100.4.62:34116",
    "relay": "194.100.4.62:34117",
    "api": "194.100.4.62:34115",
    "key": "vu4mQ7Gr0K3Hm2yqRsjissbD8lQc+NJO1OFTM87d0jA="
  });
}
