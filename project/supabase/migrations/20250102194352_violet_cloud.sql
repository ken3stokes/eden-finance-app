/*
  # Create encrypted data table for secure sync

  1. New Tables
    - `encrypted_data`
      - `id` (text, primary key) - composite of store_itemId
      - `encrypted_data` (bytea) - encrypted data blob
      - `store` (text) - data store identifier
      - `updated_at` (timestamptz) - last update timestamp
  
  2. Security
    - Enable RLS
    - Add policies for authenticated users
*/

CREATE TABLE IF NOT EXISTS encrypted_data (
  id TEXT PRIMARY KEY,
  encrypted_data BYTEA NOT NULL,
  store TEXT NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT now(),
  user_id UUID NOT NULL REFERENCES auth.users(id)
);

ALTER TABLE encrypted_data ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own data"
  ON encrypted_data
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own data"
  ON encrypted_data
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own data"
  ON encrypted_data
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);