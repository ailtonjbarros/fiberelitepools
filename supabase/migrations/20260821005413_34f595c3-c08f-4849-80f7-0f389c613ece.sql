CREATE TABLE public.leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz NOT NULL DEFAULT now(),
  first_name text NOT NULL,
  last_name text NOT NULL,
  phone text NOT NULL,
  email text NOT NULL,
  city text,
  zip_code text,
  property_type text,
  desired_pool_size text,
  project_timeline text,
  estimated_budget text,
  message text,
  source text NOT NULL DEFAULT 'website',
  status text NOT NULL DEFAULT 'new'
);

GRANT ALL ON public.leads TO service_role;

ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "No public access to leads" ON public.leads FOR SELECT TO authenticated USING (false);

CREATE INDEX leads_created_at_idx ON public.leads (created_at DESC);