const { db } = require('@vercel/postgres')
const {
  users,
  diary,
  record_group,
  record_content,
} = require('../app/_lib/seed-data.ts')

async function seedUsers(client) {
  try {
    const insertedUsers = await Promise.all(
      users.map(async (user) => {
        return client.sql`
          INSERT INTO users (name, email, password, image)
          VALUES (${user.name}, ${user.email}, ${user.password}, ${user.image})
          ON CONFLICT (id) DO NOTHING;
        `
      }),
    )

    return insertedUsers
  } catch (error) {
    console.error('Error seeding users:', error)
    throw error
  }
}

async function seedDiary(client) {
  try {
    const insertedDiary = await Promise.all(
      diary.map(async (diary) => {
        return client.sql`
          INSERT INTO diary (emoji, title, content, condition, mental, date, is_public, user_id)
          VALUES (${diary.emoji}, ${diary.title}, ${diary.content}, ${diary.condition}, ${diary.mental}, ${diary.date}, ${diary.is_public}, ${diary.user_id})
          ON CONFLICT (id) DO NOTHING;
        `
      }),
    )

    return insertedDiary
  } catch (error) {
    console.error('Error seeding diary:', error)
    throw error
  }
}

async function seedRecordGroup(client) {
  try {
    const insertedRecordGroup = await Promise.all(
      record_group.map(async (record_group) => {
        return client.sql`
          INSERT INTO record_group (title, user_id)
          VALUES (${record_group.title}, ${record_group.user_id})
          ON CONFLICT (id) DO NOTHING;
        `
      }),
    )

    return insertedRecordGroup
  } catch (error) {
    console.error('Error seeding record_group:', error)
    throw error
  }
}

async function seedRecordContent(client) {
  try {
    const insertedRecordContent = await Promise.all(
      record_content.map(async (record_content) => {
        return client.sql`
          INSERT INTO record_content (date, value, record_group_id)
          VALUES (${record_content.date}, ${record_content.value}, ${record_content.record_group_id})
          ON CONFLICT (id) DO NOTHING;
        `
      }),
    )

    return insertedRecordContent
  } catch (error) {
    console.error('Error seeding record_content:', error)
    throw error
  }
}

async function main() {
  const client = await db.connect()

  await seedUsers(client)
  // await seedDiary(client)
  // await seedRecordGroup(client)
  // await seedRecordContent(client)

  await client.end()
}

main().catch((err) => {
  console.error('An error occurred while attempting to seed the database:', err)
})
