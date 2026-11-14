# Practice-owned destination preparation

Authority: https://github.com/SteadyEddieSC/donovan-family-dentistry-demo/issues/65

This candidate is preparation only. Neither repository main, the live site,
DNS, mail, registrar, account ownership nor billing is authorized to change.
Cutover ORCH01 retains promotion, production and rollback authority.

## Provenance

- Original imported main: `3ff2ef2ad675480f65d77063f3a1f076712f4660`,
  tree `e41830b1bfff0b2f5fb1d285ddfa4aaf5f47f4f1` (283 ancestors).
- Reviewed dependency commit: `6c47897f314b4aa3becd750bce51d1fb5c2c3abd`,
  tree `f89c3f48d70e561d70ae12f3a9ff5cf13b0776ad`.
  Source PR #78 review #5901773143 accepts source only; never merge that PR
  into the original production-connected main for this transfer.
- Original destination main: `84e7dd5b50467c710b8277ca26e46f8d41b603a8`.
  A merge preserves this README ancestry while retaining the reviewed website
  tree. No history is rewritten; use a history-preserving merge or fast-forward
  after acceptance, never squash/rebase away either ancestry graph.

## Destination automation

The production monitor is manual only until #65 assigns monitoring ownership.
The write-enabled repository keepalive workflow is removed. Neither original
repository workflow is changed. CI, security, CodeQL and the office check,
backup and guarded restore workflows remain present. Office backup/restore
remain guarded to main; this candidate does not relax their safeguards for a
preview test. Security and CodeQL schedules remain repository maintenance.

## Gates before promotion and cutover

Require exact final-head independent review and recipient-context CI/security,
including full-history secrets, dependency audit, CodeQL, build, browser and
accessibility checks. A green original-repository run is not destination proof.

Connect only the existing practice repository to the practice Cloudflare
account with administrator consent. Build a nonproduction Pages preview from
this branch (`npm run build`, output `dist`, root `/`, Node from `.node-version`).
Do not attach custom domains, enable optional inquiry/analytics services,
change DNS/nameservers, or promote main as a shortcut to obtaining a preview.
Preserve existing preview noindex controls and verify them on the deployed URL.

Prove an office-controlled Pages CMS test edit on an isolated preview branch,
matching GitHub commit and deployment, verification, backup retrieval and safe
restore. Local tests alone do not establish office identity or recovery control.
Any rehearsal needed for main-only workflows requires a separately reviewed
nonproduction method; do not dispatch restore against main during preparation.

Refresh the private authoritative DNS comparison, preserving all 25 records
including inherited Microsoft MX and all mail/non-web records. Require practice
registrar/admin/recovery control, explicit production authorization, an attended
cutover plan and tested rollback before any consequential provider change.
Keep the original source, hosting and DNS available throughout acceptance.

Durable validation and handback belong in the destination PR and existing #65.
Keep private DNS exports, credentials, recovery data and patient information
out of this public repository and its artifacts. Incremental spend limit: $0.
