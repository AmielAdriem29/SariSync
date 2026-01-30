CREATE TYPE user_role AS ENUM ('OWNER', 'MANAGER', 'STAFF');
CREATE TYPE movement_type AS ENUM ('IN', 'OUT', 'ADJUSTMENT');
CREATE TYPE payment_mode AS ENUM ('CASH', 'CREDIT');

CREATE TABLE stores (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    hostname VARCHAR(100) UNIQUE NOT NULL,
    address TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    store_id INTEGER REFERENCES stores(id) ON DELETE CASCADE,
    username VARCHAR(50) UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    role user_role DEFAULT 'STAFF',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    store_id INTEGER REFERENCES stores(id) ON DELETE CASCADE,
    barcode VARCHAR(100) UNIQUE,
    name VARCHAR(255) NOT NULL,
    category VARCHAR(100),
    cost_price DECIMAL(10, 2) NOT NULL,
    retail_price DECIMAL(10, 2) NOT NULL,
    current_stock INTEGER DEFAULT 0,
    min_stock INTEGER DEFAULT 5
);

CREATE TABLE stock_movements (
    id SERIAL PRIMARY KEY,
    product_id INTEGER REFERENCES products(id) ON DELETE CASCADE,
    user_id INTEGER REFERENCES users(id),
    type movement_type NOT NULL,
    quantity INTEGER NOT NULL,
    reason TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE debtors (
    id SERIAL PRIMARY KEY,
    store_id INTEGER REFERENCES stores(id) ON DELETE CASCADE,
    name VARCHAR(255) NOT NULL,
    phone_number VARCHAR(20),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(store_id, name));

CREATE TABLE transactions (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    debtor_id INTEGER REFERENCES debtors(id),
    total_amount DECIMAL(10, 2) NOT NULL,
    payment_type payment_mode DEFAULT 'CASH',
    is_settled BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE transaction_items (
    id SERIAL PRIMARY KEY,
    transaction_id INTEGER REFERENCES transactions(id) ON DELETE CASCADE,
    product_id INTEGER REFERENCES products(id),
    quantity INTEGER NOT NULL,
    price_at_sale DECIMAL(10, 2) NOT NULL
);

CREATE TABLE credits (
    id SERIAL PRIMARY KEY,
    transaction_id INTEGER REFERENCES transactions(id) ON DELETE CASCADE,
    debtor_id INTEGER REFERENCES debtors(id) ON DELETE CASCADE,
    amount_paid DECIMAL(10, 2) NOT NULL,
    remaining_balance_at_time DECIMAL(10, 2) NOT NULL,
    paid_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE expenses (
    id SERIAL PRIMARY KEY,
    store_id INTEGER REFERENCES stores(id) ON DELETE CASCADE,
    user_id INTEGER REFERENCES users(id),
    amount DECIMAL(10, 2) NOT NULL,
    category VARCHAR(100),
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE audit_logs (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    action TEXT NOT NULL,
    details JSONB,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
