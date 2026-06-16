import nodemailer from 'nodemailer'
import dotenv from 'dotenv'

dotenv.config()

// Create transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD
  }
})

// Verify connection
transporter.verify((error, success) => {
  if (error) {
    console.log('❌ SMTP connection error:', error.message)
  } else {
    console.log('✅ SMTP connected and ready to send emails')
  }
})

// Send Welcome Email
export const sendWelcomeEmail = async (email, name) => {
  try {
    const mailOptions = {
      from: process.env.SMTP_FROM,
      to: email,
      subject: 'Welcome to IT INFOTECH SkillHub! 🎉',
      html: `
        <html>
          <body style="font-family: Arial, sans-serif; background-color: #f8fafc; padding: 20px;">
            <div style="max-width: 600px; margin: 0 auto; background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
              <h1 style="color: #0ea5e9; margin-top: 0;">Welcome to IT INFOTECH SkillHub! 🎉</h1>
              
              <p style="color: #333; font-size: 16px;">Hi ${name},</p>
              
              <p style="color: #555; line-height: 1.6;">
                Thank you for signing up! We're excited to have you join our community of typing enthusiasts.
              </p>
              
              <p style="color: #555; line-height: 1.6;">
                Your account is now active, and you can start learning immediately:
              </p>
              
              <ul style="color: #555; line-height: 1.8;">
                <li>📚 Access 6 comprehensive learning modules</li>
                <li>⌨️ Practice typing with interactive exercises</li>
                <li>🏆 Earn badges and climb the leaderboard</li>
                <li>📜 Get verified certificates upon completion</li>
              </ul>
              
              <p style="margin-top: 30px;">
                <a href="${process.env.FRONTEND_URL}/dashboard" style="background-color: #0ea5e9; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; display: inline-block; font-weight: bold;">
                  Go to Dashboard →
                </a>
              </p>
              
              <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 30px 0;">
              
              <p style="color: #999; font-size: 12px;">
                Best regards,<br>
                <strong>IT INFOTECH SkillHub Team</strong><br>
                <em>Learn · Practice · Get Certified</em>
              </p>
            </div>
          </body>
        </html>
      `
    }
    
    await transporter.sendMail(mailOptions)
    console.log(`✅ Welcome email sent to ${email}`)
    return { success: true, message: 'Welcome email sent' }
  } catch (error) {
    console.error(`❌ Error sending welcome email to ${email}:`, error.message)
    return { success: false, error: error.message }
  }
}

// Send Certificate Email
export const sendCertificateEmail = async (email, name, certificateData) => {
  try {
    const { certificateId, moduleName, score, accuracy } = certificateData
    
    const mailOptions = {
      from: process.env.SMTP_FROM,
      to: email,
      subject: `🎓 Congratulations! You've Earned a Certificate - ${moduleName}`,
      html: `
        <html>
          <body style="font-family: Arial, sans-serif; background-color: #f8fafc; padding: 20px;">
            <div style="max-width: 600px; margin: 0 auto; background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
              <h1 style="color: #0ea5e9; margin-top: 0;">🎓 Congratulations ${name}!</h1>
              
              <p style="color: #333; font-size: 16px;">
                You have successfully completed the <strong>${moduleName}</strong> module!
              </p>
              
              <div style="background-color: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #0ea5e9;">
                <h3 style="color: #0ea5e9; margin-top: 0;">Your Certificate Details:</h3>
                <table style="width: 100%; color: #555;">
                  <tr>
                    <td style="padding: 8px;"><strong>Certificate ID:</strong></td>
                    <td style="padding: 8px; text-align: right;">${certificateId}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px;"><strong>Module:</strong></td>
                    <td style="padding: 8px; text-align: right;">${moduleName}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px;"><strong>Score:</strong></td>
                    <td style="padding: 8px; text-align: right;">${score} WPM</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px;"><strong>Accuracy:</strong></td>
                    <td style="padding: 8px; text-align: right;">${accuracy}%</td>
                  </tr>
                </table>
              </div>
              
              <p style="color: #555; line-height: 1.6;">
                Your certificate is now available in your dashboard and can be shared with:
              </p>
              
              <ul style="color: #555; line-height: 1.8;">
                <li>LinkedIn Profile</li>
                <li>Resume/CV</li>
                <li>Employers and Institutions</li>
              </ul>
              
              <p style="margin-top: 30px;">
                <a href="${process.env.FRONTEND_URL}/certificates" style="background-color: #10b981; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; display: inline-block; font-weight: bold;">
                  View Certificate →
                </a>
              </p>
              
              <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 30px 0;">
              
              <p style="color: #999; font-size: 12px;">
                Best regards,<br>
                <strong>IT INFOTECH SkillHub Team</strong><br>
                <em>Learn · Practice · Get Certified</em>
              </p>
            </div>
          </body>
        </html>
      `
    }
    
    await transporter.sendMail(mailOptions)
    console.log(`✅ Certificate email sent to ${email}`)
    return { success: true, message: 'Certificate email sent' }
  } catch (error) {
    console.error(`❌ Error sending certificate email to ${email}:`, error.message)
    return { success: false, error: error.message }
  }
}

// Send Password Reset Email
export const sendPasswordResetEmail = async (email, resetLink) => {
  try {
    const mailOptions = {
      from: process.env.SMTP_FROM,
      to: email,
      subject: 'Password Reset Request - IT INFOTECH SkillHub',
      html: `
        <html>
          <body style="font-family: Arial, sans-serif; background-color: #f8fafc; padding: 20px;">
            <div style="max-width: 600px; margin: 0 auto; background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
              <h1 style="color: #0ea5e9; margin-top: 0;">Reset Your Password</h1>
              
              <p style="color: #555; line-height: 1.6;">
                We received a request to reset your password. Click the button below to create a new password.
              </p>
              
              <p style="color: #f59e0b; font-size: 14px;">
                ⚠️ This link expires in 24 hours.
              </p>
              
              <p style="margin-top: 30px;">
                <a href="${resetLink}" style="background-color: #0ea5e9; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; display: inline-block; font-weight: bold;">
                  Reset Password →
                </a>
              </p>
              
              <p style="color: #999; font-size: 12px; margin-top: 20px;">
                If you didn't request this, please ignore this email.
              </p>
              
              <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 30px 0;">
              
              <p style="color: #999; font-size: 12px;">
                Best regards,<br>
                <strong>IT INFOTECH SkillHub Team</strong>
              </p>
            </div>
          </body>
        </html>
      `
    }
    
    await transporter.sendMail(mailOptions)
    console.log(`✅ Password reset email sent to ${email}`)
    return { success: true, message: 'Password reset email sent' }
  } catch (error) {
    console.error(`❌ Error sending password reset email to ${email}:`, error.message)
    return { success: false, error: error.message }
  }
}

// Send Batch Notification Email
export const sendBatchNotificationEmail = async (email, name, batchName, message) => {
  try {
    const mailOptions = {
      from: process.env.SMTP_FROM,
      to: email,
      subject: `📢 Notification from ${batchName} - IT INFOTECH SkillHub`,
      html: `
        <html>
          <body style="font-family: Arial, sans-serif; background-color: #f8fafc; padding: 20px;">
            <div style="max-width: 600px; margin: 0 auto; background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
              <h1 style="color: #0ea5e9; margin-top: 0;">📢 Announcement from ${batchName}</h1>
              
              <p style="color: #333; font-size: 16px;">Hi ${name},</p>
              
              <div style="background-color: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #0ea5e9;">
                <p style="color: #555; line-height: 1.8; margin: 0;">
                  ${message}
                </p>
              </div>
              
              <p style="margin-top: 30px;">
                <a href="${process.env.FRONTEND_URL}/dashboard" style="background-color: #0ea5e9; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; display: inline-block; font-weight: bold;">
                  View More →
                </a>
              </p>
              
              <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 30px 0;">
              
              <p style="color: #999; font-size: 12px;">
                Best regards,<br>
                <strong>IT INFOTECH SkillHub Team</strong>
              </p>
            </div>
          </body>
        </html>
      `
    }
    
    await transporter.sendMail(mailOptions)
    console.log(`✅ Batch notification email sent to ${email}`)
    return { success: true, message: 'Notification email sent' }
  } catch (error) {
    console.error(`❌ Error sending batch notification to ${email}:`, error.message)
    return { success: false, error: error.message }
  }
}

export default transporter
