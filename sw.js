if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return n[e]||(s=new Promise((async s=>{if("document"in self){const n=document.createElement("script");n.src=e,document.head.appendChild(n),n.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!n[e])throw new Error(`Module ${e} didn’t register its module`);return n[e]}))},s=(s,n)=>{Promise.all(s.map(e)).then((e=>n(1===e.length?e[0]:e)))},n={require:Promise.resolve(s)};self.define=(s,a,r)=>{n[s]||(n[s]=Promise.resolve().then((()=>{let n={};const t={uri:location.origin+s.slice(1)};return Promise.all(a.map((s=>{switch(s){case"exports":return n;case"module":return t;default:return e(s)}}))).then((e=>{const s=r(...e);return n.default||(n.default=s),n}))})))}}define("./sw.js",["./workbox-030153e1"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/JDMyyPDkR95HsaAuf1M2a/_buildManifest.js",revision:"JDMyyPDkR95HsaAuf1M2a"},{url:"/_next/static/JDMyyPDkR95HsaAuf1M2a/_ssgManifest.js",revision:"JDMyyPDkR95HsaAuf1M2a"},{url:"/_next/static/chunks/f6078781a05fe1bcb0902d23dbbb2662c8d200b3.bbc9ff2829c0194ce285.js",revision:"JDMyyPDkR95HsaAuf1M2a"},{url:"/_next/static/chunks/framework.4b1beca48388539e3889.js",revision:"JDMyyPDkR95HsaAuf1M2a"},{url:"/_next/static/chunks/main-90863c667d28b61afd9d.js",revision:"JDMyyPDkR95HsaAuf1M2a"},{url:"/_next/static/chunks/pages/404-b707d2f618eaac66d8d7.js",revision:"JDMyyPDkR95HsaAuf1M2a"},{url:"/_next/static/chunks/pages/_app-384e8197efe1a41091bf.js",revision:"JDMyyPDkR95HsaAuf1M2a"},{url:"/_next/static/chunks/pages/_error-cdc973cb5ebc75790de5.js",revision:"JDMyyPDkR95HsaAuf1M2a"},{url:"/_next/static/chunks/pages/index-d1e4d3e38b59a3675048.js",revision:"JDMyyPDkR95HsaAuf1M2a"},{url:"/_next/static/chunks/polyfills-4f14e8c8ea1352d3ef0d.js",revision:"JDMyyPDkR95HsaAuf1M2a"},{url:"/_next/static/chunks/webpack-50bee04d1dc61f8adf5b.js",revision:"JDMyyPDkR95HsaAuf1M2a"},{url:"/_next/static/css/afd7172b7cfc566ac23d.css",revision:"JDMyyPDkR95HsaAuf1M2a"},{url:"/icon-144x144.png",revision:"67f6d5bbf2f99491b8bc7832c38c7c63"},{url:"/icon-16x16.png",revision:"83703514f19796ee15151e450984416d"},{url:"/icon-32x32.png",revision:"25e2c6ee34840568012b32e4314278df"},{url:"/manifest.json",revision:"1762578fe3ef586cdf1cff661e615e8c"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
