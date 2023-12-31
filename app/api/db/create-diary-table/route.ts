import { sql } from '@vercel/postgres'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  try {
    await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`
    const create_table = await sql`
      CREATE TABLE IF NOT EXISTS diary (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        emoji TEXT NOT NULL,
        title TEXT NOT NULL,
        content TEXT NOT NULL,
        condition INT NOT NULL,
        mental INT NOT NULL,
        date TEXT NOT NULL,
        is_public BOOLEAN NOT NULL DEFAULT FALSE,
        user_id UUID NOT NULL
      );
    `
    const alter_table = await sql`
      ALTER TABLE diary ADD FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE;
    `
    return NextResponse.json({ create_table, alter_table }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 })
  }
}
