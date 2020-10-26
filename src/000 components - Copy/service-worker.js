/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

importScripts("/precache-manifest.cb2cd9f09a0da91154a6e10288d4571e.js");

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("activate", function (event) {
  event.waitUntil(
    caches
      .keys()
      .then(function (cacheName) {})
      .map(function (cacheName) {
        return caches.delete(cacheName);
      })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      if (response) {
        console.log("found in cache");
        console.log(event.request);
        console.log(response);
        return response;
      }
      console.log("not found in cache");
      console.log(event.request);
      return fetch(event.request);
    })
  );
});

self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute(workbox.precaching.getCacheKeyForURL("/index.html"), {
  blacklist: [/^\/_/, /\/[^/?]+\.[^/]+$/],
});

var CACHE_NAME = "skillbakery-cache";
var urlsToCache = [
  "/",
  "/favicon.ico",
  "/manifest.json",
  "/service-worker.js",
  "/index.html",
  "/static/js/2.cf3f5806.chunk.js",
  "/static/js/main.43e3f26f.chunk.js",
  "/static/js/runtime-main.4910aef2.js",
  "/static/css/main.d0cf45c5.chunk.css",
];
