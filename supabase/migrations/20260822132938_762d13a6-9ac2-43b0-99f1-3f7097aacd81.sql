REVOKE ALL ON public.leads FROM anon, authenticated;

DROP POLICY IF EXISTS "No public access to leads" ON public.leads;

CREATE POLICY "Deny all client select on leads" ON public.leads
  FOR SELECT TO anon, authenticated USING (false);

CREATE POLICY "Deny all client insert on leads" ON public.leads
  FOR INSERT TO anon, authenticated WITH CHECK (false);

CREATE POLICY "Deny all client update on leads" ON public.leads
  FOR UPDATE TO anon, authenticated USING (false) WITH CHECK (false);

CREATE POLICY "Deny all client delete on leads" ON public.leads
  FOR DELETE TO anon, authenticated USING (false);

GRANT ALL ON public.leads TO service_role;