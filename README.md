# One Giant Picnic - Next.js & Sanity CMS Architecture

This project is a modern, headless CMS-driven event website built with Next.js (App Router), Tailwind CSS, and Sanity CMS. It transforms a static HTML/CSS prototype into a modular, highly performant React application designed for a premium Gen-Z lifestyle event.

## 🏗️ Architecture Overview

The application demonstrates a clear separation between **content**, **business logic**, and **presentation**.

### 1. The Data Layer (Sanity CMS)
The content is managed via a headless CMS (Sanity). We defined strict schemas for every dynamic aspect of the event:
- **`Event`**: Core details (Date, Venue, Hero Media)
- **`Artist`**: Biographies, Spotify links, Headliner status
- **`Performance`**: Schedule times and stages
- **`ExperienceItem`**: Event features (Food, Fashion, etc.)
- **`FAQ`**, **`GalleryItem`**, **`Product`**, **`Sponsor`**

The Sanity Studio is embedded directly into the Next.js application at the `/studio` route. 

### 2. The Server Layer (Next.js App Router)
Data is fetched server-side in Next.js Server Components. 
For example, the `Lineup` and `Programme` components run exclusively on the server. They query Sanity using GROQ and map the data directly to the UI. If Sanity is unavailable (or no project ID is configured yet), they gracefully fall back to mock data to ensure the UI never breaks.

### 3. The Client Layer (React & GSAP)
Interactivity is restricted to the components that explicitly require it, utilizing the `"use client"` directive.
- **`Loader`**: Uses GSAP to seamlessly animate the logo into the navigation bar, preserving the cinematic feel of the prototype.
- **`PageWrapper`**: Manages the client-side loading state while allowing Server Components to be rendered inside it (passing them as `children`).
- **`FAQList`**: Manages the accordion open/close state.
- **`Navigation`**: Handles the mobile hamburger menu state.

### 4. Styling (Tailwind CSS v4)
The original brutalist/editorial aesthetic was extracted into CSS variables within `globals.css`. By mapping the exact colors (Charcoal, Cream, Terracotta, Olive, Sand), typography (Inter, Oswald), and hard shadows into Tailwind tokens, we preserved the brand identity while gaining the maintainability of utility classes.

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- A Sanity.io account

### 1. Install Dependencies
```bash
npm install
```

### 2. Environment Variables
Create a `.env.local` file in the root of the project:
```env
NEXT_PUBLIC_SANITY_PROJECT_ID="your-project-id"
NEXT_PUBLIC_SANITY_DATASET="production"
```
*(If you do not provide these, the application will still run using built-in mock fallback data.)*

### 3. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the application.

### 4. Access the CMS
Navigate to [http://localhost:3000/studio](http://localhost:3000/studio) to manage the event content.

## 📁 Project Structure

```text
src/
├── app/                  # Next.js App Router
│   ├── page.tsx          # Homepage Server Component
│   ├── layout.tsx        # Root layout (Fonts, Meta)
│   ├── globals.css       # Tailwind config & global styles
│   ├── studio/           # Embedded Sanity Studio route
│   └── artists/          # Dynamic artist routes (/artists/[slug])
├── components/           # UI Components (Grouped by feature)
│   ├── artists/          # Lineup grid
│   ├── event/            # About, Tickets
│   ├── experience/       # What to expect
│   ├── faq/              # Accordion logic
│   ├── hero/             # Video hero & countdown
│   ├── layout/           # PageWrapper
│   ├── navigation/       # Navbar
│   ├── programme/        # Schedule & Venue
│   └── ui/               # Reusable elements (Loader)
└── sanity/               # Sanity CMS Configuration
    ├── lib/              # Client & Queries
    └── schemaTypes/      # Content Schemas (Event, Artist, etc.)
```

## 🧠 Key Technical Decisions

1. **Server Components by Default**: By keeping the majority of the UI as Server Components, we drastically reduce the JavaScript payload sent to the browser, improving Core Web Vitals (especially important for a video-heavy hero).
2. **Graceful Degradation**: The data-fetching components (`Lineup`, `Programme`, etc.) are wrapped in `try/catch` blocks and will render static fallback data if the CMS connection fails. This ensures a robust development experience.
3. **GSAP vs CSS Transitions**: We used GSAP for the complex initial loading sequence to guarantee coordinate accuracy across varying viewports, while relying on hardware-accelerated CSS transitions for simple hover effects (like the artist grayscale reveals) to save performance overhead.
4. **Colocated Components**: Components are grouped by feature domain (e.g., `components/artists/Lineup.tsx`) rather than purely by technical type, making the codebase easier to scale as the festival grows.
