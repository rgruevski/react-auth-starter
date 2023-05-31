import sendgrid from '@sendgrid/mail';
sendgrid.setApiKey("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");
export const sendEmail = ({ to, from, subject, text, html }) => {
    const message = { to, from, subject, text, html }; // Configuration Object
    return sendgrid.send(message);
} // returns a Promise to use down stream