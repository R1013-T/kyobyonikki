import { sql } from '@vercel/postgres'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  try {
    await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`
    const create_table = await sql`
      CREATE TABLE IF NOT EXISTS record_group (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        title TEXT NOT NULL,
        user_id UUID NOT NULL
      );
    `
    const alter_table = await sql`
      ALTER TABLE record_group ADD FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE;
    `
    return NextResponse.json({ create_table, alter_table }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 })
  }
}
