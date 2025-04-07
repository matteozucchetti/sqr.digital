# System Patterns

## Architecture Overview

Square follows a modern web application architecture based on the V1 starter kit:

```
Client (Next.js) ↔ Convex Backend ↔ Database
```

### Frontend Architecture
- **Framework**: Next.js with App Router
- **Component Structure**:
  - UI components using shadcn/ui and TailwindCSS
  - Preference for React Server Components
  - Client components when interactivity is needed
  - Route-based page organization

### Backend Architecture
- **Database/API**: Convex for data storage and API functionality
- **Authentication**: Convex auth with Google
- **File Storage**: Convex storage for file uploads (logos)
- **Email**: Resend for email delivery
- **Billing**: Autumn for subscription management
- **Analytics**: Posthog for usage tracking

## Key Design Patterns

### Data Model
The core data entity will be the "Square" which contains:
- Basic info (name, bio)
- Visual elements (logo)
- Contact information (address)
- Operating details (check-in/out times)
- Social media links
- Related places (restaurants, supermarkets)

### User Management
- User authentication through Convex auth with Google
- One-to-many relationship between users and Squares
- Subscription-based access to features

### Admin Interface
- Section-based management approach
- Dedicated pages for different aspects of Square management:
  - Logo management
  - Bio editing
  - Address management
  - Check-in/out times
  - Social media links
  - Related places

### Public Sharing
- Public routes for sharing Square information
- Shareable by unique URLs

## Component Relationships

### Core Flow
1. User authenticates
2. User creates or manages their Squares
3. Squares can be shared publicly
4. Public users can view shared Square information

### Development Patterns
- TypeScript throughout the codebase
- Functional components with React hooks
- Server components by default, client components when needed
- Error handling with proper validation
- Responsive design with mobile-first approach