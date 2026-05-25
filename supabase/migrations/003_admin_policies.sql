drop policy if exists "public read" on properties;

create policy "anon read active" on properties
  for select to anon using (status = 'active');

create policy "admin read all" on properties
  for select to authenticated using (true);

create policy "admin insert" on properties
  for insert to authenticated with check (true);

create policy "admin update" on properties
  for update to authenticated using (true) with check (true);

create policy "admin delete" on properties
  for delete to authenticated using (true);
