export function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email regex
    if (!emailRegex.test(email)) {
        return { error: { details: [{ message: 'Invalid email format' }] } };
    }
    return {}; // No error
}
