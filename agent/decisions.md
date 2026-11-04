## [2026-11-04] Preserve supplied metadata and selected installer
Context: The supplied landing page names typeshifft.com in canonical and social metadata, while CNAME names skillbill.dev.
Decision: Keep the supplied metadata and CNAME, and use the operator-selected installer URL for both the displayed command and script link.
Reason: The task requires the supplied metadata and the operator's installer exception. Deployment host and domain ownership are not established and are outside its scope.
