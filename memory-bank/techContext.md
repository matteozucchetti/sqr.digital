# Technical Context

## Technology Stack

### Frontend
- **Framework**: Next.js with App Router
- **UI Components**:
  - shadcn/ui (Radix UI based component library)
  - TailwindCSS for styling
- **Form Handling**: Likely to use react-hook-form with zod validation
- **State Management**:
  - React Server Components for server state
  - React hooks for client state
  - nuqs for URL search parameter state management
- **Themes**: next-themes for light/dark mode
- **File Upload**: Convex file storage

### Backend
- **Database/API**: Convex (serverless backend)
- **Authentication**: Google authentication via Convex auth
- **File Storage**: Convex storage
- **Email**: Resend for email delivery
- **Analytics**: OpenPanel for usage tracking
- **Billing**: Polar for subscription management
- **Forms**: Loops for newsletter subscriptions

### Build Tools
- **Package Manager**: Bun
- **Monorepo**: Turborepo
- **TypeScript**: For type safety
- **Linting**: Biome
- **Error Tracking**: Sentry

## Dependencies
Key dependencies from the V1 starter kit:
- Next.js
- Convex
- TailwindCSS
- shadcn/ui and Radix UI
- TypeScript
- Bun
- Turborepo
- Auth (Google)
- Resend
- OpenPanel
- Polar

## Technical Constraints

### Authentication
- Relies on Google authentication via Convex auth
- User management through Convex schema

### File Storage
- Logo images stored in Convex storage
- Upload URL generation required for file uploads

### Development Environment
- Bun required for package management
- Environment variables needed for various integrations:
  - Convex deployment
  - Google authentication
  - Resend API keys
  - Polar organization token
  - OpenPanel API keys
  - Loops form ID (if used)

## Integration Points

### Email
- Resend for email delivery
- React Email for email templates

### Billing
- Polar for subscription management
- Webhook integration for subscription events

### Analytics
- OpenPanel for usage tracking and analytics

## Deployment
- Configured for Vercel deployment
- Environment configuration through environment variables