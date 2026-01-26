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

**StockMovement**
- id (PK)
- product_id (FK -> Product)
- user_id (FK -> User)
- type (IN, OUT, ADJUSTMENT)
- quantity
- reason (e.g., "Restock", "Damage", "Sale")
- created_at (Timestamp)

**Debtor**
- id (PK)
- store_id (FK -> Store)
- name (Unique)
- phone_number (Optional)
- created_at (Timestamp)

**Transaction**
- id (PK)
- user_id (FK -> User)
- debtor_id (FK -> Debtor, Optional)
- total_amount
- payment_type (CASH, CREDIT)
- is_settled (Boolean)
- created_at (Timestamp)

**TransactionItem**
- id (PK)
- transaction_id (FK -> Transaction)
- product_id (FK -> Product)
- quantity
- price_at_sale

**Credit**
- id (PK)
- transaction_id (FK -> Transaction)
- debtor_id (FK -> Debtor)
- amount_paid
- remaining_balance_at_time
- paid_at (Timestamp)

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