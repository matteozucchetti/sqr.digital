# Active Context

## Current Focus
The Square project is being implemented using the V1 starter kit from Convex. We are focused on setting up the core data models and functionality to support the Square concept while leveraging the robust infrastructure provided by the starter kit.

## Recent Changes
- Initialized the project using the V1 starter kit with Convex
- Set up project structure and development environment

## Implementation Context
The implementation is starting from the V1 template which provides:
- Next.js web and app platforms
- Convex backend for data storage, API, and authentication
- User authentication with Google
- File storage capabilities
- UI components from shadcn
- Various integrations (Resend for email, Polar for billing, etc.)

### Key Areas for Development
1. **Data Model**: Implementing the Square entity structure
2. **Authentication**: Using the existing Google authentication flow
3. **File Storage**: Setting up logo upload and management
4. **Admin Interface**: Building management capabilities for Square entities
5. **Sharing Functionality**: Implementing public sharing of Square information

## Active Decisions
1. **Data Modeling**: Determining how to structure Square data in Convex
2. **Feature Prioritization**: Identifying which features to implement first
3. **UI/UX Design**: Planning the user interface for both admin and public views

## Next Steps
1. Design and implement the Square data model in Convex
2. Set up Square creation and management flows
3. Implement logo upload and management
4. Create the admin interface for Square entities
5. Set up public sharing functionality

## Considerations
- Multiple accommodations per user based on pricing plan
- Integration with external services like Resend for notifications
- Potential use of Polar for subscription management
- Analytics tracking with OpenPanel
- Forms with Loops for newsletter subscriptions