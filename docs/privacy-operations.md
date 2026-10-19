# Privacy implementation and owner review

The notice is a statement of the implemented portfolio features, not a legal opinion, liability waiver, or ISO certification. Review its English and Bahasa Melayu wording with an appropriate Malaysian privacy adviser before relying on it as a full compliance assessment. Applicability of Act 709 and its amendments depends on the actual processing and circumstances. Other laws may apply when targeting or monitoring people in other jurisdictions.

## Implemented data flows

| Flow               | Trigger and data                                                                                                                         | Recipient / storage                                          | Control                                                                               |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------------------------------- |
| Hosting            | Every resource request: IP and request/URL metadata can be processed by the host                                                         | Vercel                                                       | Required for delivery; rejecting analytics does not prevent it                        |
| Optional analytics | Page views after explicit permission; provider can also process browser, referrer, timing, approximate-region and connection information | Vercel Web Analytics                                         | Off by default; allow/reject; footer withdrawal; respects GPC / DNT                   |
| Privacy preference | Notice version, allow/deny choice, selection time                                                                                        | Local browser storage only, key portfolio:privacy:v1         | Rechecked on visits; expires after 180 days; clear browser storage to remove          |
| Email enquiries    | Sender address, supplied name, message and attachments if the visitor sends email                                                        | Owner’s Gmail account / Google                               | No website submission; respond and manage follow-up; handle privacy/deletion requests |
| External links     | Visitor chooses to open another service                                                                                                  | Google Drive, GitHub, LinkedIn, product sites and app stores | No embedded content; external policies apply                                          |
| Copy email         | Requested public email address                                                                                                           | Visitor’s clipboard                                          | Write only, triggered by click; existing clipboard is not read                        |

Public assets are self-hosted. No sign-in, payments, uploads, newsletter, advertising pixels or custom analytics events are configured.

## Consent implementation

The automatic @vercel/analytics Nuxt module is intentionally not registered. It would inject the vendor script before consent. plugins/analytics-consent.client.ts uses the same package's Nuxt runtime only after a valid allow choice. Do not add the automatic module or an Analytics component alongside it.

Both a missing/expired/invalid choice and rejected analytics keep the script off. The analytics beforeSend callback checks consent again, permits page views only, drops query strings/fragments, generalises journal slugs, and rejects unknown paths. It does not claim to sanitise server logs or every provider-managed field.

Withdrawal saves denial before changing state, immediately disables queuing, then reloads to unload the SDK and router hooks. This matters because the vendor runtime has no unload API. An already transmitted request is not undone. Cross-tab changes are applied through the storage event. Stored choices are re-read after a back/forward-cache restore.

Only version, choice and timestamp are stored locally: there is no central consent audit database or visitor identifier. Browser blocking of storage is explained to the visitor; analytics remains off unless that visitor explicitly allows it for the current visit. If organisation-level consent audit records are legally required, assess and implement that separately rather than claiming the local preference is a certified consent-management platform.

## Owner actions that code cannot verify

- Confirm Vercel's actual hosting and analytics retention, project options, account access, processing regions/subprocessors and contractual terms. Amend the notice with verified specifics when appropriate. Nothing here promises zero retention or Malaysia-only processing.
- Set and follow an email-retention practice: review enquiries, remove messages no longer needed for follow-up, and handle legitimate access/correction/deletion requests subject to applicable obligations. Code cannot delete mail from the owner's Gmail account.
- Review current Malaysian notice, consent, cross-border transfer, security, retention, data-breach and DPO obligations where applicable. Do not infer a statutory DPO or exemption solely from this portfolio.
- Confirm the privacy contact and keep it monitored. Do not request identity documents by default when answering enquiries.
- Keep hosting/source-account access restricted, review provider incidents, and maintain an incident-response process appropriate to the actual processing.
- Recheck data flows when adding a form, advertising, embeds, newsletter, custom event or new analytics provider. Bump PRIVACY_NOTICE_VERSION and review the notice if consent scope materially changes.
- Do not display ISO/IEC 27001 or ISO/IEC 27701 certification badges unless the relevant certification and scope can be substantiated. A policy page and consent banner do not establish certification.

## Source and verification limits

Direct requests to the official Vercel, JPDP and ISO websites were rejected by the environment's outbound proxy during this task. Vendor runtime behavior was inspected in the installed @vercel/analytics 2.0.1 source. The external policy links on /privacy are references for owner review; current provider retention, international safeguards and legal requirements were not independently verified here.

## Tests

- yarn test:privacy exercises stored-choice validation and URL minimisation.
- yarn test:privacy:browser targets a running production build via PRIVACY_TEST_BASE_URL. Install the Playwright Chromium browser, or set PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH to an existing Chromium executable.
- The browser tests stub the remote analytics script; they verify consent gating, navigation, withdrawal, browser signals and storage failures without sending test visits to Vercel.
- yarn test:smoke also checks the bilingual notice and its public route.
