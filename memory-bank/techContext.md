# Technical Context

## Technology Stack

### Frontend
- **Framework**: Next.js with App Router
- **UI Components**:
  - shadcn/ui (Radix UI based component library)
  - TailwindCSS for styling
- **Form Handling**: Tanstack Form with zod
- **File Upload**: Convex file storage

### Backend
- **Database/API**: Convex (serverless backend)
- **Authentication**: Google authentication via Convex auth
- **File Storage**: Convex storage
- **Email**: Resend for email delivery
- **Analytics**: Posthog
- **Billing**: Autumn for subscription management
- **Leads**: Resend for newsletter subscriptions

### Build Tools
- **Package Manager**: pnpm
- **TypeScript**: For type safety
- **Linting**: Biome

## Dependencies
Key dependencies from the V1 starter kit:
- Next.js
- Convex
- TailwindCSS
- shadcn/ui and Radix UI
- TypeScript
- Auth (Google)
- Resend
- Posthog
- Autumn

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
  - Autumn organization token
  - Posthog API keys

## Integration Points

### Email
- Resend for email delivery
- React Email for email templates

### Billing
- Autumn for subscription management
- Webhook integration for subscription events

### Analytics
- Posthog for usage tracking and analytics

## Deployment
- Configured for Vercel deployment
- Environment configuration through environment variables