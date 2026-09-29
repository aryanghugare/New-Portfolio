import { IExperience, IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'aryanghugare75@gmail.com',

    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Aryan, I am reaching out to you because...',

    oldPortfolio: 'https://portfolio-seven-rouge-uhjbcyeivc.vercel.app',
    upworkProfile: '',
};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/aryanghugare' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/aryan-ghugare/' },
];

export const MY_STACK = {
    frontend: [
        {
            name: 'JavaScript',
            icon: '/logo/js.png',
        },
        {
            name: 'TypeScript',
            icon: '/logo/ts.png',
        },
        {
            name: 'React',
            icon: '/logo/react.png',
        },
        {
            name: 'Next.js',
            icon: '/logo/next.png',
        },
        {
            name: 'Redux',
            icon: '/logo/redux.png',
        },
        {
            name: 'Tailwind CSS',
            icon: '/logo/tailwind.png',
        },
        {
            name: 'GSAP',
            icon: '/logo/gsap.png',
        },
        {
            name: 'Framer Motion',
            icon: '/logo/framer-motion.png',
        },
        {
            name: 'Sass',
            icon: '/logo/sass.png',
        },
        {
            name: 'Bootstrap',
            icon: '/logo/bootstrap.svg',
        },
    ],
    backend: [
        {
            name: 'Node.js',
            icon: '/logo/node.png',
        },
        {
            name: 'NestJS',
            icon: '/logo/nest.svg',
        },
        {
            name: 'Express.js',
            icon: '/logo/express.png',
        },
    ],
    database: [
        {
            name: 'MySQL',
            icon: '/logo/mysql.svg',
        },
        {
            name: 'PostgreSQL',
            icon: '/logo/postgreSQL.png',
        },
        {
            name: 'MongoDB',
            icon: '/logo/mongodb.svg',
        },
        {
            name: 'Prisma',
            icon: '/logo/prisma.png',
        },
    ],
    tools: [
        {
            name: 'Git',
            icon: '/logo/git.png',
        },
        {
            name: 'Docker',
            icon: '/logo/docker.svg',
        },
        {
            name: 'AWS',
            icon: '/logo/aws.png',
        },
    ],
};
/*
export const PROJECTS: IProject[] = [
    {
        title: 'Electro EV',
        slug: 'electro-ev',
        liveUrl: 'https://electroev.co.uk/',
        year: 2025,
        description: `
      A complete agency portfolio platform built for Electro EV to showcase their services, blog content, and product offerings. <br/> <br/>
      
      Key Features:<br/>
      <ul>
        <li>🛠️ Service Display System: Interactive service showcase with synchronized sliders</li>
        <li>✍️ Blog Management: SEO-friendly blog with categorization and search</li>
        <li>🛒 Product Catalog: Organized product display with filtering capabilities</li>
        <li>📱 Fully Responsive: Optimized for all device sizes</li>
        <li>⚡ Fast Performance: Optimized Next.js frontend with ISR (Incremental Static Regeneration)</li>
      </ul><br/>
      
      Technical Highlights:
      <ul>
        <li>Implemented complex slider synchronization logic using Swiper.js</li>
        <li>Customized Payload CMS admin panel for intuitive content management</li>
        <li>Developed reusable UI components with shadcn for design consistency</li>
        <li>Configured efficient data fetching strategies in Next.js</li>
      </ul>
      `,
        role: `
      Full-Stack Developer <br/>
      Owned the entire development lifecycle:
      <ul>
        <li>✅ Backend: Configured Payload CMS with custom collections for services, blogs, and products</li>
        <li>🎨 Frontend: Built all UI components using Tailwind CSS and shadcn</li>
        <li>🔄 State Management: Implemented client-side data fetching and caching</li>
        <li>🖥️ CMS Customization: Created admin interfaces for content editors</li>
        <li>🚀 Deployment: Set up CI/CD pipeline for Vercel hosting</li>
        <li>🧩 Third-Party Integration: Added Swiper.js for interactive sliders</li>
      </ul>
      `,
        techStack: [
            'Next.js',
            'Payload CMS',
            'Tailwind CSS',
            'shadcn',
            'Swiper.js',
            'React Hook Form',
            'Vercel',
        ],
        thumbnail: '/projects/thumbnail/mti-electronics.webp',
        longThumbnail: '/projects/long/mti-electronics.webp',
        images: [
            '/projects/images/mti-electronics-1.webp',
            '/projects/images/mti-electronics-2.webp',
        ],
    },
    {
        title: 'Epikcart',
        slug: 'epikcart',
        techStack: [
            'React',
            'Redux',
            'React i18n',
            'Tailwind CSS',
            'Framer Motion',
            'debouncing',
            'Api Integration',
        ],
        thumbnail: '/projects/thumbnail/epikcart.jpg',
        longThumbnail: '/projects/long/epikcart.jpg',
        images: [
            '/projects/images/epikcart-1.png',
            '/projects/images/epikcart-2.png',
            '/projects/images/epikcart-3.png',
            '/projects/images/epikcart-4.png',
            '/projects/images/epikcart-5.png',
        ],
        liveUrl: 'https://demo.epikcart.siphertech.com/',
        year: 2023,
        description: `Epikcart is a feature-rich, scalable e-commerce platform tailored for large businesses. It features dynamic product filtering, multi-language support with RTL, advanced inventory management, order tracking, and refund systems, offering a comprehensive solution for multi-vendor operations.`,
        role: `As the frontend developer in a team of five, I: <br/>
        - Built the frontend from scratch using React, Redux, RTK Query, and Tailwind CSS.<br/>
        - Developed dynamic filtering logic for the product search page with admin-configurable parameters.<br/>
        - Integrated multi-language support with React i18n, including RTL handling.<br/>
        - Delivered a responsive, user-friendly interface in collaboration with the UI/UX designer.`,
    },
    {
        title: 'Resume Roaster',
        slug: 'resume-roaster',
        techStack: [
            'GPT-4',
            'Next.js',
            'Postgressql',
            'Prisma',
            'Tailwind CSS',
        ],
        thumbnail: '/projects/thumbnail/resume-roaster.jpg',
        longThumbnail: '/projects/long/resume-roaster.jpg',
        images: [
            '/projects/images/resume-roaster-1.png',
            '/projects/images/resume-roaster-2.png',
            '/projects/images/resume-roaster-3.png',
        ],
        liveUrl: 'https://resume-roaster.vercel.app/',
        year: 2023,
        description:
            'Resume Roaster is a web application designed to provide tailored resume feedback and professional writing services. Built with Next.js, PostgreSQL, Prisma, and Tailwind CSS, it integrates GPT-4 for AI-powered recommendations. The platform also includes peer-to-peer reviews with a points-based system, fostering a collaborative and engaging experience. Targeting freshers, experienced professionals, and programmers, it helps optimize resumes for job-specific success.',
        role: `As the sole developer and business owner, I:<br/>
        - Designed and developed the platform end-to-end using Next.js, PostgreSQL, Prisma, and Tailwind CSS.<br/>
        - Integrated GPT-4 for AI-driven feedback and insights.<br/>
        - Implemented complex SQL queries, including one to identify the top two resumes based on user points.`,
    },
    {
        title: 'Real Estate',
        slug: 'property-pro',
        techStack: [
            'React.js',
            'Redux',
            'Tailwind CSS',
            'React i18n',
            'Framer Motion',
        ],
        thumbnail: '/projects/thumbnail/property-pro.jpg',
        longThumbnail: '/projects/long/property-pro.jpg',
        images: [
            '/projects/images/property-pro-1.png',
            '/projects/images/property-pro-2.png',
            '/projects/images/property-pro-3.png',
        ],
        liveUrl: 'https://demo.propertypro.siphertech.com/',
        year: 2023,
        description:
            'PropertyPro is a real estate management platform offering users a seamless experience to explore, manage, and view property listings. The application emphasizes accessibility and responsive design, ensuring a smooth interface across devices.',
        role: `As the frontend developer, I:<br/>
        - Built the frontend using React, Redux, RTK Query, Framer Motion, and Tailwind CSS.<br/>
        - Integrated dynamic state management for efficient handling of property data.<br/>
        - Implemented multi-language support with React i18n to cater to diverse audiences.<br/>
        - Enhanced user interaction with animations and transitions using Framer Motion.`,
    },
    {
        title: 'Consulting Finance',
        slug: 'crenotive',
        techStack: ['HTML', 'CSS & SCSS', 'Javascript', 'Bootstrap'],
        thumbnail: '/projects/thumbnail/consulting-finance.jpg',
        longThumbnail: '/projects/long/consulting-finance.jpg',
        images: [
            '/projects/images/consulting-finance-1.png',
            '/projects/images/consulting-finance-2.png',
            '/projects/images/consulting-finance-3.png',
        ],
        sourceCode: '',
        liveUrl: 'https://crenotive.netlify.app/',
        year: 2023,
        description:
            'I developed Crenotive, a portfolio website using Html, SASS, and jQuery to showcase services and expertise. The design focuses on responsive user experience and effective presentation of professional achievements.',
        role: ``,
    },
    {
        title: 'devLinks',
        slug: 'devLinks',
        techStack: ['Next.js', 'Formik', 'Drag & Drop', 'Tailwind CSS'],
        thumbnail: '/projects/thumbnail/devLinks.jpg',
        longThumbnail: '/projects/long/devLinks.jpg',
        images: [
            '/projects/images/devLinks-1.png',
            '/projects/images/devLinks-2.png',
            '/projects/images/devLinks-3.png',
        ],
        sourceCode: '',
        liveUrl: 'https://devlinks-demo.vercel.app/auth/signin',
        year: 2023,
        description: `One of the most challenging projects in Frontend Mentor.<br/><br/>

            I developed a LinkSharing App as part of the Frontend Mentor challenge, utilizing React, Redux, and Tailwind CSS to create a responsive and feature-rich platform. The app allows users to share, save, and explore links, with a focus on intuitive design and smooth navigation. Advanced state management ensures efficient data handling for user interactions.`,
        role: ``,
    },
];
*/

export const PROJECTS: IProject[] = [
    {
        title: 'WebCraft AI',
        slug: 'webcraft-ai',
        techStack: [
            'React',
            'Tailwind CSS',
            'Node.js',
            'Express',
            'PostgreSQL',
            'Prisma',
            'OpenRouter',
            'Stripe',
        ],
        thumbnail: '/projects/thumbnail/webcraft-ai.png',
        longThumbnail: '/projects/long/webcraft-ai.jpg',
        images: [
            '/projects/images/webcraft-ai-1.png',
            '/projects/images/webcraft-ai-2.png',
            '/projects/images/webcraft-ai-3.png',
        ],
        sourceCode: 'https://github.com/aryanghugare/WebCraft-AI',
        liveUrl: 'https://web-craft-ai-6ayl.vercel.app/',
        year: 2026,
        description: `A full-stack AI website builder that turns a plain-English prompt into an editable single-page site. Users can revise the result in chat, preview versions, publish projects, and buy credits.<br/><br/>
Key Features:<br/>
<ul>
<li>🤖 Prompt to website: Generates a site from a written prompt</li>
<li>💬 Revisions: Chat-based edits with conversation history and version rollback</li>
<li>👀 Live preview: Iframe preview with a simple visual element editor</li>
<li>🌐 Community: Public feed of published projects</li>
<li>💳 Credits: Usage-based credits with Stripe checkout</li>
<li>🔐 Authentication: Email and password auth with Better Auth</li>
</ul>`,
        role: `Full-Stack Developer<br/>
<ul>
<li>🎨 Frontend: Built the builder, preview, and community UI with React, TypeScript, and Tailwind CSS</li>
<li>🤖 AI: Wired OpenRouter through the OpenAI SDK for generation and revisions</li>
<li>⚙️ Backend: Built Express APIs for projects, revisions, publishing, and credits</li>
<li>🗄️ Database: Modeled projects and versions in PostgreSQL with Prisma</li>
<li>💳 Billing: Integrated Stripe checkout and webhooks for credit purchases</li>
</ul>`,
    },
    {
        title: 'ResumeForge-AI',
        slug: 'resumeforge-ai',
        techStack: [
            'React',
            'Tailwind CSS',
            'Node.js',
            'Express',
            'MongoDB',
            'OpenAI API',
        ],
        thumbnail: '/projects/thumbnail/resume-forge.png',
        longThumbnail: '/projects/long/resumeforge-ai.jpg',
        images: ['/projects/images/resumeforge-ai-1.png'],
        sourceCode: 'https://github.com/aryanghugare/ResumeForge-AI',
        liveUrl: 'https://resume-forge-ai-seven.vercel.app',
        year: 2026,
        description: `An AI resume builder that writes ATS-friendly summaries and bullet points, keeps a live preview in sync, and exports a client-side PDF.<br/><br/>
Key Features:<br/>
<ul>
<li>🤖 AI writing: Structured prompts generate summaries and quantitative bullets in under 3 seconds</li>
<li>📄 Builder: Section editing across multiple professional templates</li>
<li>👀 Live preview: Resume state stays in sync while the user edits</li>
<li>📥 PDF export: Client-side PDF generation with ATS-friendly layout fidelity</li>
<li>💾 Auto-save: Debounced saves and modular JSON data to avoid extra React re-renders</li>
<li>📎 PDF import: Upload an existing resume and fill the builder from it</li>
</ul>`,
        role: `Full-Stack Developer<br/>
<ul>
<li>🎨 Frontend: Built the editor, templates, and live preview with React and Tailwind CSS</li>
<li>🤖 AI: Integrated OpenAI for context-aware summaries and experience bullets</li>
<li>⚙️ Backend: Built Express APIs for resumes, auth, and AI enhancement</li>
<li>🗄️ Database: Stored resume documents in MongoDB</li>
<li>⚡ Performance: Debounced auto-save so editing does not re-render the whole form</li>
</ul>`,
    },
    {
        title: 'BlogNest',
        slug: 'blognest',
        techStack: [
            'React',
            'Redux Toolkit',
            'Appwrite',
            'TinyMCE',
        ],
        thumbnail: '/projects/thumbnail/blognest.png',
        longThumbnail: '/projects/long/blognest.jpg',
        images: ['/projects/images/blognest-1.png'],
        sourceCode: 'https://github.com/aryanghugare/BlogNest',
        liveUrl: 'https://blog-nest-sigma.vercel.app',
        year: 2026,
        description: `A blogging platform for writing, editing, and reading posts, with authentication, cloud storage, and a rich text editor.<br/><br/>
Key Features:<br/>
<ul>
<li>📝 Posts: Create, edit, delete, and view posts with an active/draft status</li>
<li>🔐 Authentication: Signup, login, and session handling through Appwrite</li>
<li>☁️ Media: Featured images stored in Appwrite and attached to each post</li>
<li>⚡ State: Redux Toolkit keeps auth state and supports responsive post interactions</li>
<li>✍️ Editor: TinyMCE for rich text, with a textarea fallback if the editor cannot load</li>
</ul>`,
        role: `Full-Stack Developer<br/>
<ul>
<li>🎨 Frontend: Built the React interface and reusable UI components</li>
<li>🔄 State Management: Implemented application state using Redux Toolkit</li>
<li>🔐 Authentication: Integrated Appwrite authentication and session handling</li>
<li>☁️ Backend Services: Integrated Appwrite database and cloud storage services</li>
<li>✍️ Content Management: Integrated and configured TinyMCE for rich text editing</li>
</ul>`,
    },





    {
        title: 'TaskStack',
        slug: 'taskstack',
        techStack: [
            'Node.js',
            'Express',
            'MongoDB',
            'JWT',
        ],
        thumbnail: '/projects/thumbnail/taskstack.jpg',
        longThumbnail: '/projects/long/taskstack.jpg',
        images: ['/projects/images/taskstack-1.png'],
        sourceCode: 'https://github.com/aryanghugare/TaskStack',
        liveUrl: 'https://github.com/aryanghugare/TaskStack',
        year: 2026,
        description: `A project and workflow management backend designed to provide secure and scalable REST APIs for productivity and task management applications.<br/><br/>
Key Features:<br/>
<ul>
<li>🔐 Secure Authentication: JWT-based authentication for protected resources</li>
<li>📋 Task Management: Backend APIs for managing projects and workflows</li>
<li>🔌 REST APIs: Structured APIs for seamless client-server communication</li>
<li>🗄️ MongoDB: Persistent storage for users, projects, and workflow data</li>
<li>🏗️ Clean Architecture: Organized backend structure for maintainability and scalability</li>
</ul>`,
        role: `Backend Developer<br/>
<ul>
<li>⚙️ Backend: Designed and developed the Node.js and Express backend</li>
<li>🔌 REST APIs: Built RESTful APIs for project and workflow management</li>
<li>🔐 Authentication: Implemented secure JWT-based authentication</li>
<li>🗄️ Database: Designed MongoDB schemas and database interactions</li>
<li>🏗️ Architecture: Structured the application using a clean and maintainable backend architecture</li>
</ul>`,
    },

    {
        title: 'PlayGrid',
        slug: 'playgrid',
        techStack: [
            'Node.js',
            'Express',
            'MongoDB',
            'Mongoose',
            'Cloudinary',
            'Multer',
            'JWT',
        ],
        thumbnail: '/projects/thumbnail/playgrid.jpg',
        longThumbnail: '/projects/long/playgrid.jpg',
        images: [
            '/projects/images/playgrid-1.png',
            '/projects/images/playgrid-2.png',
        ],
        sourceCode: 'https://github.com/aryanghugare/PlayGrid',
        liveUrl: 'https://play-grid-ruby.vercel.app',
        year: 2026,
        description: `A media-sharing backend for stream-based video uploads, indexed search, and CDN delivery.<br/><br/>
Key Features:<br/>
<ul>
<li>🎥 Uploads: Stream-based video uploads with Multer and Cloudinary so large files do not sit in server memory</li>
<li>⚡ Search: MongoDB aggregation with compound indexes, under 100ms on 10,000+ mock records</li>
<li>🔐 Auth: JWT authentication and authorization</li>
<li>☁️ Delivery: CDN-backed video delivery, about 2 seconds faster for concurrent clients</li>
<li>🎬 Product: A public site for browsing and sharing video</li>
</ul>`,
        role: `Backend Developer<br/>
<ul>
<li>⚙️ Backend Architecture: Designed and implemented the Node.js and Express backend</li>
<li>🎥 Media Processing: Implemented stream-based video uploads using Multer and Cloudinary</li>
<li>🗄️ Database Optimization: Optimized MongoDB aggregation pipelines using compound indexes</li>
<li>🔐 Authentication: Implemented JWT-based authentication and authorization</li>
<li>☁️ Media Delivery: Integrated CDN-backed delivery for optimized video streaming</li>
<li>🚀 Performance: Optimized media processing and API performance for concurrent requests</li>
</ul>`,
    },
];

export const MY_EXPERIENCE: IExperience[] = [
    {
        id: 1,
        title: 'Software Engineer',
        company: 'Distributed Energy',
        duration: 'Sept 2026 – Present',
        info: 'Building the Utility Bills dashboard and the analytics behind daily energy usage.',
        highlights: [
            'Developing a redesigned Utility Bills dashboard with scenario modeling and an AI Advisor so users can explore energy savings.',
            'Engineered backend analytics and reset-aware aggregation so multi-day charts resolve daily kWh correctly.',
        ],
    },
    {
        id: 2,
        title: 'Full Stack Engineer',
        company: 'AppExFlow',
        duration: 'May 2026 – Sept 2026 · Mumbai',
        info: 'Shipped features across three production B2B SaaS platforms in Next.js, React, and Node.js.',
        highlights: [
            'Owned end-to-end delivery across three concurrent codebases, from requirements through deployment.',
            'Built an AI-powered e-signature pipeline with multi-signer audit trails, and a credit-based billing system for an SEO content engine.',
            'Built a structured interview platform for video and written submissions with real-time identity verification.',
        ],
    },
    {
        id: 3,
        title: 'Web Developer Intern',
        company: 'YPP Technologies',
        duration: 'June 2024 – Dec 2024 · Mumbai',
        info: 'Built full-stack ERP features and a role-based auth system used by 5,000+ people.',
        highlights: [
            'Shipped ERP features with React 19, Node.js, and Express. Code splitting cut initial page loads by about 1.2s, and Appwrite indexes brought API latency under 200ms.',
            'Implemented RBAC with JWT and bcrypt, including authentication and concurrent session persistence for 5,000+ active users.',
        ],
    },
    {
        id: 4,
        title: 'Open Source Contributor',
        company: 'Formbricks',
        duration: 'PR #7497 · Merged',
        info: 'Welcome Card video upload and playback in React, TypeScript, and Next.js.',
        highlights: [
            'Added a unified ElementMedia interface so welcome cards can hold different media states.',
            'Supported .mp4 and .mov with the maintainers, without regressions in existing survey schemas.',
        ],
        url: 'https://github.com/formbricks/formbricks/pull/7497',
    },
    {
        id: 5,
        title: 'Open Source Contributor',
        company: 'Kysely',
        duration: 'PR #1720',
        info: 'IF EXISTS support for ALTER TABLE in the type-safe SQL query builder.',
        highlights: [
            'Extended the AST and query compiler so ALTER TABLE can emit IF EXISTS.',
            'Wrote integration tests for PostgreSQL, MySQL, and SQLite so the SQL stays type-safe and idempotent.',
        ],
        url: 'https://github.com/kysely-org/kysely/pull/1720',
    },
];
