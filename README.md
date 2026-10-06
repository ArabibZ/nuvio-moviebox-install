<div align="center">
  <img src="https://raw.githubusercontent.com/ArabibZ/nuvio-providers/master/assets/collection-banner.svg" alt="Nuvio Providers — movie cards and playback on a phone" width="100%" />
  <p><strong>Community-maintained native providers for Nuvio.</strong><br />MovieBox is currently available. Additional providers will be listed after verification.</p>
  <p>
    <img src="https://img.shields.io/badge/Nuvio-native-637f77?style=flat-square" alt="Native Nuvio providers" />
    <img src="https://img.shields.io/badge/status-public_beta-b58a53?style=flat-square" alt="Public beta" />
    <img src="https://img.shields.io/badge/current_provider-MovieBox-424e50?style=flat-square" alt="MovieBox" />
  </p>
  <p><a href="#install">Install</a> · <a href="#the-collection">Providers</a> · <a href="#choose-your-mode">Settings</a> · <a href="#feedback">Feedback</a></p>
</div>

---

## Install

In **Nuvio → Plugins**, add this repository URL:

```text
https://raw.githubusercontent.com/ArabibZ/nuvio-providers/master/manifest.json
```

Enable plugins if needed, then open **MovieBox** settings. Start with Fast,
Focused audio, your preferred language and two concurrent requests. The native
contract has been reviewed against **Nuvio 0.5.6-beta**.

## The collection

| Provider | Version | Media | Status |
|:--|:--|:--|:--|
| **MovieBox** | 0.8.1 | Movies | Beta · configurable audio, source quality and subtitles |

Future providers will be listed here when implemented and checked. MovieBox does
not currently support series. Availability and audio depend on the upstream source.

## Choose your mode

| | Fast | Full |
|:--|:--|:--|
| Audio | Selected language, with an explicit optional fallback | All verified available audio |
| Subtitles | None | All by default; preferred-only or off can be selected |
| Best fit | Get the audio you want with less work | Browse the available editions and captions |

**Hindi and Bengali originals:** choose Hindi, fallback Bengali, and turn on
original-language fallback priority. Other users can choose their own language pair.
Keep **verified shortcuts** and **Quick start** on. Older saved All-audio Fast
settings remain All until changed to Focused.

**Quality:** preferences select available sources without an extra lookup. An
adaptive 480p/720p/1080p link contains multiple advertised tracks; choose the playback
track in the player. Selecting 720p here does not force every adaptive stream to 720p.

## How it runs

The provider runs on your device. Static verified identity data ships with the
cached plugin; there is no collection backend, account or video proxy. MovieBox and
TMDB requests still occur. Missing, stale or changed identities use native discovery.
Index coverage is limited, authentication remains device-side, and no instant
result time is promised.

This repository contains the install files and artwork. Development lives in the
private [source repository](https://github.com/ArabibZ/nuvio-provider-source).
`providers/moviebox.js` is retained as a compatibility copy; `plugins/` is the
canonical layout for the collection.

## Feedback

[Open an issue](https://github.com/ArabibZ/nuvio-providers/issues) with the movie/year,
Nuvio and provider versions, settings, and safe timing line. Please omit cookies,
API keys, tokens and full signed stream URLs.

Automated checks and live API extraction are verified. Broader device and actual
video-playback testing continue, so the provider remains a **public beta**.

---

Upstream authors and protocol provenance
are preserved in [ATTRIBUTION.md](https://github.com/ArabibZ/nuvio-providers/blob/master/ATTRIBUTION.md).
This collection is maintained independently and is not an official Nuvio release.
