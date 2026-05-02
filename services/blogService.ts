
import { BlogPost } from '../types';

const STORAGE_KEY = 'webworldmaker_blog_posts';

const SAMPLE_POSTS: BlogPost[] = [
  {
    id: 'future-of-rcs-messaging',
    title: 'The Future of RCS Messaging in Enterprise',
    excerpt: 'Why Rich Communication Services (RCS) is set to replace traditional SMS for business communication.',
    content: `
      <p>Rich Communication Services (RCS) is transforming how businesses interact with customers. Unlike traditional SMS, which is limited to 160 characters of text, RCS offers a rich, app-like experience directly in the messaging inbox.</p>
      <h3>Key Benefits of RCS</h3>
      <ul>
        <li><strong>Verified Sender IDs:</strong> Build trust with a verified checkmark and branded profile.</li>
        <li><strong>Rich Media:</strong> Send high-resolution images, videos, and carousels.</li>
        <li><strong>Interactive Buttons:</strong> Allow users to reply or take action (like "Buy Now") with a single tap.</li>
      </ul>
      <p>As 5G networks expand, the adoption of RCS is accelerating. Brands that adopt this technology early will see significantly higher engagement rates compared to standard text messaging.</p>
    `,
    author: 'Alex Morgan',
    date: '2023-10-15',
    category: 'Messaging',
    imageUrl: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ai-transforming-customer-support',
    title: 'How AI is Transforming Customer Support',
    excerpt: 'Leveraging LLMs and chatbots to provide 24/7 support without losing the human touch.',
    content: `
      <p>Customer expectations are higher than ever. They want instant answers, 24/7. Traditional support teams often struggle to scale to meet this demand without ballooning costs. Enter AI.</p>
      <p>Modern AI chatbots, powered by Large Language Models (LLMs) like Gemini, can understand context, sentiment, and complex queries. They don't just provide canned responses; they solve problems.</p>
      <blockquote>"AI isn't about replacing humans; it's about empowering them to focus on complex, high-value interactions."</blockquote>
    `,
    author: 'Sarah Chen',
    date: '2023-11-02',
    category: 'Artificial Intelligence',
    imageUrl: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'seo-strategies-2024',
    title: 'SEO Strategies for 2024 and Beyond',
    excerpt: 'Adapting your digital presence for Search Generative Experience (SGE) and voice search.',
    content: `
      <p>Search engines are evolving. With the introduction of AI-generated snapshots in search results, the traditional "10 blue links" are changing. To stay ahead, businesses must focus on:</p>
      <ol>
        <li><strong>E-E-A-T:</strong> Experience, Expertise, Authoritativeness, and Trustworthiness.</li>
        <li><strong>Structured Data:</strong> Helping AI understand your content context.</li>
        <li><strong>User Intent:</strong> Answering questions directly and concisely.</li>
      </ol>
      <p>WebWorldMaker's SEO tools are designed to help you navigate this new landscape efficiently.</p>
    `,
    author: 'Marcus Johnson',
    date: '2023-11-20',
    category: 'Digital Marketing',
    imageUrl: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'api-first-development',
    title: 'Why Your Business Needs an API-First Strategy',
    excerpt: 'Decoupling your services to allow for rapid scaling and third-party integrations.',
    content: `
      <p>In the modern digital economy, data silos are the enemy of growth. An API-First approach ensures that all your business functionalities—from inventory management to customer data—are accessible via secure, documented APIs.</p>
      <p>This allows for:</p>
      <ul>
        <li>Rapid mobile app development.</li>
        <li>Easy integration with partners.</li>
        <li>Future-proofing your technology stack.</li>
      </ul>
    `,
    author: 'Sarah Chen',
    date: '2023-12-05',
    category: 'Web Development',
    imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'cybersecurity-essentials',
    title: 'Enterprise Cybersecurity: Zero Trust Architecture',
    excerpt: 'Protecting your digital assets in an era of increasing cyber threats.',
    content: `
      <p>The old "castle and moat" security model is dead. With remote work and cloud infrastructure, the perimeter is everywhere. Zero Trust Architecture (ZTA) operates on the principle of "never trust, always verify."</p>
      <p>Implementing MFA, strict IAM policies, and end-to-end encryption is no longer optional—it is the baseline for doing business securely.</p>
    `,
    author: 'David Wright',
    date: '2024-01-12',
    category: 'Cybersecurity',
    imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'cloud-cost-optimization',
    title: 'Optimizing Cloud Infrastructure Costs',
    excerpt: 'How to scale your AWS or GCP infrastructure without breaking the bank.',
    content: `
      <p>Cloud bills can spiral out of control if not monitored. We explore strategies like auto-scaling, spot instances, and serverless architectures to keep your operational costs low while maintaining high availability.</p>
    `,
    author: 'Alex Morgan',
    date: '2024-02-28',
    category: 'Cloud Infrastructure',
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'low-code-revolution',
    title: 'The Low-Code Revolution: Building Apps in Days',
    excerpt: 'How citizen developers are changing the landscape of internal business tools.',
    content: `
      <p>Gone are the days when you needed a team of engineers to build a simple inventory tracker. Low-code platforms allow business analysts to drag-and-drop their way to functional applications.</p>
      <p>This shift empowers the people who know the business process best to build the tools they need, reducing the backlog for IT departments.</p>
    `,
    author: 'Sarah Chen',
    date: '2024-03-15',
    category: 'Web Development',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'telegram-marketing-tips',
    title: 'Mastering Telegram for Community Growth',
    excerpt: 'Strategies for engaging crypto and tech communities on Telegram.',
    content: `
      <p>Telegram offers unique features like channels, bots, and high-capacity groups that make it ideal for community building. However, managing spam and maintaining engagement can be tricky.</p>
      <p>We discuss how to use automated bots to welcome new members, filter out noise, and schedule high-value content to keep your community thriving.</p>
    `,
    author: 'Marcus Johnson',
    date: '2024-04-02',
    category: 'Digital Marketing',
    imageUrl: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '10dlc-compliance-guide',
    title: 'The Ultimate Guide to 10DLC Compliance',
    excerpt: 'Navigate the complex world of A2P 10DLC registration to ensure your SMS campaigns actually get delivered.',
    content: `
      <p>If you are sending business SMS in the US, you need to know about A2P 10DLC (Application-to-Person 10 Digit Long Code). Carriers like AT&T and T-Mobile now require registration to prevent spam.</p>
      <h3>Steps to Compliance</h3>
      <ol>
        <li><strong>Register your Brand:</strong> Verify your business identity.</li>
        <li><strong>Register your Campaign:</strong> Tell carriers what kind of messages you are sending (e.g., OTP, Marketing).</li>
        <li><strong>Respect Opt-ins:</strong> Ensure you have explicit consent before texting.</li>
      </ol>
      <p>Failing to register can result in blocked messages and fines. WebWorldMaker handles this registration process for you automatically.</p>
    `,
    author: 'David Wright',
    date: '2024-05-10',
    category: 'Compliance',
    imageUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'custom-mobile-apps',
    title: 'Why Your Business Needs a Custom Mobile App',
    excerpt: 'Beyond the website: How a dedicated mobile app drives loyalty and engagement.',
    content: `
      <p>Mobile websites are great, but they can't match the engagement of a native app. Push notifications alone have open rates 50% higher than email.</p>
      <p>A custom app allows for offline functionality, better performance, and a persistent presence on your customer's home screen. With tools like React Native, building for both iOS and Android is more affordable than ever.</p>
    `,
    author: 'Sarah Chen',
    date: '2024-06-22',
    category: 'App Development',
    imageUrl: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'automating-hr-workflows',
    title: 'Automating HR Workflows with AI',
    excerpt: 'Reduce administrative burden and improve employee satisfaction with intelligent automation.',
    content: `
      <p>HR teams spend up to 40% of their time on repetitive admin tasks like answering benefits questions or scheduling interviews. AI can change this.</p>
      <p>By deploying internal chatbots for FAQs and automated workflows for onboarding, HR professionals can focus on what really matters: culture and people development.</p>
    `,
    author: 'Alex Morgan',
    date: '2024-07-05',
    category: 'Business Automation',
    imageUrl: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80'
  }
];

export const syncBlogPosts = (): void => {
    try {
        const storedJson = localStorage.getItem(STORAGE_KEY);
        const stored: BlogPost[] = storedJson ? JSON.parse(storedJson) : [];
        const storedIds = new Set(stored.map(p => p.id));
        let hasChanges = false;

        SAMPLE_POSTS.forEach(post => {
            if (!storedIds.has(post.id)) {
                stored.push(post);
                hasChanges = true;
            }
        });

        if (hasChanges) {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(stored));
        }
    } catch (e) {
        console.error("Blog sync failed", e);
    }
};

export const getPosts = (): BlogPost[] => {
  const posts = localStorage.getItem(STORAGE_KEY);
  return posts ? JSON.parse(posts) : [];
};

export const getPost = (id: string): BlogPost | undefined => {
  const posts = getPosts();
  return posts.find(p => p.id === id);
};

export const createPost = (post: BlogPost): void => {
  const posts = getPosts();
  if (!post.id) {
      post.id = post.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
  }
  const newPosts = [post, ...posts];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(newPosts));
};

export const updatePost = (updatedPost: BlogPost): void => {
  const posts = getPosts();
  const index = posts.findIndex(p => p.id === updatedPost.id);
  if (index !== -1) {
    posts[index] = updatedPost;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
  }
};

export const deletePost = (id: string): void => {
  const posts = getPosts();
  const newPosts = posts.filter(p => p.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(newPosts));
};
