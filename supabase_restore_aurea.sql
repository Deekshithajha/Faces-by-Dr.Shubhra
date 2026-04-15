-- AUREA schema + seed for Supabase
-- Run in Supabase SQL Editor (safe to re-run).

create extension if not exists pgcrypto;

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create table if not exists public.consultations (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  phone_number text not null,
  email text not null,
  area_of_interest text not null,
  message text,
  status text not null default 'new',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.treatments (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  short_description text not null,
  category text not null check (category in ('facial', 'body', 'breast')),
  image_url text,
  display_order int not null default 0,
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.testimonials (
  id uuid primary key default gen_random_uuid(),
  patient_name text not null,
  treatment_type text not null,
  testimonial text not null,
  rating int check (rating between 1 and 5),
  display_order int not null default 0,
  is_featured boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.before_after_cases (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  category text not null check (category in ('facial', 'body', 'breast')),
  description text not null,
  before_image_url text,
  after_image_url text,
  recovery_note text,
  display_order int not null default 0,
  is_published boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.site_settings (
  id uuid primary key default gen_random_uuid(),
  section_key text not null unique,
  title text,
  subtitle text,
  description text,
  content_json jsonb not null default '{}'::jsonb,
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists idx_consultations_created_at on public.consultations (created_at desc);
create index if not exists idx_consultations_status on public.consultations (status);
create index if not exists idx_treatments_active_order on public.treatments (is_active, display_order);
create index if not exists idx_treatments_category on public.treatments (category);
create index if not exists idx_testimonials_featured_order on public.testimonials (is_featured, display_order);
create index if not exists idx_before_after_published_order on public.before_after_cases (is_published, display_order);
create index if not exists idx_before_after_category on public.before_after_cases (category);
create index if not exists idx_site_settings_active_key on public.site_settings (is_active, section_key);

drop trigger if exists trg_consultations_updated_at on public.consultations;
create trigger trg_consultations_updated_at
before update on public.consultations
for each row execute procedure public.set_updated_at();

drop trigger if exists trg_treatments_updated_at on public.treatments;
create trigger trg_treatments_updated_at
before update on public.treatments
for each row execute procedure public.set_updated_at();

drop trigger if exists trg_testimonials_updated_at on public.testimonials;
create trigger trg_testimonials_updated_at
before update on public.testimonials
for each row execute procedure public.set_updated_at();

drop trigger if exists trg_before_after_cases_updated_at on public.before_after_cases;
create trigger trg_before_after_cases_updated_at
before update on public.before_after_cases
for each row execute procedure public.set_updated_at();

drop trigger if exists trg_site_settings_updated_at on public.site_settings;
create trigger trg_site_settings_updated_at
before update on public.site_settings
for each row execute procedure public.set_updated_at();

alter table public.consultations enable row level security;
alter table public.treatments enable row level security;
alter table public.testimonials enable row level security;
alter table public.before_after_cases enable row level security;
alter table public.site_settings enable row level security;

drop policy if exists "public can insert consultations" on public.consultations;
create policy "public can insert consultations"
on public.consultations
for insert
to anon, authenticated
with check (true);

drop policy if exists "public can read active treatments" on public.treatments;
create policy "public can read active treatments"
on public.treatments
for select
to anon, authenticated
using (is_active = true);

drop policy if exists "public can read featured testimonials" on public.testimonials;
create policy "public can read featured testimonials"
on public.testimonials
for select
to anon, authenticated
using (is_featured = true);

drop policy if exists "public can read published cases" on public.before_after_cases;
create policy "public can read published cases"
on public.before_after_cases
for select
to anon, authenticated
using (is_published = true);

drop policy if exists "public can read active site settings" on public.site_settings;
create policy "public can read active site settings"
on public.site_settings
for select
to anon, authenticated
using (is_active = true);

insert into public.treatments (slug, title, short_description, category, display_order, is_active)
values
  ('dark-circles', 'Dark Circles', 'Cause-based pathways for under-eye darkness and tired appearance.', 'facial', 1, true),
  ('acne', 'Acne', 'Structured care for active acne and post-inflammatory skin changes.', 'facial', 2, true),
  ('puffy-baggy-eyes', 'Puffy / Baggy Eyes', 'Plans for under-eye bags and heavy or tired eyelids.', 'facial', 3, true)
on conflict (slug) do update set
  title = excluded.title,
  short_description = excluded.short_description,
  category = excluded.category,
  display_order = excluded.display_order,
  is_active = excluded.is_active,
  updated_at = now();

insert into public.testimonials (patient_name, treatment_type, testimonial, rating, display_order, is_featured)
values
  ('Anika R.', 'Anti-Ageing Skin Care', 'The results were subtle but transformative. My skin looks healthier, brighter, and still completely natural.', 5, 1, true),
  ('Meera S.', 'Acne', 'Dr. Goel understood my concerns in detail. My breakouts reduced and skin clarity improved significantly.', 5, 2, true),
  ('Priya K.', 'Dark Circles', 'From consultation to follow-up, the care was warm and meticulous. I look fresh and well-rested without looking overdone.', 5, 3, true)
on conflict do nothing;

insert into public.before_after_cases
  (title, category, description, before_image_url, after_image_url, recovery_note, display_order, is_published)
values
  ('Dark Circles', 'facial', 'Softer under-eye shadowing with a more rested, natural appearance.', null, null, 'Discussed in consultation', 1, true),
  ('Puffy / Baggy Eyes', 'facial', 'Reduced under-eye fullness with improved lid contour and balance.', null, null, 'Discussed in consultation', 2, true),
  ('Acne', 'facial', 'Clearer surface with calmer breakouts and improved overall skin clarity.', null, null, 'Discussed in consultation', 3, true)
on conflict do nothing;

insert into public.site_settings (section_key, title, subtitle, description, content_json, is_active)
values
  (
    'home_hero',
    'Luxury medical aesthetics with an editorial calm',
    'Private Aesthetic Medicine',
    'AUREA blends advanced clinical care with a warm, premium experience designed around subtle, natural-looking outcomes and patient trust.',
    '{"primary_cta":{"label":"Book Consultation","href":"/contact"},"secondary_cta":{"label":"Explore Treatments","href":"/service#explore-all-treatments-grid"}}'::jsonb,
    true
  ),
  (
    'brand_story',
    'Where advanced care meets timeless refinement',
    'Brand Story',
    'A deeply personalized treatment journey led by trust, safety, and clinical precision.',
    '{}'::jsonb,
    true
  )
on conflict (section_key) do update set
  title = excluded.title,
  subtitle = excluded.subtitle,
  description = excluded.description,
  content_json = excluded.content_json,
  is_active = excluded.is_active,
  updated_at = now();
