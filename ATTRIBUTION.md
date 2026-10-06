# MovieBox protocol attribution and provenance

The generated MovieBox beta uses protocol/signing/policy-normalization helpers from:

- **NuvioTeam** (author in the supplied manifest)
- **D3adlyRocket / All-in-One-Nuvio** distribution
- Revision `3f09a6ff4360498895e622877af7a32212f75038`
- [Original provider](https://github.com/D3adlyRocket/All-in-One-Nuvio/blob/3f09a6ff4360498895e622877af7a32212f75038/providers/moviebox.js)
- SHA256 `874dc691ce22292ffcbc7ef797000c5c2d7b26a1cc9d674503c4830ca17572d4`

This is an adaptation, not an upstream release. The new TypeScript orchestration,
request limiter, settings, matching guards and tests are maintained in this workspace.
The pinned protocol input remains unmodified in `.vendor/moviebox.js`. The build
adapter replaces its embedded TMDB key with Nuvio's runtime key, overlaps token
bootstrap, provides token single-flight, signs after token acquisition, suppresses
raw upstream logs, and stops automatic host switching on HTTP 429. Signing and
policy decoding algorithms are otherwise retained and compared to upstream in tests.
The v0.2.0 build removes replaced legacy orchestration functions and minifies the
bundle, retains native signing, and supports allowlisted api3/api6 selection.
Fast may overlap original play-info with details, with language/metadata guards;
it does not skip anonymous authentication or remove detail/dub validation.
v0.3.0 replaces blanket title-ambiguity rejection with guarded catalog-edition
matching, original-language disambiguation and verified regional-release dates.
Collection adds linked-subject/edition recovery, scoped signed resource fallback,
per-call memoization and a global rate-limit dispatch stop. No film-title exceptions
or embedded TMDB key are introduced; policy/signing algorithms remain upstream.
v0.4.0 separates identity-evidence lookup eligibility from final matching, so
cross-year duplicates cannot suppress verified regional-date recovery. Full-date
evidence may narrow same-year conflicts; remaining ambiguity is still rejected.
It adds movie-ID-validated alternative titles, corroborated duplicate-copy identity,
complete verified audio-edition collection in Fast (no captions) and Full modes,
an explicit focused option, and feature-runtime guards for trailer-sized resources.
These orchestration changes do not change upstream signing or policy decoding.
v0.5.0 combines movie-ID-owned release dates/alternative titles into the initial
TMDB request, reuses validated appended data, unlocks ready audio before a preload
finishes, pipelines caption work and coordinates shared audio across verified roots.
Full retains audio/caption coverage; Focused Fast uses public configurable primary
and fallback languages without implicit unwanted audio. Initial combined metadata
has a larger payload; eliminated round trips are not a universal speed guarantee.
Native signing/policy helpers and actual request bounds remain unchanged.

The upstream bundle includes embedded protocol signing material. The development
repository does not track the private input or generated `plugins/moviebox.js`
(or its legacy `providers/moviebox.js` compatibility copy).
The approved install repository tracks only the generated distribution files.
Do not print protocol contents or mistake build output for credential-free source. The input is fetched
from the pinned public URL with hash verification; no user credentials are supplied.
The local loopback preview intentionally serves the generated provider to the app.
The controlled install export contains the manifest, generated provider and this
attribution document. It includes upstream public protocol material, but excludes
the upstream TMDB key, GitHub credentials, device tokens and local source/vendor files.

No license grant is inferred from an author label or public availability. Preserve
this provenance and check the upstream distribution terms before redistribution.
The maintained source is published privately at
https://github.com/ArabibZ/nuvio-provider-source. Device-install hosting is configured
separately at https://github.com/ArabibZ/nuvio-providers (public generated
install files, approved by the user); private source and CI artifacts require authentication.

## Beta 0.6.0 additions

Original local additions include validated identity hints, source-quality preference
and truthful adaptive ranges, plus balanced caption scheduling. Identity metadata
is derived from TMDB and the upstream MovieBox API, checked against fresh source
records at use. It contains no tokens, keys, media URLs or signed playback headers.
The existing upstream signing/policy attribution and pinned input remain applicable.

## Beta 0.7.0 additions

Recent, feature-verified dispatch metadata lets requested play-info overlap current
source-detail validation. Current owner/title/date/synopsis/audio/page checks remain
required before accepting results. Optional snapshots contain source/audio IDs and
page host/path; they never contain media URLs, signed headers or tokens. Full reuses
already collected linked audio without another root-detail fetch. Randomized live
samples supplement fixed correctness regressions; they are not phone benchmarks.

## Beta 0.8.0 additions

A broader static verified identity index is distributed with the cached plugin.
Lazy JSON decoding reads only the requested entry; no hosted resolver or per-search
CDN lookup is introduced. A blank source language can use only the current owned
audio label, while all previous owner/type/title/date/synopsis/runtime validation
remains. Build-time maintenance reuses a private session, never publishing its
authentication material. These changes preserve upstream signing/policy algorithms.
