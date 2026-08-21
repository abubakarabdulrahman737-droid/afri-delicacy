# Afri Delicacy — Engineering Specification v1.0

## 1. Product

Afri Delicacy is a responsive, location-aware marketplace for discovering African local delicacies and connecting customers with kitchens, restaurants, hotels, and food vendors. Customers can browse nearby providers, view menus, order for delivery or pickup, or choose to visit a provider.

## 2. MVP technology stack

- Next.js with App Router and TypeScript
- React
- Tailwind CSS
- shadcn/ui
- PostgreSQL
- Prisma ORM
- Auth.js for authentication/session management
- Zod for validation
- React Hook Form for forms
- Lucide React for icons
- Zustand only where client-side state is genuinely needed
- Argon2 for password hashing where credentials authentication is implemented
- Image storage through a replaceable provider service
- Map provider through a replaceable service abstraction
- AI through a server-side service abstraction; not required for MVP
- Payment provider through a replaceable service abstraction; not required for MVP
- GitHub for source control
- Deployment must remain compatible with a modern Next.js hosting platform

## 3. Core roles

### CUSTOMER
Can manage their profile and addresses; browse/search providers and foods; manage their own cart; create and view their own orders; cancel eligible orders; communicate with providers; submit eligible reviews; receive notifications.

### PROVIDER
Represents a kitchen, restaurant, hotel, or food vendor. Can manage only their own provider profile and foods; manage availability; view and process their own orders; communicate with customers involved in their orders; view relevant reviews.

### ADMIN
Can manage platform users, providers, provider approval/suspension, food categories, food moderation, orders, reviews, reports, and platform settings.

Authorization must be enforced server-side. Hiding UI controls is never sufficient security.

## 4. Database entities

### User
- id
- name
- email
- phone
- whatsappNumber
- passwordHash
- role: CUSTOMER | PROVIDER | ADMIN
- avatarUrl
- isActive
- createdAt
- updatedAt

### Provider
- id
- userId
- businessName
- businessType: KITCHEN | RESTAURANT | HOTEL | FOOD_VENDOR
- description
- logoUrl
- coverImageUrl
- phone
- whatsappNumber
- address
- city
- state
- country
- latitude
- longitude
- openingTime
- closingTime
- isOpen
- verificationStatus: PENDING | APPROVED | REJECTED | SUSPENDED
- createdAt
- updatedAt

### Category
- id
- name
- description
- imageUrl
- country
- region
- isActive

### Food
- id
- providerId
- categoryId
- name
- description
- price
- currency
- preparationTime
- imageUrl
- isAvailable
- createdAt
- updatedAt

### FoodImage
- id
- foodId
- imageUrl
- sortOrder

### Address
- id
- userId
- label
- addressLine
- city
- state
- country
- latitude
- longitude
- isDefault

### Cart
- id
- userId
- providerId
- createdAt
- updatedAt

MVP rule: one cart belongs to one provider.

### CartItem
- id
- cartId
- foodId
- quantity
- unitPrice

### Order
- id
- orderNumber
- customerId
- providerId
- status: PENDING | ACCEPTED | PREPARING | READY | OUT_FOR_DELIVERY | COMPLETED | CANCELLED | REJECTED
- orderType: DELIVERY | PICKUP | DINE_IN
- subtotal
- deliveryFee
- total
- deliveryAddressId
- customerNote
- createdAt
- updatedAt

### OrderItem
- id
- orderId
- foodId
- foodName
- quantity
- unitPrice
- subtotal

Historical food name and price must be preserved on the order item.

### Payment
Prepared for future payment integration. Fields: id, orderId, amount, currency, method, status, transactionReference, paidAt, createdAt.

### Review
- id
- customerId
- providerId
- foodId
- orderId
- rating
- comment
- createdAt

### Conversation
- id
- customerId
- providerId
- orderId
- createdAt
- updatedAt

### Message
- id
- conversationId
- senderId
- message
- messageType: TEXT | IMAGE | AI | SYSTEM
- isRead
- createdAt

### Notification
- id
- userId
- title
- message
- type
- isRead
- createdAt

## 5. Public pages

- /
- /explore
- /providers
- /providers/[id]
- /foods
- /foods/[id]
- /categories/[slug]
- /about
- /contact
- /login
- /register

## 6. Customer pages

- /customer
- /customer/orders
- /customer/orders/[id]
- /customer/cart
- /customer/checkout
- /customer/addresses
- /customer/profile
- /customer/messages
- /customer/reviews

## 7. Provider pages

- /provider
- /provider/profile
- /provider/foods
- /provider/foods/new
- /provider/foods/[id]/edit
- /provider/orders
- /provider/orders/[id]
- /provider/customers
- /provider/messages
- /provider/reviews
- /provider/settings

## 8. Admin pages

- /admin
- /admin/users
- /admin/users/[id]
- /admin/providers
- /admin/providers/[id]
- /admin/foods
- /admin/categories
- /admin/orders
- /admin/reviews
- /admin/reports
- /admin/settings

## 9. API requirements

Authentication:
- POST /api/auth/register
- POST /api/auth/login
- POST /api/auth/logout
- GET /api/auth/session

Providers:
- GET /api/providers
- GET /api/providers/:id
- POST /api/providers
- PATCH /api/providers/:id
- DELETE /api/providers/:id
- GET /api/providers/nearby

Foods:
- GET /api/foods
- GET /api/foods/:id
- POST /api/foods
- PATCH /api/foods/:id
- DELETE /api/foods/:id
- GET /api/foods/search

Cart:
- GET /api/cart
- POST /api/cart/items
- PATCH /api/cart/items/:id
- DELETE /api/cart/items/:id
- DELETE /api/cart

Orders:
- POST /api/orders
- GET /api/orders
- GET /api/orders/:id
- PATCH /api/orders/:id/status
- POST /api/orders/:id/cancel

Reviews:
- POST /api/reviews
- GET /api/providers/:id/reviews
- PATCH /api/reviews/:id
- DELETE /api/reviews/:id

Chat:
- GET /api/conversations
- POST /api/conversations
- GET /api/conversations/:id/messages
- POST /api/conversations/:id/messages

AI, future:
- POST /api/ai/chat

API input must be validated. Resource ownership and role permissions must be checked server-side.

## 10. UI requirements

- Mobile-first responsive design
- Professional African-food visual identity without stereotyping or clutter
- Clear navigation
- Accessible forms and controls
- Semantic HTML
- Keyboard accessibility
- Appropriate image alt text
- Loading, empty, success, and error states
- Consistent reusable cards, buttons, forms, tables, dialogs, navigation, and dashboard components
- Customer home page should prioritize food discovery and nearby providers
- Provider dashboard should prioritize today's orders and food management
- Admin dashboard should prioritize platform statistics, pending approvals, orders, and moderation

## 11. Environment variables

Required/expected placeholders in `.env.example`:

```env
DATABASE_URL=
AUTH_SECRET=
NEXT_PUBLIC_APP_URL=
OPENAI_API_KEY=
MAPBOX_ACCESS_TOKEN=
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
PAYMENT_SECRET_KEY=
PAYMENT_PUBLIC_KEY=
EMAIL_SERVER=
EMAIL_FROM=
```

Never commit `.env` or real credentials. Client-exposed variables must use the appropriate public prefix and contain no secrets.

## 12. Development rules

1. Use TypeScript throughout.
2. Avoid `any` unless unavoidable and documented.
3. Use Prisma migrations for schema changes.
4. Validate external input with Zod.
5. Enforce authorization on the server.
6. Never expose secrets in client code or source control.
7. Do not trust client-provided role or ownership information.
8. Use reusable components instead of giant page components.
9. Build mobile-first and test responsive layouts.
10. Provide loading, empty, and error states.
11. Keep third-party integrations behind service abstractions.
12. Do not add unnecessary dependencies.
13. Do not implement future milestones unless explicitly requested.
14. Keep commits focused and descriptive.
15. Run lint, type checking, tests, and build checks before declaring a milestone complete.
16. Do not silently change product requirements. Explain conflicts before making architectural changes.
17. Never delete working functionality merely to simplify a new feature.
18. Keep database and API operations transactional where required, especially order creation and cart checkout.
19. Do not expose sensitive customer information to providers beyond what is necessary to fulfil an order.
20. Treat `main` as the stable branch.

## 13. Milestones

### Milestone 1 — Foundation
Project setup, TypeScript, Tailwind, shadcn/ui, Prisma, PostgreSQL schema, authentication foundation, roles, shared layout, environment template, lint/type/build configuration.

### Milestone 2 — Provider system
Provider registration/profile, provider dashboard, food CRUD, availability.

### Milestone 3 — Customer discovery
Homepage, search, categories, nearby providers, provider profiles, food details.

### Milestone 4 — Ordering
Cart, checkout, delivery/pickup/dine-in, order creation, provider order processing, customer order status.

### Milestone 5 — Administration
Admin dashboard, provider approval, user management, categories, food moderation, order overview, reviews.

### Milestone 6 — Messaging
Customer/provider conversations and messages.

### Milestone 7 — Location
GPS, nearby search, maps, directions.

### Milestone 8 — Payments and notifications
Payment integration, notification system, reviews enhancements.

### Milestone 9 — AI
AI food discovery and assistant, with strict server-side API-key handling.

### Milestone 10 — Production readiness
Testing, security review, performance, accessibility, deployment, monitoring, backups, and documentation.

## 14. Codex execution rule

Implement one milestone at a time. Do not attempt the entire product in one pass. Before starting a milestone, inspect the existing repository and preserve working functionality. After implementation, run validation checks and report changed files, tests/checks run, remaining issues, and the next recommended step.
