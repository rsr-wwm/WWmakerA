
import { ServiceCategory, SolutionItem, NavItem, ProductItem, ProblemItem, IndustryItem, GlossaryItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'Solutions', path: '/solutions' },
  { label: 'Knowledge Base', path: '/blog' },
  { label: 'Company', path: '/about' },
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
        useCases: [
            { title: 'Global Remittance Alerts', description: 'A crypto-exchange reduced user support tickets by 35% by providing real-time WhatsApp updates on transaction progress.' },
            { title: 'Anti-Phishing SMS', description: 'A regional bank used our high-security SMS IDs to stop a $2M spoofing attack by training users on verified ID signatures.' },
            { title: 'Mobile Banking 2FA', description: 'A digital-only bank achieved 99.9% login success rate using our flash-delivery OTP gateway.' },
            { title: 'Loan Application Updates', description: 'Real-time status updates via WhatsApp reduced caller wait times for loan processing queries.' }
        ],
        pricing: [
            { title: 'Compliance Basic', price: '$2,500/mo', features: ['Secure OTP Gateway', 'AML Monitoring', 'Basic Support'] },
            { title: 'Enterprise Bank', price: 'Custom', features: ['SLA 99.99%', 'Dedicated Account Manager', 'Custom 2FA Integration', 'On-site Security Audit'] }
        ],
        roadmap: [
            { step: '1', title: 'Security Audit', description: 'Detailed review of current communication protocols and security vulnerabilities.' },
            { step: '2', title: 'API Integration', description: 'Bridging banking legacy systems with our secure gateway.' },
            { step: '3', title: 'Regulatory Compliance', description: 'Ensuring all data handling meets local and international financial standards.' },
            { step: '4', title: 'Pilot Launch', description: 'Controlled rollout to a select user group to monitor delivery and security.' }
        ],
        faqs: [
            { question: 'Is your system PCI-DSS compliant?', answer: 'Yes, our infrastructure is fully PCI-DSS compliant, ensuring all financial data is handled with the highest security standards.' },
            { question: 'How fast are the OTPs delivered?', answer: 'Our average delivery time for OTPs is under 3 seconds globally, thanks to our direct-to-carrier routing.' },
            { question: 'Do you offer transaction monitoring?', answer: 'Yes, our platform includes real-time transaction monitoring to detect and prevent fraudulent activities.' },
            { question: 'Can we use our own Sender ID?', answer: 'Absolutely. We help you register and verify your official business Sender ID with global carriers.' },
            { question: 'Is there a limit to the number of messages?', answer: 'Our enterprise gateway is built to handle millions of messages per minute without latency.' },
            { question: 'How do you handle data residency?', answer: 'We offer flexible data residency options to ensure your data stays within your required geographic borders.' },
            { question: 'Do you support biometric verification integration?', answer: 'Yes, our APIs can be integrated with various biometric systems to add an extra layer of security.' },
            { question: 'What is your average response time for critical alerts?', answer: 'For critical security alerts, we guarantee a delivery time of under 3 seconds to ensure immediate reaction.' }
        ],
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
        useCases: [
            { title: 'Appointment Reminders', description: 'A city hospital reduced patient no-shows by 45% using automated WhatsApp and SMS reminders.' },
            { title: 'Post-Care Instructions', description: 'Patients received automated follow-up care instructions, improving recovery rates and reducing readmissions.' },
            { title: 'Emergency Alerts', description: 'Instant broadcasting of critical health alerts to staff and patients during facility emergencies.' }
        ],
        pricing: [
            { title: 'Clinic Starter', price: '$499/mo', features: ['HIPAA Messaging', 'Appointment Bot', 'Basic Analytics'] },
            { title: 'Hospital Enterprise', price: 'Custom', features: ['Full EMR Integration', 'White-label Patient Portal', 'Dedicated Support', 'Unlimited Staff Accounts'] }
        ],
        roadmap: [
            { step: '1', title: 'Privacy Review', description: 'Ensuring HIPAA and GDPR compliance for all data paths.' },
            { step: '2', title: 'EMR Connection', description: 'Linking our platform directly to your Electronic Medical Record system.' },
            { step: '3', title: 'Bot Training', description: 'Configuring AI bots with medically accurate terminology and triage logic.' },
            { step: '4', title: 'Staff Training', description: 'Onboarding healthcare staff on the unified communication dashboard.' }
        ],
        faqs: [
            { question: 'Is the platform HIPAA compliant?', answer: 'Yes, we provide Business Associate Agreements (BAA) and our architecture is designed for HIPAA compliance.' },
            { question: 'Can we integrate with our current EMR?', answer: 'We support integration with most major EMR systems via HL7 or FHIR APIs.' },
            { question: 'How is patient data protected?', answer: 'Data is encrypted at rest (AES-256) and in transit (TLS 1.2+), with strict access controls.' },
            { question: 'Do you offer two-way messaging?', answer: 'Yes, patients can reply to messages, allowing for real-time triage and support.' },
            { question: 'Can we send voice reminders?', answer: 'Our VoiceBot Studio allows you to create automated, natural-sounding voice call reminders.' },
            { question: 'What happens in an emergency?', answer: 'We provide an emergency broadcast feature that overrides standard queues for instant delivery.' },
            { question: 'Is there a limit on patient profiles?', answer: 'The Enterprise plan allows for unlimited patient profiles and historical record storage.' },
            { question: 'Can we use the platform for patient newsletters?', answer: 'Yes, you can segment patients by interest or condition to send relevant, HIPAA-compliant health newsletters.' }
        ],
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
        useCases: [
            { title: 'Flash Sale Success', description: 'A national fashion retailer generated $200k in 4 hours via a targeted WhatsApp blast to their loyalty list.' },
            { title: 'Inventory Clearing', description: 'Using StockFlow Pro, a boutique identified slow-moving stock and cleared it with automated SMS discounts, increasing cash flow by 15%.' },
            { title: 'Global Returns Portal', description: 'Automated 24/7 returns support via WhatsApp reduced support tickets by 60% during the holiday season.' }
        ],
        pricing: [
            { title: 'Growth Store', price: '$299/mo', features: ['WhatsApp API', 'Abandoned Cart Recovery', 'Standard Analytics'] },
            { title: 'Omni Enterprise', price: 'Custom', features: ['Multi-channel Sync', 'Advance AI Personalization', 'Dedicated Success Manager', 'API Access'] }
        ],
        roadmap: [
            { step: '1', title: 'Data Sync', description: 'Connecting your POS or E-commerce platform (Shopify/Magento) to our hub.' },
            { step: '2', title: 'Segment Mapping', description: 'Creating targeted customer groups based on purchase history and behavior.' },
            { step: '3', title: 'Automation Flows', description: 'Setting up abandoned cart, welcome series, and post-purchase follow-ups.' },
            { step: '4', title: 'Loyalty Launch', description: 'Activating the VIP messaging tier for high-value customers.' }
        ],
        faqs: [
            { question: 'Does this replace my email marketing?', answer: 'No, it complements it. Use email for long-form content and SMS/WhatsApp for high-urgency notifications.' },
            { question: 'Is it easy to integrate with Shopify?', answer: 'Yes, we have a one-click integration that syncs your products, customers, and orders instantly.' },
            { question: 'Can I send images and videos?', answer: 'Absolutely. WhatsApp allows for rich media, including product carousels and high-res videos.' },
            { question: 'How do you handle opt-outs?', answer: 'We include automated "Unsubscribe" or "STOP" handling to ensure you stay compliant with marketing laws.' },
            { question: 'Can we use this for customer support?', answer: 'Yes, our unified inbox allows your team to chat with customers in real-time across all channels.' },
            { question: 'Is there a limit on the number of products?', answer: 'No, our StockFlow Pro system can manage unlimited SKUs across multiple locations.' },
            { question: 'Do you support multi-currency?', answer: 'Yes, our platform and pricing can be configured for international operations.' },
            { question: 'Do you support AI personalized product recommendations in messages?', answer: 'Yes, our AI analyzes purchase history to suggest relevant products directly in WhatsApp and SMS threads.' }
        ],
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
        useCases: [
            { title: 'Real-time Fleet Tracking', description: 'A regional courier improved delivery accuracy to 99.8% by integrating real-time GPS alerts via our API.' },
            { title: 'Driver Safety Alerts', description: 'Automated weather and traffic alerts sent to 500+ drivers simultaneously, reducing accident rates by 12%.' },
            { title: 'Proof of Delivery', description: 'Instant photo and signature capture synced to HQ via WhatsApp, speeding up billing cycles by 5 days.' }
        ],
        pricing: [
            { title: 'Fleet Lite', price: '$899/mo', features: ['Up to 50 Vehicles', 'SMS Driver Alerts', 'Basic GPS Sync'] },
            { title: 'Global Logistics', price: 'Custom', features: ['Unlimited Vehicles', 'IoT Sensor Hub', 'Predictive AI Routing', '24/7 Ops Center'] }
        ],
        roadmap: [
            { step: '1', title: 'Infrastructure Audit', description: 'Analyzing current fleet management and communication gaps.' },
            { step: '2', title: 'IoT Deployment', description: 'Installing smart sensors and connecting driver mobile apps to the hub.' },
            { step: '3', title: 'API Integration', description: 'Connecting TMS and ERP systems for seamless data flow.' },
            { step: '4', title: 'Dashboard Go-Live', description: 'Launching the central command center for real-time visibility.' }
        ],
        faqs: [
            { question: 'Does this work internationally?', answer: 'Yes, our gateway and tracking systems operate in over 190 countries with local carrier support.' },
            { question: 'Can we track temperature-sensitive goods?', answer: 'Yes, our IoT integration supports cold-chain monitoring with real-time temperature alerts.' },
            { question: 'How is the driver data secured?', answer: 'All driver and route data is encrypted and stored in secure cloud environments with strict access controls.' },
            { question: 'Does it integrate with SAP?', answer: 'We have pre-built connectors for major ERP systems including SAP, Oracle, and Microsoft Dynamics.' },
            { question: 'Is there a mobile app for drivers?', answer: 'Yes, we provide a white-label mobile app for drivers to receive routes and submit proof of delivery.' },
            { question: 'What is the uptime guarantee?', answer: 'Our logistics infrastructure carries a 99.95% uptime SLA to ensure 24/7 visibility.' },
            { question: 'Do you support voice broadcasting?', answer: 'Yes, for emergency alerts, we can trigger automated voice calls to all active drivers.' },
            { question: 'Can the system trigger SMS alerts for unexpected route deviations?', answer: 'Yes, through GPS geofencing, we can alert managers instantly if a vehicle leaves its planned path.' }
        ],
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
        useCases: [
            { title: 'Instant Lead Response', description: 'A luxury real estate firm saw a 60% increase in conversions after implementing our "5-minute Lead Response" AI bot.' },
            { title: 'Automated Viewing Booking', description: 'Potential buyers can book property viewings via WhatsApp, directly syncing with agent calendars.' },
            { title: 'Virtual Tour Distribution', description: 'Instantly sending virtual tour links to leads who inquire via property portals, increasing engagement time.' }
        ],
        pricing: [
            { title: 'Agent Boost', price: '$199/mo', features: ['Missed Call Text-back', 'WhatsApp Lead Bot', 'Basic CRM Sync'] },
            { title: 'Agency Pro', price: '$1,499/mo', features: ['Multi-agent Dashboard', 'Full CRM Integration', 'Property Marketing Suite', 'Advanced Lead Scoring'] }
        ],
        roadmap: [
            { step: '1', title: 'Lead Source Audit', description: 'Identifying all channels where property inquiries are currently lost.' },
            { step: '2', title: 'Bot Configuration', description: 'Setting up the AI to answer specific property and neighborhood questions.' },
            { step: '3', title: 'Calendar Integration', description: 'Syncing with agent Google/Outlook calendars for automated scheduling.' },
            { step: '4', title: 'Live Monitoring', description: 'Reviewing lead quality and agent response metrics via the dashboard.' }
        ],
        faqs: [
            { question: 'Can it handle multiple property listings?', answer: 'Yes, the AI can be trained on thousands of unique property descriptions and details.' },
            { question: 'Does it work with Zillow or Rightmove?', answer: 'Yes, we can bridge inquiries from major portals into our lead-nurturing engine.' },
            { question: 'Can it speak multiple languages?', answer: 'Our AI supports over 50 languages, perfect for international property markets.' },
            { question: 'Is it easy for agents to use?', answer: 'The dashboard is intuitive, and most interactions happen via WhatsApp, which agents already use.' },
            { question: 'How do you prevent double-booking?', answer: 'Our real-time calendar sync ensures viewings are only booked during open time slots.' },
            { question: 'Can we send contracts through the platform?', answer: 'Yes, we integrate with e-signature tools to send and track contract progress.' },
            { question: 'Do you offer lead scoring?', answer: 'Yes, our AI analyzes inquirer behavior to prioritize high-intent buyers for the agents.' },
            { question: 'Does the AI support virtual tour follow-ups?', answer: 'Yes, the AI can automatically send links to virtual tours based on the specific property a lead is interested in.' }
        ],
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
        useCases: [
            { title: 'Emergency Campus Alerts', description: 'A university broadcasted a safety alert to 20,000 students in under 15 seconds during a severe weather event.' },
            { title: 'Admissions FAQ Bot', description: 'Automated 70% of prospective student queries during peak enrollment season, freeing up staff for complex cases.' },
            { title: 'Course Reminders', description: 'Sent personalized SMS reminders for fee deadlines and exam schedules, reducing late payments by 22%.' }
        ],
        pricing: [
            { title: 'Safe Campus', price: '$599/mo', features: ['Emergency Broadcast', 'SMS Alerts', 'Staff Directory Sync'] },
            { title: 'Edu Enterprise', price: 'Custom', features: ['AI Admissions Assistant', 'Full LMS Integration', 'Voice/Chat Unified Hub', 'Custom Reporting'] }
        ],
        roadmap: [
            { step: '1', title: 'Stakeholder Audit', description: 'Meeting with IT, Security, and Admissions to map communication requirements.' },
            { step: '2', title: 'Directory Sync', description: 'Securely importing student and faculty data into the messaging hub.' },
            { step: '3', title: 'Bot Learning Phase', description: 'Feeding institutional knowledge base into our AI support bot.' },
            { step: '4', title: 'Crisis Drill', description: 'Testing emergency broadcast capabilities to ensure 100% reach.' }
        ],
        faqs: [
            { question: 'How do you protect student privacy?', answer: 'We are fully FERPA and GDPR compliant, ensuring all student data is handled with extreme care.' },
            { question: 'Can we send grades via SMS?', answer: 'Yes, we provide secure, personalized messaging for sensitive academic information.' },
            { question: 'Does it integrate with Canvas or Blackboard?', answer: 'We have pre-built integrations for major Learning Management Systems (LMS).' },
            { question: 'Can students reply to the emergency alerts?', answer: 'Yes, our two-way system allows students to signal their status during emergencies.' },
            { question: 'Do you offer student council voting tools?', answer: 'Yes, we can build secure SMS-based voting systems for student elections.' },
            { question: 'What is the delivery rate for campus-wide alerts?', answer: 'We provide a 99.99% delivery guarantee through high-priority carrier channels.' },
            { question: 'Can we use this for faculty coordination?', answer: 'Absolutely. Many institutions use separate channels for administrative and student communication.' },
            { question: 'Can we use the platform for alumni donation campaigns?', answer: 'Yes, our targeted messaging tool is perfect for coordinating multi-channel fundraising and engagement drives.' }
        ],
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
    useCases: [
      { title: 'E-commerce Flash Sale', description: 'A retailer sent an SMS blast during a holiday sale and saw 40% immediate engagement compared to 2% via email.' },
      { title: 'Appointment Reminders', description: 'A medical clinic reduced "no-shows" by 65% by switching from email reminders to automated WhatsApp notifications.' }
    ],
    pricing: [
      { title: 'Engagement Starter', price: '$299/mo', features: ['SMS/WhatsApp Integration', 'Basic Flow Design', 'Standard Support'] },
      { title: 'Scale Growth', price: '$899/mo', features: ['Omnichannel Sync', 'Advanced AI Content', 'Priority Delivery', 'Dedicated Manager'] }
    ],
    roadmap: [
      { step: '1', title: 'Audit Channels', description: 'Analyze current customer touchpoints and engagement metrics.' },
      { step: '2', title: 'API Integration', description: 'Connect your CRM to our high-delivery SMS/WhatsApp gateways.' },
      { step: '3', title: 'Campaign Design', description: 'Craft high-converting message templates with CTAs.' },
      { step: '4', title: 'Live Launch', description: 'Go live and monitor real-time read and response rates.' }
    ],
    faqs: [
      { category: 'Comparison', question: 'SMS vs Email: Which is better?', answer: 'SMS is for speed (98% read rate). Email is for detail. We help you use both together.' },
      { category: 'Privacy', question: 'Is texting customers legal?', answer: 'Yes, if they agree to it. We provide tools to handle "Opt-ins" so you stay 100% compliant.' },
      { category: 'Cost', question: 'How much more does SMS cost than email?', answer: 'While SMS has a per-message cost, the ROI is significantly higher due to the 40x higher interaction rate.' },
      { category: 'Targeting', question: 'Can I segment my audience?', answer: 'Yes, our platform allows you to create segments based on behavior, location, and purchase history.' },
      { category: 'Automation', question: 'Can I automate the messages?', answer: 'Absolutely. You can set up triggers based on customer actions like signing up or making a purchase.' },
      { category: 'Reporting', question: 'How do I know if it is working?', answer: 'We provide real-time dashboards showing delivery, read rates, and click-through metrics.' },
      { category: 'Global', question: 'Can I send messages internationally?', answer: 'Yes, our global gateway supports over 200 countries with high delivery assurance.' },
      { category: 'Support', question: 'Do you help with message templates?', answer: 'Yes, our team provides high-converting templates tailored to your industry.' }
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
    useCases: [
      { title: 'Real Estate Inquiry', description: 'A realtor saved a $500k sale because an automated text held the lead while he was driving.' },
      { title: 'Dentist Emergencies', description: 'After-hours callers received a temporary scheduling link via auto-SMS, capturing 15% more bookings.' }
    ],
    pricing: [
      { title: 'Safety Net Basic', price: '$149/mo', features: ['Missed Call Auto-SMS', 'Instant Lead Alerts', 'Basic CRM Logging'] },
      { title: 'Sales Accelerator', price: '$499/mo', features: ['Multi-agent Handoff', 'AI Qualification Bot', 'Full CRM Integration', 'Advanced Reporting'] }
    ],
    roadmap: [
      { step: '1', title: 'Call Routing Audit', description: 'Map out how your current phone system handles overflow.' },
      { step: '2', title: 'Automation Trigger', description: 'Configure the webhook to detect missed calls in real-time.' },
      { step: '3', title: 'Script Writing', description: 'Prepare compelling auto-reply scripts that keep leads warm.' },
      { step: '4', title: 'KPI Setup', description: 'Start tracking lead retention and callback speed metrics.' }
    ],
    faqs: [
      { category: 'Automation', question: 'Does the text happen automatically?', answer: 'Yes. Our system detects the missed call and sends the SMS instantly without you touching anything.' },
      { category: 'CRM', question: 'Does it save the number?', answer: 'Yes, every caller is logged into a database (CRM) so you can market to them later.' },
      { category: 'Customization', question: 'Can I change the message?', answer: 'Yes, you can fully customize the auto-reply message to match your brand voice.' },
      { category: 'Timing', question: 'Is there a delay?', answer: 'The text is usually sent within 10-30 seconds of the call being missed.' },
      { category: 'Integration', question: 'Does it work with my existing phone line?', answer: 'Yes, we can usually bridge your existing landline or mobile number to our automation engine.' },
      { category: 'Filtering', question: 'Will it text spam callers?', answer: 'Our system includes anti-spam filtering to only respond to legitimate potential leads.' },
      { category: 'Reporting', question: 'Can I see the results?', answer: 'Yes, we provide a dashboard showing saved leads, callback speed, and estimated revenue retention.' },
      { category: 'Support', question: 'What if I miss a lot of calls?', answer: 'Our system handles unlimited volumes and can even route leads to a fallback team if needed.' }
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
    useCases: [
      { title: 'Ransomware Recovery', description: 'A law firm was hit by a virus. We wiped their servers and restored from a 1-hour-old cloud backup. Zero data loss.' },
      { title: 'Hardware Failure', description: 'A local manufacturer\'s primary database failed. We switched them to a cloud replica in 30 minutes.' }
    ],
    pricing: [
      { title: 'Business Vault', price: '$249/mo', features: ['Daily Incremental Backups', '256-bit Encryption', '1TB Cloud Storage'] },
      { title: 'Resilience Enterprise', price: '$999/mo', features: ['Real-time Cloud Sync', 'Disaster Recovery Warm-standby', 'Unlimited Storage', '24/7 Priority Restore'] }
    ],
    roadmap: [
      { step: '1', title: 'Inventory Data', description: 'Identifying all critical data points and storage locations.' },
      { step: '2', title: 'Encryption Key', description: 'Setting up private keys and redundant local storage nodes.' },
      { step: '3', title: 'Cloud Sync', description: 'Initiating the first full-image sync to tiered AWS/Google cloud storage.' },
      { step: '4', title: 'Disaster Drill', description: 'Testing a full system restore to verify speed and integrity.' }
    ],
    faqs: [
      { category: 'Security', question: 'Is my data readable by you?', answer: 'No. We use AES-256 encryption. Only you hold the key to read your files.' },
      { category: 'Recovery', question: 'How fast can we recover?', answer: 'Critical systems can usually be rebooted in the cloud within 4 hours.' },
      { category: 'Reliability', question: 'What happens if your cloud fails?', answer: 'We use the "3-2-1" rule, meaning your data is replicated across multiple global data centers for 100% redundancy.' },
      { category: 'Cost', question: 'Is cloud storage expensive?', answer: 'Our tiered storage plans mean you only pay premium prices for urgent data; cold data is stored very cheaply.' },
      { category: 'Automation', question: 'Do I have to remember to back up?', answer: 'No, our agents run silently in the background, syncing changes every hour or even in real-time.' },
      { category: 'Compliance', question: 'Is it GDPR/HIPAA compliant?', answer: 'Yes, our encryption and access logs meet the strictest international data handling standards.' },
      { category: 'Testing', question: 'How do I know the backup works?', answer: 'We perform quarterly "Disaster Drills" to verify that your data can be restored successfully.' },
      { category: 'Scalability', question: 'What if my data grows?', answer: 'The cloud is infinitely scalable. We expand your storage automatically as needed.' }
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
    useCases: [
      { title: 'Fashion Retailer Recovery', description: 'A brand sends a WhatsApp message with a 10% discount code 1 hour after cart abandonment, recovering $15k in monthly sales.' },
      { title: 'Tech Gadget Store', description: 'Using personalized SMS "Price Drop" alerts for items in carts, a store increased their conversion rate by 12%.' }
    ],
    roadmap: [
      { step: '1', title: 'Platform Connect', description: 'Linking your e-commerce store (Shopify/WooCommerce) to our messaging hub.' },
      { step: '2', title: 'Flow Logic', description: 'Defining the timing and frequency of recovery messages (e.g., 1 hour, 24 hours).' },
      { step: '3', title: 'Offer Strategy', description: 'Crafting compelling discount or value-add offers to entice return visits.' },
      { step: '4', title: 'A/B Testing', description: 'Testing different headlines and channels to find the highest recovery rate.' }
    ],
    pricing: [
      { title: 'Basic Recovery', price: '$299/mo', features: ['SMS Only', 'Up to 500 Recoveries', 'Standard Templates'] },
      { title: 'Omnichannel Pro', price: '$799/mo', features: ['WhatsApp + SMS', 'Unlimited Recoveries', 'AI Personalization', 'ROI Dashboard'] }
    ],
    faqs: [
      { category: 'Results', question: 'How much money can I make?', answer: 'Most clients see a 15-25% lift in total revenue by automating cart recovery.' },
      { category: 'Platform', question: 'Does it work with Shopify?', answer: 'Yes, we plug directly into Shopify, WooCommerce, Magento, and custom builds.' },
      { category: 'Privacy', question: 'Is it spam?', answer: 'No, we only message customers who have provided consent during the checkout process.' },
      { category: 'Costs', question: 'Do I pay per recovery?', answer: 'We offer fixed monthly plans as well as performance-based pricing models.' },
      { category: 'Channels', question: 'Can I use WhatsApp?', answer: 'Yes, WhatsApp is our most effective channel with a 40%+ click-through rate.' },
      { category: 'Support', question: 'Do you write the messages?', answer: 'We provide pre-built, high-converting templates that you can customize.' },
      { category: 'Analytics', question: 'Can I see the ROI?', answer: 'Yes, our dashboard shows exactly how much revenue was recovered by each campaign.' },
      { category: 'Global', question: 'Does it work for international shippers?', answer: 'Absolutely. We handle currency and timezone adjustments automatically.' }
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
    useCases: [
      { title: 'Accounting Sync', description: 'A wholesale distributor saved 40 hours of manual data entry per week by syncing their e-commerce sales directly to QuickBooks.' },
      { title: 'Inventory Automation', description: 'A manufacturer automated their stock reordering process, reducing "stock-outs" by 90%.' }
    ],
    pricing: [
      { title: 'Workflow Basic', price: '$499/mo', features: ['Single API Bridge', 'Standard Logging', 'Email Support'] },
      { title: 'Ops Enterprise', price: 'Custom', features: ['Unlimited Connectors', 'Real-time Error Recovery', 'Priority Dev Support', 'Custom Dashboard'] }
    ],
    roadmap: [
      { step: '1', title: 'Workflow Mapping', description: 'Identifying manual touchpoints and data friction in your current operations.' },
      { step: '2', title: 'Connector Setup', description: 'Building the secure API bridges between your core software platforms.' },
      { step: '3', title: 'Data Validation', description: 'Testing the sync with "shadow data" to ensure 100% accuracy.' },
      { step: '4', title: 'Go-Live & Monitor', description: 'Activating the live sync and monitoring for throughput improvements.' }
    ],
    faqs: [
      { category: 'Cost', question: 'Is custom automation expensive?', answer: 'The initial setup costs money, but it usually pays for itself in 3 months by saving labor costs.' },
      { category: 'Tech', question: 'Do I need to change my software?', answer: 'Usually not. We build connectors that work with the tools you already have like Salesforce, SAP, or Sage.' },
      { category: 'Complexity', question: 'What if our workflow is very unique?', answer: 'We specialize in custom "Middleware" that can handle complex, multi-step logic and rules.' },
      { category: 'Maintenance', question: 'Does it break when software updates?', answer: 'We maintain the API bridges and update them automatically whenever the third-party software changes.' },
      { category: 'Security', question: 'Is data synced securely?', answer: 'Yes, we use mutual TLS and private API keys to ensure your data is never exposed during transit.' },
      { category: 'Scalability', question: 'Can it handle high volumes?', answer: 'Our infrastructure is built on AWS Lambda, allowing it to scale from 1 to 1,000,000 operations per minute instantly.' },
      { category: 'Training', question: 'Does our staff need training?', answer: 'The best automation is invisible. Your staff just notices that the work is already done for them.' },
      { category: 'ROI', question: 'How do you measure success?', answer: 'We track "Hours Saved" and "Error Reduction Rate" as primary KPIs for automation projects.' }
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
    useCases: [
      { title: 'E-commerce FAQ Bot', description: 'A retailer automated 85% of "Where is my order?" queries, allowing their team to focus on high-value sales chats.' },
      { title: 'SaaS Onboarding AI', description: 'A software company used a WhatsApp bot to guide new users through setup, increasing trial-to-paid conversion by 20%.' }
    ],
    pricing: [
      { title: 'Bot Starter', price: '$299/mo', features: ['Official API Access', 'Basic Flow Design', 'Standard Templates'] },
      { title: 'Agent Plus', price: '$899/mo', features: ['AI Natural Language', 'CRM Integration', 'Live Agent Handoff', 'Advanced Analytics'] }
    ],
    roadmap: [
      { step: '1', title: 'Topic Analysis', description: 'Reviewing past support tickets to identify the top 10 repetitive questions.' },
      { step: '2', title: 'Knowledge Training', description: 'Feeding your company documents and policies into the AI Brain.' },
      { step: '3', title: 'Flow Integration', description: 'Connecting the bot to your shipping or database APIs for real-time answers.' },
      { step: '4', title: 'Handoff Setup', description: 'Configuring the logic for when a human agent should take over the chat.' }
    ],
    faqs: [
      { category: 'Quality', question: 'Will customers hate the bot?', answer: 'Not if it\'s smart. Our bots solve problems instantly. People hate waiting, not bots.' },
      { category: 'Availability', question: 'Does it work 24/7?', answer: 'Yes. Your support is now open nights, weekends, and holidays without paying overtime.' },
      { category: 'Human Touch', question: 'What if the bot gets stuck?', answer: 'The bot automatically detects when it cannot help and seamlessly hands the chat to a human agent.' },
      { category: 'Multi-lingual', question: 'Can it speak other languages?', answer: 'Yes, our AI supports over 50 languages with native-level fluency.' },
      { category: 'Integration', question: 'Does it work with Zendesk?', answer: 'Yes, we integrate with Zendesk, Freshdesk, and most major helpdesk platforms.' },
      { category: 'Customization', question: 'Can we name the bot?', answer: 'Absolutely. You can customize the name, personality, and avatar to match your brand.' },
      { category: 'Reporting', question: 'How do I see bot performance?', answer: 'Our dashboard shows "Deflection Rate", "Customer Satisfaction", and "Resolved Tickets" in real-time.' },
      { category: 'Security', question: 'Is the conversation private?', answer: 'Yes, all chats are encrypted and we follow strict data privacy rules (GDPR/CCPA).' }
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
    useCases: [
      { title: 'SaaS Retention Loop', description: 'A software company sent targeted WhatsApp "New Feature" tips to inactive users, reducing monthly churn by 18%.' },
      { title: 'Subscription Box Loyalty', description: 'Personalized "Re-activate" SMS offers with special discounts brought back 12% of canceled subscribers.' }
    ],
    pricing: [
      { title: 'Retention Lite', price: '$399/mo', features: ['Birthday/Anniversary Automations', 'Basic Feedback Loops', 'Standard Analytics'] },
      { title: 'Loyalty Enterprise', price: 'Custom', features: ['Predictive Churn AI', 'Multi-tier Rewards Program', 'Dedicated Retention Coach', 'Custom Integration'] }
    ],
    roadmap: [
      { step: '1', title: 'Churn Audit', description: 'Analyzing exactly when and why customers are leaving your service.' },
      { step: '2', title: 'Trigger Setup', description: 'Configuring "At-Risk" alerts based on lower-than-usual user activity.' },
      { step: '3', title: 'Communication Design', description: 'Creating non-spammy, high-value check-in messages and offers.' },
      { step: '4', title: 'Feedback Engine', description: 'Launching automated NPS and CSAT surveys to catch issues early.' }
    ],
    faqs: [
      { category: 'Retention', question: 'What is a good retention rate?', answer: 'It varies by industry, but increasing retention by just 5% can increase profits by 25-95%.' },
      { category: 'Methods', question: 'How does messaging help?', answer: 'Frequent, personalized communication makes customers feel valued and keeps your brand top-of-mind.' },
      { category: 'Automation', question: 'Is it hard to manage?', answer: 'No, once the "Retention Loops" are built, they run automatically based on customer behavior.' },
      { category: 'Timing', question: 'When is the best time to message?', answer: 'We use AI to determine the "Golden Hour" for each customer based on their past interaction history.' },
      { category: 'Channel', question: 'SMS or Email for churn?', answer: 'SMS is great for urgent re-engagement, while Email is better for detailed newsletters and updates.' },
      { category: 'Global', question: 'Can we use this for international users?', answer: 'Yes, our platform automatically adjusts for timezones and local language preferences.' },
      { category: 'Feedback', question: 'Do customers actually reply?', answer: 'Yes, WhatsApp feedback surveys have a 5x higher response rate than traditional web surveys.' },
      { category: 'Cost', question: 'What is the ROI?', answer: 'Retaining one enterprise customer can often pay for the entire system for a year.' }
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
    useCases: [
      { title: 'Official Secure Chat', description: 'A law firm replaced external WhatsApp groups with a secure internal encrypted chat app, preventing data leaks.' },
      { title: 'Project Management Sync', description: 'Moving from personal Trello boards to a secure, unified internal portal for client deliverables.' }
    ],
    pricing: [
      { title: 'Security Audit', price: '$2,500', features: ['Gap Analysis', 'Risk Report', 'Employee Training Guide'] },
      { title: 'Secure Workspace', price: '$15/user/mo', features: ['Encrypted Chat', 'Secure File Vault', 'Single Sign-On (SSO)', 'Admin Controls'] }
    ],
    roadmap: [
      { step: '1', title: 'Discovery Audit', description: 'Identifying unapproved apps currently being used within the organization.' },
      { step: '2', title: 'Policy Setup', description: 'Drafting clear "Acceptable Use" policies and secure alternatives.' },
      { step: '3', title: 'Solution Rollout', description: 'Deploying the secure alternatives and migrating critical data.' },
      { step: '4', title: 'Monitoring & Block', description: 'Continuously monitoring for new Shadow IT and providing feedback to staff.' }
    ],
    faqs: [
      { category: 'Compliance', question: 'Can you help with GDPR?', answer: 'Yes, our tools are built with "Privacy by Design" to ensure full compliance with GDPR and CCPA.' },
      { category: 'Difficulty', question: 'Will it slow down staff?', answer: 'No, we pick tools that are even easier to use than the unapproved ones, ensuring high adoption.' },
      { category: 'Visibility', question: 'Can I see what apps are being used?', answer: 'Yes, our monitoring tools provide a "Risk Scorecard" for all third-party app activity.' },
      { category: 'Mobile', question: 'Does it work on personal phones?', answer: 'Yes, we use "Containerized" mobile apps to keep business and personal data separate.' },
      { category: 'Cost', question: 'How much does Shadow IT cost?', answer: 'A data breach from an unapproved app can cost a company millions in fines and lost trust.' },
      { category: 'Integration', question: 'Does it work with Google Workspace?', answer: 'Yes, we integrate with Google, Microsoft 365, and Okta for secure SSO.' },
      { category: 'Support', question: 'Do you train our employees?', answer: 'Yes, we provide "Security Awareness" training to help staff understand the risks of unapproved apps.' },
      { category: 'Control', question: 'Can I block certain apps?', answer: 'Yes, we can implement network-level blocks for high-risk domains and applications.' }
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
    useCases: [
      { title: 'Holiday Promotion', description: 'A fashion brand used WhatsApp carousels to showcase their winter collection, resulting in a 4x higher CTR than their previous email campaign.' },
      { title: 'Service Renewals', description: 'An insurance provider automated renewal reminders via SMS, reducing manual call volume by 50%.' }
    ],
    pricing: [
      { title: 'Starter', price: '$499/mo', features: ['WhatsApp API Access', 'Basic SMS Gateway', '10,000 Messages', 'Standard Support'] },
      { title: 'Scale', price: '$1,299/mo', features: ['Omnichannel Sync', 'AI Chatbot Intro', '50,000 Messages', 'Priority Support'] }
    ],
    roadmap: [
      { step: '1', title: 'Persona Mapping', description: 'Define target audience segments for tailored messaging.' },
      { step: '2', title: 'Channel Verification', description: 'Secure official Business verification for WhatsApp and SMS IDs.' },
      { step: '3', title: 'Flow Automation', description: 'Build "Trigger-Action" sequences for birthdays, renewals, etc.' },
      { step: '4', title: 'Performance Review', description: 'Monthly audit of engagement metrics and ROI tracking.' }
    ],
    faqs: [
      { category: 'Time', question: 'How fast can we launch?', answer: 'We can get your basic messaging channels live in under 48 hours.' },
      { category: 'Cost', question: 'What is the ROI?', answer: 'Most clients see 10x ROI compared to email within the first 3 months.' },
      { category: 'Verification', question: 'How do I get the Green Tick?', answer: 'We handle the entire verification process with Meta to get your brand the official Business status.' },
      { category: 'Privacy', question: 'Is it legal to text customers?', answer: 'Yes, we provide opt-in management tools to ensure you follow TCPA and GDPR rules.' },
      { category: 'Global', question: 'Does it work in every country?', answer: 'Yes, we support local messaging rates and delivery in over 190 countries.' },
      { category: 'Support', question: 'Can humans take over?', answer: 'Yes, if the AI cannot answer, it smoothly hands over the chat to your live human agents.' },
      { category: 'Reporting', question: 'What metrics do I see?', answer: 'You get real-time dashboards for Delivery, Open, and Click-through rates.' },
      { category: 'Integration', question: 'Can I link it to my CRM?', answer: 'Yes, we provide pre-built integrations for Salesforce, HubSpot, and many others.' }
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
    useCases: [
      { title: 'Global Logistics Shift', description: 'Moved a 20-year-old shipping company from pen-and-paper to a real-time cloud dashboard, increasing order capacity by 300%.' },
      { title: 'Remote Law Firm', description: 'Digitized 50,000 files and set up secure remote access, allowing a 50-person firm to go fully remote during the pandemic.' }
    ],
    pricing: [
      { title: 'Digital Audit', price: '$5,000', features: ['System Inventory', 'Cloud Readiness Report', 'Transition Roadmap'] },
      { title: 'Transformation Lead', price: 'Custom', features: ['Full Cloud Migration', 'Custom Dashboard Build', 'Staff Retraining', '24/7 Managed Support'] }
    ],
    roadmap: [
      { step: '1', title: 'Data Inventory', description: 'Identifying every spreadsheet, folder, and paper record that needs to be digitized.' },
      { step: '2', title: 'Cloud selection', description: 'Architecting the right AWS or Google Cloud environment for your specific security needs.' },
      { step: '3', title: 'Incremental Build', description: 'Developing your new custom dashboard and migrating data in low-risk stages.' },
      { step: '4', title: 'Switchover & Onboarding', description: 'Retraining your team on the new modern workflow and retiring legacy hardware.' }
    ],
    faqs: [
      { category: 'Disruption', question: 'Will this stop our work?', answer: 'No. We build the new system in parallel and switch over only when it is perfect and verified.' },
      { category: 'Cost', question: 'Is it cheaper long-term?', answer: 'Yes. You eliminate physical server costs, reduce manual labor hours, and lower security risk insurance.' },
      { category: 'Data Safety', question: 'Will we lose data?', answer: 'Never. We perform hash-sum verification on every file moved to ensure 100% data integrity.' },
      { category: 'Staff Reaction', question: 'Will my staff hate the change?', answer: 'We focus on "User-Centric Design" to make the new tools easier to use than the old ones, ensuring high adoption.' },
      { category: 'Mobile', question: 'Can we work from phones?', answer: 'Yes, every digital transformation project includes mobile-responsive dashboards and apps.' },
      { category: 'Security', question: 'Is the cloud safe?', answer: 'The cloud is far safer than on-premise servers, offering military-grade encryption and 99.99% uptime.' },
      { category: 'Speed', question: 'How long does it take?', answer: 'A typical transformation takes 3-6 months depending on the size of your organization.' },
      { category: 'Support', question: 'Do you help after launch?', answer: 'Yes, we provide ongoing managed services to ensure your new ecosystem stays updated and fast.' }
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
    useCases: [
      { title: 'Customer Support AI', description: 'Deployed a custom GPT-4 engine trained on company documentation that resolves 80% of support tickets without a human.' },
      { title: 'AI Document Processor', description: 'Automated invoice data extraction from 10,000 PDFs per month, saving $5,000 in monthly labor costs.' }
    ],
    pricing: [
      { title: 'AI Pilot', price: '$7,500', features: ['Custom LLM Sandbox', 'Data Preparation', 'Initial Agent Setup'] },
      { title: 'AI Scaling', price: '$2,500/mo', features: ['Continuous Learning Updates', 'Unlimited Conversations', 'Priority API Access', 'Performance Tuning'] }
    ],
    roadmap: [
      { step: '1', title: 'Opportunity Audit', description: 'Identifying the most repetitive tasks where AI can provide the highest ROI.' },
      { step: '2', title: 'Data Cleaning', description: 'Preparing your internal knowledge base and files to "teach" the AI.' },
      { step: '3', title: 'Agent Deployment', description: 'Building and testing the AI voice or chat agents in a sandbox environment.' },
      { step: '4', title: 'Live Integration', description: 'Connecting the AI workers to your live CRM, phone lines, and email systems.' }
    ],
    faqs: [
      { category: 'Privacy', question: 'Is my data used to train public AI?', answer: 'Never. We use private enterprise instances (like Azure Open AI or AWS Bedrock) where your data is never shared.' },
      { category: 'Accuracy', question: 'Does the AI hallucinate?', answer: 'We use "Grounding" and RAG (Retrieval Augmented Generation) to ensure the AI only speaks from your verified documents.' },
      { category: 'Replacement', question: 'Will this replace my staff?', answer: 'AI is a tool to "Augment" staff, allowing them to focus on high-value creative work while the AI handles the boring repetitive tasks.' },
      { category: 'Voices', question: 'Does the voice sound real?', answer: 'Yes, we use advanced Neural TTS that includes human-like pauses, breaths, and emotional nuances.' },
      { category: 'Training', question: 'How long does it take to learn?', answer: 'A custom agent can be trained on your data and ready for testing in as little as 2-4 weeks.' },
      { category: 'Availability', question: 'Does it work in every language?', answer: 'Yes, our AI models are natively polyglot, supporting over 60 languages out of the box.' },
      { category: 'Monitoring', question: 'Can I see what the AI said?', answer: 'Yes, you get full transcripts and sentiment analysis for every single interaction.' },
      { category: 'Handoff', question: 'Can it transfer to a human?', answer: 'Yes, the AI can seamlessly hand off a call or chat to a live human if it detects frustration or complex needs.' }
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
    useCases: [
      { title: 'Global Retail Sync', description: 'Coordinated WhatsApp, SMS, and Email for a Black Friday launch, resulting in a cohesive customer journey and 3x sales.' },
      { title: 'Real Estate Nurture', description: 'Synced Facebook Lead Ads -> WhatsApp Greeting -> Email Drip -> SMS Viewing Reminder, increasing lead-to-booking rate by 50%.' }
    ],
    pricing: [
      { title: 'Marketing Pro', price: '$1,299/mo', features: ['Omnichannel Dashboard', '50,000 Messages', 'Standard CRM Sync'] },
      { title: 'Omni Enterprise', price: 'Custom', features: ['Unlimited Channels', 'Advanced AI Flows', 'Custom Attribution Engine', 'Dedicated Campaign Manager'] }
    ],
    roadmap: [
      { step: '1', title: 'Channel Audit', description: 'Evaluating current marketing channels and identifying silos that need to be unified.' },
      { step: '2', title: 'Data Centralization', description: 'Connecting all sources into a single customer data platform (CDP).' },
      { step: '3', title: 'Flow Logic Build', description: 'Designing the "If-Then" triggers that move customers between channels automatically.' },
      { step: '4', title: 'Measurement Setup', description: 'Configuring multi-touch attribution to see exactly which channel drives the final sale.' }
    ],
    faqs: [
      { category: 'Integration', question: 'Does it work with HubSpot?', answer: 'Yes, we integrate with HubSpot, Salesforce, Klaviyo, and many others.' },
      { category: 'Complexity', question: 'Is it hard to manage?', answer: 'No, our unified dashboard hides the complexity, letting you see all conversations in one place.' },
      { category: 'Privacy', question: 'How do you handle cookie loss?', answer: 'We use server-side tracking and first-party data to maintain attribution even in the post-cookie era.' },
      { category: 'Cost', question: 'Does it save money?', answer: 'Yes, by coordinating channels, you avoid "Double Messaging" and stop wasting ad spend on already-converted leads.' },
      { category: 'Scalability', question: 'Can we add new channels?', answer: 'Yes, as new channels emerge (like RCS or Apple Business Chat), we add them to the suite.' },
      { category: 'Support', question: 'Do you help with strategy?', answer: 'Our Enterprise plan includes a dedicated campaign manager to help optimize your omnichannel flows.' },
      { category: 'Messaging', question: 'Can I send images?', answer: 'Yes, we support rich media across all compatible channels including WhatsApp, RCS, and MMS.' },
      { category: 'Compliance', question: 'Is it GDPR compliant?', answer: 'Yes, we provide built-in consent management tools to ensure all marketing stays legal.' }
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
    useCases: [
      { title: 'Global SaaS Uptime', description: 'Managed a multi-region cloud setup for a fintech company, maintaining 99.99% availability during a 500% traffic surge.' },
      { title: 'Remote Retail Sync', description: 'Unified 200 remote retail storefronts into a single secure VPN network, allowing for instantaneous inventory updates.' }
    ],
    pricing: [
      { title: 'Infra Sentinel', price: '$1,500/mo', features: ['24/7 Monitoring', 'Security Patching', 'Backup Management', 'Monthly Health Audit'] },
      { title: 'Total Ops Managed', price: 'Custom', features: ['Full Cloud Architecture', 'DR (Disaster Recovery) Plan', 'CI/CD Support', 'Dedicated DevOps Engineer'] }
    ],
    roadmap: [
      { step: '1', title: 'Network Audit', description: 'Performing a deep scan of all servers, VPNs, and cloud assets for security and performance gaps.' },
      { step: '2', title: 'Monitoring Setup', description: 'Deploying real-time agents to every node for 24/7 visibility into health and traffic.' },
      { step: '3', title: 'Security Hardening', description: 'Implementing Zero-Trust access and automated firewall rules to protect sensitive assets.' },
      { step: '4', title: 'Active Management', description: 'Transitioning to 24/7 managed operations with guaranteed response times for any incident.' }
    ],
    faqs: [
        { category: 'Support', question: 'Do you support Linux?', answer: 'Yes, we support Linux, Windows, and Mac environments.' },
        { category: 'Uptime', question: 'What is the uptime guarantee?', answer: 'We offer a 99.99% uptime SLA for all managed infrastructure.' },
        { category: 'Security', question: 'How do you secure remote access?', answer: 'We implement Zero-Trust Network Access (ZTNA) and hardware-based MFA for all connections.' },
        { category: 'Monitoring', question: 'Is it 24/7?', answer: 'Yes, our Security Operations Center (SOC) monitors your systems 24 hours a day, 365 days a year.' },
        { category: 'Scaling', question: 'Can it handle 1,000 servers?', answer: 'Our management platform is infinitely scalable and currently manages environments of all sizes.' },
        { category: 'Compliance', question: 'Do you help with SOC2?', answer: 'Yes, our RIM service includes all the necessary logging and access controls needed for SOC2 compliance.' },
        { category: 'Reporting', question: 'Do I get status updates?', answer: 'You get weekly "Infrastructure Health" reports and real-time alerts for any critical issues.' },
        { category: 'Hardware', question: 'Do you manage endpoints?', answer: 'Yes, we manage both cloud servers and physical laptops for your remote team members.' }
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
    useCases: [
      { title: 'Shopified Success', description: 'Redesigned the checkout flow and optimized page speed for a jewelry brand, increasing conversion rate from 1.5% to 4.2%.' },
      { title: 'Global Store Scale', description: 'Implemented dynamic currency and localized payment gateways for a brand moving into the EU market, boosting sales by 40%.' }
    ],
    pricing: [
      { title: 'Acceleration Audit', price: '$3,500', features: ['Core Web Vitals Test', 'UX/UI Review', 'Checkout Friction Report'] },
      { title: 'Full Store Boost', price: 'Custom', features: ['Full Redesign', 'Custom App Development', 'Conversion Rate Optimization (CRO)', 'Managed Hosting'] }
    ],
    roadmap: [
      { step: '1', title: 'Performance Audit', description: 'Measuring site speed and tracking user "drop-off" points in the current journey.' },
      { step: '2', title: 'UX Redesign', description: 'Applying modern, one-click checkout patterns and optimizing mobile navigation.' },
      { step: '3', title: 'Asset Optimization', description: 'Implementing edge-caching and high-speed image delivery for millisecond loading.' },
      { step: '4', title: 'Post-Launch A/B', description: 'Continuously testing new layouts and offers to maximize the final conversion rate.' }
    ],
    faqs: [
      { category: 'Platform', question: 'Do you work with Shopify?', answer: 'Yes, we are official Shopify Partners and also work with BigCommerce and WooCommerce.' },
      { category: 'Speed', question: 'Will my site be faster?', answer: 'We guarantee a significant increase in your Google PageSpeed and Core Web Vitals scores.' },
      { category: 'SEO', question: 'Does this help my ranking?', answer: 'Absolutely. Site speed and UX are major ranking factors in Google\'s search algorithm.' },
      { category: 'Mobile', question: 'Is it mobile-first?', answer: 'Since 70%+ of e-commerce traffic is mobile, we design the mobile experience first and then scale for desktop.' },
      { category: 'Payment', question: 'Can we add Apple Pay?', answer: 'Yes, we implement all modern express checkout options including Apple Pay, Google Pay, and Shop Pay.' },
      { category: 'Security', question: 'Is the new site secure?', answer: 'Yes, we use the latest SSL standards and PCI-compliant payment integrations.' },
      { category: 'ROI', question: 'When will I see results?', answer: 'Most clients see an increase in conversion rate within the first month after the redesign.' },
      { category: 'Maintenance', question: 'Do you handle updates?', answer: 'Yes, we provide monthly maintenance plans to keep your store running at peak performance.' }
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
    useCases: [
      { title: 'Mainframe Migration', description: 'Safely migrated a regional bank from a 1990s mainframe to a modern microservices architecture without a minute of downtime.' },
      { title: 'SaaS Rebuild', description: 'Re-coded a legacy CRM into a modern React/Node.js stack, reducing maintenance costs by 60%.' }
    ],
    pricing: [
      { title: 'Tech Debt Audit', price: '$7,500', features: ['Code Review', 'Risk Mapping', 'Modernization Strategy'] },
      { title: 'Full Modernization', price: 'Custom', features: ['Incremental Rebuild', 'Cloud Native Setup', 'CI/CD Pipeline', 'Data Sync Engine'] }
    ],
    roadmap: [
      { step: '1', title: 'System Discovery', description: 'Deep-diving into the old code and database schemas to ensure nothing is missed.' },
      { step: '2', title: 'Target Architecture', description: 'Designing the new, modern cloud-native system that will replace the legacy one.' },
      { step: '3', title: 'Strangler Migration', description: 'Replacing features piece-by-piece so the business never stops running.' },
      { step: '4', title: 'Legacy Decommission', description: 'Verifying the new system holds all data before finally turning off the old servers.' }
    ],
    faqs: [
      { category: 'Risk', question: 'Is it risky?', answer: 'We minimize risk by using the "Strangler Pattern" – keeping the old system running while we build the new one in pieces.' },
      { category: 'Data', question: 'Will we lose records?', answer: 'No. We create real-time synchronization between the old and new databases during the migration.' },
      { category: 'Time', question: 'How long does it take?', answer: 'Modernization is a journey. It typically takes 6-12 months for full enterprise transitions.' },
      { category: 'Staff', question: 'Do our coders need to learn new tech?', answer: 'We help your team transition and even provide the first 6 months of managed support for the new tech stack.' },
      { category: 'Cost', question: 'Is it worth the money?', answer: 'Yes. Maintaining legacy systems is usually 3x more expensive than running modern ones when you factor in talent and risk.' },
      { category: 'Security', question: 'Is the new system safer?', answer: 'Yes, modern systems use "Security by Design" and are much easier to patch against latest threats.' },
      { category: 'Cloud', question: 'Do we have to go cloud?', answer: 'No, we can build modern architectures on-premise, but cloud offers significantly more benefits.' },
      { category: 'Planning', question: 'Where do we start?', answer: 'We start with a "Tech Debt Audit" to identify the most critical parts of your system that need fixing first.' }
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
    useCases: [
      { title: 'Ransomware Block', description: 'Our real-time intrusion detection caught a ransomware script mid-execution at a law firm, saving 5TB of critical data.' },
      { title: 'Compliance Fast-Track', description: 'Helped a fintech startup achieve SOC2 and HIPAA compliance in 3 months instead of the usual 9.' }
    ],
    pricing: [
      { title: 'Security Shield Lite', price: '$2,500/mo', features: ['Intrusion Detection', 'Basic Employee Training', 'Quarterly Scans'] },
      { title: 'Zero-Trust Elite', price: 'Custom', features: ['24/7 Security Ops Center (SOC)', 'Full IAM Implementation', 'Annual Pentesting', 'Incident Response'] }
    ],
    roadmap: [
      { step: '1', title: 'Internal Audit', description: 'Scanning all endpoints and passwords to identify the low-hanging fruit for attackers.' },
      { step: '2', title: 'Barrier Build', description: 'Implementing local firewalls, VPNs, and multi-factor authentication (MFA) across the company.' },
      { step: '3', title: 'Employee Defense', description: 'Conducting mock phishing attacks to train your staff on how to spot real threats.' },
      { step: '4', title: 'Continuous Defense', description: 'Activating our 24/7 security monitoring center to react to threats in milliseconds.' }
    ],
    faqs: [
      { category: 'Audit', question: 'How often should we audit?', answer: 'We recommend continuous automated monitoring and a deep manual audit every quarter.' },
      { category: 'Threats', question: 'Can you stop Ransomware?', answer: 'Yes, by combining behavioral monitoring with immutable backups, we can stop the script and restore any affected data.' },
      { category: 'Employees', question: 'What is the biggest risk?', answer: 'Human error accounts for 80% of breaches. That is why our "Employee Defense" training is so critical.' },
      { category: 'Compliance', question: 'Do you help with HIPAA?', answer: 'Yes, we provide the technical controls needed for HIPAA, GDPR, PCI-DSS, and SOC2.' },
      { category: 'Reaction', question: 'What if we get hacked?', answer: 'Our Elite plan includes a "Fast Response Team" that takes over your network to contain the breach within minutes.' },
      { category: 'Hardware', question: 'Do we need new hardware?', answer: 'Usually not. Our shield is primarily software-based and can be installed on existing machines.' },
      { category: 'Private', question: 'Can you see my files?', answer: 'No. Our monitoring tools look at behavioral patterns and metadata, not the actual content of your private files.' },
      { category: 'Internet', question: 'Do you protect our website too?', answer: 'Yes, we include WAF (Web Application Firewall) protection to stop DDOS and SQL injection attacks.' }
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
    useCases: [
      { title: 'Fresh Produce Tracking', description: 'Integrated IoT humidity and temp sensors for a fruit exporter, reducing spoilage during transit by 30%.' },
      { title: 'Theft Recovery', description: 'Used real-time geofence alerts to recover $500k in stolen machinery within 2 hours of it leaving the yard.' }
    ],
    pricing: [
      { title: 'Intel Starter', price: '$1,999/mo', features: ['Up to 100 Sensors', 'Basic Dashboard', 'Email Alerts'] },
      { title: 'Supply Chain Pro', price: 'Custom', features: ['Predictive AI Delay Engine', 'Advanced IoT Hub', 'Full ERP Integration', 'API Access'] }
    ],
    roadmap: [
      { step: '1', title: 'Asset Tagging', description: 'Mapping out all high-value items and selecting the right IoT sensors for each.' },
      { step: '2', title: 'Gateway Setup', description: 'Installing local data gateways in warehouses and on vehicles to collect sensor data.' },
      { step: '3', title: 'AI Logic Build', description: 'Training the system to recognize "unusual" delays and trigger alerts automatically.' },
      { step: '4', title: 'Visibility Go-Live', description: 'Opening the dashboard to your logistics and sales teams for real-time customer updates.' }
    ],
    faqs: [
      { category: 'Hardware', question: 'Do you provide sensors?', answer: 'We partner with the world\'s leading IoT manufacturers to provide the best hardware for your specific needs.' },
      { category: 'Battery', question: 'How long do sensors last?', answer: 'Our low-power sensors can run for 3-5 years on a single internal battery.' },
      { category: 'Coverage', question: 'What if there is no signal?', answer: 'Our sensors store data locally and "burst" it to the cloud as soon as a connection is found.' },
      { category: 'Accuracy', question: 'How precise is the GPS?', answer: 'We provide precision within 2 meters globally using GPS and GLONASS satellites.' },
      { category: 'Integration', question: 'Does it work with SAP?', answer: 'Yes, we provide a unified API to feed logistics data directly into your SAP or Oracle system.' },
      { category: 'Cost', question: 'What is the ROI?', answer: 'Most clients pay for the system through fuel savings and reduced cargo loss within 6-9 months.' },
      { category: 'Dashboard', question: 'Can my customers see it?', answer: 'Yes, you can create "Public Tracking Links" to share with your customers for their specific orders.' },
      { category: 'Scalability', question: 'Can we track 10,000 items?', answer: 'Our backend uses high-throughput event processing and can handle millions of sensors simultaneously.' }
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
    useCases: [
      { title: 'Neo-Bank Launch', description: 'Helped a digital banking startup go from concept to live in 4 months by providing their entire compliance backend.' },
      { title: 'Crypto AML Sync', description: 'Implemented real-time transaction monitoring for a crypto-exchange, catching $1M in suspicious transfers.' }
    ],
    pricing: [
      { title: 'Compliance Seed', price: '$2,999/mo', features: ['Standard KYC Module', 'AML Screening', 'Secure Audit Log'] },
      { title: 'Institutional Elite', price: 'Custom', features: ['Advanced Biometric KYC', 'Real-time Fraud AI', 'Multi-jurisdiction Support', 'SLA Support'] }
    ],
    roadmap: [
      { step: '1', title: 'Jurisdiction Review', description: 'Determining the specific laws (PSD2, CCPA, etc.) your business must follow.' },
      { step: '2', title: 'Vault Setup', description: 'Setting up the secure, encrypted ledger and KYC data storage systems.' },
      { step: '3', title: 'Partner Onboarding', description: 'Connecting to third-party verification and banking networks.' },
      { step: '4', title: 'Audit Ready', description: 'Generating the initial reports and protocols needed for your financial license application.' }
    ],
    faqs: [
      { category: 'Regions', question: 'Does this work in EU?', answer: 'Yes, it is fully compliant with GDPR, PSD2, and other local EU financial regulations.' },
      { category: 'Speed', question: 'How fast is a KYC check?', answer: 'Our automated biometric flow takes an average of 45 seconds for a user to complete.' },
      { category: 'Identity', question: 'Can you detect fake IDs?', answer: 'Yes, our AI uses liveness detection and forensic document analysis to spot deepfakes and fraudulent IDs.' },
      { category: 'Security', question: 'Where is data stored?', answer: 'Data is stored in regionally-locked, banking-grade secure vaults with AES-256 encryption.' },
      { category: 'API', question: 'Is it easy to integrate?', answer: 'We provide a clean REST API and mobile SDKs (iOS/Android) to drop compliance into your app.' },
      { category: 'Audit', question: 'Can we export reports?', answer: 'Yes, you can generate regulator-ready PDF reports with a single click.' },
      { category: 'Fraud', question: 'How do you spot money laundering?', answer: 'Our AML engine monitors patterns, connections, and velocity of money in real-time.' },
      { category: 'Support', question: 'Do you have experts?', answer: 'Yes, our Enterprise plan includes access to senior compliance consultants to review your setup.' }
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
    useCases: [
      { title: 'Regional Marketing Agency', description: 'Launched "AgencySMS" using our platform, onboarding 50 local restaurants in 2 months with a 70% profit margin.' },
      { title: 'Solo-Entrepreneur Launch', description: 'Rebranded the platform as "QuickNotify" and reached $5k MRR in 90 days by focusing on dental clinic appointment reminders.' }
    ],
    pricing: [
      { title: 'Agency Starter', price: '$499/mo', features: ['Your Own Domain', 'Wholesale SMS Rates', 'Unlimited Clients', 'Standard Support'] },
      { title: 'White Label Elite', price: '$1,499/mo', features: ['Mobile App (iOS/Android)', 'Your Brand in App Store', 'Custom Payment Gateway', 'Dedicated Success Manager'] }
    ],
    roadmap: [
      { step: '1', title: 'Brand Setup', description: 'Connecting your domain and uploading your logos and colors to the dashboard.' },
      { step: '2', title: 'Pricing & Tiers', description: 'Setting your retail prices and creating different subscription plans for your clients.' },
      { step: '3', title: 'Payment Integration', description: 'Connecting your Stripe account so you get paid directly by your customers.' },
      { step: '4', title: 'Marketing Launch', description: 'Using our pre-built sales decks and email templates to land your first 5 clients.' }
    ],
    faqs: [
      { category: 'Branding', question: 'Will my clients see your name?', answer: 'No. The platform is completely "White Label". Your clients only see your brand, your domain, and your support links.' },
      { category: 'Profit', question: 'How much can I make?', answer: 'You buy credits at wholesale prices and sell them at retail prices. Most partners make a 50-200% margin on top of subscription fees.' },
      { category: 'Support', question: 'Who helps my clients?', answer: 'You provide first-line support to your clients, and we provide back-end technical support to you.' },
      { category: 'Scaling', question: 'Can I have my own resellers?', answer: 'Yes, our Elite plan allows you to create "Sub-Resellers" who sell under your brand.' },
      { category: 'Payments', question: 'How do I get paid?', answer: 'The system integrates with Stripe. When your clients pay, the money goes directly into your bank account.' },
      { category: 'Contract', question: 'Is there a long-term contract?', answer: 'No, our plans are month-to-month. You can cancel at any time.' },
      { category: 'Technical', question: 'Do I need a server?', answer: 'No, we host everything on our high-speed, secure global infrastructure.' },
      { category: 'Updates', question: 'Do you add new features?', answer: 'Yes, we are constantly updating the platform. New features appear in your dashboard automatically at no extra cost.' }
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
    useCases: [
      { title: 'Real Estate IVR', description: 'Automated lead capture for a property firm; the bot asks for budget and location before transferring the "Hot Lead" to an agent.' },
      { title: 'Pizza Chain Ordering', description: 'Implemented a voice-bot that takes phone orders and checks them against the store\'s live inventory, reducing missed calls by 40%.' }
    ],
    pricing: [
      { title: 'Studio Starter', price: '$249/mo', features: ['5 Concurrent Calls', 'Standard Voices', 'Visual Flow Builder'] },
      { title: 'Voice Enterprise', price: 'Custom', features: ['Unlimited Calls', 'Neural Ultra-Real Voices', 'Salesforce Integration', '24/7 Priority Support'] }
    ],
    roadmap: [
      { step: '1', title: 'Flow Mapping', description: 'Drawing your call journey—from the first greeting to the final resolution or transfer.' },
      { step: '2', title: 'Voice Selection', description: 'Choosing the right persona, accent, and tone for your brand voice.' },
      { step: '3', title: 'API Connection', description: 'Hooking the bot into your database to look up order status or customer details live.' },
      { step: '4', title: 'Number Porting', description: 'Activating your existing business numbers on the VoiceBot Studio platform.' }
    ],
    faqs: [
      { category: 'Voices', question: 'Do they sound robotic?', answer: 'No, we use Neural AI voices that sound very human, with natural intonation and pacing.' },
      { category: 'Multi-lingual', question: 'What languages are supported?', answer: 'We support over 50 languages and 100+ different localized accents.' },
      { category: 'Handoff', question: 'Can it transfer to my mobile?', answer: 'Yes, the bot can transfer a call to any phone number globally if it cannot solve the problem.' },
      { category: 'Integration', question: 'Does it work with my CRM?', answer: 'Yes, we provide webhooks and a native Zapier integration to move data to 5,000+ apps.' },
      { category: 'Recording', question: 'Can I listen to calls?', answer: 'Yes, all calls are recorded and transcribed for quality assurance and training.' },
      { category: 'Setup', question: 'Do I need coding skills?', answer: 'No, our "Studio" is a 100% visual, drag-and-drop platform.' },
      { category: 'Hardware', question: 'Do I need a new phone system?', answer: 'No, we work in the cloud. You keep your existing handsets or use our softphone interface.' },
      { category: 'Accuracy', question: 'How well does it understand speech?', answer: 'Our ASR (Automatic Speech Recognition) is powered by Google Cloud, reaching 95%+ accuracy even with background noise.' }
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
    useCases: [
      { title: 'Global Crypto Wallet', description: 'Implemented WhatsApp fallback for 2FA, increasing successful login rate by 25% in regions with poor cellular service.' },
      { title: 'Corporate VPN Access', description: 'Secured remote employee logins using sub-5 second SMS OTPs, reducing IT support tickets for "expired codes".' }
    ],
    pricing: [
      { title: 'Pay-As-You-Go', price: '$0.01/OTP', features: ['Global Delivery', 'Standard Routes', 'Email Support'] },
      { title: 'Enterprise Secure', price: 'Custom', features: ['Priority Direct Routes', 'WhatsApp/Voice Fallback', 'Fraud Intelligence Shield', 'Dedicated API Support'] }
    ],
    roadmap: [
      { step: '1', title: 'API Integration', description: 'Dropping our SDK or calling our REST API from your login backend.' },
      { step: '2', title: 'Template Design', description: 'Customizing your OTP message content (e.g., "Your code for [Brand] is 1234").' },
      { step: '3', title: 'Fallback Logic', description: 'Configuring after how many seconds the code should try WhatsApp or a Phone Call.' },
      { step: '4', title: 'Analytics Sync', description: 'Monitoring delivery rates and latency in your dedicated security dashboard.' }
    ],
    faqs: [
      { category: 'Speed', question: 'How fast is it?', answer: 'Average delivery globally is 3.5 seconds thanks to our "Priority Direct" operator routes.' },
      { category: 'Channels', question: 'What if SMS fails?', answer: 'The system automatically falls back to WhatsApp, and then a Voice call if needed, ensuring 100% arrival.' },
      { category: 'Cost', question: 'Do we pay for failed codes?', answer: 'No, you only pay for successfully delivered One-Time Passwords.' },
      { category: 'Security', question: 'How secure is the code?', answer: 'Codes are generated using cryptographically secure random number generators and expire in 120 seconds.' },
      { category: 'Global', question: 'Does it work in China/India?', answer: 'Yes, we have specialized local routes to bypass international filters in regulated markets.' },
      { category: 'Integration', question: 'Do you have an SDK?', answer: 'Yes, we have SDKs for Node.js, Python, PHP, Java, and Go.' },
      { category: 'Fraud', question: 'Can you stop "SMS Pumping"?', answer: 'Yes, our Fraud Guard detects and blocks bot-driven traffic designed to drain your balance.' },
      { category: 'Customization', question: 'Can I use my own sender name?', answer: 'Yes, in supported countries, you can use an Alpha-Sender ID (e.g., your brand name).' }
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
    useCases: [
      { title: 'Global Toy Retailer', description: 'Used AI demand prediction to prepare for Black Friday, reducing overstock by 22% while maintaining 100% availability.' },
      { title: 'Local Boutique', description: 'Recovered 15% of floor space by identifying and discounting "dead stock" items highlighted by StockFlow reports.' }
    ],
    pricing: [
      { title: 'Basic', price: '$99/mo', features: ['Up to 1,000 SKUs', '1 Integration', 'Daily Forecasts', 'Mobile App'] },
      { title: 'Pro', price: '$299/mo', features: ['Unlimited SKUs', 'Multi-Warehouse', 'Auto-Purchase Orders', 'API Access'] },
      { title: 'Enterprise', price: 'Custom', features: ['Custom AI Models', 'Priority Support', 'On-site Onboarding', 'SLA'] }
    ],
    roadmap: [
      { step: '1', title: 'Inventory Audit', description: 'Bulk upload current stock levels and sales history.' },
      { step: '2', title: 'Channel Sync', description: 'Connect your Shopify, Amazon, or POS systems.' },
      { step: '3', title: 'AI Training', description: 'Let StockFlow analyze Seasonal patterns (30-day period).' },
      { step: '4', title: 'Automation Go-Live', description: 'Activate Auto-Purchase orders and low-stock alerts.' }
    ],
    pricingModel: 'Monthly SaaS',
    targetAudience: 'E-commerce, Retailers',
    faqs: [
      { category: 'Setup', question: 'Is it hard to set up?', answer: 'It connects to Shopify and Amazon in 1 click using our official apps.' },
      { category: 'Integrations', question: 'Does it work with eBay?', answer: 'Yes, we support eBay, Walmart, and custom WooCommerce stores.' },
      { category: 'Prediction', question: 'How far ahead can it predict?', answer: 'Our AI provides accurate forecasts for up to 90 days based on your historical data.' },
      { category: 'Multi-location', question: 'Can it handle 3 warehouses?', answer: 'Absolutely. It tracks "Transfers" between locations and suggests optimal stock distribution.' },
      { category: 'Barcode', question: 'Do we need special scanners?', answer: 'No, your staff can use the StockFlow mobile app to scan barcodes with their smartphone cameras.' },
      { category: 'Cost', question: 'Will it save us money?', answer: 'Most clients reduce "Dead Stock" by 20% within 6 months, freeing up significant cash flow.' },
      { category: 'Accuracy', question: 'What if a product is new?', answer: 'For new items, the AI uses "Proxy Modeling"—looking at similar products in your sector to estimate demand.' },
      { category: 'Support', question: 'Do you help with migration?', answer: 'Yes, our Enterprise plan includes a dedicated data specialist to help upload your old records.' }
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
    useCases: [
      { title: 'Marketing-to-Sales Sync', description: 'Automatically pushed Facebook Leads into Salesforce and notified the sales agent on Slack in real-time.' },
      { title: 'ERP-to-CRM Loop', description: 'Synced real-time inventory from Oracle ERP to HubSpot CRM so sales reps only sell what is actually in stock.' }
    ],
    pricing: [
      { title: 'Connector Pro', price: '$199/mo', features: ['3 Active Workflows', '10,000 Events/mo', 'Email Support'] },
      { title: 'Hub Enterprise', price: 'Custom', features: ['Unlimited Workflows', 'High-Throughput Sync', 'Custom API Mapping', 'Priority Support'] }
    ],
    roadmap: [
      { step: '1', title: 'Data Mapping', description: 'Identifying which fields in App A correspond to which fields in App B.' },
      { step: '2', title: 'Trigger Setup', description: 'Defining the event (e.g., "New Customer Created") that starts the sync.' },
      { step: '3', title: 'Filter Logic', description: 'Applying rules so only "Qualified" data is moved between systems.' },
      { step: '4', title: 'Monitoring Go-Live', description: 'Activating the hub and watching the live data flow in your analytics dashboard.' }
    ],
    faqs: [
        { category: 'Security', question: 'Do you store our data?', answer: 'No, we stream it securely via HTTPS. We do not store your customer records persistently.' },
        { category: 'Platforms', question: 'Does it work with HubSpot?', answer: 'Yes, we have deep native connectors for HubSpot, Salesforce, Zoho, and Pipedrive.' },
        { category: 'Speed', question: 'Is there a delay?', answer: 'Our "Direct Stream" technology ensures data moves in under 500 milliseconds across most platforms.' },
        { category: 'Errors', question: 'What if an API is down?', answer: 'The Hub keeps a "Replay Queue" and automatically retries the sync once the software is back online.' },
        { category: 'Custom', question: 'Can we connect our own app?', answer: 'Yes, we provide a "Custom Webhook" block to connect any software that can send or receive data.' },
        { category: 'Cost', question: 'What is an "Event"?', answer: 'An event is any single piece of data (like a new lead or an updated order) that moves through the hub.' },
        { category: 'Limits', question: 'Is there a data size limit?', answer: 'We support payloads up to 10MB per event, covering almost all standard business data.' },
        { category: 'Migration', question: 'Can we sync old data?', answer: 'Yes, our "Bulk Sync" tool allows you to migrate thousands of historical records in one go.' }
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
    useCases: [
      { title: 'SaaS Founder Loop', description: 'Automatically turned a weekly technical founder blog into a 10-post LinkedIn series, growing followers by 200%.' },
      { title: 'News Portal Automation', description: 'Synced an RSS feed to automatically post news snippets to X (Twitter) with AI-generated relevant images.' }
    ],
    pricing: [
      { title: 'Social Solo', price: '$49/mo', features: ['3 Accounts', 'AI Caption Generator', 'Standard Scheduler'] },
      { title: 'Brand Growth', price: '$199/mo', features: ['Unlimited Accounts', 'AI Video Scripting', 'Trend Analysis Engine', 'Team Collaboration'] }
    ],
    roadmap: [
      { step: '1', title: 'Account Link', description: 'Securely connecting your LinkedIn, X, and Instagram profiles using official APIs.' },
      { step: '2', title: 'Voice Setup', description: 'Teaching the AI your brand voice by providing past posts and "Do/Don\'t" rules.' },
      { step: '3', title: 'Asset Config', description: 'Setting up the AI image generator to use your brand colors and preferred style.' },
      { step: '4', title: 'Review & Post', description: 'Reviewing the first batch of AI-generated content before turning on Auto-Pilot.' }
    ],
    faqs: [
        { category: 'Platforms', question: 'Does it support TikTok?', answer: 'Yes, we support video scheduling and AI-generated captioning for TikTok and Reels.' },
        { category: 'AI Quality', question: 'Does it sound like a bot?', answer: 'No, you can train it on your own writing style to ensure it sounds exactly like you.' },
        { category: 'Images', question: 'Where do images come from?', answer: 'We use the latest high-fidelity AI models to generate unique images for every post.' },
        { category: 'Ethics', question: 'Is AI posting allowed?', answer: 'Yes, as long as the content is valuable. We recommend human oversight for high-impact posts.' },
        { category: 'Timing', question: 'How do you know when to post?', answer: 'The AI analyzes your specific audience\'s activity to find the "peak engagement" windows.' },
        { category: 'Security', question: 'Are my logos safe?', answer: 'Yes, your brand assets are stored in a private, encrypted vault used only for your posts.' },
        { category: 'Video', question: 'Can it make videos?', answer: 'It can generate scripts and select stock footage to create automated "shorts" for Reels and TikTok.' },
        { category: 'Cost', question: 'Can I cancel anytime?', answer: 'Yes, we have a no-contract, monthly subscription model.' }
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
    useCases: [
      { title: 'Series A Fundraise', description: 'A startup used the vault to share financials with 20 investors, identifying the most interested leads based on time spent on slide 5.' },
      { title: 'M&A Due Diligence', description: 'Streamlined the sale of a manufacturing company by keeping all legal docs in one place with a "View Only" watermark policy.' }
    ],
    pricing: [
      { title: 'Single Deal', price: '$999/deal', features: ['Unlimited Users', '6 Months Access', 'Standard Security'] },
      { title: 'Partner Vault', price: 'Custom', features: ['Unlimited Active Deals', 'Custom Branding', 'Advanced Q&A Workflow', 'API Access'] }
    ],
    roadmap: [
      { step: '1', title: 'Vault Setup', description: 'Creating your deal structure (Financials, Legal, HR, IP folders).' },
      { step: '2', title: 'Permission Mapping', description: 'Defining which user groups can "View", "Download", or "Print" specific files.' },
      { step: '3', title: 'Guest Invite', description: 'Securely inviting investors or partners via email with mandatory 2FA.' },
      { step: '4', title: 'Insight Tracking', description: 'Reviewing the activity dashboard to see who is actually reading the documents.' }
    ],
    faqs: [
        { category: 'Storage', question: 'Is there a limit?', answer: 'No, we provide unlimited storage for all active deals. You only pay for the deal slot.' },
        { category: 'Control', question: 'Can I stop someone downloading?', answer: 'Yes, you can enable "View Only" mode which blocks the print and download functions.' },
        { category: 'Watermarks', question: 'Is the watermark unique?', answer: 'Yes, every page has the viewer\'s specific email address watermarked across it.' },
        { category: 'Security', question: 'Is it safer than Dropbox?', answer: 'Significantly. Dropbox is for storage; SecureDocs is built for high-stakes compliance and deal-making.' },
        { category: 'Logs', question: 'Can I see if they read page 12?', answer: 'Yes, our "Deep Insight" report shows you time spent on every single page of every PDF.' },
        { category: 'Retraction', question: 'Can I kick someone out?', answer: 'Yes, you can revoke access instantly, even if the user is currently looking at a file.' },
        { category: 'Legal', question: 'Does it support E-Sign?', answer: 'Yes, we have an integrated signing module for NDAs and contracts.' },
        { category: 'Regions', question: 'Is it GDPR compliant?', answer: 'Yes, you can choose to have your data stored in EU-only or US-only data centers.' }
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
    useCases: [
      { title: 'Sales Rep Focus', description: 'A sales team and enabled their reps to focus on the prospect instead of notes, resulting in a 15% increase in "Next Step" clarity.' },
      { title: 'Remote Board Meeting', description: 'Captured 2-hour long strategy sessions and provided a 1-page executive summary with assigned tasks to all board members.' }
    ],
    pricing: [
      { title: 'AI Basic', price: '$29/mo', features: ['10 Meetings', 'Standard Summary', 'Web Dashboard'] },
      { title: 'Pro Team', price: '$79/mo', features: ['Unlimited Meetings', 'Multi-user logic', 'CRM & PM Sync', 'Custom Training'] }
    ],
    roadmap: [
      { step: '1', title: 'Bot Connection', description: 'Linking your Google or Outlook calendar so the bot knows which meetings to join.' },
      { step: '2', title: 'Integration Sync', description: 'Connecting Slack or Monday.com so the AI can push tasks after the meeting.' },
      { step: '3', title: 'Training Mode', description: 'Giving the AI your company glossary so it understands your specific jargon and acronyms.' },
      { step: '4', title: 'Auto-Pilot', description: 'Letting the bot join calls silently and deliver summaries to the team channel automatically.' }
    ],
    faqs: [
        { category: 'Privacy', question: 'Does it record everything?', answer: 'It only joins meetings you invite it to. You can stop or delete recordings at any time.' },
        { category: 'Platforms', question: 'Does it work with Zoom?', answer: 'Yes, it works natively with Zoom, Microsoft Teams, Google Meet, and Webex.' },
        { category: 'Languages', question: 'Does it understand accents?', answer: 'Our AI model is trained on global accents and handles "Spanglish" or "Hinglish" beautifully.' },
        { category: 'Accuracy', question: 'Is the summary reliable?', answer: 'The AI reaches 90%+ accuracy in capturing key facts and action items.' },
        { category: 'Bots', question: 'Does the bot show on the screen?', answer: 'Yes, it appears as a participant (e.g., "[Your Name]\'s Assistant") to ensure transparency.' },
        { category: 'Search', question: 'Can I search past meetings?', answer: 'Yes, all meetings are searchable by keyword. "What did we decide on the budget in July?".' },
        { category: 'Summary', question: 'Can I edit the notes?', answer: 'Yes, you can edit the generated summary before sharing the final version with the team.' },
        { category: 'Storage', question: 'How long are recordings kept?', answer: 'Recordings are kept forever on our Pro plan, or for 30 days on our Basic plan.' }
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
        id: 'rcs-business-messaging',
        title: 'RCS Business Messaging',
        description: 'The next generation of SMS with rich media.',
        fullDescription: 'RCS (Rich Communication Services) is the modern upgrade to SMS. It allows you to send high-res images, videos, carousels, and interactive buttons directly to the native messaging app on Android and iOS (via Apple Business Messaging). No app download required for customers.',
        features: [
            { title: 'Rich Media', description: 'Carousels and High-res video.', benefit: 'App-like experience.' },
            { title: 'Verified Profiles', description: 'Sender logo and verification.', benefit: '100% Trust.' },
            { title: 'Suggested Actions', description: 'Open URL, Dial, Map buttons.', benefit: 'One-tap conversion.' },
            { title: 'Read Receipts', description: 'Detailed engagement data.', benefit: 'Better tracking.' }
        ],
        benefits: ['Higher CTR', 'Brand Professionalism', 'Future-proof', 'No app needed'],
        useCases: [
            { title: 'Retail Carousel Promotion', description: 'A coffee chain used RCS carousels to show 5 different seasonal drinks, resulting in a 20% higher conversion than standard SMS.' },
            { title: 'Digital Boarding Passes', description: 'An airline sends high-res boarding passes via RCS that update in real-time with gate changes.' }
        ],
        pricing: [
            { title: 'RCS Pilot', price: '$499/mo', features: ['Campaign Designer', 'Standard Delivery', '1,000 Messages', 'Reporting'] },
            { title: 'Enterprise Rich', price: 'Custom', features: ['Unlimited Rich Media', 'AI Bot Integration', 'Deep Analytics', 'Priority Routing'] }
        ],
        roadmap: [
            { step: '1', title: 'Brand Onboarding', description: 'Registering your brand and logo with Google and Apple for verification.' },
            { step: '2', title: 'Template Design', description: 'Creating interactive carousels and rich media cards for your campaigns.' },
            { step: '3', title: 'Bot Logic', description: 'Setting up automated replies for the "Suggested Action" buttons.' },
            { step: '4', title: 'Global Launch', description: 'Broadcasting your first rich campaign to compatible devices worldwide.' }
        ],
        faqs: [
            { question: 'What is RCS?', answer: 'RCS stands for Rich Communication Services. It is the successor to SMS, providing an app-like experience within the native texting app.' },
            { question: 'Does it work on iPhone?', answer: 'Yes, Apple recently announced support for RCS, making it a truly universal rich messaging standard.' },
            { question: 'Do users need an app?', answer: 'No. RCS works directly in the default messaging app on the phone.' },
            { question: 'How is it different from WhatsApp?', answer: 'RCS is a carrier-level standard (like SMS), while WhatsApp is a private 3rd-party app. RCS doesn\'t require the user to have a specific app installed.' },
            { question: 'Can I send payments?', answer: 'Yes, RCS allows for rich interactions including "In-message" buttons that can link to web-checkouts.' },
            { question: 'Is it more expensive than SMS?', answer: 'It is typically priced similarly to high-quality SMS but offers significantly better engagement and branding.' },
            { question: 'What are Suggested Actions?', answer: 'These are buttons below the message (e.g., "Add to Calendar", "Open Maps", "Call Now") that users can tap without typing.' },
            { question: 'How do I know if it was read?', answer: 'Unlike standard SMS, RCS provides native "Read Receipts" so you know exactly when the customer saw your message.' }
        ],
        metaTitle: 'RCS Business Messaging | Rich SMS for Brands',
        metaDescription: 'Upgrade your business SMS. Send rich media, carousels, and interactive buttons with RCS messaging.'
      },
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
        useCases: [
          { title: 'OTP Delivery', description: 'A bank used our direct routes to deliver transaction OTPs in under 3 seconds, reducing login friction.' },
          { title: 'Flash Sales', description: 'A fashion retailer sent 500k SMS alerts in 10 minutes, generating $50k in sales within the hour.' }
        ],
        pricing: [
          { title: 'SMS Starter', price: '$0.02/msg', features: ['Web Interface', 'Priority Routes', 'API Access', 'Reporting'] },
          { title: 'Volume Tier', price: '$0.008/msg', features: ['Direct Tier-1 Carrier Bind', 'Custom Sender ID', 'High Throughput', '24/7 Monitoring'] }
        ],
        roadmap: [
          { step: '1', title: 'Route Testing', description: 'Running a test batch to ensure 100% arrival in your target country.' },
          { step: '2', title: 'Sender ID Prep', description: 'Registering your Brand Name with carriers to avoid spam filters.' },
          { step: '3', title: 'Campaign Blast', description: 'Scheduling and sending your message to your uploaded customer list.' },
          { step: '4', title: 'Success Audit', description: 'Reviewing delivery logs and click-through rates in our dashboard.' }
        ],
        faqs: [
          { question: 'What is a Tier-1 route?', answer: 'It is a direct connection to the mobile network, ensuring the highest possible deliverability and speed.' },
          { question: 'Can I use my brand name?', answer: 'Yes, in most countries you can use an Alpha Sender ID (e.g., "MY BRAND") instead of a number.' },
          { question: 'Is there a character limit?', answer: 'A standard SMS is 160 characters. Longer messages are split and rejoined by the phone.' },
          { question: 'Do you provide phone lists?', answer: 'No, we only send to lists you have legally opted-in. We do not sell data.' },
          { question: 'Can I receive replies?', answer: 'Yes, if you use a "Long Code" or "Short Code" number instead of an Alpha Name.' },
          { question: 'How fast is delivery?', answer: 'Messages usually land on the phone within 3 to 10 seconds of clicking send.' },
          { question: 'Do you support Unicode?', answer: 'Yes, we support Emojis and all languages including Arabic, Chinese, and Hindi.' },
          { question: 'Can I schedule messages?', answer: 'Yes, you can schedule campaigns for any date and time in any timezone.' }
        ],
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
        useCases: [
            { title: 'Airline Flight Updates', description: 'A global airline used WhatsApp to send boarding passes and real-time gate change alerts, reducing gate-agent workload by 25%.' },
            { title: 'E-commerce Concierge', description: 'A luxury watch brand offers a personal shopping experience via WhatsApp, resulting in a 30% higher conversion rate for high-ticket items.' }
        ],
        pricing: [
            { title: 'Bot Starter', price: '$299/mo', features: ['Official API Setup', 'Custom Chatbot Flow', '1,000 Conversations', 'Analytics Dashboard'] },
            { title: 'Agent Pro', price: '$599/mo', features: ['Unlimited Agents', 'CRM Integration', '5,000 Conversations', 'Priority Verification'] }
        ],
        roadmap: [
            { step: '1', title: 'Meta Verification', description: 'Submit your business documents to Meta for official brand approval.' },
            { step: '2', title: 'Number Onboarding', description: 'Port your landline or mobile number to the official API stack.' },
            { step: '3', title: 'Flow Design', description: 'Map out automated greeting, support, and sales chat journeys.' },
            { step: '4', title: 'Integration', description: 'Connect the WhatsApp stream to your existing CRM or Helpdesk.' }
        ],
        faqs: [
            { question: 'What is the Green Tick?', answer: 'It is the official verification badge from Meta that proves your business is authentic and trustworthy.' },
            { question: 'Can multiple agents use one number?', answer: 'Yes! Unlike the standard WhatsApp app, our API allows hundreds of agents to log in and chat with customers from the same number simultaneously.' },
            { question: 'Is it free to use?', answer: 'Meta charges per 24-hour conversation window. We provide a transparent dashboard to help you manage and optimize these costs.' },
            { question: 'Do I need a new phone number?', answer: 'You can use an existing mobile or landline number, provided it can receive a voice call or SMS for initial verification.' },
            { question: 'Can I send marketing broadcasts?', answer: 'Yes, you can send templates to thousands of customers at once, as long as they have opted in to receive messages from you.' },
            { question: 'Is there a limit on messages?', answer: 'WhatsApp has "Messaging Tiers" (1K, 10K, 100K, Unlimited). You start at 1K and your limit increases as you maintain high quality scores.' },
            { question: 'Can I integrate my CRM?', answer: 'Absolutely. We integrate with HubSpot, Salesforce, Zoho, and any custom CRM via our REST API.' },
            { question: 'Are the messages encrypted?', answer: 'Yes, WhatsApp Business API messages are end-to-end encrypted, ensuring total privacy for you and your customers.' },
            { question: 'Can I use chatbots?', answer: 'Yes, the API is designed specifically for automation. You can build complex AI-driven bots to handle support 24/7.' },
            { question: 'How long does approval take?', answer: 'Business verification usually takes 2-5 business days, but you can start testing in "Sandbox mode" immediately.' },
            { question: 'What happens if a customer blocks me?', answer: 'If your block rate increases, your quality score drops. We provide best practices to ensure your content is valuable and avoids being marked as spam.' },
            { question: 'Does it support images and PDFs?', answer: 'Yes, you can send and receive images, videos, PDFs, location pins, and interactive buttons.' }
        ],
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
        useCases: [
          { title: 'Smart Knowledge Base', description: 'Trained an AI on 1,000 pages of internal HR policy, allowing employees to get instant answers on Slack.' },
          { title: 'Customer Support Logic', description: 'Built an AI agent that automatically classifies and routes 5,000 incoming support emails per day.' }
        ],
        pricing: [
          { title: 'AI Pilot', price: '$7,500', features: ['Custom Model Training', 'Internal Tool Integration', 'Security Review'] },
          { title: 'Managed AI', price: '$2,500/mo', features: ['Continuous Learning', 'Usage Monitoring', 'Regular Updates', 'Priority Support'] }
        ],
        roadmap: [
          { step: '1', title: 'Model Selection', description: 'Choosing the right base model (Gemini, Llama 3) for your specific problem.' },
          { step: '2', title: 'Data Injection', description: 'Vectorizing and feeding your company documents into the AI brain.' },
          { step: '3', title: 'Prompt Engineering', description: 'Fine-tuning the AI personality and accuracy until it meets business standards.' },
          { step: '4', title: 'Integration', description: 'Connecting the AI engine to your website, CRM, or internal chat apps.' }
        ],
        faqs: [
          { question: 'Is my data private?', answer: 'Yes, we use VPC (Virtual Private Cloud) instances where your data is isolated and never sent to public models.' },
          { question: 'What data can I use?', answer: 'PDFs, Word docs, CSVs, Database exports, and even website URLs can be used for training.' },
          { question: 'Does it get smarter?', answer: 'Yes, the model can be updated weekly with new information to stay current.' },
          { question: 'Can it speak other languages?', answer: 'Our AI solutions are natively polyglot and can handle 50+ languages.' },
          { question: 'Can it replace my team?', answer: 'No, it empowers them by handling 80% of repetitive questions, letting humans focus on the hard cases.' },
          { question: 'How long to build?', answer: 'A custom pilot can usually be ready for testing in 3 to 4 weeks.' },
          { question: 'Is it hard to integrate?', answer: 'We provide simple APIs and ready-made widgets to drop into your existing apps.' },
          { question: 'What is the error rate?', answer: 'By using RAG (Retrieval Augmented Generation), we keep accuracy above 95%.' }
        ],
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
            useCases: [
              { title: 'SaaS Dashboard', description: 'Built a high-performance React dashboard for a fintech company that handles 100k active users.' },
              { title: 'E-commerce Redesign', description: 'Developed a custom headless Shopify store that increased loading speed by 400%.' }
            ],
            pricing: [
              { title: 'Fixed Project', price: 'From $10k', features: ['Custom Design', 'Responsive Mobile', 'SEO Ready', 'CMS Integration'] },
              { title: 'Tech Partner', price: '$5k/mo', features: ['Ongoing Development', 'Scale-on-Demand', 'Code Maintenance', 'DevOps Support'] }
            ],
            roadmap: [
              { step: '1', title: 'Discovery', description: 'Mapping out user journeys, wireframes, and technical constraints.' },
              { step: '2', title: 'UI Design', description: 'Creating high-fidelity mockups of your brand and obtaining feedback.' },
              { step: '3', title: 'Development', description: 'Coding the frontend and backend using modern, scalable tech stacks.' },
              { step: '4', title: 'QA & Launch', description: 'Testing for bugs and performance before going live on the world stage.' }
            ],
            faqs: [
              { question: 'Wordpress or Custom?', answer: 'Custom (React/Next.js) is 10x faster and far more secure than legacy WordPress systems.' },
              { question: 'Is it mobile friendly?', answer: 'Every site we build is "Mobile First", ensuring a perfect experience on any screen size.' },
              { question: 'Who owns the code?', answer: 'You do. We provide all source files and the full intellectual property rights once the project is finished.' },
              { question: 'Do you help with SEO?', answer: 'Yes, we optimize the technical foundation (speed, meta tags, schema) as we build.' },
              { question: 'How long does a build take?', answer: 'A standard professional site takes 4 to 8 weeks from start to finish.' },
              { question: 'Can I update content myself?', answer: 'Yes, we integrate a CMS (Content Management System) like Sanity or Strapi for easy editing.' },
              { question: 'Is the site secure?', answer: 'We follow OWASP security standards and use secure hosting with automated SSL.' },
              { question: 'What tech do you use?', answer: 'We specialize in React, Next.js, Node.js, and TypeScript for maximum performance.' }
            ],
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
            useCases: [
              { title: 'SEO for Real Estate', description: 'Increased organic leads by 300% in 6 months by ranking for high-intent keywords like "buy property [city]".' },
              { title: 'SaaS Content Engine', description: 'Generated 50k monthly visits for a tech startup through a targeted pillar-content strategy.' }
            ],
            pricing: [
              { title: 'SEO Growth', price: '$2,500/mo', features: ['Technical Audit', '5 Blog Posts', 'Keyword Research', 'Backlink Building'] },
              { title: 'Revenue Engine', price: '$6,000/mo', features: ['Full Content Strategy', 'Daily Monitoring', 'Conversion Optimization', 'Pr-Level Backlinks'] }
            ],
            roadmap: [
              { step: '1', title: 'The Audit', description: 'Identifying every technical error and missing keyword that is holding you back.' },
              { step: '2', title: 'On-Page Fixes', description: 'Optimizing your existing meta tags, images, and content structure.' },
              { step: '3', title: 'Content Engine', description: 'Publishing high-quality articles that answer your customers\' real questions.' },
              { step: '4', title: 'Authority Building', description: 'Earning high-power links from other reputable sites to boost your ranking.' }
            ],
            faqs: [
              { question: 'How long does it take?', answer: 'SEO is a long-term investment. You will see traffic start to climb in 3 to 6 months.' },
              { question: 'Do you guarantee #1 ranking?', answer: 'No one can guarantee #1, but we have a 100% success rate in significantly increasing organic traffic.' },
              { question: 'Do you build backlinks?', answer: 'Yes, we focus on high-quality, relevant links from real websites, not spammy directories.' },
              { question: 'Is results permanent?', answer: 'SEO traffic is very stable, but you must continue to update content to stay ahead of competition.' },
              { question: 'Do you research keywords?', answer: 'Yes, we find the "Money Keywords" that have high volume and low competition in your industry.' },
              { question: 'Can you fix technical SEO?', answer: 'Yes, we handle site speed, schema markup, sitemaps, and core web vitals.' },
              { question: 'Is it better than Ads?', answer: 'Ads are fast; SEO is sustainable. SEO traffic costs zero per click once you are ranked.' },
              { question: 'What reporting do I get?', answer: 'A monthly dashboard showing exactly how your rankings and traffic are growing.' }
            ],
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
            useCases: [
              { title: 'Global SaaS Scale', description: 'Architected a multi-region AWS setup for a SaaS startup that survived a 100x traffic spike during a TV feature.' },
              { title: 'Cloud Cost Rescue', description: 'Reduced a client\'s monthly AWS bill from $15,000 to $8,000 by optimizing EC2 instances and moving to S3 Intelligent-Tiering.' }
            ],
            pricing: [
              { title: 'Cloud Governance', price: '$1,500/mo', features: ['24/7 Monitoring', 'Security Patches', 'Monthly Cost Audit'] },
              { title: 'Enterprise Architect', price: '$4,000/mo', features: ['SLA 99.99%', 'DR Disaster Recovery Plan', 'Custom Automation', 'Priority Support'] }
            ],
            roadmap: [
              { step: '1', title: 'Infra Audit', description: 'Reviewing your current AWS setup for security holes and wasted spending.' },
              { step: '2', title: 'Optimization', description: 'Resizing instances and implementing automated scaling rules to lower costs.' },
              { step: '3', title: 'Hardening', description: 'Implementing Zero-Trust IAM roles and advanced firewalls.' },
              { step: '4', title: 'Managed Ops', description: 'Handing over the keys to our 24/7 cloud monitoring and support team.' }
            ],
            faqs: [
              { question: 'Do I own the account?', answer: 'Yes, you retain full ownership. We just manage it via secure IAM cross-account access.' },
              { question: 'Can you lower my bill?', answer: 'We typically save clients 20-40% on their cloud spend through proper architecture.' },
              { question: 'Do you support Azure?', answer: 'Yes, we provide managed services for AWS, Microsoft Azure, and Google Cloud.' },
              { question: 'What if a server fails?', answer: 'Our automated "Self-Healing" logic detects the failure and launches a replacement in seconds.' },
              { question: 'Is it secure?', answer: 'We implement military-grade encryption and follow the AWS Well-Architected Framework.' },
              { question: 'Do you handle migrations?', answer: 'Yes, we can migrate you from on-premise or other clouds to AWS with zero downtime.' },
              { question: 'What is your SLA?', answer: 'We offer up to a 99.99% uptime guarantee on our managed infrastructure plans.' },
              { question: 'Do you support Kubernetes?', answer: 'Yes, we are experts in EKS, ECS, and standard Docker deployments.' }
            ],
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
            useCases: [
              { title: 'Zero-Downtime Pipeline', description: 'Implemented a Blue/Green deployment strategy for a fintech app, allowing them to release code 5x per day.' },
              { title: 'Legacy Automation', description: 'Automated the build and test process for an old Java app, reducing release time from 2 days to 15 minutes.' }
            ],
            pricing: [
              { title: 'Pipeline Pilot', price: '$5,000', features: ['One CI/CD Dashboard', 'Standard Tests', 'Documentation'] },
              { title: 'DevOps Transformation', price: 'Custom', features: ['Full Infra-as-Code', 'Kubernetes Setup', 'Staff Training', 'Continuous Support'] }
            ],
            roadmap: [
              { step: '1', title: 'Flow Analysis', description: 'Identifying manual bottlenecks in your current coding and release process.' },
              { step: '2', title: 'Toolchain Setup', description: 'Configuring GitHub Actions, GitLab CI, or Jenkins to handle your build.' },
              { step: '3', title: 'Automated Testing', description: 'Writing scripts that verify your code automatically before it ever goes live.' },
              { step: '4', title: 'Performance Tuning', description: 'Ensuring your deployments are fast, secure, and easily reversible.' }
            ],
            faqs: [
              { question: 'What tools do you use?', answer: 'We use industry leaders like Terraform, Ansible, Docker, Kubernetes, and GitHub Actions.' },
              { question: 'Does it stop bugs?', answer: 'It catches 90% of bugs early by running automated unit and integration tests on every code change.' },
              { question: 'Can we revert changes?', answer: 'Yes, our "One-Click Rollback" ensures you can go back to a safe version in seconds if something breaks.' },
              { question: 'Does it work with legacy code?', answer: 'Yes, we can wrap almost any legacy application in a modern DevOps pipeline.' },
              { question: 'Is it hard to learn?', answer: 'We provide clear dashboards and simple commands so your developers can use it with zero friction.' },
              { question: 'How much does it save?', answer: 'DevOps automation typically saves teams 15-20 hours of manual work per developer per week.' },
              { question: 'Is it secure?', answer: 'Yes, we integrate security scanning (SAST/DAST) directly into the pipeline.' },
              { question: 'Can we scale up easily?', answer: 'Yes, with "Infrastructure as Code", adding 100 more servers is just changing one line of code.' }
            ],
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
            useCases: [
              { title: 'Luxury Retail App', description: 'Developed a high-fidelity Swift app with AR (Augmented Reality) features for trying on jewelry at home.' },
              { title: 'Fintech Bank App', description: 'Built a secure, FaceID-enabled banking app that handles millions of transactions per day.' }
            ],
            pricing: [
              { title: 'App V1 Launch', price: 'From $15k', features: ['Swift/SwiftUI Code', 'App Store Submission', 'Backend API', 'Support'] },
              { title: 'Enterprise App', price: 'Custom', features: ['Advanced Integration', 'Highest Security', 'Complex Animations', 'SLA Managed Support'] }
            ],
            roadmap: [
              { step: '1', title: 'UI Concept', description: 'Designing a native Apple experience that feels right at home on an iPhone.' },
              { step: '2', title: 'Native Code', description: 'Building the app using Swift and SwiftUI for the fastest possible performance.' },
              { step: '3', title: 'Backend Sync', description: 'Connecting the app to your existing database or cloud APIs securely.' },
              { step: '4', title: 'App Store Review', description: 'Handling the technical checklist and human review process for Apple approval.' }
            ],
            faqs: [
              { question: 'How long to build?', answer: 'A high-quality native iOS app typically takes 12 to 24 weeks to develop and launch.' },
              { question: 'Swift or Objective-C?', answer: 'We use modern Swift and SwiftUI for better performance and easier long-term maintenance.' },
              { question: 'Does it work on iPad?', answer: 'Yes, we can build responsive layouts that look great on iPhone, iPad, and even Apple Watch.' },
              { question: 'Do you help with Apple?', answer: 'Yes, we handle the entire App Store submission and approval process for you.' },
              { question: 'Is it better than hybrid?', answer: 'Native apps are faster, more reliable, and can use Apple hardware (camera, sensors) better.' },
              { question: 'How do I update it?', answer: 'You can push updates to the store, and we provide managed backend services for real-time content changes.' },
              { question: 'Is user data safe?', answer: 'We use Apple\'s Keychain and advanced encryption to ensure total user privacy.' },
              { question: 'What about the App Store fee?', answer: 'Apple takes 15-30% of in-app sales. We help you set up your developer account to manage this.' }
            ],
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
            useCases: [
              { title: 'Multi-City Delivery App', description: 'Built a single Flutter app that scales for both iOS and Android delivery drivers across 5 countries.' },
              { title: 'Startup MVP', description: 'Helped a social media startup go from idea to both App Stores in just 8 weeks using a single codebase.' }
            ],
            pricing: [
              { title: 'Flutter Starter', price: 'From $12k', features: ['One Codebase', 'iOS + Android', 'Firebase Backend', 'Standard Support'] },
              { title: 'Omni Scale', price: 'Custom', features: ['Desktop App Support', 'Advanced Logic', 'Custom Animations', 'Priority Managed Support'] }
            ],
            roadmap: [
              { step: '1', title: 'Shared Logic Design', description: 'Mapping out the features that will stay identical across both phone platforms.' },
              { step: '2', title: 'Unified Build', description: 'Coding the app in Google\'s Flutter framework for lightning-fast development.' },
              { step: '3', title: 'Store Optimization', description: 'Tailoring the app icons and splash screens for both Apple and Google standards.' },
              { step: '4', title: 'Dual Launch', description: 'Simultaneously launching on both the App Store and Google Play Store.' }
            ],
            faqs: [
              { question: 'Is it slower?', answer: 'No, Flutter compiles to machine code, providing performance that is near-identical to native apps.' },
              { question: 'One code for both?', answer: 'Yes, 90%+ of the code is shared, which means half the development time and half the maintenance cost.' },
              { question: 'Does it look native?', answer: 'Yes, Flutter can perfectly mimic the look and feel of both iOS and Android platforms.' },
              { question: 'Is it future proof?', answer: 'Absolutely. Flutter is developed by Google and used by brands like Alibaba, BMW, and eBay.' },
              { question: 'Can it use the camera?', answer: 'Yes, Flutter has full access to the camera, GPS, Bluetooth, and other phone sensors.' },
              { question: 'How many developers?', answer: 'Since it\'s one codebase, you only need one team, making communication much easier.' },
              { question: 'Can we add native code?', answer: 'Yes, if you need a very specific feature, we can "bridge" in native Swift or Kotlin code.' },
              { question: 'What about updates?', answer: 'You only have to fix a bug once, and it is fixed on both iOS and Android simultaneously.' }
            ],
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
            useCases: [
              { title: 'Law Firm Leads', description: 'Managed a $5k/mo Google Ads budget for a personal injury firm, generating 20 high-value leads per month at a $250 CPL.' },
              { title: 'SaaS Expansion', description: 'Calculated and executed a Facebook Ads campaign for a productivity app, reaching a 4.0 ROAS (Return on Ad Spend).' }
            ],
            pricing: [
              { title: 'Ad Management Basic', price: '$1,000/mo', features: ['Up to $5k Spend Management', 'A/B Testing', 'Monthly Reporting'] },
              { title: 'Performance Elite', price: '15% of Spend', features: ['Unlimited Spend', 'Custom Landing Pages', 'Creative Design', 'Daily Optimization'] }
            ],
            roadmap: [
              { step: '1', title: 'Audience Research', description: 'Identifying your ideal customer profiles and where they hang out online.' },
              { step: '2', title: 'Creative Build', description: 'Designing eye-catching ads and writing high-conversion copy.' },
              { step: '3', title: 'Pixel Setup', description: 'Installing tracking codes so we know exactly which ad leads to a sale.' },
              { step: '4', title: 'Scale & Optimize', description: 'Monitoring performance daily and moving budget to the winning ads.' }
            ],
            faqs: [
              { question: 'What is the minimum budget?', answer: 'We recommend starting with at least $1,000/mo in ad spend to get enough data to optimize.' },
              { question: 'Google or Facebook?', answer: 'Google is for people searching for you; Facebook is for building awareness. We usually recommend a mix.' },
              { question: 'How soon do I get leads?', answer: 'Ads are instant. You can start seeing traffic and leads within 24 hours of launch.' },
              { question: 'Do you design the ads?', answer: 'Yes, our Performance plan includes professional graphic design and video editing for your ads.' },
              { question: 'Who pays the ad network?', answer: 'You pay Google/Meta directly for the clicks; you pay us a flat fee to manage the strategy.' },
              { question: 'Can I see the results?', answer: 'Yes, you get a real-time dashboard showing Clicks, Conversions, and ROI clearly.' },
              { question: 'What if it doesn\'t work?', answer: 'We use a data-driven approach to fail fast and pivot to strategies that actually drive revenue.' },
              { question: 'Do you write the copy?', answer: 'Yes, our expert copywriters write multiple versions of ad text to test which performs best.' }
            ],
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
            useCases: [
              { title: 'Financial Blog Authority', description: 'Published 50 high-quality articles for a fintech blog, ranking for 1,000+ keywords and driving 20k organic visits/mo.' },
              { title: 'B2B Whitepaper Lead Gen', description: 'Designed a "State of the Industry" report that captured 500 enterprise email leads in its first month.' }
            ],
            pricing: [
              { title: 'Content Starter', price: '$1,900/mo', features: ['4 Blog Posts', 'Keyword Research', 'Social Sharing'] },
              { title: 'Authority Builder', price: '$4,500/mo', features: ['10 Blog Posts', '1 Whitepaper/Quarter', 'Email Newsletter Management', 'Video Scripting'] }
            ],
            roadmap: [
              { step: '1', title: 'Pillar Strategy', description: 'Identifying the core topics your brand should "own" on the internet.' },
              { step: '2', title: 'Content Calendar', description: 'Setting a 3-month schedule for consistent, high-value publishing.' },
              { step: '3', title: 'Expert Writing', description: 'Interviewing your team to capture your unique brand voice and insights.' },
              { step: '4', title: 'Amplify', description: 'Distributing the content across social media, email, and partner sites.' }
            ],
            faqs: [
              { question: 'Do you use AI?', answer: 'We use AI for research and outlining, but every word is written and edited by professional human writers.' },
              { question: 'Where do you post?', answer: 'We post to your blog, LinkedIn, Medium, and can also pitch guest posts to industry sites.' },
              { question: 'Who owns the content?', answer: 'You do. Everything we write is your intellectual property forever.' },
              { question: 'Does this help SEO?', answer: 'Content is the #1 driver of SEO. High-quality articles earn links and rank for keywords.' },
              { question: 'Can you write about tech?', answer: 'Yes, we have specialized writers for Fintech, Healthcare, SaaS, and Crypto.' },
              { question: 'Do you provide images?', answer: 'Yes, we include custom header images and relevant stock photos for every post.' },
              { question: 'How long are the posts?', answer: 'Typically 1,000 to 2,500 words—the length Google loves for ranking.' },
              { question: 'Can I review before posting?', answer: 'Absolutely. Nothing is published without your final approval.' }
            ],
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
            useCases: [
              { title: 'Bank Network Audit', description: 'Identified a critical "zero-day" vulnerability in a regional bank\'s internal portal, preventing a potential multi-million dollar breach.' },
              { title: 'SaaS App Pentest', description: 'Performed a full black-box audit on a medical SaaS app, ensuring it met the strict security requirements for enterprise hospitals.' }
            ],
            pricing: [
              { title: 'Single Web Pentest', price: '$3,500', features: ['One Web Domain', 'OWASP Top 10 Audit', 'Remediation Report'] },
              { title: 'Network Defense', price: '$7,500', features: ['Internal & External Network', 'Social Engineering Test', 'Detailed Roadmap', 'Retest Included'] }
            ],
            roadmap: [
              { step: '1', title: 'Reconnaissance', description: 'Gathering public info about your company to see what a hacker sees first.' },
              { step: '2', title: 'Vulnerability Scan', description: 'Usingautomated tools to find known bugs and unpatched servers.' },
              { step: '3', title: 'Manual Exploitation', description: 'Our human hackers attempt to bypass security safely to prove the risk.' },
              { step: '4', title: 'Remediation', description: 'Providing your dev team with a clear plan to fix every hole we found.' }
            ],
            faqs: [
              { question: 'Is it safe?', answer: 'Yes, we perform tests in a controlled manner to identify risks without causing downtime or data loss.' },
              { question: 'How often should we test?', answer: 'We recommend a deep manual pentest at least once a year, or after every major software release.' },
              { question: 'Do you provide a cert?', answer: 'We provide a detailed "Letter of Attestation" that you can share with partners to prove your security.' },
              { question: 'What is OWSAP?', answer: 'It is the global standard for web security. We test for all 10 of the most common and dangerous vulnerabilities.' },
              { question: 'Can you test my staff?', answer: 'Yes, we perform "Phishing Simulations" to see if your employees will click on dangerous links.' },
              { question: 'What do you need from us?', answer: 'Just the URLs or IP addresses of the targets. You don\'t need to share your source code.' },
              { question: 'Is it confidential?', answer: 'Absolutely. We sign strict NDAs before any testing begins.' },
              { question: 'What if you find a bug?', answer: 'We report it instantly if it is critical, and include all findings in the final report.' }
            ],
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
            useCases: [
              { title: 'SOC2 Fast-Track', description: 'Guided a 20-person startup through the SOC2 Type 1 process in 90 days, allowing them to close a deal with a Fortune 500 client.' },
              { title: 'HIPAA Health Audit', description: 'Successfully audited a telehealth platform to ensure all patient data was encrypted and logged according to federal law.' }
            ],
            pricing: [
              { title: 'Readiness Audit', price: '$5,000', features: ['Gap Analysis', 'Risk Assessment', 'Compliance Roadmap'] },
              { title: 'Full Certification Support', price: 'Custom', features: ['Policy Writing', 'Technical Remodelling', 'Auditor Management', 'Annual Review'] }
            ],
            roadmap: [
              { step: '1', title: 'Gap Analysis', description: 'Checking your current processes against the legal requirements of the standard.' },
              { step: '2', title: 'Policy Build', description: 'Drafting the necessary security, privacy, and HR policies needed for certification.' },
              { step: '3', title: 'Technical Fixes', description: 'Implementing encryption, logging, and access controls to meet the rules.' },
              { step: '4', title: 'Audit Management', description: 'Liaising with the official auditors to ensure you pass and get your certificate.' }
            ],
            faqs: [
              { question: 'How long does SOC2 take?', answer: 'A Type 1 certification usually takes 3 to 6 months. Type 2 takes an additional 6 to 12 months.' },
              { question: 'What is the cost of non-compliance?', answer: 'Fines for GDPR can reach 4% of global turnover. More importantly, you lose trust and big enterprise deals.' },
              { question: 'Do you do the audit yourself?', answer: 'We are "Regulator-Ready" consultants. We prepare you and then bring in an independent 3rd party to certify.' },
              { question: 'Is HIPAA for everyone?', answer: 'Only if you handle "Protected Health Information" (PHI) of US citizens.' },
              { question: 'Can we automate compliance?', answer: 'Yes, we implement tools like Vanta or Drata to monitor your compliance 24/7 automatically.' },
              { question: 'Do you help with policy writing?', answer: 'Yes, we provide 20+ template policies that we tailor to your specific business.' },
              { question: 'What about data privacy?', answer: 'We ensure you follow GDPR and CCPA rules for how you collect and store user data.' },
              { question: 'Is security the same as compliance?', answer: 'No. Security is how you protect data; compliance is proving you follow the legal rules for doing so.' }
            ],
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
            useCases: [
              { title: 'CEO Dashboard', description: 'Built a single-view mobile dashboard for a CEO to track Revenue, CAC, and LTV across 3 different business units in real-time.' },
              { title: 'Retail Inventory View', description: 'Connected 50 store locations to a central PowerBI dashboard, reducing regional stock imbalances by 30%.' }
            ],
            pricing: [
              { title: 'Single Dashboard', price: '$2,500', features: ['One Data Source', 'Up to 5 Visuals', 'Mobile Responsive'] },
              { title: 'BI Ecosystem', price: 'Custom', features: ['Unlimited Sources', 'Predictive Modeling', 'Staff Training', 'Custom React BI App'] }
            ],
            roadmap: [
              { step: '1', title: 'KPI Mapping', description: 'Identifying exactly which numbers move the needle for your business.' },
              { step: '2', title: 'Data Pipeline', description: 'Connecting your CRM, Marketing, and Accounting tools to the warehouse.' },
              { step: '3', title: 'Visual Design', description: 'Building clean, easy-to-read charts that highlight trends and problems.' },
              { step: '4', title: 'User Training', description: 'Showing your team how to "drill down" into the data to find insights.' }
            ],
            faqs: [
              { question: 'Can you connect to X?', answer: 'Yes, we can connect to any tool with an API, plus SQL databases and even CSV/Excel files.' },
              { question: 'Is it real-time?', answer: 'We can configure "Live" connections or "Scheduled Refreshes" (e.g., every hour) depending on the data source.' },
              { question: 'Which tool is best?', answer: 'It depends. PowerBI is great for Microsoft users; Tableau for deep analysts; Custom React for unique UIs.' },
              { question: 'Is my data secure?', answer: 'Yes, we use secure, encrypted data connectors and implement row-level security so users only see what they should.' },
              { question: 'Can I view on my phone?', answer: 'Yes, all our dashboards are designed to be mobile-responsive and accessible on the go.' },
              { question: 'Will it slow down my apps?', answer: 'No, we usually pull data into a "Data Warehouse" first so we don\'t put pressure on your live production systems.' },
              { question: 'Can you predict the future?', answer: 'Yes, on our Enterprise plan, we implement "Predictive Analytics" using AI to forecast trends.' },
              { question: 'How much maintenance?', answer: 'Very little. Once built, the automated pipelines handle the data refresh; we only return for new features.' }
            ],
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
            useCases: [
              { title: 'E-commerce Lakehouse', description: 'Merged 10 years of sales data from 3 legacy systems into a modern Snowflake warehouse for a billion-dollar retailer.' },
              { title: 'Real-time Fraud Stream', description: 'Built a Kafka-based pipeline that processes 10,000 transactions per second to detect fraud in real-time.' }
            ],
            pricing: [
              { title: 'ETL Setup', price: '$7,500', features: ['Data Source Audit', 'Initial Pipeline Build', 'Warehouse Config'] },
              { title: 'Managed Data Hub', price: '$3,500/mo', features: ['24/7 Pipeline Monitoring', 'Performance Tuning', 'New Source Integration', 'Security Audits'] }
            ],
            roadmap: [
              { step: '1', title: 'Inventory Audit', description: 'Mapping every database, API, and file that currently holds your company data.' },
              { step: '2', title: 'Architecture Design', description: 'Selecting the right "Lakehouse" or "Warehouse" strategy for your scale.' },
              { step: '3', title: 'Pipeline Build', description: 'Coding the scripts that Extract, Transform, and Load (ETL) your data securely.' },
              { step: '4', title: 'Governance Setup', description: 'Implementing permissions and "Data Cleanliness" checks to ensure quality.' }
            ],
            faqs: [
              { question: 'Which cloud?', answer: 'We build pipelines on AWS (Glue/Redshift), Google Cloud (BigQuery), or Snowflake.' },
              { question: 'What is ETL?', answer: 'It stands for Extract, Transform, Load – the process of moving data from source to warehouse.' },
              { question: 'Is it expensive to store?', answer: 'Modern cloud warehouses are very cheap; you only pay for what you actually use.' },
              { question: 'Is my data safe?', answer: 'Yes, we implement field-level encryption and masking for sensitive data (PII).' },
              { question: 'Can we handle Petabytes?', answer: 'Yes, our architectures are built to scale infinitely as your business grows.' },
              { question: 'Does it work with AI?', answer: 'Clean, centralized data is the "fuel" for any AI project. This is the essential first step.' },
              { question: 'How do you handle errors?', answer: 'We implement "Dead Letter Queues" and automated alerts if any data fails to move.' },
              { question: 'What talent do I need?', answer: 'Our managed service replaces the need for a full-time "Data Engineer" on your staff.' }
            ],
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
            useCases: [
              { title: 'Real Estate Tokenization', description: 'Architected a smart contract that allows fractional ownership of property, reducing legal fees by 90%.' },
              { title: 'Supply Chain Ledger', description: 'Built an immutable tracking system for a coffee exporter to prove "Fair Trade" origin for every batch.' }
            ],
            pricing: [
              { title: 'Contract Pilot', price: '$7,500', features: ['Solidity/Rust Coding', 'Testnet Deployment', 'Basic UI'] },
              { title: 'Protocol Launch', price: 'Custom', features: ['Full DeFi/NFT Logic', 'Mainnet Launch', 'Formal Verification', 'Professional Security Audit'] }
            ],
            roadmap: [
              { step: '1', title: 'Logic Mapping', description: 'Defining the exact rules and "if-then" conditions of your smart contract.' },
              { step: '2', title: 'Development', description: 'Writing secure code in Solidity (Ethereum) or Rust (Solana).' },
              { step: '3', title: 'Security Audit', description: 'A multi-layer review of the code to find and fix potential "hacks" or bugs.' },
              { step: '4', title: 'Deployment', description: 'Launching to the blockchain and handing over the "Owner Keys" to your team.' }
            ],
            faqs: [
              { question: 'Solidity or Rust?', answer: 'We use Solidity for Ethereum/EVM chains and Rust for Solana and high-performance protocols.' },
              { question: 'Is it hackable?', answer: 'Code is law. We use "Formal Verification" and 3rd-party audits to ensure maximum security.' },
              { question: 'Can I change it later?', answer: 'Standard contracts are "Immutable" (cannot be changed), but we can build "Upgradeable" patterns if needed.' },
              { question: 'What are gas fees?', answer: 'They are the costs paid to the network to process your contract. We optimize code to keep these as low as possible.' },
              { question: 'Which chain is best?', answer: 'Ethereum for security; Solana for speed; Polygon/L2s for lower cost.' },
              { question: 'Do you help with UI?', answer: 'Yes, we build "dApps" (Decentralized Apps) so your users can interact with the contract via a website.' },
              { question: 'Is it legal?', answer: 'We build the tech; we recommend consulting with a specialized Web3 lawyer for your specific jurisdiction.' },
              { question: 'How long to build?', answer: 'A secure, audited contract typically takes 4 to 12 weeks to develop.' }
            ],
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
            useCases: [
              { title: 'NFT Marketplace UI', description: 'Built a high-performance React frontend for a digital art collection that handled 1,000 mints per minute.' },
              { title: 'DeFi Staking Portal', description: 'Developed a secure dashboard for a yield farming protocol, integrating complex real-time price feeds.' }
            ],
            pricing: [
              { title: 'dApp MVP', price: '$10k', features: ['Wallet Login', 'Basic Contract Link', 'Responsive UI', 'Deployment'] },
              { title: 'Full Web3 Platform', price: 'Custom', features: ['Multi-wallet Support', 'Real-time On-chain Logs', 'Advanced Interactions', 'Priority Support'] }
            ],
            roadmap: [
              { step: '1', title: 'User Flow', description: 'Mapping how users connect their wallets and interact with your smart contracts.' },
              { step: '2', title: 'Frontend Build', description: 'Designing a beautiful, modern UI using React and Tailwind CSS.' },
              { step: '3', title: 'Web3 Integration', description: 'Connecting the UI to the blockchain via Wagmi, Ethers, or Web3.js.' },
              { step: '4', title: 'Testing & Launch', description: 'Conducting cross-browser and wallet compatibility tests before release.' }
            ],
            faqs: [
              { question: 'Which wallets?', answer: 'We support MetaMask, Coinbase Wallet, Phantom, and any browser-based extension via WalletConnect.' },
              { question: 'Is it mobile ready?', answer: 'Yes, we build "Native-Like" web experiences that work perfectly inside mobile wallet browsers.' },
              { question: 'Do I need a server?', answer: 'Usually yes, for metadata and speed, but we can build "Fully Decentralized" apps that live on IPFS/Arweave.' },
              { question: 'Can users pay in Fiat?', answer: 'Yes, we can integrate "On-Ramps" like MoonPay or Stripe to let users pay with credit cards.' },
              { question: 'Is it safe for users?', answer: 'We ensure all transactions are clearly explained in the UI so users don\'t sign anything dangerous.' },
              { question: 'Which chains?', answer: 'We specialize in Ethereum, Solana, Polygon, Arbitrum, and Base.' },
              { question: 'Can you update the UI?', answer: 'Yes, the UI can be updated anytime without affecting the underlying smart contracts.' },
              { question: 'How do users find it?', answer: 'We implement SEO and social sharing meta-tags so your dApp is easy to share.' }
            ],
            metaTitle: 'dApp Development Services | Web3 Applications',
            metaDescription: 'Build user-friendly decentralized applications. Expert Web3 frontend development connecting to smart contracts.'
        }
    ]
  }
];
