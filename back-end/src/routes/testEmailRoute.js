import { sendEmail } from "../../util/sendEmail";
export const testEmailRoute = {
    path: '/api/test-email',
    method: 'post',
    handler: async (req, res) => {
        console.log(req);
        try {
            await sendEmail({
                to: 'bobbygluon@gmail.com',
                from: 'robbygluon@gmail.com',
                subject: 'Does this work?',
                text: 'Truman Test Complete.'
            });
            res.sendStatus(200);
        } catch (err) {
            console.log(err);
            res.sendStatus(500);
        }
    }
}