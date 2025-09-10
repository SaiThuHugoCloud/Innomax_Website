// api/contact.js
export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Validate the data
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Here you would typically:
    // 1. Save to a database
    // 2. Send an email notification
    // 3. Integrate with a CRM

    // For now, we'll just log the data and return a success response
    console.log('Contact form submission:', { name, email, message });

    // In a real application, you might want to use Nodemailer to send an email
    // or save to a database like MongoDB or Firebase

    return res.status(200).json({ success: true });
  } else {
    return res.status(405).json({ error: 'Method not allowed' });
  }
}