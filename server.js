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
  const { to, subject, formData = {} } = req.body;

  // Check if this is an ebook download request (safe access)
  const isEbookRequest = Boolean(formData.ebook);

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: to,
    subject: subject,
    html: isEbookRequest ? `
      <h2>Ebook Download Request</h2>
      
      <h3>Requested Ebook:</h3>
      <p><strong>Title:</strong> ${formData.ebook}</p>
      <p><strong>Category:</strong> ${formData.category}</p>
      
      <h3>Contact Information:</h3>
      <p><strong>Name:</strong> ${formData.fullName}</p>
      <p><strong>Email:</strong> ${formData.email}</p>
      <p><strong>Phone:</strong> ${formData.phone || 'Not provided'}</p>
      
      ${formData.message ? `
        <h3>Message:</h3>
        <p>${formData.message}</p>
      ` : ''}
      
      <hr style="margin: 20px 0;">
      <p><em>Please send the requested ebook to the client's email address.</em></p>
    ` : `
      <h2>New Client Inquiry</h2>
      
      <h3>Contact Information:</h3>
      <p><strong>Name:</strong> ${formData.fullName}</p>
      <p><strong>Address:</strong> ${formData.address || 'Not provided'}</p>
      <p><strong>City:</strong> ${formData.city || 'Not provided'}</p>
      <p><strong>State:</strong> ${formData.state || 'Not provided'}</p>
      <p><strong>ZIP Code:</strong> ${formData.zipCode || 'Not provided'}</p>
      <p><strong>Phone:</strong> ${formData.phone || 'Not provided'}</p>
      <p><strong>Email:</strong> ${formData.email}</p>
      
      <h3>Vacation Details:</h3>
      <p><strong>Type of Vacation:</strong> ${formData.vacationType || 'Not specified'}</p>
      <p><strong>Budget Range:</strong> ${formData.budget || 'Not specified'}</p>
      <p><strong>Number of Adults:</strong> ${formData.numberOfAdults || 'Not specified'}</p>
      <p><strong>Number of Children Under 17:</strong> ${formData.numberOfChildren || '0'}</p>
      <p><strong>Departure Airport:</strong> ${formData.departureAirport || 'Not specified'}</p>
      ${formData.travelDates ? `<p><strong>Travel Dates:</strong> ${formData.travelDates}</p>` : ''}
      
      ${formData.additionalInfo ? `
        <h3>Additional Information:</h3>
        <p>${formData.additionalInfo}</p>
      ` : ''}
      
      ${formData.message ? `
        <h3>Message:</h3>
        <p>${formData.message}</p>
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
// API route for client review submissions
app.post('/api/submit-review', async (req, res) => {
  const { familyLastName, reviewText, rating } = req.body;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: 'New Client Review Submission',
    html: `
      <h2>New Review Received</h2>
      <p><strong>Family Last Name:</strong> ${familyLastName}</p>
      <p><strong>Star Rating:</strong> ${rating}/5</p>
      <h3>Review:</h3>
      <p>${reviewText}</p>
      <hr style="margin: 20px 0;">
      <p>This review was submitted via the Leave a Review form on the website.</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ success: true });
  } catch (error) {
    console.error('Error sending client review email:', error);
    res.status(500).json({ error: 'Failed to send review' });
  }
});
// API route for giveaway entry
app.post('/api/giveaway-entry', async (req, res) => {
  const { firstName, lastName, zip, email } = req.body;
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: 'New Giveaway Entry - $100 off next Full Vacation booked',
    html: `
      <h2>Giveaway Entry</h2>
      <p><strong>First Name:</strong> ${firstName}</p>
      <p><strong>Last Name:</strong> ${lastName}</p>
      <p><strong>Zip Code:</strong> ${zip}</p>
      <p><strong>Email:</strong> ${email}</p>
      <hr style="margin: 20px 0;">
      <p>Giveaway: $100 off next Full Vacation booked. Draw: Aug 31, 6pm. Book by 12/31/2025, travel by 12/31/2026.</p>
    `
  };
  try {
    await transporter.sendMail(mailOptions);
    res.json({ success: true });
  } catch (error) {
    console.error('Error sending giveaway entry email:', error);
    res.status(500).json({ error: 'Failed to send entry' });
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