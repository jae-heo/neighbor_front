const fetch = require('node-fetch');

exports.handler = async function(event, context) {
  const { name, email } = JSON.parse(event.body);
  
  const response = await fetch('https://your-backend-server.com/api/save', {
    method: 'POST',
    body: JSON.stringify({ name, email }),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  
  if (response.ok) {
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Form submitted successfully' })
    };
  } else {
    return {
      statusCode: response.status,
      body: JSON.stringify({ message: 'Failed to submit form' })
    };
  }
};
