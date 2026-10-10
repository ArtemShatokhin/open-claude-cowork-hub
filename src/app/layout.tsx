import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import { site } from '@/lib/config';
import { originOf } from '@/lib/site';
import agency from '@/config/agency.json';
import './globals.css';

/* Values the agency's deploy tool writes into src/config/agency.json (never hand-edited): the
   fleet's GA4 stream. A site config may still set its own. */
const GA4: string | null = site.ga4 ?? agency.ga4 ?? null;

/* The one accent: overrides --kortix-base and --ring, nothing else (validated as #rrggbb). */
const ACCENT_CSS = `:root{--kortix-base:${site.accent};--ring:${site.accent}}`;

/* Progressive enhancement switch (globals.css): set before first paint. */
const JS_FLAG = "document.documentElement.classList.add('js')";

/* GA4 with consent mode, as the agency's analytics_tag.py: consent denied
   until the visitor accepts; the choice is remembered. The banner takes its
   colours from tokens, so the page stays free of colour literals. */
const CONSENT_KEY = 'kx-consent';
const ga4Head = (id: string) => `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}
gtag('consent','default',{'ad_storage':'denied','ad_user_data':'denied','ad_personalization':'denied','analytics_storage':'denied','wait_for_update':500});
try{if(localStorage.getItem('${CONSENT_KEY}')==='granted'){gtag('consent','update',{'analytics_storage':'granted'});}}catch(e){}
gtag('js',new Date());gtag('config','${id}');`;
const CONSENT_BANNER = `(function(){var k='${CONSENT_KEY}',v=null;try{v=localStorage.getItem(k);}catch(e){}if(v)return;
function show(){var b=document.createElement('div');b.id=k;b.setAttribute('role','dialog');b.setAttribute('aria-label','Analytics consent');
b.style.cssText='position:fixed;left:16px;right:16px;bottom:16px;max-width:560px;margin:0 auto;z-index:2147483000;background:var(--popover);color:var(--popover-foreground);border:1px solid var(--border);font:14px/1.45 var(--font-sans,system-ui),sans-serif;padding:12px 14px;border-radius:10px;display:flex;gap:10px;align-items:center;flex-wrap:wrap';
var t=document.createElement('span');t.style.cssText='flex:1 1 220px';t.textContent='We use analytics cookies to learn which pages help readers. Allow them?';b.appendChild(t);
function btn(label,grant){var x=document.createElement('button');x.type='button';x.textContent=label;
x.style.cssText='font:inherit;min-height:44px;padding:6px 16px;border-radius:8px;cursor:pointer;border:1px solid var(--border);background:'+(grant?'var(--primary)':'var(--popover)')+';color:'+(grant?'var(--primary-foreground)':'var(--popover-foreground)');
x.onclick=function(){try{localStorage.setItem(k,grant?'granted':'denied');}catch(e){}if(grant){gtag('consent','update',{'analytics_storage':'granted'});}b.remove();};return x;}
b.appendChild(btn('Accept',true));b.appendChild(btn('Decline',false));document.body.appendChild(b);}
if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',show);}else{show();}})();`;

export const metadata: Metadata = {
  metadataBase: new URL(originOf(site)),
  applicationName: site.siteName,
  icons: { icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }] },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  colorScheme: 'light dark',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang={site.lang} data-fonts={site.fonts} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: JS_FLAG }} />
        <link rel="stylesheet" href="/tokens.css" />
        {site.fonts === 'roobert' ? (
          <>
            <link rel="preload" href="/fonts/roobert/RoobertUprightsVF.woff2" as="font" type="font/woff2" crossOrigin="" />
            <link rel="stylesheet" href="/fonts.css" />
          </>
        ) : null}
        <style dangerouslySetInnerHTML={{ __html: ACCENT_CSS }} />
        {GA4 ? (
          <>
            <script dangerouslySetInnerHTML={{ __html: ga4Head(GA4) }} />
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA4}`} />
            <script dangerouslySetInnerHTML={{ __html: CONSENT_BANNER }} />
          </>
        ) : null}
      </head>
      <body>{children}</body>
    </html>
  );
}
