# System Patterns

## Architecture Overview

### Core Architecture
The Square platform is built on a modern stack optimized for performance and scalability:

1. **Frontend**
   - Next.js 14 with App Router
   - React Server Components
   - TypeScript
   - Tailwind CSS
   - Shadcn UI

2. **Backend**
   - Convex for real-time database
   - Edge Functions
   - Authentication system
   - File storage

3. **Infrastructure**
   - Vercel deployment
   - Edge network
   - CDN for assets
   - Automated CI/CD

## Design Patterns

### Frontend Patterns

1. **Component Architecture**
   ```typescript
   // Component structure
   /components
     /ui              // Reusable UI components
     /forms           // Form components
     /layouts         // Layout components
     /features        // Feature-specific components
     /providers       // Context providers
   ```

2. **State Management**
   - Server components for data fetching
   - React Context for global state
   - Form state with react-hook-form
   - URL state with nuqs

3. **Route Structure**
   ```
   /app
     /(auth)         // Authentication routes
     /admin          // Property management
     /square         // Guest-facing views
     /onboarding     // User onboarding
   ```

### Backend Patterns

1. **Database Schema**
   ```typescript
   // Core tables
   users             // User accounts
   properties        // Property information
   squares          // QR code and content
   analytics        // Usage tracking
   ```

2. **API Structure**
   - Queries for data fetching
   - Mutations for data updates
   - Actions for external integrations
   - HTTP endpoints for webhooks

3. **Authentication Flow**
   - OAuth providers
   - Session management
   - Role-based access
   - Secure tokens

## Code Patterns

### TypeScript Patterns

1. **Type Definitions**
   ```typescript
   // Domain types
   interface Property {
     id: Id<"properties">;
     name: string;
     description: string;
     ownerId: Id<"users">;
     settings: PropertySettings;
   }

   interface Square {
     id: Id<"squares">;
     propertyId: Id<"properties">;
     content: SquareContent;
     customization: SquareCustomization;
   }
   ```

2. **Function Patterns**
   ```typescript
   // Server functions
   export const getProperty = query({
     args: { id: v.id("properties") },
     handler: async (ctx, args) => {
       // Implementation
     }
   });

   // Client utilities
   const useProperty = (id: Id<"properties">) => {
     // Implementation
   };
   ```

### Component Patterns

1. **Server Components**
   ```typescript
   // Data fetching
   async function PropertyView({ id }: { id: string }) {
     const property = await getProperty(id);
     return <PropertyContent property={property} />;
   }
   ```

2. **Client Components**
   ```typescript
   'use client';

   function PropertyEditor({ property }: { property: Property }) {
     // Interactive components
   }
   ```

## Security Patterns

1. **Authentication**
   - OAuth 2.0 flow
   - Secure session handling
   - CSRF protection
   - Rate limiting

2. **Authorization**
   ```typescript
   // Permission checking
   const canEditProperty = (ctx: Context, propertyId: Id<"properties">) => {
     // Implementation
   };
   ```

3. **Data Validation**
   ```typescript
   // Input validation
   const propertyValidator = v.object({
     name: v.string(),
     description: v.string(),
     settings: propertySettingsValidator,
   });
   ```

## Testing Patterns

1. **Unit Tests**
   - Component testing
   - Utility function testing
   - Validation testing
   - Mock data patterns

2. **Integration Tests**
   - API endpoint testing
   - Authentication flow testing
   - Database operation testing

3. **E2E Tests**
   - User flow testing
   - Critical path testing
   - Performance testing

## Performance Patterns

1. **Optimization**
   - Server components for data fetching
   - Image optimization
   - Code splitting
   - Cache strategies

2. **Monitoring**
   - Performance metrics
   - Error tracking
   - Usage analytics
   - Load testing

## Development Patterns

1. **Project Structure**
   ```
   /
   ├── src/
   │   ├── app/          // Next.js routes
   │   ├── components/   // React components
   │   └── lib/          // Shared utilities
   ├── convex/          // Backend logic
   ├── public/          // Static assets
   └── emails/          // Email templates
   ```

2. **Code Organization**
   - Feature-based structure
   - Shared utilities
   - Type definitions
   - Constants and configs

3. **Development Workflow**
   - Branch naming conventions
   - Commit message format
   - PR templates
   - Code review guidelines

This document serves as a reference for maintaining consistency across the codebase and should be updated as new patterns emerge or existing ones evolve.