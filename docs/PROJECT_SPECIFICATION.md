# Afri Delicacy — Project Specification

## 1. Product overview

Afri Delicacy is a full-stack African local-food marketplace. It helps customers discover nearby kitchens, restaurants, and hotels that serve African delicacies. Customers can inspect menus and provider profiles, contact a chef, order food for delivery or pickup, or choose to visit the provider directly.

The long-term vision is a scalable platform that can support African cuisines and food providers across multiple countries.

## 2. Product goals

- Make authentic African local food easier to discover.
- Connect customers directly with local food providers.
- Give small kitchens and restaurants a professional digital presence.
- Support both online ordering and physical visits.
- Make location, food availability, pricing, contact details, and ordering easy to understand.
- Provide controlled administration and moderation.

## 3. User roles

### 3.1 Customer

A customer can:

- Register and sign in.
- Manage name, phone number, WhatsApp number, email, and addresses.
- Share or set a location.
- Discover nearby providers.
- Search for foods and providers.
- Filter by cuisine, category, distance, price, availability, and rating.
- View provider profiles.
- View food details, images, prices, descriptions, and availability.
- Add food to a cart.
- Place an order.
- Choose delivery or pickup/visit.
- Track order status.
- View order history.
- Contact a provider/chef.
- Rate and review completed orders.

### 3.2 Food provider / Chef

A provider may represent a kitchen, restaurant, or hotel.

The provider can:

- Register and create a business profile.
- Provide business name, description, address, phone, WhatsApp, opening hours, and location.
- Upload profile and business images.
- Create, edit, hide, and delete food listings.
- Set food price, description, category, image, and availability.
- Receive and manage orders.
- Accept, reject, and update order status.
- View relevant customer/order information.
- Communicate with customers.
- View order history and basic sales information.

Provider registration should be subject to administrator approval before the provider becomes publicly discoverable.

### 3.3 Super Administrator

The administrator controls the platform.

Admin capabilities:

- Admin authentication.
- Dashboard statistics.
- Approve, reject, suspend, or reactivate providers.
- Manage customers.
- Manage providers.
- Manage food listings and categories.
- View and manage orders.
- Moderate reviews and reports.
- Manage platform settings.
- Monitor provider and customer activity.
- View operational reports.

Administrative actions must be protected by role-based access control.

## 4. Main customer journey

1. Customer opens Afri Delicacy.
2. Customer grants location access or enters a location manually.
3. Application displays nearby providers.
4. Customer selects a provider or searches for a particular food.
5. Customer opens the provider profile.
6. Customer browses available meals.
7. Customer views food details.
8. Customer adds meals to cart.
9. Customer selects delivery or pickup/visit.
10. Customer confirms address and contact details.
11. Customer submits the order.
12. Provider receives the order.
13. Provider accepts and prepares it.
14. Customer receives status updates.
15. Order is completed and customer may leave a review.

## 5. Provider profile

Each approved provider should have a public profile containing:

- Business/provider name
- Provider type: kitchen, restaurant, or hotel
- Cover/profile image
- Description
- Address
- Map location
- Phone number
- WhatsApp number
- Opening hours
- Food catalogue
- Availability status
- Rating/reviews
- Distance from customer when location is available
- Order/pickup information

## 6. Food listing

Each food item should support:

- Food name
- Food category
- African cuisine/region
- Description
- Photo
- Price
- Availability status
- Preparation/serving information where appropriate
- Provider association
- Created/updated timestamps

## 7. Ordering

An order should include:

- Customer
- Provider
- Ordered food items
- Quantities
- Unit prices
- Subtotal
- Delivery fee when applicable
- Total amount
- Delivery address when applicable
- Customer phone/WhatsApp
- Fulfilment method: delivery or pickup
- Order status
- Payment status
- Created/updated timestamps

Initial order statuses:

`pending → accepted → preparing → ready → out_for_delivery / ready_for_pickup → completed`

Alternative terminal state:

`cancelled`

## 8. Messaging and AI

### 8.1 Customer-provider chat

The MVP may begin with basic text messaging between a customer and provider/chef.

Messages should belong to a conversation and store sender, receiver/conversation, message text, timestamps, and read status.

### 8.2 AI assistant

The AI assistant is an advanced feature and should not block the MVP.

Potential capabilities:

- Recommend meals based on customer preferences.
- Help customers find suitable African delicacies.
- Explain unfamiliar dishes.
- Answer common food/provider questions.
- Help customers construct an order.
- Assist with basic conversational translation where appropriate.

AI responses must not falsely claim to be the chef or make commitments on behalf of a provider unless explicitly designed and authorized to do so.

## 9. Location features

The platform should support:

- Customer current location when permission is granted.
- Manual location/address entry.
- Provider coordinates.
- Nearby-provider search.
- Distance display.
- Map and directions in a later phase.

Location permissions must be optional and handled transparently.

## 10. WhatsApp and phone

Provider profiles may expose phone and WhatsApp contact options. The exact integration will be decided during implementation based on available APIs and platform policies.

Customer contact information must only be exposed to authorized parties when necessary for an order or communication.

## 11. Database entities — initial design

The database is expected to contain entities similar to:

- users
- roles / permissions
- customer_profiles
- provider_profiles
- provider_locations
- food_categories
- foods
- food_images
- addresses
- carts
- cart_items
- orders
- order_items
- conversations
- messages
- reviews
- notifications
- payments
- audit_logs

The final schema will be normalized and adjusted during implementation.

## 12. Security requirements

- Passwords must never be stored in plain text.
- Authentication must use a secure established authentication mechanism.
- Role-based authorization must protect admin and provider operations.
- Server-side authorization must not rely only on frontend controls.
- User input must be validated and sanitized.
- Sensitive environment variables must never be committed to GitHub.
- API endpoints must enforce authentication where required.
- Administrative actions should be auditable.
- Rate limiting and abuse protection should be added where appropriate.

## 13. Responsive design requirements

The application must work well on:

- Android phones
- iPhones
- Tablets
- Laptops
- Desktop computers

The mobile experience is a first-class requirement, not an afterthought.

## 14. MVP screens

### Public/customer

- Landing/home page
- Sign up
- Login
- Discover nearby providers
- Search results
- Food details
- Provider profile
- Cart
- Checkout/order confirmation
- Order tracking
- Customer dashboard
- Orders
- Profile/addresses
- Chat

### Provider

- Provider login/register
- Provider onboarding
- Dashboard
- Profile settings
- Food/menu management
- Add/edit food
- Orders
- Order details
- Customer conversations

### Admin

- Admin login
- Dashboard
- Providers
- Provider approval
- Customers
- Foods/categories
- Orders
- Reviews/reports
- Settings
- Audit/activity log

## 15. Suggested technical direction

The implementation should use a modern TypeScript full-stack architecture suitable for responsive web deployment and future mobile expansion. The exact framework, database provider, authentication provider, storage, maps provider, payment provider, and AI provider will be selected before coding the corresponding feature.

The codebase should prioritize:

- Type safety
- Maintainability
- Responsive UI
- Reusable components
- Secure server-side operations
- Clear separation of concerns
- Environment-based configuration
- Automated testing where practical

## 16. Development phases

### Phase 1 — Foundation

- Initialize application
- Configure TypeScript and UI system
- Establish database and authentication strategy
- Establish environment configuration
- Create core layout and navigation

### Phase 2 — Customer MVP

- Authentication
- Provider discovery
- Search/filter
- Provider profiles
- Food catalogue
- Cart
- Checkout/order creation
- Customer dashboard

### Phase 3 — Provider dashboard

- Provider onboarding
- Provider profile
- Food management
- Order management
- Customer communication

### Phase 4 — Admin dashboard

- Admin authentication
- Provider approvals
- Customer management
- Food/category management
- Order management
- Moderation
- Reports

### Phase 5 — Location and communication

- GPS/location discovery
- Maps/directions
- WhatsApp/phone actions
- Notifications
- Reviews and ratings

### Phase 6 — Advanced intelligence and commerce

- AI assistant
- AI-assisted food discovery
- Online payments
- Delivery workflows
- Advanced analytics

### Phase 7 — Deployment and mobile expansion

- Production security review
- Performance optimization
- Deployment
- Custom domain
- Mobile application strategy

## 17. Definition of success for the MVP

The MVP is successful when a customer can discover an approved nearby provider, browse its available African meals, place an order for delivery or pickup, and the provider can receive and update that order through a secure dashboard. The administrator must be able to manage customers, providers, foods, and orders.

## 18. Product principles

- Local food first.
- Mobile first.
- Simple ordering.
- Trust and transparency.
- Provider empowerment.
- Secure user data.
- Scalable architecture.
- Build the MVP before advanced features.
