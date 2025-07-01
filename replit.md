# replit.md

## Overview

This is a full-stack portfolio website for Rohan Das, a Business Analytics & Data Science professional. The application is built as a modern single-page application (SPA) with a React frontend and Express.js backend, featuring a dark-themed UI showcasing professional experience, projects, and contact functionality.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for lightweight client-side routing
- **UI Components**: shadcn/ui component library with Radix UI primitives
- **Styling**: Tailwind CSS with custom dark theme
- **State Management**: TanStack Query for server state management
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript with ES modules
- **API Design**: RESTful API endpoints under `/api` prefix
- **Request Logging**: Custom middleware for API request/response logging
- **Error Handling**: Centralized error handling middleware

### Database & Storage
- **ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL (configured for production)
- **Migration**: Drizzle Kit for schema migrations
- **Development Storage**: In-memory storage implementation for development
- **Session Storage**: PostgreSQL-based session storage (connect-pg-simple)

## Key Components

### Frontend Components
- **Navigation**: Fixed navigation with smooth scrolling and mobile responsiveness
- **Hero Section**: Professional introduction with profile image
- **About Section**: Personal background and skills showcase
- **Projects Section**: Portfolio of data science projects with GitHub integration
- **Education Section**: Academic credentials and IBM certifications
- **Contact Section**: Interactive contact form with toast notifications

### Backend Services
- **Contact API**: Handles contact form submissions with validation
- **Storage Layer**: Abstracted storage interface supporting both memory and database implementations
- **Validation**: Zod schemas for request/response validation

### Shared Components
- **Schema Definitions**: Shared TypeScript types and Zod validation schemas
- **Database Models**: User and contact entity definitions

## Data Flow

1. **Contact Form Submission**:
   - User fills contact form → Frontend validation → API request to `/api/contact`
   - Backend validates with Zod schema → Stores contact message → Returns success response
   - Frontend displays success/error toast notification

2. **Development vs Production**:
   - Development: Uses in-memory storage with mock data
   - Production: Connects to PostgreSQL database via Neon serverless

3. **Asset Management**:
   - Static assets stored in `attached_assets` directory
   - Profile images optimized and served directly
   - Vite handles asset bundling and optimization

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL connection for production
- **@tanstack/react-query**: Server state management and caching
- **@radix-ui/**: Comprehensive UI component primitives
- **wouter**: Lightweight React router
- **drizzle-orm**: Type-safe ORM for database operations

### Development Tools
- **@replit/vite-plugin-runtime-error-modal**: Development error overlay
- **@replit/vite-plugin-cartographer**: Replit-specific development tooling
- **tsx**: TypeScript execution for development server

### UI & Styling
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Component variant management
- **lucide-react**: Icon library
- **date-fns**: Date manipulation utilities

## Deployment Strategy

### Development Environment
- **Server**: Express server with Vite middleware for HMR
- **Database**: In-memory storage for rapid development
- **Hot Reload**: Full-stack hot reloading with Vite integration

### Production Build
- **Frontend**: Vite builds static assets to `dist/public`
- **Backend**: esbuild bundles server code to `dist/index.js`
- **Environment**: Production server serves static files and API routes
- **Database**: Connects to PostgreSQL via `DATABASE_URL` environment variable

### Configuration Management
- Environment-based configuration switching
- Separate build processes for client and server
- TypeScript path mapping for clean imports

Changelog:
- July 01, 2025. Initial setup
- July 01, 2025. Major architectural update:
  * Converted from single-page to multi-page application with React Router (wouter)
  * Separated Kaggle and GitHub projects into distinct sections
  * Removed ML & Data Science Survey 2022 project
  * Added Food Delivery Time Prediction and Iris Data Model GitHub projects
  * Implemented unique gradient backgrounds for each section
  * Added emoji icons as project thumbnails
  * Updated navigation to support multi-page routing structure

## User Preferences

Preferred communication style: Simple, everyday language.