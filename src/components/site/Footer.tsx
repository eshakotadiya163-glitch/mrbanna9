import logo from "@/assets/mrbanna-logo.png";
import { MessageCircle, Youtube, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Send } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="border-t border-border py-12 px-4 bg-background relative overflow-hidden">
      {/* Background Particles/Glow - matching the dark vibe */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gold/5 via-background to-background" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 mb-12">
          {/* Left Column - Brand & Socials */}
          <div className="md:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <img src={logo} alt="MrBaNNa" className="h-10 w-10" width={40} height={40} />
              <div className="font-display font-bold text-xl text-gradient-gold">MrBaNNa</div>
            </div>
            <p className="text-sm text-muted-foreground max-w-md leading-relaxed">
              Empowering traders worldwide with cutting-edge strategies, professional education, and unmatched support since 2018.
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                { icon: <Send className="h-4 w-4" />, href: "https://t.me/OfficialMrBaNNa" },
                { icon: <Youtube className="h-4 w-4" />, href: "https://www.youtube.com/@Mrbanna9" },
                { icon: <Instagram className="h-4 w-4" />, href: "https://www.instagram.com/parthbapu.official?igsh=MTNocmJncmMyMjJoaQ==" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-xl border border-border flex items-center justify-center text-muted-foreground hover:text-gold hover:border-gold transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Middle Column - Quick Links */}
          <div className="space-y-6">
            <h3 className="font-bold text-lg font-display text-foreground">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { label: "Services", href: "/#services" },
                { label: "Social", href: "/#social" },
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-gold transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column - Contact */}
          <div className="space-y-6">
            <h3 className="font-bold text-lg font-display text-foreground">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-gold flex-shrink-0" />
                <span>support@mrbanna.com</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-gold flex-shrink-0" />
                <span>+91 6351704033</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-gold flex-shrink-0" />
                <span>Dubai</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground text-center md:text-left">
            © {new Date().getFullYear()} MrBaNNa. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-muted-foreground">
            
            <Dialog>
              <DialogTrigger asChild>
                <button className="hover:text-gold transition-colors cursor-pointer">Privacy Policy</button>
              </DialogTrigger>
              <DialogContent className="max-w-3xl max-h-[85vh] overflow-y-auto bg-[#111111] border-gray-800 text-gray-300 custom-scrollbar">
                <DialogHeader className="sticky top-0 bg-[#111111] z-10 pb-4 border-b border-gray-800/50 mb-4 pt-2">
                  <DialogTitle className="text-xl font-bold text-white">Privacy Policy</DialogTitle>
                </DialogHeader>
                <div className="space-y-4 text-sm leading-relaxed pr-2 pb-4">
                  <p><strong>Privacy Policy for MrBaNNa</strong></p>
                  <p>Welcome to MrBaNNa ("we," "our," or "us"). Your privacy is important to us. This Privacy Policy explains how we collect, use, store, and protect your personal information when you visit our website, register an account, purchase our services, or interact with our platform.</p>
                  <p>Our platform provides trading education, premium Telegram communities, AI-powered trading tools, live trading sessions, and digital courses. By using our website, you agree to the practices described in this Privacy Policy.</p>
                  
                  <p className="font-bold text-white mt-6">1. Who We Are</p>
                  <p>MrBaNNa is an online trading education platform that offers:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>VIP Gold Trading Signals</li>
                    <li>AI-Powered Algo Trading Journal</li>
                    <li>Master Trader Course</li>
                    <li>Live London & US Session Trading</li>
                    <li>Educational Content</li>
                    <li>Trading Community Access</li>
                    <li>Digital Products and Services</li>
                  </ul>
                  <p>Our services are intended for educational purposes only and do not constitute financial or investment advice.</p>
                  
                  <p className="font-bold text-white mt-6">2. Information We Collect</p>
                  <p>We collect information to provide our services efficiently and securely.</p>
                  
                  <p className="text-white"><strong>Personal Information</strong></p>
                  <p>When you create an account or contact us, we may collect:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Full Name</li>
                    <li>Email Address</li>
                    <li>Username</li>
                    <li>Password (encrypted)</li>
                    <li>Country</li>
                    <li>Phone Number (if provided)</li>
                  </ul>
                  
                  <p className="text-white mt-4"><strong>Account Information</strong></p>
                  <p>When you register, we may store:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Account ID</li>
                    <li>Login history</li>
                    <li>Subscription status</li>
                    <li>Membership details</li>
                    <li>Account preferences</li>
                  </ul>
                  
                  <p className="text-white mt-4"><strong>Payment Information</strong></p>
                  <p>When purchasing any of our services (VIP Membership, Master Course, Algo Trading Journal, Live Trading Access, or other digital products), we may collect:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Payment Transaction ID</li>
                    <li>UPI Reference Number</li>
                    <li>Crypto Transaction Hash (TxID)</li>
                    <li>Payment Status</li>
                    <li>Purchase History</li>
                  </ul>
                  <p>We do not store:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Credit Card Numbers</li>
                    <li>Debit Card Numbers</li>
                    <li>CVV</li>
                    <li>Bank Account Details</li>
                    <li>UPI PIN</li>
                    <li>Online Banking Credentials</li>
                  </ul>
                  <p>Payments are securely processed through trusted third-party payment providers.</p>
                  
                  <p className="text-white mt-4"><strong>Trading-Related Information</strong></p>
                  <p>Depending on the service you use, we may collect:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>TradingView Username (if required)</li>
                    <li>Broker Name (optional)</li>
                    <li>Trading Journal Data</li>
                    <li>Trade Statistics</li>
                    <li>Performance Analytics</li>
                    <li>AI-generated Trading Reports</li>
                  </ul>
                  <p>This information is used solely to provide the requested services.</p>
                  
                  <p className="text-white mt-4"><strong>Usage Information</strong></p>
                  <p>We automatically collect information including:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>IP Address</li>
                    <li>Browser Type</li>
                    <li>Device Information</li>
                    <li>Operating System</li>
                    <li>Time Zone</li>
                    <li>Website Pages Visited</li>
                    <li>Session Duration</li>
                    <li>Referral Source</li>
                    <li>Click Activity</li>
                  </ul>
                  
                  <p className="text-white mt-4"><strong>Cookies</strong></p>
                  <p>We use cookies and similar technologies to:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Keep you logged in</li>
                    <li>Remember your preferences</li>
                    <li>Improve website performance</li>
                    <li>Analyze website traffic</li>
                    <li>Enhance user experience</li>
                  </ul>
                  <p>You can disable cookies through your browser settings; however, some features may not function properly.</p>

                  <p className="font-bold text-white mt-6">3. How We Use Your Information</p>
                  <p>We use your information to:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Create and manage your account</li>
                    <li>Verify your identity</li>
                    <li>Process payments</li>
                    <li>Provide access to purchased services</li>
                    <li>Deliver VIP Telegram access</li>
                    <li>Provide Algo Trading Journal services</li>
                    <li>Manage Master Course enrollment</li>
                    <li>Provide Live Trading access</li>
                    <li>Send purchase confirmations</li>
                    <li>Respond to support requests</li>
                    <li>Improve website performance</li>
                    <li>Improve our AI-powered analytics</li>
                    <li>Detect fraud and unauthorized access</li>
                    <li>Maintain platform security</li>
                    <li>Comply with legal obligations</li>
                  </ul>

                  <p className="font-bold text-white mt-6">4. AI & Trading Analytics</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Some of our services use AI to analyze trading performance and generate personalized reports.</li>
                    <li>These analytics are intended to help users improve trading discipline and performance.</li>
                    <li>AI-generated insights should not be considered financial advice or investment recommendations.</li>
                  </ul>

                  <p className="font-bold text-white mt-6">5. Telegram & Community Access</p>
                  <p>Certain premium services include access to private Telegram groups or communities. By joining these groups:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Your Telegram username may be visible to other members.</li>
                    <li>Group interactions are governed by Telegram's own Privacy Policy.</li>
                    <li>We are not responsible for data collected by Telegram.</li>
                  </ul>

                  <p className="font-bold text-white mt-6">6. Live Classes & Zoom Sessions</p>
                  <p>Our Master Trader Course may include live Zoom sessions. During live classes:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Your name may be visible to other participants.</li>
                    <li>Your microphone and camera are optional unless otherwise requested.</li>
                    <li>Sessions may be recorded for educational purposes.</li>
                    <li>Recordings remain the property of MrBaNNa.</li>
                  </ul>

                  <p className="font-bold text-white mt-6">7. Sharing Your Information</p>
                  <p>We respect your privacy. We never sell your personal information. We may share limited information with trusted third parties including:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Payment Providers</li>
                    <li>Cloud Database Services</li>
                    <li>Email Delivery Services</li>
                    <li>Analytics Providers</li>
                    <li>Customer Support Platforms</li>
                  </ul>
                  <p>These providers only receive the information necessary to perform their services.</p>

                  <p className="font-bold text-white mt-6">8. Data Security</p>
                  <p>We implement industry-standard security measures to protect your information, including:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>SSL Encryption</li>
                    <li>Secure Authentication</li>
                    <li>Encrypted Password Storage</li>
                    <li>Access Control</li>
                    <li>Secure Cloud Infrastructure</li>
                    <li>Regular Security Monitoring</li>
                  </ul>
                  <p>While we strive to protect your information, no online system is completely secure.</p>

                  <p className="font-bold text-white mt-6">9. Data Retention</p>
                  <p>We retain your information only for as long as necessary to:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Maintain your account</li>
                    <li>Provide purchased services</li>
                    <li>Meet legal obligations</li>
                    <li>Resolve disputes</li>
                    <li>Prevent fraud</li>
                  </ul>
                  <p>If you request account deletion, we will remove or anonymize your data where legally permitted.</p>

                  <p className="font-bold text-white mt-6">10. Your Rights</p>
                  <p>Depending on your jurisdiction, you may have the right to:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Access your personal information</li>
                    <li>Update inaccurate information</li>
                    <li>Request deletion of your account</li>
                    <li>Withdraw consent</li>
                    <li>Request a copy of your stored data</li>
                    <li>Object to certain processing activities</li>
                  </ul>
                  <p>To exercise these rights, please contact us using the details below.</p>

                  <p className="font-bold text-white mt-6">11. Children's Privacy</p>
                  <p>Our website and services are intended for individuals aged 18 years or older. We do not knowingly collect personal information from children under the age of 18. If we become aware that such information has been collected, it will be deleted promptly.</p>

                  <p className="font-bold text-white mt-6">12. Third-Party Services</p>
                  <p>Our website may contain links to third-party services including Telegram, YouTube, TradingView, Zoom, Payment Gateways, and Social Media Platforms. We are not responsible for the privacy practices or content of these external services. Please review their respective privacy policies before using them.</p>

                  <p className="font-bold text-white mt-6">13. International Users</p>
                  <p>If you access our website from outside your country, your information may be processed and stored on servers located in different jurisdictions. By using our services, you consent to such data transfers where permitted by law.</p>

                  <p className="font-bold text-white mt-6">14. Changes to This Privacy Policy</p>
                  <p>We may update this Privacy Policy from time to time to reflect changes in our services, legal requirements, or business practices. The updated version will always be published on this page with a revised "Last Updated" date. Continued use of our website after changes become effective constitutes acceptance of the revised Privacy Policy.</p>

                  <p className="font-bold text-white mt-6">15. Contact Us</p>
                  <p>If you have any questions regarding this Privacy Policy or your personal information, please contact us.</p>
                </div>
                
                <div className="pt-6 mt-4 border-t border-gray-800/50">
                  <DialogClose asChild>
                    <Button variant="outline" className="w-full bg-[#1A1A1A] hover:bg-[#2A2A2A] border-gray-800 text-white font-semibold">
                      Close
                    </Button>
                  </DialogClose>
                </div>
              </DialogContent>
            </Dialog>

            <Dialog>
              <DialogTrigger asChild>
                <button className="hover:text-gold transition-colors cursor-pointer">Terms of Service</button>
              </DialogTrigger>
              <DialogContent className="max-w-3xl max-h-[85vh] overflow-y-auto bg-[#111111] border-gray-800 text-gray-300 custom-scrollbar">
                <DialogHeader className="sticky top-0 bg-[#111111] z-10 pb-4 border-b border-gray-800/50 mb-4 pt-2">
                  <DialogTitle className="text-xl font-bold text-white">Terms of Service</DialogTitle>
                </DialogHeader>
                <div className="space-y-4 text-sm leading-relaxed pr-2 pb-4">
                  <p>Welcome to MrBaNNa ("Company," "we," "our," or "us"). These Terms of Service ("Terms") govern your access to and use of the MrBaNNa website, products, courses, communities, and services.</p>
                  <p>By accessing or using our website, purchasing any product, or joining any of our communities, you agree to be bound by these Terms. If you do not agree with these Terms, please do not use our services.</p>
                  
                  <p className="font-bold text-white mt-6">1. About MrBaNNa</p>
                  <p>MrBaNNa provides educational resources and digital services related to financial markets, including but not limited to:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>VIP Gold Trading Signals</li>
                    <li>Algo Trading Journal</li>
                    <li>Master Trader Course</li>
                    <li>Live Trading Sessions</li>
                    <li>Educational Videos</li>
                    <li>Trading Community Access</li>
                    <li>Digital Products & Resources</li>
                  </ul>
                  <p>All services are intended for educational purposes only.</p>
                  
                  <p className="font-bold text-white mt-6">2. Eligibility</p>
                  <p>To use our services, you must:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Be at least 18 years old.</li>
                    <li>Have the legal capacity to enter into a binding agreement.</li>
                    <li>Comply with all applicable laws and regulations in your country.</li>
                  </ul>

                  <p className="font-bold text-white mt-6">3. Account Registration</p>
                  <p>To access certain features, you may need to create an account. You agree to:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Provide accurate information.</li>
                    <li>Keep your login credentials secure.</li>
                    <li>Notify us immediately of unauthorized account access.</li>
                    <li>Be responsible for all activities under your account.</li>
                  </ul>
                  <p>We reserve the right to suspend or terminate accounts that violate these Terms.</p>

                  <p className="font-bold text-white mt-6">4. Purchases & Payments</p>
                  <p>We offer digital products and subscription-based services. Payments may be made through supported payment methods, including:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>UPI</li>
                    <li>Debit/Credit Cards</li>
                    <li>Cryptocurrency (where available)</li>
                    <li>Other approved payment gateways</li>
                  </ul>
                  <p>Access to purchased products is granted only after successful payment verification.</p>

                  <p className="font-bold text-white mt-6">5. Digital Products</p>
                  <p>Our products include digital content such as: Trading courses, Trading journals, Trading signals, Live session access, Educational materials. These products are licensed to you for personal use only.</p>
                  <p>You may not:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Share login credentials.</li>
                    <li>Redistribute course materials.</li>
                    <li>Copy or resell our content.</li>
                    <li>Upload our materials to other platforms.</li>
                    <li>Record or reproduce premium content without permission.</li>
                  </ul>
                  <p>Unauthorized distribution may result in immediate account termination and legal action.</p>

                  <p className="font-bold text-white mt-6">6. VIP Membership</p>
                  <p>VIP Membership may include: Daily Gold trading signals, Market updates, Telegram community access, Trade management guidance, Educational content. Signal frequency may vary depending on market conditions. We do not guarantee a fixed number of signals each day.</p>

                  <p className="font-bold text-white mt-6">7. Live Trading Sessions</p>
                  <p>Live trading sessions are educational demonstrations. Participation does not guarantee profits. Market conditions may require schedule changes, delays, or cancellations. Recorded sessions remain the intellectual property of MrBaNNa.</p>

                  <p className="font-bold text-white mt-6">8. Master Trader Course</p>
                  <p>The Master Trader Course provides trading education through videos, documents, live Zoom sessions, and practical examples. Course access is for the registered purchaser only. Sharing course materials with others is strictly prohibited.</p>

                  <p className="font-bold text-white mt-6">9. Algo Trading Journal</p>
                  <p>Our Algo Trading Journal provides analytics, reporting, and performance tracking tools. Analytics are based on available trading data and should not be considered financial advice. Users are responsible for reviewing and verifying all information before making trading decisions.</p>

                  <p className="font-bold text-white mt-6">10. No Financial Advice</p>
                  <p>MrBaNNa is an educational platform. Nothing on this website, including: Trading signals, Live trading, AI analytics, Courses, Telegram discussions, Videos should be considered: Financial advice, Investment advice, Portfolio management, Trading recommendations.</p>
                  <p>All trading decisions remain your sole responsibility.</p>

                  <p className="font-bold text-white mt-6">11. Trading Risk Disclosure</p>
                  <p>Trading financial markets involves substantial risk. You acknowledge that:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>You may lose part or all of your invested capital.</li>
                    <li>Past performance does not guarantee future results.</li>
                    <li>Trading signals are based on market analysis and are not guaranteed.</li>
                    <li>You should never trade money you cannot afford to lose.</li>
                  </ul>
                  <p>MrBaNNa is not responsible for any trading losses.</p>

                  <p className="font-bold text-white mt-6">12. Refund Policy</p>
                  <p>Due to the digital nature of our products and services: All sales are generally final. Refunds are not guaranteed once access has been provided. Exceptions may be made only where required by applicable law or at our sole discretion. Please review product details carefully before purchasing.</p>

                  <p className="font-bold text-white mt-6">13. Acceptable Use</p>
                  <p>You agree not to:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Attempt to hack or disrupt our platform.</li>
                    <li>Share premium content publicly.</li>
                    <li>Abuse customer support.</li>
                    <li>Upload malicious software.</li>
                    <li>Impersonate another user.</li>
                    <li>Violate applicable laws while using our services.</li>
                  </ul>
                  <p>Violation of these rules may result in immediate account suspension or permanent termination.</p>

                  <p className="font-bold text-white mt-6">14. Intellectual Property</p>
                  <p>All website content, including but not limited to: Logos, Branding, Videos, Courses, Trading strategies, Documents, Graphics, Software, AI tools is owned by MrBaNNa and protected by applicable intellectual property laws. No content may be copied, modified, distributed, or reproduced without prior written permission.</p>

                  <p className="font-bold text-white mt-6">15. Third-Party Services</p>
                  <p>Our website may integrate or link to third-party platforms including: Telegram, YouTube, TradingView, Zoom, Payment Providers, Social Media Platforms. We are not responsible for the availability, content, or policies of third-party services.</p>

                  <p className="font-bold text-white mt-6">16. Service Availability</p>
                  <p>We strive to provide uninterrupted service; however, we do not guarantee that our website or services will always be available. We may modify, suspend, or discontinue any service without prior notice.</p>

                  <p className="font-bold text-white mt-6">17. Limitation of Liability</p>
                  <p>To the maximum extent permitted by law, MrBaNNa and its owners, employees, affiliates, and partners shall not be liable for: Trading losses, Financial losses, Missed opportunities, Lost profits, Technical issues, Data loss, Service interruptions, Indirect or consequential damages. Your use of our services is entirely at your own risk.</p>

                  <p className="font-bold text-white mt-6">18. Indemnification</p>
                  <p>You agree to indemnify and hold harmless MrBaNNa, its owners, employees, affiliates, and partners from any claims, damages, liabilities, costs, or expenses arising from: Your misuse of our services, Your violation of these Terms, Your violation of applicable laws, Your trading activities.</p>

                  <p className="font-bold text-white mt-6">19. Termination</p>
                  <p>We reserve the right to suspend or terminate your account at any time if: You violate these Terms, You misuse our services, You engage in fraudulent or illegal activities, You distribute our premium content without authorization. Termination may occur without prior notice.</p>

                  <p className="font-bold text-white mt-6">20. Changes to These Terms</p>
                  <p>We may update these Terms from time to time. The latest version will always be published on this page with an updated "Last Updated" date. Your continued use of our services after changes become effective constitutes acceptance of the revised Terms.</p>

                  <p className="font-bold text-white mt-6">21. Governing Law</p>
                  <p>These Terms shall be governed by and interpreted in accordance with the laws of India, without regard to conflict of law principles. Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the competent courts in India.</p>

                  <p className="font-bold text-white mt-6">22. Contact Us</p>
                  <p>If you have any questions regarding these Terms of Service, please contact us : +91 6351704033</p>
                </div>
                
                <div className="pt-6 mt-4 border-t border-gray-800/50">
                  <DialogClose asChild>
                    <Button variant="outline" className="w-full bg-[#1A1A1A] hover:bg-[#2A2A2A] border-gray-800 text-white font-semibold">
                      Close
                    </Button>
                  </DialogClose>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </footer>
  );
}
