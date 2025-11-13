# TODO: Implement CRUD for Invoices Page

## Current Status
- API functions for invoices have been added to api.ts
- Backend has InvoiceController, Invoice, and InvoiceItem models ready
- Need to replace static data in page.tsx with dynamic CRUD functionality

## Tasks to Complete

### 1. Import Required Dependencies
- [ ] Import useEffect, useState from React
- [ ] Import API functions from services/api.ts
- [ ] Import getFoods function for food selection

### 2. Replace Static Data with API Calls
- [ ] Replace static orders state with API data fetching
- [ ] Add loading states for API calls
- [ ] Add error handling for API failures

### 3. Create Invoice Form Modal
- [ ] Create modal component for create/edit invoice
- [ ] Add customer name input field
- [ ] Add food selection dropdown with quantity input
- [ ] Add price display and total calculation
- [ ] Add status selection

### 4. Implement CRUD Operations
- [ ] Create function: Add new invoice with items
- [ ] Read function: Display existing invoices with items
- [ ] Update function: Edit existing invoice and items
- [ ] Delete function: Remove invoice

### 5. Food Selection and Quantity Management
- [ ] Fetch foods from backend for selection
- [ ] Add/remove food items with quantity
- [ ] Calculate prices and totals dynamically
- [ ] Display itemized pricing

### 6. Status Management
- [ ] Update invoice status (pending, paid, cancelled)
- [ ] Visual status indicators
- [ ] Status change functionality

### 7. UI Enhancements
- [ ] Add loading spinners
- [ ] Add success/error notifications
- [ ] Improve form validation
- [ ] Responsive design for mobile

### 8. Testing and Validation
- [ ] Test create invoice functionality
- [ ] Test edit invoice functionality
- [ ] Test delete invoice functionality
- [ ] Test status updates
- [ ] Validate data integrity
