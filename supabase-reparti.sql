-- RÉPARTI — table de synchronisation des données (à exécuter une fois dans Supabase → SQL Editor)
-- Chaque utilisateur a une seule ligne contenant toutes ses données RÉPARTI.
-- Les règles (RLS) garantissent que personne ne peut lire ou modifier les données d'un autre.

create table if not exists public.reparti_data (
  user_id uuid primary key references auth.users (id) on delete cascade,
  data jsonb not null,
  updated_at timestamptz not null default now()
);

alter table public.reparti_data enable row level security;

drop policy if exists "reparti_select_own" on public.reparti_data;
drop policy if exists "reparti_insert_own" on public.reparti_data;
drop policy if exists "reparti_update_own" on public.reparti_data;
drop policy if exists "reparti_delete_own" on public.reparti_data;

create policy "reparti_select_own" on public.reparti_data for select to authenticated using (auth.uid() = user_id);
create policy "reparti_insert_own" on public.reparti_data for insert to authenticated with check (auth.uid() = user_id);
create policy "reparti_update_own" on public.reparti_data for update to authenticated using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "reparti_delete_own" on public.reparti_data for delete to authenticated using (auth.uid() = user_id);
