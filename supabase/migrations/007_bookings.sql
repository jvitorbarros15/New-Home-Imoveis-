create table if not exists bookings (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  property_code text not null,
  visitor_name text not null,
  visitor_phone text not null,
  visit_date date not null,
  visit_time text not null,
  visit_mode text not null default 'presencial',
  calendar_event_id text,
  status text not null default 'confirmed'
);

alter table bookings enable row level security;

create policy "anon insert" on bookings for insert to anon with check (true);
create policy "admin read" on bookings for select to authenticated using (true);
create policy "admin update" on bookings for update to authenticated using (true);
