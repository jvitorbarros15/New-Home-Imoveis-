insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'property-images',
  'property-images',
  true,
  10485760,
  array['image/jpeg','image/png','image/webp','image/gif']
)
on conflict (id) do nothing;

create policy "public read images" on storage.objects
  for select using (bucket_id = 'property-images');

create policy "admin upload images" on storage.objects
  for insert to authenticated with check (bucket_id = 'property-images');

create policy "admin delete images" on storage.objects
  for delete to authenticated using (bucket_id = 'property-images');
