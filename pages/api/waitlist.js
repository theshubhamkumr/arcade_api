import clientPromise from '../../lib/mongodb';
import { validateEmail } from '../../lib/validation'; // Assume you have a validation function

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { email } = req.body;

        // Validate email
        const { error } = validateEmail(email);
        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }

        try {
            const client = await clientPromise;
            const db = client.db('waitlist');

            // Check if the email already exists
            const existingEmail = await db.collection('email').findOne({ email });
            if (existingEmail) {
                return res.status(409).json({ message: 'Email already exists in the waitlist' });
            }

            // Insert the new email
            const result = await db.collection('email').insertOne({ email });

            return res.status(201).json({ message: 'Email added to waitlist', result });
        } catch (error) {
            console.error('Database error:', error); // Log the error
            return res.status(500).json({ message: 'Internal server error' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
