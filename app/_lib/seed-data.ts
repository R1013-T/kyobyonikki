const users = [
  {
    id: '410544b2-4001-4271-9855-fec4b6a6442a',
    name: '山田 太郎',
    email: 'tarou@gmail.com',
    image: 'https://github.com/R1013-T.png',
  },
  {
    id: 'c4b6a6442a-410544b2-4001-4271-9855-fe',
    name: '田中 次郎',
    email: 'jirou@gmail.com',
    image: 'https://github.com/R1013-T.png',
  },
  {
    id: '4271-9855-fe410544b2-4001-c4b6a6442a',
    name: '佐藤 三郎',
    email: 'saburou@gmail.com',
    image: 'https://github.com/R1013-T.png',
  },
]

const diary = [
  {
    id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
    emoji: '🏃‍♂️',
    title: '日記１タイトル',
    content:
      '日記１内容日記１内容日記１内容日記１内容日記１内容日記１内容日記１内容日記１内容日記１内容',
    condition: 3,
    mental: 4,
    date: '2024年1月1日',
    is_public: false,
    user_id: '6019e954-f7c8-4025-b7b7-8eb7f8a0f1d5',
  },
  {
    id: 'f3c4b6a6-442a-3958dc9e-712f-4377-85e9',
    emoji: '🍣',
    title: '日記２タイトル',
    content: '日記２内容日記２内容日記２内容日記２内容日記２',
    condition: 1,
    mental: 2,
    date: '2024年1月2日',
    is_public: false,
    user_id: '6019e954-f7c8-4025-b7b7-8eb7f8a0f1d5',
  },
  {
    id: '9855-fe410544b2-4001-c4b6a6442a4271',
    emoji: '🎉',
    title: '日記３タイトル',
    content:
      '日記３内容日記３内容日記３内容日記３内容日記３内容日記３内容日記３内容日記３内容日記３内容',
    condition: 5,
    mental: 3,
    date: '2024年1月3日',
    is_public: true,
    user_id: '6019e954-f7c8-4025-b7b7-8eb7f8a0f1d5',
  },
]

const record_group = [
  {
    id: '9855-fe410544b2-4001-c4b6a6442a4271',
    title: '記録グループ１',
    user_id: '6019e954-f7c8-4025-b7b7-8eb7f8a0f1d5',
  },
  {
    id: 'AF17D0A7-095D-4AF1-8B91-31A4FB15973F',
    title: '記録グループ２',
    user_id: '6019e954-f7c8-4025-b7b7-8eb7f8a0f1d5',
  },
  {
    id: 'C2D0A0AE-B22B-47DD-BD82-10F9D65F2FFB',
    title: '記録グループ３',
    user_id: '6019e954-f7c8-4025-b7b7-8eb7f8a0f1d5',
  },
]

const record_content = [
  {
    id: '887B5301-2619-42BF-A5DB-CE9A32628C78',
    date: '2024年1月1日',
    value: 3,
    record_group_id: 'ab219587-326f-4001-aa61-7b5fca5d8e94',
  },
  {
    id: 'B3B4F7DC-2590-495E-BD21-9856D1C17A6B',
    date: '2024年1月2日',
    value: 4,
    record_group_id: 'ab219587-326f-4001-aa61-7b5fca5d8e94',
  },
  {
    id: 'C2D0A0AE-B22B-47DD-BD82-10F9D65F2FFB',
    date: '2024年1月3日',
    value: 5,
    record_group_id: 'ab219587-326f-4001-aa61-7b5fca5d8e94',
  },
  {
    id: 'A28D8FA2-61F7-4D73-A47D-4F0DD8E00618',
    date: '2024年1月4日',
    value: 4,
    record_group_id: 'ab219587-326f-4001-aa61-7b5fca5d8e94',
  },
]

module.exports = {
  users,
  diary,
  record_group,
  record_content,
}
