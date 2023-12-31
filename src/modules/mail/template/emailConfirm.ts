import * as Mailgen from 'mailgen';

interface MailBody {
    productName: string;
    productWebUrl: string;
    receiverName: string;
    confirmLink: string;
    language: string;
}

function genEmailString(mailBody: MailBody) {
    let mailGenerator = new Mailgen({
        theme: 'default',
        product: {
            name: mailBody.productName,
            link: mailBody.productWebUrl
        }
    });

    let email = {
        body: {
            greeting: "Hello",
            signature: "Xin Chân Thành Cảm Ơn",
            name: mailBody.receiverName,
            intro: `Chúng tôi là ${mailBody.productName}`,
            action: {
                instructions: `Xin chào ${mailBody.receiverName} chúng tôi nhận được yêu cầu đăng ký tài khoản của bạn vui lòng bấm vào nút xác nhận để hoàn tất quá trình đăng ký!`,
                button: {
                    color: '#22BC66',
                    text: "Xác nhận",
                    link: mailBody.confirmLink
                }
            },
            // outro: `Outro`
        }
    };

    return mailGenerator.generate(email);
}

export default genEmailString;