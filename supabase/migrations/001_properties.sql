create table if not exists properties (
  id          uuid primary key default gen_random_uuid(),
  code        text unique not null,
  title       text not null,
  type        text not null,
  region      text not null,
  price_brl   bigint not null,
  area_m2     numeric(8,2),
  bedrooms    int,
  bathrooms   int,
  parking     int,
  description text,
  tour_url    text,
  images      text[],
  status      text not null default 'active',
  created_at  timestamptz default now()
);

alter table properties enable row level security;

create policy "public read" on properties
  for select using (status = 'active');
