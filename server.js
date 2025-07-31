require('dotenv').config();
const express = require('express');
const path = require('path');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 4000; // Changed port to 4000

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'build')));
app.use(express.static('public'));

// Handle JSON payloads
app.use(express.json());

// Configure nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// API route for sending inquiry emails
app.post('/api/send-inquiry', async (req, res) => {
  const { to, subject, formData } = req.body;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: to,
    subject: subject,
    html: `
      <h2>New Client Inquiry</h2>
      
      <h3>Contact Information:</h3>
      <p><strong>Name:</strong> ${formData.fullName}</p>
      <p><strong>Address:</strong> ${formData.address}</p>
      <p><strong>City:</strong> ${formData.city}</p>
      <p><strong>State:</strong> ${formData.state}</p>
      <p><strong>ZIP Code:</strong> ${formData.zipCode}</p>
      <p><strong>Phone:</strong> ${formData.phone}</p>
      <p><strong>Email:</strong> ${formData.email}</p>
      
      <h3>Vacation Details:</h3>
      <p><strong>Type of Vacation:</strong> ${formData.vacationType}</p>
      <p><strong>Budget Range:</strong> ${formData.budget}</p>
      <p><strong>Number of Adults:</strong> ${formData.numberOfAdults}</p>
      <p><strong>Number of Children Under 17:</strong> ${formData.numberOfChildren || '0'}</p>
      <p><strong>Departure Airport:</strong> ${formData.departureAirport}</p>
      
      ${formData.additionalInfo ? `
        <h3>Additional Information:</h3>
        <p>${formData.additionalInfo}</p>
      ` : ''}
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

// API routes can be added here
app.get('/api/destinations', (req, res) => {
  // Sample data - in a real app, this would come from a database
  const destinations = [
    {
      id: 1,
      name: 'Paris, France',
      description: 'The City of Light',
      image: '/images/paris.jpg',
      price: '1,299'
    },
    {
      id: 2,
      name: 'Bali, Indonesia',
      description: 'Island of the Gods',
      image: '/images/bali.jpg',
      price: '1,499'
    },
    {
      id: 3,
      name: 'Tokyo, Japan',
      description: 'Where tradition meets future',
      image: '/images/tokyo.jpg',
      price: '1,699'
    }
  ];
  res.json(destinations);
});

// The "catchall" handler: for any request that doesn't
// match one above, send back the index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 