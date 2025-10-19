const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config({ path: '.env.local' });

const pageId = process.env.FACEBOOK_PAGE_ID;
const token = process.env.FACEBOOK_ACCESS_TOKEN;

console.log('Page ID:', pageId);
console.log('Token length:', token ? token.length : 0);

axios.get(`https://graph.facebook.com/v18.0/${pageId}/posts`, {
  params: {
    access_token: token,
    fields: 'id,message,created_time,attachments{media,title,description,url}',
    limit: 1
  }
}).then(res => {
  console.log('Success: Retrieved', res.data.data.length, 'posts');
  console.log('Sample post:', JSON.stringify(res.data.data[0], null, 2));
}).catch(err => {
  console.log('Error:', err.response?.data || err.message);
});
