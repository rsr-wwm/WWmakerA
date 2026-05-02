
import { ServiceCategory, SolutionItem, NavItem, ProductItem, ProblemItem, IndustryItem, GlossaryItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Solutions', path: '/solutions' },
  { label: 'Industries', path: '/industries' }, // Added Industries
  { label: 'Products', path: '/products' },
  { label: 'Pricing', path: '/pricing' },
  { label: 'Problems', path: '/problems' },
  { label: 'Case Studies', path: '/case-studies' },
  { label: 'Careers', path: '/careers' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' },
];

export const GLOSSARY: GlossaryItem[] = [
    { term: 'API', definition: 'Application Programming Interface. A bridge that allows two software programs to communicate with each other.', category: 'Development' },
    { term: 'A2P 10DLC', definition: 'Application-to-Person 10 Digit Long Code. A system in the US allowing businesses to send SMS via standard phone numbers.', category: 'Messaging' },
    { term: 'Chatbot', definition: 'Software that simulates human conversation through voice commands or text chats.', category: 'AI' },
    { term: 'Cloud Computing', definition: 'Delivery of computing services—servers, storage, databases, networking—over the Internet.', category: 'Infrastructure' },
    { term: 'CRM', definition: 'Customer Relationship Management. Technology for managing all your company\'s relationships and interactions with customers.', category: 'Business' },
    { term: 'Generative AI', definition: 'A type of artificial intelligence capable of generating text, images, or other media in response to prompts.', category: 'AI' },
    { term: 'LLM', definition: 'Large Language Model. A deep learning algorithm that can recognize, summarize, translate, predict, and generate text.', category: 'AI' },
    { term: 'Omnichannel', definition: 'A cross-channel content strategy that improves the user experience and drives better relationships across points of contact.', category: 'Marketing' },
    { term: 'OTP', definition: 'One-Time Password. A password that is valid for only one login session or transaction.', category: 'Security' },
    { term: 'RCS', definition: 'Rich Communication Services. A communication protocol between mobile telephone carriers and between phone and carrier, aiming at replacing SMS messages.', category: 'Messaging' },
    { term: 'SaaS', definition: 'Software as a Service. A software licensing and delivery model in which software is licensed on a subscription basis and is centrally hosted.', category: 'Business' },
    { term: 'SEO', definition: 'Search Engine Optimization. The process of improving the quality and quantity of website traffic to a website or a web page from search engines.', category: 'Marketing' },
    { term: 'SMPP', definition: 'Short Message Peer-to-Peer. An open, industry standard protocol used to provide a flexible data communication interface for the transfer of short message data.', category: 'Messaging' },
    { term: 'Webhook', definition: 'A method of augmenting or altering the behavior of a web page or web application with custom callbacks.', category: 'Development' },
    { term: 'Zero Trust', definition: 'A strategic initiative that helps prevent successful data breaches by eliminating the concept of trust from an organization\'s network architecture.', category: 'Security' },
    { term: 'VoIP', definition: 'Voice over Internet Protocol. A technology that allows you to make voice calls using a broadband Internet connection instead of a regular (or analog) phone line.', category: 'Voice' },
    { term: 'Latency', definition: 'The delay before a transfer of data begins following an instruction for its transfer.', category: 'Infrastructure' },
    { term: 'SDK', definition: 'Software Development Kit. A collection of software development tools in one installable package.', category: 'Development' },
    { term: 'Uptime', definition: 'The time during which a machine (such as a computer) is in operation.', category: 'Infrastructure' },
    { term: 'Lead Generation', definition: 'The initiation of consumer interest or inquiry into products or services of a business.', category: 'Marketing' }
];

export const INDUSTRIES: IndustryItem[] = [
    {
        id: 'fintech',
        title: 'FinTech & Banking',
        description: 'Secure, compliant communication infrastructure for modern finance.',
        fullDescription: 'In the fast-paced world of Finance, trust and speed are currency. We provide banking-grade security for transaction alerts, OTPs, and fraud notifications. Our infrastructure helps you comply with regulations while delivering a seamless user experience.',
        icon: '💳',
        challenges: [
            { title: 'Fraud Prevention', description: 'Preventing unauthorized access with speed.' },
            { title: 'Regulatory Compliance', description: 'Meeting PCI-DSS and GDPR standards.' },
            { title: 'User Trust', description: 'Ensuring communications look and feel official.' }
        ],
        solutions: ['secure-gate-2fa', 'fintech-compliance-vault', 'bulk-sms-gateway'],
        stats: [
            { value: '99.99%', label: 'Uptime' },
            { value: '<3s', label: 'OTP Delivery' },
            { value: 'PCI', label: 'Compliant' }
        ],
        metaTitle: 'FinTech Communication Solutions | Secure SMS & AI',
        metaDescription: 'Secure messaging and AI solutions for FinTech. Flash delivery OTPs, fraud alerts, and compliant banking communication.'
    },
    {
        id: 'healthcare',
        title: 'Healthcare',
        description: 'HIPAA-compliant patient engagement and appointment management.',
        fullDescription: 'Reduce no-shows and improve patient outcomes with automated communication. From appointment reminders to post-care follow-ups, our secure platform ensures patient data remains private while keeping lines of communication open.',
        icon: '🏥',
        challenges: [
            { title: 'Missed Appointments', description: 'No-shows costing revenue and time.' },
            { title: 'Data Privacy', description: 'Strict HIPAA data handling requirements.' },
            { title: 'Staff Burnout', description: 'Manual scheduling calls overwhelming staff.' }
        ],
        solutions: ['whatsapp-business', 'voicebot-studio', 'compliance-audits'],
        stats: [
            { value: '-40%', label: 'No-Shows' },
            { value: 'HIPAA', label: 'Ready' },
            { value: '24/7', label: 'Patient Support' }
        ],
        metaTitle: 'Healthcare Digital Solutions | HIPAA Compliant Messaging',
        metaDescription: 'Automate patient reminders and support. HIPAA-compliant SMS and AI chatbots for healthcare providers.'
    },
    {
        id: 'ecommerce',
        title: 'Retail & E-commerce',
        description: 'Drive sales with omnichannel marketing and support.',
        fullDescription: 'Turn one-time buyers into loyal fans. Our suite for retail allows you to send personalized offers, recover abandoned carts via WhatsApp, and provide instant order tracking updates without human intervention.',
        icon: '🛒',
        challenges: [
            { title: 'Cart Abandonment', description: 'Users leaving before checkout.' },
            { title: 'Customer Support', description: 'High volume of "Where is my order?" tickets.' },
            { title: 'Engagement', description: 'Email open rates dropping below 15%.' }
        ],
        solutions: ['cart-abandonment', 'stockflow-pro', 'omnichannel-marketing-suite'],
        stats: [
            { value: '30%', label: 'Cart Recovery' },
            { value: '98%', label: 'Open Rate' },
            { value: 'Auto', label: 'Tracking Updates' }
        ],
        metaTitle: 'E-commerce Automation Tools | Retail SMS & AI',
        metaDescription: 'Boost retail sales. Recover abandoned carts and automate order tracking with WhatsApp and SMS marketing.'
    },
    {
        id: 'logistics',
        title: 'Logistics & Transport',
        description: 'Real-time fleet tracking and driver communication.',
        fullDescription: 'Keep your fleet moving and your customers informed. Our APIs connect your TMS (Transport Management System) to drivers and end-customers, providing real-time location updates, delivery proof, and route optimization alerts.',
        icon: '🚚',
        challenges: [
            { title: 'Delivery Visibility', description: 'Customers anxious about package location.' },
            { title: 'Driver Communication', description: 'Inefficient phone coordination.' },
            { title: 'Route Efficiency', description: 'Fuel costs rising due to poor routing.' }
        ],
        solutions: ['supply-chain-intel', 'bulk-sms-gateway', 'remote-infrastructure-management'],
        stats: [
            { value: 'Real-time', label: 'Tracking' },
            { value: '-20%', label: 'Call Volume' },
            { value: 'Global', label: 'Coverage' }
        ],
        metaTitle: 'Logistics Communication API | Supply Chain Solutions',
        metaDescription: 'Streamline logistics. Real-time delivery alerts, driver communication, and supply chain tracking APIs.'
    },
    {
        id: 'real-estate',
        title: 'Real Estate',
        description: 'Automate lead qualification and viewing schedules.',
        fullDescription: 'Speed is everything in Real Estate. Respond to portal leads instantly with our AI agents. Schedule viewings automatically, send virtual tour links via SMS, and keep buyers engaged until they are ready to sign.',
        icon: '🏘️',
        challenges: [
            { title: 'Slow Response', description: 'Losing leads to faster agents.' },
            { title: 'Scheduling Chaos', description: 'Back-and-forth emails to book viewings.' },
            { title: 'Lead Qualification', description: 'Wasting time on unqualified buyers.' }
        ],
        solutions: ['lead-leakage', 'ai-customization', 'crm-connector-hub'],
        stats: [
            { value: 'Instant', label: 'Lead Response' },
            { value: '2x', label: 'Viewings Booked' },
            { value: 'Auto', label: 'Calendar Sync' }
        ],
        metaTitle: 'Real Estate Automation | Lead Response AI',
        metaDescription: 'Close more property deals. Instant lead response and automated viewing scheduling for real estate agents.'
    },
    {
        id: 'education',
        title: 'Education',
        description: 'Student engagement and campus safety alerts.',
        fullDescription: 'Connect students, faculty, and administration. Use our platform for emergency broadcasting, admissions support chatbots, and automated course reminders to improve student success and safety.',
        icon: '🎓',
        challenges: [
            { title: 'Emergency Alerts', description: 'Reaching everyone instantly on campus.' },
            { title: 'Admissions Queries', description: 'High volume of repetitive questions.' },
            { title: 'Student Retention', description: 'Students missing deadlines.' }
        ],
        solutions: ['bulk-sms-gateway', 'voicebot-studio', 'ai-automation-workforce'],
        stats: [
            { value: '100%', label: 'Reach' },
            { value: 'Safe', label: 'Campus' },
            { value: '24/7', label: 'Admissions Help' }
        ],
        metaTitle: 'Education Communication Systems | Campus SMS & AI',
        metaDescription: 'Enhance campus safety and student engagement. Emergency alert systems and AI support for educational institutions.'
    }
];

export const PROBLEMS: ProblemItem[] = [
  {
    id: 'low-customer-engagement',
    title: 'Customers Ignoring Emails',
    shortDescription: 'Are your emails going to spam or just being ignored?',
    fullDescription: 'Most people have hundreds of unread emails. If you send a sale alert or an appointment reminder via email, there is an 80% chance it won\'t be seen. This "Low Engagement" kills your sales. We fix this by moving your urgent messages to channels people actually look at: SMS and WhatsApp.',
    symptoms: [
      'Email open rates below 20%',
      'Customers missing appointments',
      'No one replies to your newsletters',
      'Phone calls going unanswered'
    ],
    ourSolution: 'We implement "Omnichannel Messaging". We connect your system to a Bulk SMS and WhatsApp API. Messages land directly on the phone lock screen, where 98% of them are read within 3 minutes.',
    relatedServices: ['rcs-business-messaging', 'bulk-sms-gateway', 'whatsapp-business', 'ai-customization'],
    faqs: [
      { category: 'Comparison', question: 'SMS vs Email: Which is better?', answer: 'SMS is for speed (98% read rate). Email is for detail. We help you use both together.' },
      { category: 'Privacy', question: 'Is texting customers legal?', answer: 'Yes, if they agree to it. We provide tools to handle "Opt-ins" so you stay 100% compliant.' }
    ],
    metaTitle: 'Fix Low Email Open Rates | Switch to SMS & WhatsApp',
    metaDescription: 'Stop being ignored. Increase customer engagement by 300% by switching from email to high-conversion SMS and WhatsApp messaging.'
  },
  {
    id: 'lead-leakage',
    title: 'Losing Leads to Slow Follow-up',
    shortDescription: 'People call you, you miss it, they call your competitor.',
    fullDescription: 'Speed is everything. If a potential customer calls you and you don\'t answer, they won\'t leave a voicemail—they will call the next business on Google. This is called "Lead Leakage". You are paying for ads to get the phone to ring, but losing money because you can\'t answer fast enough.',
    symptoms: [
      'Missed calls not returned immediately',
      'Contact forms sitting in inbox for days',
      'Sales team forgetting to follow up',
      'High ad spend with low sales'
    ],
    ourSolution: 'We install a "Safety Net". 1. Missed Call Auto-Reply: If you miss a call, our system instantly texts the caller: "Sorry we missed you! How can we help?". 2. Instant Alerts: Your sales team gets a WhatsApp notification the second a lead arrives.',
    relatedServices: ['missed-call-services', 'bulk-sms-gateway', 'enterprise-software'],
    faqs: [
      { category: 'Automation', question: 'Does the text happen automatically?', answer: 'Yes. Our system detects the missed call and sends the SMS instantly without you touching anything.' },
      { category: 'CRM', question: 'Does it save the number?', answer: 'Yes, every caller is logged into a database (CRM) so you can market to them later.' }
    ],
    metaTitle: 'Stop Losing Leads | Automated Missed Call Text Back',
    metaDescription: 'Capture every lead. Our automated Missed Call Text Back service ensures you never lose a customer to a competitor again.'
  },
  {
    id: 'data-loss-downtime',
    title: 'Fear of Data Loss & Hacking',
    shortDescription: 'What happens if your server crashes or you get hacked today?',
    fullDescription: 'Your business runs on data: customer lists, invoices, and contracts. If a computer crashes, a virus hits (Ransomware), or an employee accidentally deletes a folder, that data could be gone forever. "Hoping" it doesn\'t happen is not a strategy. You need an automated, bulletproof backup system.',
    symptoms: [
      'No automatic daily backups',
      'Files stored on just one laptop',
      'Fear of ransomware attacks',
      'System crashes halting work'
    ],
    ourSolution: 'We implement the "3-2-1 Backup Rule" automatically. We encrypt your data and send copies to secure Cloud Servers (AWS/Google). If your office burns down, we can restore your entire business from the cloud in hours, not days.',
    relatedServices: ['enterprise-software', 'web-development', 'managed-aws'],
    faqs: [
      { category: 'Security', question: 'Is my data readable by you?', answer: 'No. We use AES-256 encryption. Only you hold the key to read your files.' },
      { category: 'Recovery', question: 'How fast can we recover?', answer: 'Critical systems can usually be rebooted in the cloud within 4 hours.' }
    ],
    metaTitle: 'Prevent Business Data Loss | Automated Cloud Backups',
    metaDescription: 'Secure your business against ransomware and crashes. Automated, encrypted cloud backups and disaster recovery plans.'
  },
  {
    id: 'cart-abandonment',
    title: 'Shoppers Leaving Without Buying',
    shortDescription: '70% of people add items to the cart and then leave. Get them back.',
    fullDescription: 'Cart Abandonment is the #1 revenue killer for E-commerce. Customers get distracted, or they decide to compare prices and forget to come back. Sending a generic "You forgot this" email often lands in the Promotions tab. You need a way to grab their attention immediately to close the sale.',
    symptoms: [
      'High traffic, low sales',
      'Lots of "Initiated Checkout" events',
      'Low email click-through rates',
      'Inventory tied up in abandoned carts'
    ],
    ourSolution: 'We deploy "Recovery Bots". 1 hour after they leave, we send a friendly WhatsApp or SMS: "Hey [Name], your items are saved! Here is a 5% discount if you complete the order now." This personal nudge recovers 20-30% of lost sales.',
    relatedServices: ['whatsapp-business', 'rcs-business-messaging', 'email-marketing'],
    faqs: [
      { category: 'Results', question: 'How much money can I make?', answer: 'Clients typically see a 15% boost in total revenue just by turning this feature on.' },
      { category: 'Platform', question: 'Does it work with Shopify?', answer: 'Yes, we plug directly into Shopify, WooCommerce, and Magento.' }
    ],
    metaTitle: 'Reduce Cart Abandonment | WhatsApp Recovery Automation',
    metaDescription: 'Recover lost E-commerce sales. Use automated WhatsApp and SMS messages to bring customers back to checkout.'
  },
  {
    id: 'operational-inefficiency',
    title: 'Too Much Manual Data Entry',
    shortDescription: 'Staff wasting hours copying data from Excel to CRM?',
    fullDescription: 'If your employees are spending 3 hours a day copying names from a spreadsheet into an invoice system, you are burning money. Humans make typos, get tired, and are expensive. Robots (Scripts and APIs) are free, instant, and never make mistakes. We automate the boring stuff so your team can do real work.',
    symptoms: [
      'Copy-pasting between software',
      'Frequent typing errors',
      'Staff burnout from boring tasks',
      'Slow order processing'
    ],
    ourSolution: 'We build "Digital Bridges" (APIs). We make your website talk to your accounting software automatically. When a sale happens, the invoice is created, the email is sent, and the inventory is updated instantly without a human touching a keyboard.',
    relatedServices: ['enterprise-software', 'ai-customization', 'web-development'],
    faqs: [
      { category: 'Cost', question: 'Is custom automation expensive?', answer: 'The initial setup costs money, but it usually pays for itself in 3 months by saving labor costs.' },
      { category: 'Tech', question: 'Do I need to change my software?', answer: 'Usually not. We build connectors that work with the tools you already have.' }
    ],
    metaTitle: 'Automate Manual Data Entry | Business Process Automation',
    metaDescription: 'Stop wasting time on data entry. We connect your software apps (API Integration) to automate workflows and save costs.'
  },
  {
    id: 'support-overload',
    title: 'Customer Support is Overwhelmed',
    shortDescription: 'Drowning in "Where is my order?" tickets?',
    fullDescription: 'As you grow, support volume explodes. Hiring more agents is expensive and hard to manage. If 80% of your questions are repetitive (Hours? Pricing? Tracking?), you don\'t need a human to answer them. You need a smart system that filters these out, leaving humans to handle the complex issues.',
    symptoms: [
      'Long hold times on phone',
      'Support tickets piling up',
      'High agent turnover',
      'Angry customers on social media'
    ],
    ourSolution: 'We install an "AI Gatekeeper". A smart Chatbot on WhatsApp or Web answers the common questions instantly. It connects to your shipping system to give tracking numbers automatically. Only hard questions are passed to your human agents.',
    relatedServices: ['ai-customization', 'whatsapp-business', 'ivr-systems'],
    faqs: [
      { category: 'Quality', question: 'Will customers hate the bot?', answer: 'Not if it\'s smart. Our bots solve problems instantly. People hate waiting, not bots.' },
      { category: 'Availability', question: 'Does it work 24/7?', answer: 'Yes. Your support is now open nights, weekends, and holidays.' }
    ],
    metaTitle: 'Automate Customer Support | AI Chatbots & Helpdesk',
    metaDescription: 'Scale your support without hiring. Use AI Chatbots to handle FAQs and order tracking 24/7.'
  },
  {
    id: 'high-churn-rate',
    title: 'High Customer Churn',
    shortDescription: 'Customers buying once and never coming back?',
    fullDescription: 'Acquiring a new customer costs 5x more than retaining an old one. If your churn rate is high, you are leaking value. Customers leave because they feel unappreciated or forget you exist. We deploy automated "Lifecycle Marketing" to keep your brand top-of-mind without spamming.',
    symptoms: [
      'Low repeat purchase rate',
      'Customers switching to competitors',
      'No feedback loops'
    ],
    ourSolution: 'We implement loyalty loops using SMS and Email. A week after purchase: "How was it?". On their birthday: "Here is a gift". These micro-interactions build emotional connection and drastically reduce churn.',
    relatedServices: ['omnichannel-marketing-suite', 'customer-engagement-overhaul'],
    faqs: [
      { category: 'Retention', question: 'What is a good retention rate?', answer: 'It varies by industry, but increasing retention by just 5% can increase profits by 25-95%.' }
    ],
    metaTitle: 'Reduce Customer Churn | Loyalty Automation',
    metaDescription: 'Stop losing customers. Implement automated lifecycle marketing to boost retention and lifetime value.'
  },
  {
    id: 'shadow-it-risks',
    title: 'Shadow IT & Security Risks',
    shortDescription: 'Employees using unapproved apps to do work?',
    fullDescription: 'When IT moves too slow, employees use their own tools (Dropbox, WhatsApp, Trello) to get work done. This is "Shadow IT", and it is a massive security risk. Data is leaking outside your control. We build official, secure, and user-friendly internal tools that employees actually want to use.',
    symptoms: [
      'Sensitive data in personal emails',
      'Unsecured file sharing',
      'Compliance violations'
    ],
    ourSolution: 'We audit your workflows and build secure internal dashboards and communication tools. We give employees the speed they need with the security you require.',
    relatedServices: ['cyber-defense-shield', 'enterprise-software'],
    faqs: [
      { category: 'Compliance', question: 'Can you help with GDPR?', answer: 'Yes, our tools are built with "Privacy by Design" to ensure compliance.' }
    ],
    metaTitle: 'Eliminate Shadow IT | Secure Internal Tools',
    metaDescription: 'Secure your enterprise data. Replace risky Shadow IT with custom, secure, and compliant internal applications.'
  }
];

export const SOLUTIONS: SolutionItem[] = [
  {
    id: 'customer-engagement-overhaul',
    title: 'Customer Engagement Overhaul',
    focus: 'Retention & Loyalty',
    outcome: '300% increase in response rates',
    description: 'Replace silence with conversation using WhatsApp and SMS.',
    fullDescription: 'We replace your "Do Not Reply" emails with interactive WhatsApp and SMS channels. We set up Verified Business profiles that let customers trust you. Then, we build automated flows to wish them happy birthday, remind them of renewals, or offer loyalty rewards. It turns a one-time buyer into a lifelong fan.',
    features: [
      { title: 'WhatsApp Business API', benefit: 'Official Green Tick verification for trust.' },
      { title: 'RCS Rich Messaging', benefit: 'Send carousels and images like an app.' },
      { title: 'Smart Segmentation', benefit: 'Send the right message to the right person.' },
      { title: 'CRM Sync', benefit: 'Keep all conversation history in one place.' }
    ],
    benefits: ['Higher open rates', 'Instant feedback', 'Loyal customers', 'Less spam complaints'],
    faqs: [
      { category: 'Time', question: 'How fast can we launch?', answer: 'We can get your basic messaging channels live in under 48 hours.' }
    ],
    metaTitle: 'Customer Engagement Strategy | WhatsApp & SMS Solutions',
    metaDescription: 'Boost customer loyalty. Switch to high-engagement channels like WhatsApp and SMS to keep your customers coming back.'
  },
  {
    id: 'digital-transformation-jumpstart',
    title: 'Digital Transformation Jumpstart',
    focus: 'Modernization',
    outcome: 'Paperless, Cloud-based Operations',
    description: 'Move your old legacy business into the modern cloud.',
    fullDescription: 'Still running your business on Excel sheets and paper files? We digitize everything. We move your files to the secure Cloud, build a custom dashboard to track your KPIs, and give your employees mobile apps so they can work from anywhere. It makes your business faster, lighter, and ready to scale.',
    features: [
      { title: 'Cloud Migration', benefit: 'Access your data securely from anywhere.' },
      { title: 'Custom Dashboard', benefit: 'See your sales and inventory in real-time.' },
      { title: 'Mobile Apps', benefit: 'Let your team work from the field.' },
      { title: 'Process Automation', benefit: 'Remove manual bottlenecks.' }
    ],
    benefits: ['Work from home ready', 'Real-time data', 'Data security', 'Scalability'],
    faqs: [
      { category: 'Disruption', question: 'Will this stop our work?', answer: 'No. We build the new system in parallel and switch over only when it is perfect.' }
    ],
    metaTitle: 'Digital Transformation Services | Cloud Migration',
    metaDescription: 'Modernize your business. We migrate legacy systems to the cloud and build custom software to streamline operations.'
  },
  {
    id: 'ai-automation-workforce',
    title: 'AI Automation Workforce',
    focus: 'Efficiency',
    outcome: 'Automate 80% of repetitive admin',
    description: 'Hire digital workers that never sleep.',
    fullDescription: 'Imagine hiring a staff member who reads 1,000 documents a minute, answers the phone instantly, and never takes a holiday. That is what our AI Agents do. We train custom AI models on your specific business data to handle support, data entry, and scheduling automatically.',
    features: [
      { title: 'Custom LLM Training', benefit: 'AI that knows your specific business rules.' },
      { title: 'Voice AI Agents', benefit: 'Robots that speak naturally on the phone.' },
      { title: 'Document Scanning', benefit: 'Extract data from PDFs automatically.' },
      { title: 'Auto-Scheduling', benefit: 'AI books appointments into your calendar.' }
    ],
    benefits: ['24/7 Productivity', 'Massive Cost Savings', 'Zero Human Error', 'Instant Scaling'],
    faqs: [
      { category: 'Privacy', question: 'Is my data used to train public AI?', answer: 'Never. We use private instances where your data stays yours.' }
    ],
    metaTitle: 'AI Automation Services | Digital Workforce',
    metaDescription: 'Reduce costs with AI. Deploy custom AI agents for support, data entry, and scheduling.'
  },
  {
    id: 'omnichannel-marketing-suite',
    title: 'Omnichannel Marketing Suite',
    focus: 'Growth',
    outcome: 'Unified customer journey',
    description: 'One message, every channel. Marketing made simple.',
    fullDescription: 'Stop managing Email in one tab, SMS in another, and Facebook ads in a third. Our suite connects them all. If a customer clicks an email, we trigger an SMS. If they reply on WhatsApp, we stop the email sequence. It ensures you talk to your customer with one consistent voice, wherever they are.',
    features: [
      { title: 'Unified Inbox', benefit: 'See all chats in one screen.' },
      { title: 'Cross-Channel Logic', benefit: 'If Email fails -> Send SMS.' },
      { title: 'Attribution Tracking', benefit: 'Know exactly which ad made the sale.' },
      { title: 'Audience Sync', benefit: 'Target your email list on Facebook.' }
    ],
    benefits: ['Better Customer Experience', 'Higher ROI', 'Less Admin Work', 'Clear Reporting'],
    faqs: [
      { category: 'Integration', question: 'Does it work with HubSpot?', answer: 'Yes, we integrate with all major CRMs.' }
    ],
    metaTitle: 'Omnichannel Marketing Platform | Unified Messaging',
    metaDescription: 'Master omnichannel marketing. Coordinate Email, SMS, and Social campaigns from a single unified platform.'
  },
  {
    id: 'remote-infrastructure-management',
    title: 'Remote Infrastructure Management',
    focus: 'Stability & Security',
    outcome: '99.99% Uptime Guarantee',
    description: 'Keep your servers and remote teams running 24/7.',
    fullDescription: 'With teams working from everywhere, you cannot afford downtime. Our RIM solution monitors your servers, networks, and employee devices 24/7. We detect issues before they break your business, apply security patches automatically, and ensure your VPNs are always fast and secure.',
    features: [
        { title: '24/7 Server Monitoring', benefit: 'Sleep well knowing we are watching.' },
        { title: 'Automated Patching', benefit: 'Always secure against latest threats.' },
        { title: 'VPN Management', benefit: 'Secure remote access for staff.' },
        { title: 'Cloud Optimization', benefit: 'Lower AWS/Azure bills.' }
    ],
    benefits: ['Reduced Downtime', 'Lower IT Costs', 'Enhanced Security', 'Productive Remote Teams'],
    faqs: [
        { category: 'Support', question: 'Do you support Linux?', answer: 'Yes, we support Linux, Windows, and Mac environments.' }
    ],
    metaTitle: 'Remote Infrastructure Management | 24/7 Server Monitoring',
    metaDescription: 'Ensure 99.99% uptime. Managed IT services for remote teams, cloud infrastructure, and server security.'
  },
  {
    id: 'ecommerce-acceleration',
    title: 'E-commerce Acceleration',
    focus: 'Sales Velocity',
    outcome: '2X Conversion Rate',
    description: 'Speed, UX, and Checkout optimization for online stores.',
    fullDescription: 'Slow sites kill sales. Confusing checkouts lose customers. We audit your online store and rebuild the slow parts. We implement "One-Click Checkout", optimize images for millisecond loading, and set up AI product recommendations that increase order value.',
    features: [
        { title: 'Speed Optimization', benefit: 'Sub-second load times.' },
        { title: 'Checkout Flow Redesign', benefit: 'Reduce drop-offs by 40%.' },
        { title: 'AI Recommendations', benefit: 'Increase Average Order Value.' },
        { title: 'Inventory Sync', benefit: 'Never oversell stock.' }
    ],
    benefits: ['Higher Revenue', 'Better SEO Rankings', 'Lower Ad Costs', 'Happier Customers'],
    faqs: [
        { category: 'Platform', question: 'Do you work with Shopify?', answer: 'Yes, we are Shopify Plus and WooCommerce experts.' }
    ],
    metaTitle: 'Ecommerce Acceleration Services | Speed & Conversion Optimization',
    metaDescription: 'Boost your online sales. We optimize site speed, checkout flows, and user experience for maximum conversion.'
  },
  {
    id: 'legacy-modernization',
    title: 'Legacy System Modernization',
    focus: 'Innovation',
    outcome: 'Future-proof architecture',
    description: 'Rebuild old software without losing data.',
    fullDescription: 'Trapped by software built in 2005? We help you migrate from old, clunky on-premise servers to modern, cloud-native microservices. We perform a "Strangler Fig" migration, replacing pieces of your system one by one so you never experience downtime.',
    features: [
        { title: 'Code Refactoring', benefit: 'Clean, maintainable code.' },
        { title: 'Database Migration', benefit: 'No data loss guaranteed.' },
        { title: 'UI/UX Refresh', benefit: 'Modern, easy-to-use interface.' },
        { title: 'API Exposure', benefit: 'Connect old data to new apps.' }
    ],
    benefits: ['Scalability', 'Security', 'Easier Hiring', 'Better Performance'],
    faqs: [
        { category: 'Risk', question: 'Is it risky?', answer: 'We minimize risk by running parallel systems during the transition.' }
    ],
    metaTitle: 'Legacy System Modernization | Cloud Migration Services',
    metaDescription: 'Update your outdated software. We migrate legacy systems to the cloud using modern architectures without downtime.'
  },
  {
    id: 'cyber-defense-shield',
    title: 'Cyber Defense Shield',
    focus: 'Risk Management',
    outcome: 'Zero-Trust Security Posture',
    description: 'Comprehensive security for enterprise data.',
    fullDescription: 'Cyber attacks are automated; your defense should be too. We deploy a multi-layered security shield around your digital assets. From automated penetration testing to real-time intrusion detection and employee phishing training.',
    features: [
        { title: 'Penetration Testing', benefit: 'Find holes before hackers do.' },
        { title: 'Endpoint Protection', benefit: 'Secure every laptop.' },
        { title: 'DDOS Mitigation', benefit: 'Stay online during attacks.' },
        { title: 'Compliance Audit', benefit: 'Meet SOC2/GDPR standards.' }
    ],
    benefits: ['Brand Reputation', 'Regulatory Compliance', 'Business Continuity', 'Data Privacy'],
    faqs: [
        { category: 'Audit', question: 'How often should we audit?', answer: 'We recommend continuous monitoring and quarterly deep audits.' }
    ],
    metaTitle: 'Cybersecurity Solutions | Enterprise Data Protection',
    metaDescription: 'Protect your business from cyber threats. Comprehensive security audits, penetration testing, and zero-trust architecture.'
  },
  {
    id: 'supply-chain-intel',
    title: 'Supply Chain Intelligence',
    focus: 'Logistics',
    outcome: 'Real-time asset tracking',
    description: 'IoT and AI for smarter logistics.',
    fullDescription: 'Know exactly where your goods are. We connect IoT sensors to a central dashboard, giving you real-time visibility into your supply chain. AI predicts delays based on weather and traffic, allowing you to route around problems.',
    features: [
        { title: 'Asset Tracking', benefit: 'GPS precision.' },
        { title: 'Route Optimization', benefit: 'Save fuel and time.' },
        { title: 'Predictive Maintenance', benefit: 'Fix trucks before they break.' },
        { title: 'Inventory AI', benefit: 'Auto-reorder stock.' }
    ],
    benefits: ['Lower Logistics Costs', 'On-time Delivery', 'Reduced Theft', 'Data-Driven Decisions'],
    faqs: [
        { category: 'Hardware', question: 'Do you provide sensors?', answer: 'We partner with hardware vendors to provide a turnkey solution.' }
    ],
    metaTitle: 'Supply Chain Intelligence | Logistics Software',
    metaDescription: 'Optimize your supply chain with IoT and AI. Real-time tracking, predictive maintenance, and route optimization.'
  },
  {
    id: 'fintech-compliance-vault',
    title: 'FinTech Compliance Vault',
    focus: 'Finance',
    outcome: 'Automated Regulatory Reporting',
    description: 'Bank-grade security and compliance tools.',
    fullDescription: 'Building a FinTech app is hard; following the law is harder. Our vault provides pre-built modules for KYC (Know Your Customer), AML (Anti-Money Laundering), and secure ledger management. Launch your fintech product fast without worrying about regulators shutting you down.',
    features: [
        { title: 'Auto-KYC', benefit: 'Verify users in seconds.' },
        { title: 'Transaction Monitoring', benefit: 'Flag suspicious activity.' },
        { title: 'Audit Trails', benefit: 'Immutable records.' },
        { title: 'Data Sovereignty', benefit: 'Keep data in specific regions.' }
    ],
    benefits: ['Faster Licensing', 'Reduced Fraud', 'Global Scaling', 'Trust'],
    faqs: [
        { category: 'Regions', question: 'Does this work in EU?', answer: 'Yes, it is GDPR and PSD2 compliant.' }
    ],
    metaTitle: 'FinTech Compliance Solutions | KYC & AML Software',
    metaDescription: 'Launch fintech products faster. Automated compliance modules for KYC, AML, and secure transaction monitoring.'
  }
];

export const PRODUCTS: ProductItem[] = [
  {
    id: 'white-label-reseller',
    title: 'White Label Reseller Platform',
    tagline: 'Start your own Digital Agency instantly.',
    description: 'Rebrand our powerful SMS, Voice, and Marketing platforms as your own. Keep 100% of the profits.',
    fullDescription: 'Imagine owning a software company without writing a single line of code. We give you the platform. You put your logo on it. You set the prices. You sell SMS, WhatsApp, and Voice services to your local clients. We handle the servers and connections; you handle the relationships and keep the profit.',
    features: [
      { title: 'Your Brand', description: 'Your Logo, Your Domain, Your Colors.', benefit: 'Build your own asset.' },
      { title: 'Set Your Prices', description: 'Buy wholesale, sell retail.', benefit: 'Control your margins.' },
      { title: 'Integrated Payments', description: 'Collect money via Stripe automatically.', benefit: 'Automated billing.' },
      { title: 'Multi-Tier', description: 'Create resellers under you.', benefit: 'Scale infinitely.' }
    ],
    benefits: ['No coding needed', 'Instant launch', 'Recurring revenue', 'Global reach'],
    pricingModel: 'Subscription',
    targetAudience: 'Agencies, Entrepreneurs',
    faqs: [
      { category: 'Profit', question: 'How much can I make?', answer: 'Most partners mark up SMS prices by 50-100%.' }
    ],
    metaTitle: 'White Label SMS Platform | Reseller Program',
    metaDescription: 'Start your own digital agency. White Label our SMS and Marketing platform and keep 100% of the profits.'
  },
  {
    id: 'voicebot-studio',
    title: 'VoiceBot Studio',
    tagline: 'Build intelligent voice agents in minutes.',
    description: 'No-code platform to design IVR flows and AI voice assistants.',
    fullDescription: 'Building a phone menu used to be hard. With VoiceBot Studio, you just draw a flowchart. "Press 1 for Sales, Press 2 for Support". Or, add an AI Brain that speaks naturally: "How can I help you today?". It allows you to build a professional call center system in your browser.',
    features: [
      { title: 'Visual Builder', description: 'Drag and drop blocks.', benefit: 'No coding required.' },
      { title: 'AI Speech', description: 'Text-to-Speech in 50 languages.', benefit: 'Global support.' },
      { title: 'Call Recording', description: 'Record calls for quality.', benefit: 'Compliance & Training.' },
      { title: 'Analytics', description: 'See where callers drop off.', benefit: 'Optimize flows.' }
    ],
    benefits: ['Lower support costs', '24/7 availability', 'Professional image', 'Easy updates'],
    pricingModel: 'Usage Based',
    targetAudience: 'Support Teams, Call Centers',
    faqs: [
      { category: 'Voices', question: 'Do they sound robotic?', answer: 'No, we use Neural AI voices that sound very human.' }
    ],
    metaTitle: 'VoiceBot Studio | AI Voice Assistant Builder',
    metaDescription: 'Create AI voice bots and IVR systems visually. Automate phone support with natural sounding AI agents.'
  },
  {
    id: 'secure-gate-2fa',
    title: 'SecureGate 2FA API',
    tagline: 'The fastest way to verify users.',
    description: 'Enterprise-grade OTP (One Time Password) delivery via SMS and WhatsApp.',
    fullDescription: 'When a user logs in, they need that security code FAST. If it takes 2 minutes, they quit. SecureGate uses premium "Priority Routes" to ensure OTPs arrive in under 5 seconds globally. It automatically switches to WhatsApp if SMS fails, guaranteeing delivery.',
    features: [
      { title: 'Flash Delivery', description: 'Sub-5-second latency.', benefit: 'Happy users.' },
      { title: 'Auto-Fallback', description: 'SMS -> WhatsApp -> Voice.', benefit: '100% Delivery.' },
      { title: 'Fraud Guard', description: 'Blocks fake traffic bots.', benefit: 'Saves money.' },
      { title: 'Global Reach', description: 'Works in 220 countries.', benefit: 'Scale globally.' }
    ],
    benefits: ['Secure Logins', 'Reduced Fraud', 'Better UX', 'Simple API'],
    pricingModel: 'Per Auth',
    targetAudience: 'FinTech, Apps, Websites',
    faqs: [
      { category: 'Speed', question: 'How fast is it?', answer: 'Average delivery is 3.5 seconds.' }
    ],
    metaTitle: '2FA OTP API | Secure SMS Verification',
    metaDescription: 'Fast, reliable OTP delivery API. Send 2FA codes via SMS and WhatsApp with built-in fraud protection.'
  },
  {
    id: 'stockflow-pro',
    title: 'StockFlow Pro',
    tagline: 'AI Inventory Management.',
    description: 'Predict demand and automate restocking for e-commerce.',
    fullDescription: 'Running out of stock costs you money. Buying too much stock kills your cash flow. StockFlow Pro uses AI to look at your past sales and predict exactly what you need to buy next week. It connects to Amazon, Shopify, and your warehouse to keep everything in sync.',
    features: [
      { title: 'Demand Prediction', description: 'AI forecasts sales.', benefit: 'Never run out.' },
      { title: 'Multi-Channel', description: 'Syncs Amazon & Shopify.', benefit: 'No overselling.' },
      { title: 'Auto-PO', description: 'Drafts purchase orders.', benefit: 'Save admin time.' },
      { title: 'Barcode App', description: 'Scan items with phone.', benefit: 'Easy tracking.' }
    ],
    benefits: ['Optimized Cash Flow', 'Less Admin', 'Accurate Stock', 'Grow Faster'],
    pricingModel: 'Monthly SaaS',
    targetAudience: 'E-commerce, Retailers',
    faqs: [
      { category: 'Setup', question: 'Is it hard to set up?', answer: 'It connects to Shopify in 1 click.' }
    ],
    metaTitle: 'AI Inventory Management Software | StockFlow Pro',
    metaDescription: 'Optimize inventory with AI. Predict demand and automate reordering for Shopify and Amazon sellers.'
  },
  {
    id: 'crm-connector-hub',
    title: 'CRM Connector Hub',
    tagline: 'Unify your data silos.',
    description: 'Middleware to sync Salesforce, HubSpot, and your custom apps in real-time.',
    fullDescription: 'Stop copy-pasting data. The CRM Connector Hub acts as the central nervous system for your business data. It listens for changes in one app and instantly updates all others. New lead in Facebook Ads? It\'s in Salesforce instantly. Order in Shopify? It\'s in HubSpot.',
    features: [
        { title: 'Real-time Sync', description: 'No 15-min delays.', benefit: 'Instant data accuracy.' },
        { title: 'Custom Mappings', description: 'Map any field to any field.', benefit: 'Flexible data structure.' },
        { title: 'Error Handling', description: 'Auto-retry on failure.', benefit: 'Reliable pipelines.' },
        { title: 'Visual Logs', description: 'See exactly what moved where.', benefit: 'Total transparency.' }
    ],
    benefits: ['No Manual Entry', 'Single Source of Truth', 'Happy Sales Team', 'Better Reporting'],
    pricingModel: 'Tiered SaaS',
    targetAudience: 'Operations Managers, CTOs',
    faqs: [
        { category: 'Security', question: 'Do you store our data?', answer: 'No, we stream it securely. We do not store your customer records persistently.' }
    ],
    metaTitle: 'CRM Integration Platform | Sync Salesforce & HubSpot',
    metaDescription: 'Connect your business apps. Real-time data sync between Salesforce, HubSpot, Shopify, and custom databases.'
  },
  {
    id: 'social-stream-auto',
    title: 'SocialStream Auto',
    tagline: 'AI Social Media Manager.',
    description: 'Generate, schedule, and post content to LinkedIn, X, and Instagram automatically.',
    fullDescription: 'Maintaining an active social presence is hard work. SocialStream Auto uses Gemini AI to read your company blog, creating engaging social posts automatically. It schedules them for optimal times and even replies to comments using your brand voice.',
    features: [
        { title: 'Content Repurposing', description: 'Turn blog into tweets.', benefit: 'Multiply content value.' },
        { title: 'Auto-Scheduling', description: 'Post when users are active.', benefit: 'Higher engagement.' },
        { title: 'Visual Generation', description: 'AI creates matching images.', benefit: 'Stand out in feed.' },
        { title: 'Analytics Dashboard', description: 'Track growth metrics.', benefit: 'Prove ROI.' }
    ],
    benefits: ['Save 10hrs/week', 'Consistent Presence', 'Brand Growth', 'Viral Potential'],
    pricingModel: 'Monthly SaaS',
    targetAudience: 'Marketing Teams, Agencies',
    faqs: [
        { category: 'Platforms', question: 'Does it support TikTok?', answer: 'Yes, video scheduling is supported.' }
    ],
    metaTitle: 'AI Social Media Scheduler | Auto Post Generator',
    metaDescription: 'Automate your social media. AI content generation and scheduling for LinkedIn, Twitter, and Instagram.'
  },
  {
    id: 'securedocs-vault',
    title: 'SecureDocs Vault',
    tagline: 'Virtual Data Room.',
    description: 'Share confidential documents securely with investors and partners.',
    fullDescription: 'When raising capital or selling a company, you need to share sensitive PDF files. SecureDocs Vault lets you upload files and track exactly who opens them, which pages they read, and for how long. You can revoke access even after the file is downloaded.',
    features: [
        { title: 'Dynamic Watermarking', description: 'User email on every page.', benefit: 'Prevent leaks.' },
        { title: 'Access Logs', description: 'See who viewed what.', benefit: 'Gauge interest.' },
        { title: 'Expiry Dates', description: 'Files self-destruct.', benefit: 'Control timeframe.' },
        { title: 'Q&A Module', description: 'Manage questions.', benefit: 'Streamline due diligence.' }
    ],
    benefits: ['Deal Security', 'Investor Insights', 'Professional Image', 'Compliance'],
    pricingModel: 'Flat Fee / Deal',
    targetAudience: 'Founders, M&A Firms',
    faqs: [
        { category: 'Storage', question: 'Is there a limit?', answer: 'No, unlimited storage for active deals.' }
    ],
    metaTitle: 'Virtual Data Room Software | Secure Document Sharing',
    metaDescription: 'Securely share sensitive documents for M&A and fundraising. Track views and manage access controls.'
  },
  {
    id: 'meeting-ai-notetaker',
    title: 'MeetingAI Notetaker',
    tagline: 'Never take minutes again.',
    description: 'AI bot that joins your Zoom/Teams calls and writes summaries.',
    fullDescription: 'Focus on the conversation, not the keyboard. MeetingAI joins your video calls, records the audio, transcribes it, and generates a structured summary with action items and deadlines. It then pushes these tasks directly to your project management tool.',
    features: [
        { title: 'Multi-Platform', description: 'Zoom, Teams, Meet.', benefit: 'Works everywhere.' },
        { title: 'Speaker ID', description: 'Knows who said what.', benefit: 'Clarity.' },
        { title: 'Action Items', description: 'Auto-detects tasks.', benefit: 'Accountability.' },
        { title: 'Searchable', description: 'Find keywords.', benefit: 'Easy recall.' }
    ],
    benefits: ['Productive Meetings', 'Accurate Records', 'Time Savings', 'Better Follow-up'],
    pricingModel: 'Per User / Mo',
    targetAudience: 'Remote Teams, Sales',
    faqs: [
        { category: 'Privacy', question: 'Does it record everything?', answer: 'Yes, but you can pause it or delete recordings instantly.' }
    ],
    metaTitle: 'AI Meeting Assistant | Automatic Meeting Notes',
    metaDescription: 'Automate meeting minutes. AI records, transcribes, and summarizes your video calls.'
  }
];

// Ensure SERVICE_CATEGORIES are populated with the same detail-oriented approach
export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: 'messaging',
    title: 'Enterprise Messaging',
    description: 'Reach customers instantly on the channels they use every day.',
    items: [
      {
        id: 'bulk-sms-gateway',
        title: 'Bulk SMS Gateway',
        description: 'Send millions of texts instantly.',
        fullDescription: 'The most reliable way to reach anyone, anywhere. Our Bulk SMS Gateway connects directly to telecom operators (Tier-1) to ensure your marketing blasts, alerts, and notifications land in the inbox, not the void.',
        features: [
            { title: 'High Speed', description: '10,000 SMS per second.', benefit: 'Instant reach.' },
            { title: 'Global Coverage', description: '200+ Countries.', benefit: 'Scale anywhere.' },
            { title: 'Sender ID', description: 'Show your Brand Name.', benefit: 'Build trust.' }
        ],
        benefits: ['98% Open Rate', 'Instant Delivery', 'Low Cost'],
        faqs: [{ question: 'Do I need a developer?', answer: 'No, we have a simple web portal you can use manually.' }],
        metaTitle: 'Bulk SMS Gateway | Global Text Messaging API',
        metaDescription: 'Send bulk SMS campaigns instantly. Tier-1 direct routes for marketing and alerts.'
      },
      {
        id: 'whatsapp-business',
        title: 'WhatsApp Business API',
        description: 'Official verified business chat.',
        fullDescription: 'Upgrade from a phone number to an official Brand Account. Use the API to have multiple support agents on one number, send automated shipping updates, and get the coveted Green Tick of verification.',
        features: [
            { title: 'Green Tick', description: 'Verified Badge.', benefit: 'Instant Trust.' },
            { title: 'Chatbots', description: 'Auto-replies.', benefit: '24/7 Support.' },
            { title: 'Rich Media', description: 'Send PDFs/Images.', benefit: 'Better engagement.' }
        ],
        benefits: ['2B+ Users', 'Secure', 'Interactive'],
        faqs: [{ question: 'Is it free?', answer: 'Meta charges per conversation. We help you optimize costs.' }],
        metaTitle: 'WhatsApp Business API Provider | Chatbots & Verification',
        metaDescription: 'Official WhatsApp Business Partner. Get the Green Tick and automate support with chatbots.'
      }
    ]
  },
  {
    id: 'ai',
    title: 'Artificial Intelligence',
    description: 'Automate your business with smart, learning algorithms.',
    items: [
      {
        id: 'ai-customization',
        title: 'Custom AI Solutions',
        description: 'Train AI on your own data.',
        fullDescription: 'ChatGPT is great, but it doesn\'t know *your* business. We build "Private AI" that reads your manuals, emails, and product lists. It can then answer customer questions accurately or help your staff find information instantly.',
        features: [
            { title: 'Private LLM', description: 'Your data stays safe.', benefit: 'Security.' },
            { title: 'Auto-Training', description: 'Learns from new docs.', benefit: 'Always smart.' },
            { title: 'API Access', description: 'Connects to your apps.', benefit: 'Integration.' }
        ],
        benefits: ['Efficiency', 'Accuracy', 'Privacy'],
        faqs: [{ question: 'Is it expensive?', answer: 'We have affordable tiers for small businesses.' }],
        metaTitle: 'Custom AI Solutions | Private LLM Development',
        metaDescription: 'Build custom AI agents trained on your business data. Secure, private, and smart.'
      }
    ]
  },
  {
    id: 'digital',
    title: 'Web & Digital',
    description: 'Build your digital storefront.',
    items: [
        {
            id: 'web-development',
            title: 'Custom Web Development',
            description: 'Fast, secure websites.',
            fullDescription: 'Your website is your 24/7 salesperson. If it\'s slow, you lose money. We build blazing fast sites using modern tech (React/Next.js) that rank high on Google and convert visitors into buyers.',
            features: [
                { title: 'SEO Core', description: 'Built to rank.', benefit: 'Free traffic.' },
                { title: 'Mobile First', description: 'Looks great on phones.', benefit: 'Better UX.' },
                { title: 'Fast Loading', description: 'Under 1 second load.', benefit: 'Higher conversion.' }
            ],
            benefits: ['Custom Design', 'Secure', 'Scalable'],
            faqs: [{ question: 'Wordpress or Custom?', answer: 'Custom is faster and more secure for growing businesses.' }],
            metaTitle: 'Custom Web Development | Fast React Websites',
            metaDescription: 'Professional web development services. Fast, SEO-optimized websites built with React and Next.js.'
        },
        {
            id: 'seo-services',
            title: 'SEO & Content',
            description: 'Rank #1 on Google.',
            fullDescription: 'A beautiful site is useless if no one sees it. Our SEO strategy puts you on the first page of Google for the keywords that make you money. We fix technical errors, write great content, and build authority.',
            features: [
                { title: 'Audit', description: 'Fix broken links.', benefit: 'Healthier site.' },
                { title: 'Content', description: 'Blogs that sell.', benefit: 'Authority.' },
                { title: 'Backlinks', description: 'Trust signals.', benefit: 'Higher ranking.' }
            ],
            benefits: ['Free Traffic', 'Long-term ROI', 'Brand Authority'],
            faqs: [{ question: 'How long does it take?', answer: 'SEO is a long game. Expect results in 3-6 months.' }],
            metaTitle: 'SEO Services | Search Engine Optimization',
            metaDescription: 'Drive organic traffic. Technical SEO, content strategy, and backlink building to rank #1.'
        }
    ]
  },
  {
    id: 'cloud',
    title: 'Cloud & Infrastructure',
    description: 'Scalable, secure, and managed cloud environments.',
    items: [
        {
            id: 'managed-aws',
            title: 'Managed AWS Hosting',
            description: 'Expert management of your AWS environment.',
            fullDescription: 'AWS is powerful but complex. Our certified engineers design, deploy, and manage your cloud infrastructure. We optimize for cost, security, and performance so you don\'t have to hire an internal DevOps team.',
            features: [
                { title: 'Cost Optimization', description: 'Reduce bills by 30%.', benefit: 'Save money.' },
                { title: 'Security Hardening', description: 'Firewalls & IAM.', benefit: 'Protect data.' },
                { title: '24/7 Monitoring', description: 'Instant alerts.', benefit: 'Peace of mind.' }
            ],
            benefits: ['Certified Experts', 'High Availability', 'Scalable'],
            faqs: [{ question: 'Do I own the account?', answer: 'Yes, you retain full ownership of your AWS account.' }],
            metaTitle: 'Managed AWS Services | Cloud Infrastructure Support',
            metaDescription: 'Expert AWS management. We optimize your cloud infrastructure for cost, security, and performance.'
        },
        {
            id: 'devops-automation',
            title: 'DevOps Automation',
            description: 'Streamline your software delivery.',
            fullDescription: 'Deploy faster and with fewer bugs. We build CI/CD pipelines that automate testing and deployment. From code commit to production in minutes, not days.',
            features: [
                { title: 'CI/CD Pipelines', description: 'Auto-deploy code.', benefit: 'Faster release.' },
                { title: 'Infrastructure as Code', description: 'Terraform/Ansible.', benefit: 'Reproducible envs.' },
                { title: 'Containerization', description: 'Docker/Kubernetes.', benefit: 'Scalability.' }
            ],
            benefits: ['Faster Time-to-Market', 'Fewer Bugs', 'Efficient Teams'],
            faqs: [{ question: 'What tools do you use?', answer: 'We use Jenkins, GitHub Actions, GitLab CI, and more.' }],
            metaTitle: 'DevOps Services | CI/CD Automation',
            metaDescription: 'Accelerate software delivery with professional DevOps services. CI/CD pipelines, Docker, and Kubernetes.'
        }
    ]
  },
  {
    id: 'mobile',
    title: 'Mobile Solutions',
    description: 'Native and cross-platform mobile apps.',
    items: [
        {
            id: 'ios-development',
            title: 'iOS App Development',
            description: 'Premium apps for iPhone & iPad.',
            fullDescription: 'Capture the premium market with a stunning iOS app. We build native Swift applications that offer the smoothest performance and best user experience on Apple devices.',
            features: [
                { title: 'Swift UI', description: 'Modern interface.', benefit: 'Beautiful UX.' },
                { title: 'App Store Opt', description: 'Ranking help.', benefit: 'More downloads.' },
                { title: 'Secure Coding', description: 'Data protection.', benefit: 'User trust.' }
            ],
            benefits: ['High Performance', 'Premium UX', 'Apple Ecosystem'],
            faqs: [{ question: 'How long to build?', answer: 'Typically 3-6 months for a V1 launch.' }],
            metaTitle: 'iOS App Development Agency | Native Swift Apps',
            metaDescription: 'Custom iOS app development. We build high-performance, beautiful apps for iPhone and iPad.'
        },
        {
            id: 'flutter-development',
            title: 'Flutter Cross-Platform',
            description: 'One code, both Android & iOS.',
            fullDescription: 'Save budget and time. Google\'s Flutter allows us to build one app that runs natively on both iPhones and Android phones. It looks and feels just like a native app but costs half as much to develop.',
            features: [
                { title: 'Single Codebase', description: 'iOS + Android.', benefit: 'Lower cost.' },
                { title: 'Fast Dev', description: 'Hot reload.', benefit: 'Quick iterations.' },
                { title: 'Native Performance', description: 'Compiled code.', benefit: 'Smooth animations.' }
            ],
            benefits: ['Cost Effective', 'Fast Launch', 'Easy Maintenance'],
            faqs: [{ question: 'Is it slower?', answer: 'No, Flutter compiles to native code for near-native speed.' }],
            metaTitle: 'Flutter App Development | Cross-Platform Solutions',
            metaDescription: 'Build for iOS and Android simultaneously with Flutter. Cost-effective, high-performance mobile apps.'
        }
    ]
  },
  {
    id: 'marketing',
    title: 'Digital Growth',
    description: 'Data-driven marketing strategies.',
    items: [
        {
            id: 'ppc-management',
            title: 'PPC & Ad Management',
            description: 'Google & Facebook Ads that convert.',
            fullDescription: 'Stop wasting money on clicks that don\'t convert. Our certified ad specialists manage your Google and Meta ad spend to maximize ROI. We continually A/B test creatives and audiences to lower your Cost Per Acquisition.',
            features: [
                { title: 'Audience Targeting', description: 'Find buyers.', benefit: 'Higher ROI.' },
                { title: 'Creative Testing', description: 'A/B tests.', benefit: 'Better ads.' },
                { title: 'Conversion Tracking', description: 'Pixel setup.', benefit: 'Accurate data.' }
            ],
            benefits: ['Immediate Traffic', 'Measurable Results', 'Scalable Growth'],
            faqs: [{ question: 'What is the minimum budget?', answer: 'We recommend starting with at least $1k/mo ad spend.' }],
            metaTitle: 'PPC Management Services | Google & Facebook Ads',
            metaDescription: 'Maximize your ad spend. Expert management for Google Ads, Facebook, and Instagram campaigns.'
        },
        {
            id: 'content-strategy',
            title: 'Content Strategy',
            description: 'Blogs and copy that rank and sell.',
            fullDescription: 'Content is the fuel for your digital presence. We plan, write, and distribute high-quality articles, whitepapers, and case studies that establish your authority and drive organic traffic.',
            features: [
                { title: 'Keyword Research', description: 'Find topics.', benefit: 'SEO Traffic.' },
                { title: 'Professional Writing', description: 'Native speakers.', benefit: 'Brand authority.' },
                { title: 'Distribution', description: 'Social & Email.', benefit: 'Reach.' }
            ],
            benefits: ['Brand Authority', 'Long-term Traffic', 'Lead Nurturing'],
            faqs: [{ question: 'Do you use AI?', answer: 'We use AI for research, but humans do the final writing and editing.' }],
            metaTitle: 'Content Marketing Strategy | SEO Copywriting',
            metaDescription: 'Drive organic growth with a data-driven content strategy. Blogs, whitepapers, and copy that converts.'
        }
    ]
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    description: 'Protect your business from digital threats.',
    items: [
        {
            id: 'penetration-testing',
            title: 'Penetration Testing',
            description: 'Ethical hacking to find weaknesses.',
            fullDescription: 'Our certified ethical hackers launch controlled attacks against your network and applications to identify vulnerabilities before malicious actors do. You receive a detailed report with remediation steps.',
            features: [
                { title: 'Web App Testing', description: 'OWASP Top 10.', benefit: 'Secure apps.' },
                { title: 'Network Scan', description: 'Find open ports.', benefit: 'Hardened network.' },
                { title: 'Social Engineering', description: 'Phishing tests.', benefit: 'Staff awareness.' }
            ],
            benefits: ['Identify Weaknesses', 'Compliance', 'Peace of Mind'],
            faqs: [{ question: 'Is it safe?', answer: 'Yes, we perform tests in a controlled manner to avoid downtime.' }],
            metaTitle: 'Penetration Testing Services | Ethical Hacking',
            metaDescription: 'Identify security vulnerabilities with professional penetration testing. Web, network, and mobile app security audits.'
        },
        {
            id: 'compliance-audits',
            title: 'Compliance Audits',
            description: 'Get ready for SOC2, HIPAA, and GDPR.',
            fullDescription: 'Navigating regulatory compliance is complex. We audit your current systems and processes against standards like SOC2, ISO 27001, and HIPAA, providing a roadmap to certification.',
            features: [
                { title: 'Gap Analysis', description: 'Where you fail.', benefit: 'Clear roadmap.' },
                { title: 'Policy Writing', description: 'Required docs.', benefit: 'Save time.' },
                { title: 'Pre-Audit Prep', description: 'Mock audits.', benefit: 'Pass first time.' }
            ],
            benefits: ['Avoid Fines', 'Win Enterprise Deals', 'Data Integrity'],
            faqs: [{ question: 'How long does SOC2 take?', answer: 'Typically 3-6 months depending on your current state.' }],
            metaTitle: 'Compliance Audit Services | SOC2 & HIPAA Readiness',
            metaDescription: 'Prepare for SOC2, HIPAA, and GDPR certifications. Expert compliance consulting and gap analysis.'
        }
    ]
  },
  {
    id: 'analytics',
    title: 'Data & Analytics',
    description: 'Turn raw data into actionable insights.',
    items: [
        {
            id: 'bi-dashboards',
            title: 'BI Dashboards',
            description: 'Visualize your KPIs in real-time.',
            fullDescription: 'Stop drowning in spreadsheets. We build interactive dashboards using PowerBI, Tableau, or custom React apps that pull data from your sales, marketing, and operations tools into one view.',
            features: [
                { title: 'Real-time Data', description: 'Live updates.', benefit: 'Fast decisions.' },
                { title: 'Custom Metrics', description: 'Your KPIs.', benefit: 'Relevant tracking.' },
                { title: 'Mobile Access', description: 'View on phone.', benefit: 'Manage anywhere.' }
            ],
            benefits: ['Data Visibility', 'Faster Decisions', 'Team Alignment'],
            faqs: [{ question: 'Can you connect to X?', answer: 'We connect to almost any data source via API.' }],
            metaTitle: 'Business Intelligence Dashboards | Data Visualization',
            metaDescription: 'Custom BI dashboards. Visualize your business data with PowerBI, Tableau, or custom web solutions.'
        },
        {
            id: 'big-data-pipelines',
            title: 'Big Data Pipelines',
            description: 'ETL and data warehousing solutions.',
            fullDescription: 'We build robust data pipelines (ETL) to move, clean, and store your data in warehouses like Snowflake or BigQuery. ensuring your analysts have clean data ready for reporting and ML models.',
            features: [
                { title: 'Automated ETL', description: 'No manual work.', benefit: 'Reliability.' },
                { title: 'Data Cleaning', description: 'Fix errors.', benefit: 'Accuracy.' },
                { title: 'Scalable Storage', description: 'Petabyte scale.', benefit: 'Future proof.' }
            ],
            benefits: ['Clean Data', 'Scalable', 'Ready for AI'],
            faqs: [{ question: 'Which cloud?', answer: 'We support AWS, Google Cloud, and Azure.' }],
            metaTitle: 'Big Data Engineering | ETL & Data Warehousing',
            metaDescription: 'Scalable data pipelines and warehousing. We build ETL processes for Snowflake, BigQuery, and Redshift.'
        }
    ]
  },
  {
    id: 'blockchain',
    title: 'Blockchain',
    description: 'Web3 and decentralized applications.',
    items: [
        {
            id: 'smart-contracts',
            title: 'Smart Contract Dev',
            description: 'Secure contracts for Ethereum & Solana.',
            fullDescription: 'Automate agreements without intermediaries. We write, test, and deploy secure smart contracts for DeFi, NFTs, and supply chain tracking. Our code is audited for security vulnerabilities.',
            features: [
                { title: 'Solidity / Rust', description: 'Expert coding.', benefit: 'Performance.' },
                { title: 'Security Audit', description: 'Prevent hacks.', benefit: 'Safety.' },
                { title: 'Gas Optimization', description: 'Lower fees.', benefit: 'Cost saving.' }
            ],
            benefits: ['Trustless Automation', 'Transparency', 'Immutable Records'],
            faqs: [{ question: 'Do you audit?', answer: 'Yes, we provide basic internal audits and partner for external ones.' }],
            metaTitle: 'Smart Contract Development | Ethereum & Solana',
            metaDescription: 'Secure smart contract development. We build and audit contracts for DeFi, NFT, and DAO projects.'
        },
        {
            id: 'dapp-development',
            title: 'dApp Development',
            description: 'Decentralized web applications.',
            fullDescription: 'Build the frontend for the decentralized web. We create user-friendly dApps that connect to wallets like MetaMask and Phantom, making Web3 accessible to your users.',
            features: [
                { title: 'Wallet Connect', description: 'Easy login.', benefit: 'User adoption.' },
                { title: 'Web3.js / Ethers', description: 'Standard libs.', benefit: 'Compatibility.' },
                { title: 'Responsive UI', description: 'Mobile ready.', benefit: 'Accessibility.' }
            ],
            benefits: ['Web3 Native', 'User Friendly', 'Secure Integration'],
            faqs: [{ question: 'Which chains?', answer: 'EVM compatible chains, Solana, and more.' }],
            metaTitle: 'dApp Development Services | Web3 Applications',
            metaDescription: 'Build user-friendly decentralized applications. Expert Web3 frontend development connecting to smart contracts.'
        }
    ]
  }
];
