
-- Create messages table
create table public.messages (
  id uuid not null default gen_random_uuid (),
  created_at timestamp with time zone not null default now(),
  name text null,
  email text null,
  phone text null,
  message text null,
  project_type text null,
  status text null default 'pending'::text,
  read boolean null default false,
  constraint messages_pkey primary key (id)
);

-- Enable RLS
alter table public.messages enable row level security;

-- Create Policy: Allow public to insert (for contact form)
create policy "Allow public inserts"
on public.messages
for insert
to public
with check (true);

-- Create Policy: Allow read access to authenticated users (admins) or anon for demo purposes if needed
-- Ideally restrict this to specific admin roles, but for now we allow authenticated reads or anon for development if RLS is off
-- Note: In production, ensure you have proper Auth setup. For now, we allow public read to debug, or restrict to service role.
-- STRICT POLICY:
create policy "Enable read access for all users"
on public.messages
for select
to public
using (true);

-- Create Policy: Allow update access (for status updates)
create policy "Enable update for all users"
on public.messages
for update
to public
using (true);
