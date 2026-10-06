// MovieBox Beta. Protocol adapted from NuvioTeam / D3adlyRocket All-in-One-Nuvio, revision 3f09a6ff. See UPSTREAM-MOVIEBOX.md. Generated; do not edit.
"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  try {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  } catch (e) {
    throw mod = 0, e;
  }
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// private-protocol:protocol
var require_protocol = __commonJS({
  "private-protocol:protocol"(exports, module2) {
    module2.exports = function createProtocol2(fetch2, tmdbKey) {
      var module3 = { exports: {} };
      var console2 = { log() {
      }, error() {
      }, warn() {
      } };
      var __create2 = Object.create;
      var __defProp2 = Object.defineProperty;
      var __defProps = Object.defineProperties;
      var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
      var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
      var __getOwnPropNames2 = Object.getOwnPropertyNames;
      var __getOwnPropSymbols = Object.getOwnPropertySymbols;
      var __getProtoOf2 = Object.getPrototypeOf;
      var __hasOwnProp2 = Object.prototype.hasOwnProperty;
      var __propIsEnum = Object.prototype.propertyIsEnumerable;
      var __defNormalProp = (obj, key, value) => key in obj ? __defProp2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
      var __spreadValues = (a, b) => {
        for (var prop in b || (b = {}))
          if (__hasOwnProp2.call(b, prop))
            __defNormalProp(a, prop, b[prop]);
        if (__getOwnPropSymbols)
          for (var prop of __getOwnPropSymbols(b)) {
            if (__propIsEnum.call(b, prop))
              __defNormalProp(a, prop, b[prop]);
          }
        return a;
      };
      var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
      var __copyProps2 = (to, from, except, desc) => {
        if (from && typeof from === "object" || typeof from === "function") {
          for (let key of __getOwnPropNames2(from))
            if (!__hasOwnProp2.call(to, key) && key !== except)
              __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
        }
        return to;
      };
      var __toESM2 = (mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps2(
        // If the importer is in node compatibility mode or this is not an ESM
        // file that has been converted to a CommonJS file using a Babel-
        // compatible transform (i.e. "__esModule" has not been set), then set
        // "default" to the CommonJS "module.exports" for node compatibility.
        isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
        mod
      ));
      var __async = (__this, __arguments, generator) => {
        return new Promise((resolve, reject) => {
          var fulfilled = (value) => {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          };
          var rejected = (value) => {
            try {
              step(generator.throw(value));
            } catch (e) {
              reject(e);
            }
          };
          var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
          step((generator = generator.apply(__this, __arguments)).next());
        });
      };
      var API_BASE = "https://api3.aoneroom.com";
      var PLAYER_BASE = "https://moviebox.ph";
      var PLAYER_USER_AGENT = "Mozilla/5.0 (Linux; Android 15; Pixel 9) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/154.0.0.0 Mobile Safari/537.36";
      var HOST_POOL = [
        "https://api6.aoneroom.com",
        "https://api5.aoneroom.com",
        "https://api4.aoneroom.com",
        "https://api4sg.aoneroom.com",
        "https://api3.aoneroom.com"
      ];
      var KEY_B64_DEFAULT = "NzZpUmwwN3MweFNOOWpxbUVXQXQ3OUVCSlp1bElRSXNWNjRGWnIyTw==";
      var KEY_B64_ALT = "WHFuMm5uTzQxL0w5Mm8xaXVYaFNMSFRiWHZZNFo1Wlo2Mm04bVNMQQ==";
      var TMDB_API_KEY2 = tmdbKey;
      var TMDB_BASE_URL = "https://api.themoviedb.org/3";
      var BRAND_MODELS = {
        "Samsung": ["SM-S918B", "SM-A528B", "SM-M336B"],
        "Xiaomi": ["2201117TI", "M2012K11AI", "Redmi Note 11"],
        "OnePlus": ["LE2111", "CPH2449", "IN2023"],
        "Google": ["Pixel 6", "Pixel 7", "Pixel 8"],
        "Realme": ["RMX3085", "RMX3360", "RMX3551"]
      };
      var TOKEN_URL = "https://apig.inmoviebox.com/wefeed-mobile-bff/tab/ranking-list?tabId=0&categoryType=4516404531735022304&page=1&perPage=1";
      var PACKAGE_INFO = {
        package_name: "com.community.mbox.in",
        version_name: "4.0.03.0920.03",
        version_code: 50020130
      };
      var import_crypto_js = __toESM2(require("crypto-js"));
      var SECRET_KEY_DEFAULT = import_crypto_js.default.enc.Base64.parse(
        import_crypto_js.default.enc.Base64.parse(KEY_B64_DEFAULT).toString(import_crypto_js.default.enc.Utf8)
      );
      var SECRET_KEY_ALT = import_crypto_js.default.enc.Base64.parse(
        import_crypto_js.default.enc.Base64.parse(KEY_B64_ALT).toString(import_crypto_js.default.enc.Utf8)
      );
      var deviceId = "";
      var selectedBrand = "";
      var selectedModel = "";
      var bearerToken = null;
      function decodeJwtExpiry(token) {
        try {
          const parts = token.split(".");
          if (parts.length < 2)
            return 0;
          let base64 = parts[1].replace(/-/g, "+").replace(/_/g, "/");
          while (base64.length % 4) {
            base64 += "=";
          }
          const parsed = import_crypto_js.default.enc.Base64.parse(base64).toString(import_crypto_js.default.enc.Utf8);
          const json = JSON.parse(parsed);
          return json.exp || 0;
        } catch (e) {
          return 0;
        }
      }
      function isTokenValid(token) {
        if (!token)
          return false;
        const exp = decodeJwtExpiry(token);
        return exp > Date.now() / 1e3 + 3600;
      }
      function getCachedTokenRaw() {
        return __async(this, null, function* () {
          if (isTokenValid(bearerToken))
            return bearerToken;
          console2.log("[MovieBox] Fetching fresh anonymous token...");
          const url = TOKEN_URL;
          const res = yield movieBoxRequest("GET", url, null, {}, true);
          if (res && res.headers) {
            const xUser = res.headers.get("x-user");
            if (xUser) {
              try {
                const xUserJson = JSON.parse(xUser);
                const token = xUserJson.token;
                if (token && isTokenValid(token)) {
                  bearerToken = token;
                  return token;
                }
              } catch (e) {
                console2.error("[MovieBox] Failed to parse x-user header for token", e);
              }
            }
          }
          return bearerToken || "";
        });
      }
      function initializeSession() {
        if (!deviceId) {
          let chars = "0123456789abcdef";
          for (let i = 0; i < 32; i++) {
            deviceId += chars[Math.floor(Math.random() * 16)];
          }
          const brands = Object.keys(BRAND_MODELS);
          selectedBrand = brands[Math.floor(Math.random() * brands.length)];
          const models = BRAND_MODELS[selectedBrand];
          selectedModel = models[Math.floor(Math.random() * models.length)];
        }
      }
      function md5(input) {
        return import_crypto_js.default.MD5(input).toString(import_crypto_js.default.enc.Hex);
      }
      function hmacMd5(key, data) {
        return import_crypto_js.default.HmacMD5(data, key).toString(import_crypto_js.default.enc.Base64);
      }
      function generateXClientToken(timestamp) {
        const ts = (timestamp || Date.now()).toString();
        const reversed = ts.split("").reverse().join("");
        const hash = md5(reversed);
        return `${ts},${hash}`;
      }
      function buildCanonicalString(method, accept, contentType, url, body, timestamp) {
        let path = "";
        let query = "";
        try {
          const urlObj = new URL(url);
          path = urlObj.pathname;
          const params = Array.from(urlObj.searchParams.keys()).sort();
          if (params.length > 0) {
            query = params.map((key) => {
              const values = urlObj.searchParams.getAll(key);
              return values.map((val) => `${key}=${val}`).join("&");
            }).join("&");
          }
        } catch (e) {
          if (url.includes("?")) {
            const parts = url.split("?");
            path = parts[0].replace(/https?:\/\/[^\/]+/, "");
            const qParts = parts[1].split("&").sort();
            query = qParts.join("&");
          } else {
            path = url.replace(/https?:\/\/[^\/]+/, "");
          }
        }
        const canonicalUrl = query ? `${path}?${query}` : path;
        let bodyHash = "";
        let bodyLength = "";
        if (body) {
          const bodyWords = import_crypto_js.default.enc.Utf8.parse(body);
          const totalBytes = bodyWords.sigBytes;
          bodyHash = md5(bodyWords);
          bodyLength = totalBytes.toString();
        }
        return `${method.toUpperCase()}
${accept || ""}
${contentType || ""}
${bodyLength}
${timestamp}
${bodyHash}
` + canonicalUrl;
      }
      function generateXTrSignature(method, accept, contentType, url, body, useAltKey = false, customTimestamp = null) {
        const timestamp = customTimestamp || Date.now();
        const canonical = buildCanonicalString(method, accept, contentType, url, body, timestamp);
        const secret = useAltKey ? SECRET_KEY_ALT : SECRET_KEY_DEFAULT;
        const signatureB64 = hmacMd5(secret, canonical);
        return `${timestamp}|2|${signatureB64}`;
      }
      function movieBoxRequest(_0, _1) {
        return __async(this, arguments, function* (method, url, body = null, customHeaders = {}, isTokenFetch = false) {
          initializeSession();
          const token = isTokenFetch ? null : yield getCachedToken();
          const timestamp = Date.now();
          const xClientToken = generateXClientToken(timestamp);
          const headerContentType = customHeaders["Content-Type"] || (body ? "application/json; charset=utf-8" : "application/json");
          const accept = customHeaders["Accept"] || "application/json";
          const xTrSignature = generateXTrSignature(method, accept, headerContentType, url, body, false, timestamp);
          const xClientInfo = JSON.stringify(__spreadProps(__spreadValues({}, PACKAGE_INFO), {
            os: "android",
            os_version: "14",
            device_id: deviceId,
            install_store: "official",
            gaid: "1b2212c1-dadf-43c3-a0c8-bd6ce48ae22d",
            brand: selectedBrand.toLowerCase(),
            model: selectedModel,
            system_language: "en",
            net: "NETWORK_WIFI",
            region: "IN",
            timezone: "Asia/Calcutta",
            sp_code: ""
          }));
          const headers = __spreadValues({
            "Accept": accept,
            "Content-Type": headerContentType,
            "x-client-token": xClientToken,
            "x-tr-signature": xTrSignature,
            "User-Agent": `${PACKAGE_INFO.package_name}/${PACKAGE_INFO.version_code} (Linux; U; Android 14; en_IN; ${selectedModel}; Build/UD1A.230803.041; Cronet/145.0.7582.0)`,
            "x-client-info": xClientInfo,
            "x-client-status": "0"
          }, customHeaders);
          if (!isTokenFetch) {
            if (token) {
              headers["Authorization"] = `Bearer ${token}`;
            }
          }
          const options = {
            method,
            headers
          };
          if (body) {
            options.body = body;
          }
          let originalUrl;
          try {
            originalUrl = new URL(url);
          } catch (_) {
            return null;
          }
          const apiHosts = new Set(HOST_POOL.map((host) => new URL(host).host));
          const hosts = apiHosts.has(originalUrl.host) ? [originalUrl.host, ...HOST_POOL.map((host) => new URL(host).host).filter((host) => host !== originalUrl.host)] : [originalUrl.host];
          const maxAttempts = Math.min(3, hosts.length);
          for (let attempt = 0; attempt < maxAttempts; attempt++) {
            try {
              const requestUrl = new URL(originalUrl.toString());
              requestUrl.host = hosts[attempt];
              const res = yield fetch2(requestUrl.toString(), options);
              if (!res.ok) {
                if ((res.status === 403 || res.status >= 500) && attempt + 1 < maxAttempts) {
                  continue;
                }
                return null;
              }
              const text2 = yield res.text();
              let parsed = null;
              try {
                parsed = JSON.parse(text2);
              } catch (e) {
                parsed = text2;
              }
              if (res.headers) {
                const xUser = res.headers.get("x-user");
                if (xUser) {
                  try {
                    const xUserJson = JSON.parse(xUser);
                    const token2 = xUserJson.token;
                    if (token2 && isTokenValid(token2)) {
                      bearerToken = token2;
                    }
                  } catch (e) {
                  }
                }
              }
              return {
                data: parsed,
                headers: res.headers
              };
            } catch (err) {
              if (attempt + 1 === maxAttempts) {
                console2.error("[MovieBox Request Error]", err.message);
                return null;
              }
            }
          }
          return null;
        });
      }
      function fetchTmdbDetails(tmdbId, mediaType) {
        return __async(this, null, function* () {
          var _a;
          try {
            const url = `${TMDB_BASE_URL}/${mediaType}/${tmdbId}?api_key=${TMDB_API_KEY2}&append_to_response=external_ids`;
            const res = yield fetch2(url, {
              headers: {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36",
                "Accept": "application/json",
                "Connection": "keep-alive"
              }
            });
            const data = yield res.json();
            return {
              title: mediaType === "movie" ? data.title || data.original_title : data.name || data.original_name,
              year: (data.release_date || data.first_air_date || "").substring(0, 4),
              imdbId: (_a = data.external_ids) == null ? void 0 : _a.imdb_id,
              originalTitle: data.original_title || data.original_name
            };
          } catch (e) {
            console2.error("[MovieBox TMDB Error]", e.message);
            return null;
          }
        });
      }
      function normalizeTitle(s) {
        if (!s)
          return "";
        return String(s).replace(/\[[^\]]*\]/g, " ").replace(/\([^)]*\)/g, " ").replace(/\b(dub|dubbed|hd|4k|hindi|tamil|telugu|dual audio)\b/gi, " ").trim().toLowerCase().replace(/:/g, " ").replace(/[^\w\s]/g, " ").replace(/\s+/g, " ");
      }
      function parseQualityNumber(value) {
        const match = String(value || "").match(/(\d{3,4})/);
        return match ? parseInt(match[1], 10) : 0;
      }
      function getFormatType(url) {
        const u = String(url || "").toLowerCase();
        if (u.includes(".mpd"))
          return "DASH";
        if (u.includes(".m3u8"))
          return "HLS";
        if (u.includes(".mp4"))
          return "MP4";
        if (u.includes(".mkv"))
          return "MKV";
        return "VIDEO";
      }
      function extractPolicyResource(signCookie) {
        var _a, _b;
        if (!signCookie || typeof signCookie !== "string")
          return null;
        const edgeMatch = signCookie.match(/Edge-Cache-Cookie=urlprefix=([^:;\s]+)/);
        if (edgeMatch) {
          try {
            let std = edgeMatch[1].replace(/_/g, "/").replace(/-/g, "+");
            const rem = (4 - std.length % 4) % 4;
            if (rem > 0)
              std += "=".repeat(rem);
            const decoded = import_crypto_js.default.enc.Base64.parse(std).toString(import_crypto_js.default.enc.Utf8).replace(/\/+$/, "");
            if (decoded)
              return `${decoded}/index.mpd`;
          } catch (_) {
          }
        }
        const cfMatch = signCookie.match(/CloudFront-Policy=([^;]+)/);
        if (cfMatch) {
          try {
            const policyRaw = cfMatch[1];
            let cfB64 = policyRaw.replace(/-/g, "+").replace(/~/g, "/").replace(/_/g, "=");
            const rem = cfB64.length % 4;
            if (rem > 0)
              cfB64 += "=".repeat(rem);
            let decodedJson = null;
            try {
              decodedJson = import_crypto_js.default.enc.Base64.parse(cfB64).toString(import_crypto_js.default.enc.Utf8);
            } catch (_) {
              let stdB64 = policyRaw.replace(/-/g, "+").replace(/_/g, "/");
              const rem2 = stdB64.length % 4;
              if (rem2 > 0)
                stdB64 += "=".repeat(rem2);
              decodedJson = import_crypto_js.default.enc.Base64.parse(stdB64).toString(import_crypto_js.default.enc.Utf8);
            }
            if (decodedJson) {
              const root = JSON.parse(decodedJson);
              const resource = (_b = (_a = root == null ? void 0 : root.Statement) == null ? void 0 : _a[0]) == null ? void 0 : _b.Resource;
              if (resource && typeof resource === "string") {
                const trimmed = resource.replace(/[\*\/]+$/, "");
                return trimmed.toLowerCase().endsWith(".mpd") ? trimmed : `${trimmed}/index.mpd`;
              }
            }
          } catch (_) {
          }
        }
        return null;
      }
      function getStreams2(tmdbId, mediaType, seasonNum = 1, episodeNum = 1) {
        return __async(this, null, function* () {
          console2.log(`[MovieBox] Querying streams for TMDB: ${tmdbId}, Type: ${mediaType}`);
          const details = yield fetchTmdbDetails(tmdbId, mediaType);
          if (!details)
            return [];
          let subjects = yield searchMovieBox(details.title);
          let bestMatch = findBestMatch(subjects, details.title, details.year, mediaType);
          if (!bestMatch && details.originalTitle && details.originalTitle !== details.title) {
            subjects = yield searchMovieBox(details.originalTitle);
            bestMatch = findBestMatch(subjects, details.originalTitle, details.year, mediaType);
          }
          if (bestMatch) {
            const s = mediaType === "tv" ? seasonNum : 0;
            const e = mediaType === "tv" ? episodeNum : 0;
            return yield getStreamLinks(bestMatch.subjectId, s, e, details.title, mediaType);
          }
          console2.log(`[MovieBox] No matching content found for: ${details.title}`);
          return [];
        });
      }
      function searchMovieBox(query) {
        return __async(this, null, function* () {
          const url = `${API_BASE}/wefeed-mobile-bff/subject-api/search/v2`;
          const body = JSON.stringify({ page: 1, perPage: 20, keyword: query, restrictKid: 1 });
          const response = yield movieBoxRequest("POST", url, body);
          if (response && response.data && response.data.data && response.data.data.results) {
            let allSubjects = [];
            response.data.data.results.forEach((group) => {
              if (group.subjects) {
                allSubjects = allSubjects.concat(group.subjects);
              }
            });
            return allSubjects;
          }
          return [];
        });
      }
      function findBestMatch(subjects, tmdbTitle, tmdbYear, mediaType) {
        const normTmdbTitle = normalizeTitle(tmdbTitle);
        const targetType = mediaType === "movie" ? 1 : 2;
        let bestMatch = null;
        let bestScore = 0;
        for (const subject of subjects) {
          if (subject.subjectType !== targetType)
            continue;
          const title = subject.title;
          const normTitle = normalizeTitle(title);
          const year = subject.year || (subject.releaseDate ? subject.releaseDate.substring(0, 4) : null);
          let score = 0;
          if (normTitle === normTmdbTitle)
            score += 50;
          else if (normTitle.includes(normTmdbTitle) || normTmdbTitle.includes(normTitle))
            score += 15;
          if (tmdbYear && year && tmdbYear == year)
            score += 35;
          if (score > bestScore) {
            bestScore = score;
            bestMatch = subject;
          }
        }
        if (bestScore >= 40)
          return bestMatch;
        return null;
      }
      function getPlaybackPage(subjectData, subjectId) {
        const candidates = [subjectData.detailPath, subjectData.detail_path, subjectData.path, subjectData.slug];
        let detailPath = candidates.find((value) => typeof value === "string" && value.trim());
        let webBase = PLAYER_BASE;
        for (const value of [subjectData.detailDomain, subjectData.webDomain, subjectData.webUrl, subjectData.detailUrl, subjectData.shareUrl]) {
          if (typeof value !== "string")
            continue;
          try {
            const parsed = new URL(value.startsWith("http") ? value : `https://${value}`);
            if (!parsed.hostname.endsWith("aoneroom.com"))
              webBase = parsed.origin;
            if (!detailPath && parsed.pathname && parsed.pathname !== "/")
              detailPath = parsed.pathname;
            break;
          } catch (e) {
          }
        }
        if (!detailPath)
          return { webBase, referer: `${webBase}/` };
        detailPath = detailPath.replace(/^\/+/, "").replace(/^movies\//, "");
        const pageUrl = new URL(`/movies/${detailPath}`, `${webBase}/`);
        pageUrl.searchParams.set("id", subjectId);
        pageUrl.searchParams.set("type", "/movie/detail");
        pageUrl.searchParams.set("detailSe", "");
        pageUrl.searchParams.set("detailEp", "");
        pageUrl.searchParams.set("lang", "en");
        return { webBase, detailPath, referer: pageUrl.toString() };
      }
      function collectStreams(playData) {
        var _a, _b;
        const streams = Array.isArray(playData == null ? void 0 : playData.streams) ? [...playData.streams] : [];
        for (const [key, format] of [["netDash", "DASH"], ["netHls", "HLS"]]) {
          const value = (_b = playData == null ? void 0 : playData[key]) != null ? _b : (_a = playData == null ? void 0 : playData.data) == null ? void 0 : _a[key];
          const values = Array.isArray(value) ? value : value ? [value] : [];
          for (const item of values) {
            if (typeof item === "string")
              streams.push({ url: item, format });
            else if (item && typeof item === "object") {
              if (item.url || item.playUrl || item.resourceLink || item.streamUrl)
                streams.push(__spreadProps(__spreadValues({}, item), { format: item.format || format }));
              else
                for (const [resolution, url] of Object.entries(item)) {
                  if (typeof url === "string" && /^https?:\/\//i.test(url))
                    streams.push({ url, resolution, format });
                  else if (url && typeof url === "object")
                    streams.push(__spreadProps(__spreadValues({}, url), { resolution: url.resolution || resolution, format: url.format || format }));
                }
            }
          }
        }
        const seen = /* @__PURE__ */ new Set();
        return streams.filter((stream) => {
          const key = (stream == null ? void 0 : stream.url) || (stream == null ? void 0 : stream.playUrl) || (stream == null ? void 0 : stream.resourceLink) || (stream == null ? void 0 : stream.streamUrl);
          if (!key || seen.has(key))
            return false;
          seen.add(key);
          return true;
        });
      }
      function getAudioLabel(stream, fallbackLanguage) {
        var _a, _b;
        const rawLanguage = [stream.languageName, stream.lanName, stream.language, stream.lan, fallbackLanguage].find((value) => typeof value === "string" && value.trim()) || "Unknown";
        let language = rawLanguage.replace(/\bdub\b/gi, " ").replace(/\baudio\b/gi, " ").replace(/[_-]+/g, " ").replace(/\s+/g, " ").trim();
        const languageNames = {
          ar: "Arabic",
          bn: "Bengali",
          de: "German",
          en: "English",
          es: "Spanish",
          fr: "French",
          hi: "Hindi",
          id: "Indonesian",
          it: "Italian",
          ja: "Japanese",
          ko: "Korean",
          ml: "Malayalam",
          mr: "Marathi",
          pt: "Portuguese",
          ru: "Russian",
          ta: "Tamil",
          te: "Telugu",
          th: "Thai",
          tr: "Turkish",
          ur: "Urdu",
          vi: "Vietnamese",
          zh: "Chinese"
        };
        const languageCode = (_b = (_a = language.match(/^([a-z]{2,3})(?:\s|$)/i)) == null ? void 0 : _a[1]) == null ? void 0 : _b.toLowerCase();
        if (languageCode && languageNames[languageCode]) {
          language = languageNames[languageCode];
        } else if (language) {
          language = language.charAt(0).toUpperCase() + language.slice(1);
        } else {
          language = "Unknown";
        }
        return `${language} Audio`;
      }
      function getStreamLinks(subjectId, season = 0, episode = 0, mediaTitle = "", mediaType = "movie") {
        return __async(this, null, function* () {
          const subjectUrl = `${API_BASE}/wefeed-mobile-bff/subject-api/get?subjectId=${subjectId}`;
          const detailRes = yield movieBoxRequest("GET", subjectUrl);
          if (!detailRes || !detailRes.data || !detailRes.data.data)
            return [];
          const subjectData = detailRes.data.data;
          const playbackPage = getPlaybackPage(subjectData, subjectId);
          const subjectIds = [];
          let originalLang = "Original";
          const dubs = subjectData.dubs;
          if (Array.isArray(dubs)) {
            dubs.forEach((dub) => {
              if (dub.subjectId == subjectId) {
                originalLang = dub.lanName || "Original";
              } else {
                subjectIds.push({ id: dub.subjectId, lang: dub.lanName });
              }
            });
          }
          subjectIds.unshift({ id: subjectId, lang: originalLang });
          const allStreams = [];
          const playbackHeaders = {
            "Origin": playbackPage.webBase,
            "Referer": playbackPage.referer,
            "User-Agent": PLAYER_USER_AGENT,
            "x-request-lang": "en",
            "x-vip-restrict": "0",
            "x-no-high-risk-restrict": "0"
          };
          for (const item of subjectIds) {
            try {
              const playParams = new URLSearchParams({ subjectId: item.id, se: season, ep: episode, streamSignType: "1" });
              if (playbackPage.detailPath)
                playParams.set("detailPath", playbackPage.detailPath);
              playParams.set("supportCodecs[hevc]", "1");
              playParams.set("supportCodecs[h264]", "1");
              const playUrl = `${API_BASE}/wefeed-mobile-bff/subject-api/play-info?${playParams.toString()}`;
              const playRes = yield movieBoxRequest("GET", playUrl, null, playbackHeaders);
              let hasValidStream = false;
              if (playRes && playRes.data && playRes.data.data) {
                const playData = playRes.data.data;
                const streamsList = collectStreams(playData);
                if (Array.isArray(streamsList) && streamsList.length > 0) {
                  for (const stream of streamsList) {
                    const rawStreamUrl = stream.url || stream.playUrl || stream.resourceLink || stream.streamUrl || "";
                    const signCookie = stream.signCookie || null;
                    const policyUrl = extractPolicyResource(signCookie);
                    const finalStreamUrl = policyUrl || rawStreamUrl;
                    if (!finalStreamUrl)
                      continue;
                    if (finalStreamUrl.includes("b164fbfb4347792950bdfbfb563d39d9"))
                      continue;
                    if (finalStreamUrl === rawStreamUrl && rawStreamUrl.includes("/other/2026/09/"))
                      continue;
                    let formatType = getFormatType(finalStreamUrl);
                    if (stream.format) {
                      const declaredFormat = String(stream.format).toUpperCase();
                      formatType = ["DASH", "HLS", "MP4", "MKV"].includes(declaredFormat) ? declaredFormat : getFormatType(finalStreamUrl);
                    }
                    const qualLabel = stream.resolutions || stream.resolution || stream.quality || "Auto";
                    const qualNum = parseQualityNumber(qualLabel);
                    const quality = qualNum ? `${qualNum}p` : "Auto";
                    const audioLabel = getAudioLabel(stream, item.lang);
                    const streamId = stream.id || `${item.id}|${season}|${episode}`;
                    const subtitles = yield fetchSubtitles(item.id, streamId, item.lang);
                    const signHeaderKey = stream.signHeaderKey || stream.sign_header_key || "Cookie";
                    allStreams.push({
                      name: "MovieBox",
                      title: `${mediaTitle}${season > 0 ? ` S${season}E${episode}` : ""} - ${quality} (${audioLabel}) [${formatType}]`,
                      url: finalStreamUrl,
                      quality,
                      headers: __spreadValues(__spreadValues({}, playbackHeaders), signCookie ? { [signHeaderKey]: signCookie } : {}),
                      subtitles,
                      provider: "moviebox"
                    });
                    hasValidStream = true;
                  }
                }
                if (!hasValidStream) {
                  let detectors = playData.resourceDetectors;
                  if (!Array.isArray(detectors)) {
                    detectors = subjectData.resourceDetectors;
                  }
                  if (Array.isArray(detectors)) {
                    for (const detector of detectors) {
                      if (Array.isArray(detector.resolutionList)) {
                        for (const video of detector.resolutionList) {
                          if (!video.resourceLink)
                            continue;
                          const se = video.se != null ? video.se : 0;
                          const ep = video.ep != null ? video.ep : 0;
                          if ((season > 0 || episode > 0) && (se !== season || ep !== episode)) {
                            continue;
                          }
                          const quality = video.resolution ? `${video.resolution}p` : "Auto";
                          const audioLabel = getAudioLabel({}, item.lang);
                          allStreams.push({
                            name: "MovieBox",
                            title: `${mediaTitle}${season > 0 ? ` S${season}E${episode}` : ""} - ${quality} (${audioLabel}) [Fallback]`,
                            url: video.resourceLink,
                            quality,
                            headers: __spreadValues({}, playbackHeaders),
                            provider: "moviebox"
                          });
                        }
                      }
                    }
                  }
                }
              }
            } catch (err) {
              console2.error(`[MovieBox Stream Fetch Error] ID: ${item.id}`, err.message);
            }
          }
          const qualityRank = {
            "2160p": 2160,
            "4k": 2160,
            "1440p": 1440,
            "1080p": 1080,
            "720p": 720,
            "480p": 480,
            "360p": 360,
            "240p": 240,
            "auto": 1
          };
          allStreams.sort((a, b) => {
            var _a, _b;
            const qa = qualityRank[(_a = a.quality) == null ? void 0 : _a.toLowerCase()] || 0;
            const qb = qualityRank[(_b = b.quality) == null ? void 0 : _b.toLowerCase()] || 0;
            return qb - qa;
          });
          return allStreams;
        });
      }
      function fetchSubtitles(subjectId, streamId, langLabel) {
        return __async(this, null, function* () {
          const subtitles = [];
          try {
            const streamCapUrl = `${API_BASE}/wefeed-mobile-bff/subject-api/get-stream-captions?subjectId=${subjectId}&streamId=${streamId}`;
            const capRes = yield movieBoxRequest("GET", streamCapUrl, null);
            if (capRes && capRes.data && capRes.data.data && Array.isArray(capRes.data.data.extCaptions)) {
              capRes.data.data.extCaptions.forEach((cap) => {
                if (cap.url) {
                  subtitles.push({
                    url: cap.url,
                    language: cap.language || cap.lanName || cap.lan || "en",
                    name: `${cap.lanName || cap.language || "Subtitle"} (${langLabel})`,
                    headers: { "Referer": API_BASE }
                  });
                }
              });
            }
          } catch (e) {
          }
          try {
            const extCapUrl = `${API_BASE}/wefeed-mobile-bff/subject-api/get-ext-captions?subjectId=${subjectId}&resourceId=${streamId}&episode=0`;
            const extRes = yield movieBoxRequest("GET", extCapUrl, null);
            if (extRes && extRes.data && extRes.data.data && Array.isArray(extRes.data.data.extCaptions)) {
              extRes.data.data.extCaptions.forEach((cap) => {
                if (cap.url) {
                  subtitles.push({
                    url: cap.url,
                    language: cap.lan || cap.lanName || cap.language || "en",
                    name: `${cap.lanName || cap.lan || "Subtitle"} (${langLabel})`,
                    headers: { "Referer": API_BASE }
                  });
                }
              });
            }
          } catch (e) {
          }
          return subtitles;
        });
      }
      var tokenFlight;
      function getCachedToken() {
        if (isTokenValid(bearerToken)) return Promise.resolve(bearerToken);
        if (!tokenFlight) tokenFlight = getCachedTokenRaw().catch(function() {
          return null;
        });
        return tokenFlight;
      }
      return {
        bootstrap: getCachedToken,
        metadata: fetchTmdbDetails,
        search: searchMovieBox,
        request: movieBoxRequest,
        playback: getPlaybackPage,
        collect: collectStreams,
        policy: extractPolicyResource,
        format: getFormatType,
        audio: getAudioLabel,
        apiBase: API_BASE,
        userAgent: PLAYER_USER_AGENT
      };
    };
  }
});

// src/moviebox/index.ts
var index_exports = {};
__export(index_exports, {
  getStreams: () => getStreams,
  onSettings: () => onSettings
});
module.exports = __toCommonJS(index_exports);
var import_moviebox_protocol = __toESM(require_protocol());

// src/moviebox/scheduler.ts
function limitFetch(fetcher, limit, deadline) {
  let active = 0;
  const pending = [];
  function pump() {
    while (active < limit && pending.length) pending.shift()();
  }
  const fetch2 = (url, options) => new Promise((resolve, reject) => {
    pending.push(() => {
      if (Date.now() >= deadline) {
        reject(new Error("Request budget exhausted"));
        return;
      }
      active++;
      Promise.resolve().then(() => fetcher(url, options)).then(resolve, reject).finally(() => {
        active--;
        pump();
      });
    });
    pump();
  });
  return fetch2;
}
async function mapWorkers(items, limit, work) {
  let next = 0;
  await Promise.all(Array.from({ length: Math.min(limit, items.length) }, async () => {
    while (next < items.length) {
      const item = items[next++];
      try {
        await work(item);
      } catch {
      }
    }
  }));
}

// src/moviebox/provider.ts
var record = (value) => value !== null && typeof value === "object" && !Array.isArray(value) ? value : {};
var text = (value) => typeof value === "string" || typeof value === "number" ? String(value) : "";
var list = (value) => Array.isArray(value) ? value : [];
var payload = (value) => record(record(record(value).data).data);
var http = (value) => /^https?:\/\//i.test(value);
var normalized = (value) => value.normalize("NFKD").toLowerCase().replace(/\[[^\]]*\]/g, " ").replace(/\([^)]*\)/g, " ").replace(/\b(dub|dubbed|hd|4k|hindi|tamil|telugu|dual audio)\b/g, " ").replace(/[^\p{L}\p{N}]+/gu, " ").trim();
function matchMovie(subjects, title, year = "") {
  const wanted = normalized(title);
  if (!wanted) return null;
  const candidates = subjects.filter((item) => Number(item.subjectType) === 1 && text(item.subjectId) && normalized(text(item.title)) === wanted);
  if (year) {
    const exactYear = candidates.filter((item) => text(item.year || text(item.releaseDate).slice(0, 4)) === year);
    if (exactYear.length === 1) return exactYear[0];
    if (exactYear.length > 1) return null;
    const unknownYear = candidates.filter((item) => !text(item.year || text(item.releaseDate).slice(0, 4)));
    return candidates.length === 1 && unknownYear.length === 1 ? unknownYear[0] : null;
  }
  return candidates.length === 1 ? candidates[0] : null;
}
var settingsLayout = [
  { type: "info", label: "MovieBox beta: movies only; app playback verification required." },
  { type: "select", key: "profile", label: "Profile", defaultValue: "full", options: [
    { value: "full", label: "Full: all languages and captions" },
    { value: "fast", label: "Fast: preferred language, no captions" }
  ] },
  { type: "select", key: "language", label: "Preferred language", defaultValue: "original", options: [
    { value: "original", label: "Original" },
    { value: "en", label: "English" },
    { value: "hi", label: "Hindi" },
    { value: "ta", label: "Tamil" },
    { value: "te", label: "Telugu" }
  ] },
  { type: "select", key: "concurrency", label: "Maximum network requests", defaultValue: "3", options: [
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "4", label: "4" }
  ] },
  {
    type: "toggle",
    key: "debug",
    label: "Log timing summary",
    defaultValue: false,
    description: "Counts and timings only; no cookies, tokens or signed URLs."
  }
];
var languageCodes = {
  en: ["en", "english"],
  hi: ["hi", "hin", "hindi"],
  ta: ["ta", "tam", "tamil"],
  te: ["te", "tel", "telugu"]
};
function languageMatches(label, preference) {
  return (languageCodes[preference] || [preference]).includes(label.toLowerCase().trim());
}
function createProvider(makeProtocol, rawFetch) {
  return async function getStreams2(id, type, _season, _episode, rawSettings = {}, tmdbKey = "") {
    if (type !== "movie" || !/^\d+$/.test(String(id)) || !tmdbKey.trim()) return [];
    const settings = {
      profile: rawSettings.profile === "fast" ? "fast" : "full",
      language: text(rawSettings.language) || "original",
      concurrency: Math.min(4, Math.max(2, Number(rawSettings.concurrency) || 3)),
      debug: rawSettings.debug === true
    };
    settings.concurrency = Math.floor(settings.concurrency);
    const start = Date.now();
    const deadline = start + 25e3;
    let requests = 0;
    const protocol = makeProtocol(limitFetch((url, options) => {
      requests++;
      return rawFetch(url, options);
    }, settings.concurrency, deadline), tmdbKey);
    const streams = [];
    try {
      const [details] = await Promise.all([
        protocol.metadata(String(id), "movie").catch(() => null),
        protocol.bootstrap().catch(() => null)
      ]);
      if (!details?.title) return [];
      let match = matchMovie(await protocol.search(details.title), details.title, details.year);
      if (!match && details.originalTitle && details.originalTitle !== details.title) {
        match = matchMovie(await protocol.search(details.originalTitle), details.originalTitle, details.year);
      }
      if (!match) return [];
      const subjectId = text(match.subjectId);
      const detail = payload(await protocol.request("GET", `${protocol.apiBase}/wefeed-mobile-bff/subject-api/get?subjectId=${encodeURIComponent(subjectId)}`));
      if (!Object.keys(detail).length) return [];
      const page = protocol.playback(detail, subjectId);
      const playbackHeaders = {
        Origin: page.webBase,
        Referer: page.referer,
        "User-Agent": protocol.userAgent,
        "x-request-lang": "en",
        "x-vip-restrict": "0",
        "x-no-high-risk-restrict": "0"
      };
      const dubs = list(detail.dubs).map(record);
      const original = { id: subjectId, language: text(dubs.find((dub) => text(dub.subjectId) === subjectId)?.lanName) || "Original" };
      const seenIds = /* @__PURE__ */ new Set([subjectId]);
      let subjects = [original, ...dubs.flatMap((dub) => {
        const dubId = text(dub.subjectId);
        if (!dubId || seenIds.has(dubId)) return [];
        seenIds.add(dubId);
        return [{ id: dubId, language: text(dub.lanName) || "Unknown" }];
      })];
      subjects.sort((a, b) => Number(languageMatches(b.language, settings.language)) - Number(languageMatches(a.language, settings.language)));
      if (settings.profile === "fast") {
        const preferred = settings.language === "original" ? original : subjects.find((item) => languageMatches(item.language, settings.language));
        subjects = preferred && preferred.id !== original.id ? [preferred, original] : [original];
      }
      const captionJobs = [];
      async function play(item) {
        if (Date.now() >= deadline) return;
        const params = new URLSearchParams({ subjectId: item.id, se: "0", ep: "0", streamSignType: "1" });
        if (page.detailPath) params.set("detailPath", page.detailPath);
        params.set("supportCodecs[hevc]", "1");
        params.set("supportCodecs[h264]", "1");
        const data = payload(await protocol.request("GET", `${protocol.apiBase}/wefeed-mobile-bff/subject-api/play-info?${params}`, null, playbackHeaders));
        let accepted = 0;
        for (const raw of protocol.collect(data)) {
          const cookie = text(raw.signCookie);
          const rawUrl = text(raw.url || raw.playUrl || raw.resourceLink || raw.streamUrl);
          const url = protocol.policy(cookie) || rawUrl;
          if (!http(url) || url.includes("b164fbfb4347792950bdfbfb563d39d9") || url === rawUrl && rawUrl.includes("/other/2026/09/")) continue;
          const format = ["DASH", "HLS", "MP4", "MKV"].includes(text(raw.format).toUpperCase()) ? text(raw.format).toUpperCase() : protocol.format(url);
          const label = text(raw.resolutions || raw.resolution || raw.quality);
          const q = /\b4k\b/i.test(label) ? "2160" : label.match(/\d{3,4}/)?.[0];
          const quality = q ? `${q}p` : "Auto";
          const audio = protocol.audio(raw, item.language);
          const stream = {
            name: "MovieBox Beta",
            title: `${details.title} - ${quality} (${audio}) [${format}]`,
            url,
            quality,
            language: item.language,
            provider: "moviebox-beta",
            headers: { ...playbackHeaders, ...cookie ? { [text(raw.signHeaderKey || raw.sign_header_key) || "Cookie"]: cookie } : {} },
            subtitles: []
          };
          streams.push(stream);
          accepted++;
          captionJobs.push({ stream, subject: item.id, resource: text(raw.id) || `${item.id}|0|0`, language: item.language });
        }
        if (!accepted) {
          const detectors = Array.isArray(data.resourceDetectors) ? data.resourceDetectors : detail.resourceDetectors;
          for (const detector of list(detectors).map(record)) for (const raw of list(detector.resolutionList).map(record)) {
            const url = text(raw.resourceLink);
            if (!http(url) || Number(raw.se || 0) !== 0 || Number(raw.ep || 0) !== 0) continue;
            const quality = text(raw.resolution) ? `${text(raw.resolution)}p` : "Auto";
            streams.push({
              name: "MovieBox Beta",
              title: `${details.title} - ${quality} (${item.language}) [Fallback]`,
              url,
              quality,
              language: item.language,
              headers: { ...playbackHeaders },
              subtitles: [],
              provider: "moviebox-beta"
            });
          }
        }
      }
      if (settings.profile === "fast") {
        for (const item of subjects) {
          await play(item).catch(() => {
          });
          if (streams.length) break;
        }
      } else {
        await mapWorkers(subjects, settings.concurrency, play);
      }
      if (settings.profile === "full") {
        let captions2 = function(url) {
          const cached = memo.get(url);
          if (cached) return cached;
          const pending = protocol.request("GET", url, null).then((response) => list(payload(response).extCaptions).map(record).flatMap((cap) => {
            if (!http(text(cap.url))) return [];
            const language = text(cap.language || cap.lanName || cap.lan) || "en";
            return [{ url: text(cap.url), language, name: text(cap.lanName || cap.language || cap.lan) || "Subtitle", headers: { Referer: protocol.apiBase } }];
          })).catch(() => []);
          memo.set(url, pending);
          return pending;
        };
        var captions = captions2;
        const memo = /* @__PURE__ */ new Map();
        await mapWorkers(captionJobs, settings.concurrency, async (job) => {
          if (Date.now() >= deadline) return;
          const subject = encodeURIComponent(job.subject), resource = encodeURIComponent(job.resource);
          const results = await Promise.all([
            captions2(`${protocol.apiBase}/wefeed-mobile-bff/subject-api/get-stream-captions?subjectId=${subject}&streamId=${resource}`),
            captions2(`${protocol.apiBase}/wefeed-mobile-bff/subject-api/get-ext-captions?subjectId=${subject}&resourceId=${resource}&episode=0`)
          ]);
          const unique2 = /* @__PURE__ */ new Map();
          for (const cap of results.flat()) unique2.set(`${cap.url}|${cap.language}`, { ...cap, name: `${cap.name} (${job.language})` });
          job.stream.subtitles = [...unique2.values()];
        });
      }
    } catch {
    } finally {
      if (settings.debug) console.info(`[MovieBox Beta] profile=${settings.profile} requests=${requests} streams=${streams.length} elapsedMs=${Date.now() - start}`);
    }
    const unique = /* @__PURE__ */ new Map();
    for (const stream of streams) {
      const key = JSON.stringify([stream.url, stream.language, stream.quality, Object.entries(stream.headers).sort()]);
      const old = unique.get(key);
      if (!old || old.subtitles.length < stream.subtitles.length) unique.set(key, stream);
    }
    return [...unique.values()].sort((a, b) => Number(languageMatches(b.language, settings.language)) - Number(languageMatches(a.language, settings.language)) || (parseInt(b.quality, 10) || 0) - (parseInt(a.quality, 10) || 0));
  };
}

// src/moviebox/index.ts
var provider = createProvider(import_moviebox_protocol.default, (url, options) => fetch(url, options));
async function getStreams(id, type, season, episode) {
  return provider(
    id,
    type,
    season,
    episode,
    typeof SCRAPER_SETTINGS === "undefined" ? {} : SCRAPER_SETTINGS,
    typeof TMDB_API_KEY === "undefined" ? "" : TMDB_API_KEY
  );
}
function onSettings() {
  return settingsLayout;
}
