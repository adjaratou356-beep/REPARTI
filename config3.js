// ============================================================================
//  RÉPARTI — configuration du compte et de la synchronisation
//  ⚠️ Ne mets JAMAIS ici la clé « service_role » : seulement la clé « anon public ».
// ============================================================================
window.REPARTI_CONFIG = {
  supabaseUrl: "https://aguukuyoxwhfwgncyeot.supabase.co",
  supabaseAnonKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFndXVrdXlveHdoZndnbmN5ZW90Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTE0NjA1MDQsImV4cCI6MjEwNzAzNjUwNH0.XYzMARmYtw6TpSM-hvQt5NI6lVpt_9AXyFTcttgiu8A",

  // Connexion par numéro de téléphone (SMS) : laisse false tant qu'aucun
  // fournisseur SMS n'est configuré dans Supabase (payant).
  phoneLogin: false
};
