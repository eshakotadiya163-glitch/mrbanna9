
-- Restrict contact_messages INSERT (require non-empty fields, drop always-true policy)
DROP POLICY IF EXISTS "anyone can submit" ON public.contact_messages;
CREATE POLICY "anyone can submit" ON public.contact_messages
  FOR INSERT TO anon, authenticated
  WITH CHECK (length(name) > 0 AND length(email) > 3 AND length(message) > 0);

-- Lock down SECURITY DEFINER trigger fn - only trigger context should call it
REVOKE EXECUTE ON FUNCTION public.handle_new_user() FROM PUBLIC, anon, authenticated;
