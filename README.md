# RÉPARTI

**Ton argent. Tes règles. Chaque franc à sa place.**

Application de gestion budgétaire personnelle : rentrées d'argent réparties automatiquement
entre tes lignes budgétaires, comptes (banque, Wave, Orange Money, Apple Pay, espèces…),
épargne et objectifs, dettes, rapports mensuels.

- Installable sur ordinateur, tablette et téléphone (application web progressive).
- Fonctionne hors connexion une fois installée.
- Tes données restent sur ton appareil : exporte une sauvegarde (Paramètres → Exporter)
  pour les transférer d'un appareil à l'autre.

Fichiers : `reparti.html` (l'application), `index.html` (redirection), `manifest.webmanifest`,
`sw.js` (mode hors ligne), `icons/`.

Après une mise à jour de `reparti.html`, change `VERSION` dans `sw.js` pour que les appareils
déjà installés récupèrent la nouvelle version.

## Comptes et synchronisation sur tous les appareils

Connexion par code reçu par e-mail (ou SMS), données synchronisées via Supabase.
Le pas-à-pas complet (Supabase, GitHub, Netlify, installation) est dans `GUIDE-MISE-EN-LIGNE.html`.

- `supabase-reparti.sql` : table `reparti_data` protégée par des règles RLS (chacun ne voit que ses données).
- `config.js` : adresse du projet Supabase et clé `anon public` (jamais la clé `service_role`).
- `netlify.toml` : publication sans compilation, en-têtes de cache pour les mises à jour.
