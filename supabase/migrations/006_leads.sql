create table if not exists leads (
  id          uuid primary key default gen_random_uuid(),
  created_at  timestamptz not null default now(),
  name        text not null,
  whatsapp    text not null,
  email       text,
  interest    text,
  source      text default 'brasil'
);

alter table leads enable row level security;

-- anon can insert (lead capture form)
create policy "anon insert" on leads
  for insert to anon with check (true);

-- only authenticated admins can read
create policy "admin read" on leads
  for select to authenticated using (true);

-- admins can delete
create policy "admin delete" on leads
  for delete to authenticated using (true);
