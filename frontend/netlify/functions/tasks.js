// This Netlify function has been disabled to prevent conflicts with your Render backend
// All API requests will now go directly to your Render backend

exports.handler = async (event, context) => {
  return {
    statusCode: 404,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify({ 
      error: 'API requests should go to your Render backend',
      message: 'This Netlify function has been disabled to prevent conflicts'
    })
  };
};