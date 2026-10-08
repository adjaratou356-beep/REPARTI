// ============================================================================
//  RÉPARTI — configuration du compte et de la synchronisation
//  Remplace les deux textes entre guillemets par les valeurs de ton projet
//  Supabase (Project Settings → API). Garde bien les guillemets.
//  ⚠️ Ne mets JAMAIS ici la clé « service_role » : seulement la clé « anon public ».
// ============================================================================
window.REPARTI_CONFIG = {
  supabaseUrl: "COLLE_ICI_TON_PROJECT_URL",
  supabaseAnonKey: "COLLE_ICI_TA_CLE_ANON_PUBLIC",

  // Connexion par numéro de téléphone (SMS) : laisse false tant que tu n'as pas
  // configuré un fournisseur SMS dans Supabase (payant). L'e-mail marche sans ça.
  phoneLogin: false
};
