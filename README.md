# THE SIGNAL — Beyond What You See

An unconventional, interactive professional identity experience designed around the thinking, leadership, and professional journey of Sonia Specialist.

## Concept

THE SIGNAL moves beyond the traditional portfolio and résumé format. Instead of simply presenting professional achievements, it explores how Sonia observes complexity, connects information, and creates clarity.

The experience is built around three core principles:

- **Observe** — Recognize patterns, gaps, and overlooked opportunities.
- **Connect** — Bring together people, ideas, and business perspectives.
- **Simplify** — Transform complexity into meaningful direction.

## Key Features

### Immersive Professional Identity
A futuristic, single-page experience featuring dark aesthetics, orbital animations, expressive typography, and interactive storytelling.

### Interactive Clarity Engine
An interactive visualization that transforms scattered elements into an organized system, representing the transition from complexity to clarity.

### Professional Journey
An interactive exploration of Sonia's professional experience across marketing, consulting, product strategy, and business operations.

### Functional Contact System
A validated contact form connected to a PostgreSQL database through Next.js API routes.

### Visitor Engagement Analytics
A custom session-based analytics system that captures meaningful visitor interactions:

- Page views
- Section views
- Professional experience clicks
- Clarity Engine interactions
- Estimated browsing duration
- Successful contact submissions
- LinkedIn clicks

Analytics are stored in PostgreSQL and can be analyzed using SQL queries without requiring a separate administration interface.

### Responsive Design
Designed to support desktop, tablet, and mobile screen sizes.

## Technology Stack

| Technology | Purpose |
|---|---|
| Next.js | Full-stack application framework |
| React.js | User interface |
| TypeScript | Type-safe development |
| Tailwind CSS | Styling and responsive layouts |
| Framer Motion | Animations and interactions |
| Lucide React | Iconography |
| Neon PostgreSQL | Database |
| Zod | Server-side input validation |
| Vercel | Deployment platform |

## Application Architecture

The frontend communicates with Next.js Route Handlers, which validate incoming requests and store data in Neon PostgreSQL.

Frontend → API Routes → Validation → PostgreSQL

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| POST | /api/contact | Validate and store contact enquiries |
| POST | /api/analytics | Record visitor engagement events |

## Getting Started

### 1. Install dependencies

`npm install`

### 2. Configure environment variables

Create a `.env.local` file in the project root.

`DATABASE_URL=your_neon_database_connection_string`

### 3. Database setup

Execute the database schema provided in `database/schema.sql` using the Neon SQL Editor.

### 4. Start development server

`npm run dev`

Open http://localhost:3000 in your browser.

### 5. Production build

`npm run build`

`npm run start`

## Analytics and Privacy

The analytics system uses randomly generated browser-session identifiers rather than collecting visitor names or email addresses.

Contact information is stored separately when a visitor submits an enquiry.

Browsing duration represents estimated visible-tab time, and session counts do not necessarily represent unique individuals.

## Design Philosophy

The visual identity combines an obsidian background, warm typography, orange accents, subtle motion, and interconnected visual elements.

Every major interaction reinforces the central theme of transforming complexity into clarity.

## Future Enhancements

- Enhanced analytics reporting
- Email notifications for contact enquiries
- Persistent API rate limiting
- Expanded accessibility and performance testing

## Developer

**Shreyas Shukla**

Developed as part of a developer hiring challenge, demonstrating creative frontend development, full-stack integration, interactive storytelling, and meaningful visitor engagement tracking.

---

**THE SIGNAL — Observe. Connect. Simplify.**