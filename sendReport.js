const nodemailer = require('nodemailer');
const path = require('path');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'huynhthanhdanh9a4@gmail.com',
        pass: 'xwxv rprr jstv yxxx' // Replace with your actual password or use environment variables
    }
});

const mailOptions = {
  from: "huynhthanhdanh9a4@gmail.com",
  to: "huynhthanhdanh9a4@gmail.com",            // <-- Email người nhận
  subject: "📋 Báo cáo tự động Playwright",
  text: "Đây là báo cáo test tự động hôm nay.",
  attachments: [
    {
      filename: "report.html",
      path: path.join(__dirname, 'playwright-report/index.html')
    }
  ]
};

transporter.sendMail(mailOptions, (err, info) => {
  if (err) {
    console.error("❌ Lỗi gửi mail:", err);
  } else {
    console.log("✅ Gửi mail thành công:", info.response);
  }
});
      