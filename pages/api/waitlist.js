import dbConnect from '../../lib/dbConnect'; // Ensure correct path to dbConnect
import Email from '../../models/Email'; // Ensure correct path to Email model

export default async function handler(req, res) {
  await dbConnect(); // Connect to the database

  if (req.method === 'POST') { // Check if the request method is POST
    const { email } = req.body; // Extract email from request body

    if (!email) {
      return res.status(400).json({ error: 'Email is required' }); // Validate email input
    }

    try {
      const newEntry = new Email({ email }); // Create a new Email entry
      await newEntry.save(); // Save the entry to the database
      return res.status(201).json({ message: 'Email added to waitlist' }); // Success response
    } catch (error) {
      console.error('Error saving email:', error); // Log the error for debugging
      return res.status(500).json({ error: 'Failed to add email' }); // Error response
    }
  } else {
    return res.status(405).json({ error: 'Method not allowed' }); // Method not allowed response
  }
}