# Technical Context

## Technology Stack

### Frontend Technologies
1. **Core Framework**
   - Next.js 14
   - React Server Components
   - TypeScript
   - App Router

2. **UI Framework**
   - Tailwind CSS
   - Shadcn UI
   - Radix UI Primitives
   - Lucide Icons

3. **State Management**
   - React Context
   - React Query
   - Form State (react-hook-form)
   - URL State (nuqs)

### Backend Technologies
1. **Database & API**
   - Convex (Real-time Database)
   - Edge Functions
   - WebSocket Protocol
   - HTTP Endpoints

2. **Authentication**
   - OAuth (Google)
   - JWT Tokens
   - Session Management
   - RBAC (Role-Based Access Control)

3. **File Storage**
   - Convex File Storage
   - Image Optimization
   - Asset Delivery
   - CDN Integration

## Development Environment

### Required Tools
1. **Core Tools**
   - Node.js (v18+)
   - pnpm (Package Manager)
   - Git
   - VS Code

2. **Extensions**
   - ESLint
   - Prettier
   - TypeScript
   - Tailwind CSS IntelliSense

3. **Environment Variables**
   ```env
   NEXT_PUBLIC_CONVEX_URL=
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
   CLERK_SECRET_KEY=
   RESEND_API_KEY=
   ```

## Development Workflow

### Local Setup
1. **Installation**
   ```bash
   git clone <repository>
   cd square
   pnpm install
   pnpm dev
   ```

2. **Development Scripts**
   ```json
   {
     "dev": "next dev",
     "build": "next build",
     "start": "next start",
     "lint": "next lint",
     "format": "prettier --write ."
   }
   ```

### Code Organization
1. **Directory Structure**
   ```
   /
   ├── src/
   │   ├── app/          # Next.js routes
   │   ├── components/   # React components
   │   └── lib/          # Shared utilities
   ├── convex/          # Backend logic
   ├── public/          # Static assets
   └── emails/          # Email templates
   ```

2. **Component Organization**
   ```
   components/
   ├── ui/             # Shadcn UI components
   ├── forms/          # Form components
   ├── layouts/        # Layout components
   └── features/       # Feature components
   ```

## Deployment Architecture

### Production Environment
1. **Hosting**
   - Vercel (Frontend)
   - Convex Cloud (Backend)

2. **Monitoring**
   - Error Tracking
   - Performance Monitoring
   - Usage Analytics
   - Status Checks

### CI/CD Pipeline
1. **GitHub Actions**
   - Type Checking
   - Linting
   - Testing
   - Build Verification

2. **Deployment Process**
   - Branch Protection
   - Preview Deployments
   - Production Deployments
   - Rollback Capability

## Security Considerations

### Authentication
1. **User Authentication**
   - OAuth Flow
   - Session Management
   - Token Handling
   - Security Headers

2. **Authorization**
   - Role-Based Access
   - Permission System
   - API Protection
   - Rate Limiting

### Data Security
1. **Data Protection**
   - Encryption at Rest
   - Secure Transmission
   - Input Validation
   - Output Sanitization

2. **Compliance**
   - GDPR Compliance
   - Data Privacy
   - Cookie Policies
   - Terms of Service

## Performance Optimization

### Frontend Performance
1. **Loading Speed**
   - Code Splitting
   - Image Optimization
   - Font Loading
   - Asset Minification

2. **Runtime Performance**
   - React Optimization
   - Bundle Size Control
   - Memory Management
   - Animation Performance

### Backend Performance
1. **Database**
   - Query Optimization
   - Index Management
   - Cache Strategy
   - Connection Pooling

2. **API Performance**
   - Response Time
   - Payload Size
   - Rate Limiting
   - Error Handling

## Development Guidelines

### Code Standards
1. **TypeScript**
   - Strict Mode
   - Type Safety
   - Interface Design
   - Error Handling

2. **React Patterns**
   - Functional Components
   - Custom Hooks
   - Error Boundaries
   - Performance Patterns

### Testing Strategy
1. **Test Types**
   - Unit Tests
   - Integration Tests
   - E2E Tests
   - Performance Tests

2. **Testing Tools**
   - Jest
   - React Testing Library
   - Cypress
   - Lighthouse

This technical context document serves as a reference for development decisions and should be updated as the technical stack evolves.