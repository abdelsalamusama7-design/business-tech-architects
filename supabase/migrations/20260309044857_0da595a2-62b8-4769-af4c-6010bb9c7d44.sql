-- Allow admin read access to consultations (no auth for now)
CREATE POLICY "Allow read access to consultations"
  ON public.consultations FOR SELECT
  USING (true);

-- Drop the old restrictive policy
DROP POLICY IF EXISTS "No public read access" ON public.consultations;