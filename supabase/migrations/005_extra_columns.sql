alter table properties
  add column if not exists address text,
  add column if not exists suites int default 0,
  add column if not exists pet_friendly boolean default false,
  add column if not exists condominio_brl int default 0,
  add column if not exists iptu_brl int default 0;
