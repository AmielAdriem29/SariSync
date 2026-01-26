# SariSync Database Schema

**Store**
- id (PK)
- name
- hostname (Unique)
- address

**User**
- id (PK)
- store_id (FK -> Store)
- username (Unique)
- password_hash
- role (OWNER, MANAGER, STAFF)

**Product**
- id (PK)
- store_id (FK -> Store)
- barcode (Unique, Optional)
- name
- category
- cost_price
- retail_price
- current_stock
- min_stock

**Transaction**
- id (PK)
- user_id (FK -> User)
- total_amount
- payment_type (CASH, CREDIT)
- customer_name (Optional)
- is_settled (Boolean)
- created_at (Timestamp)

**TransactionItem**
- id (PK)
- transaction_id (FK -> Transaction)
- product_id (FK -> Product)
- quantity
- price_at_sale

**Expense**
- id (PK)
- store_id (FK -> Store)
- user_id (FK -> User)
- amount
- category
- description
- created_at

**AuditLog**
- id (PK)
- user_id (FK -> User)
- action
- details
- created_at