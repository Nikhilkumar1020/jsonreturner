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
    "host": "4.213.32.94:34116",
    "relay": "4.213.32.94:34117",
    "api": "4.213.32.94:34115",
    "key": "Xvzto7q66Nl4A4HlRYExXlQo5lcdkrZ7VSLP2BaBE3w="
  });
}
