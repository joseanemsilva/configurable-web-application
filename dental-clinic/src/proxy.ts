import { NextRequest, NextResponse, userAgent } from 'next/server'
import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';
 
// export function proxy(request: NextRequest) {
//   const { device } = userAgent(request)
 
//   // device.type can be: 'mobile', 'tablet', 'console', 'smarttv',
//   // 'wearable', 'embedded', or undefined (for desktop browsers)
//   const viewport = device.type || 'desktop'

//   const requestHeaders = new Headers(request.headers);
//   requestHeaders.set('x-url', request.url);
//   requestHeaders.set('x-viewport', viewport);

//   return NextResponse.next({
//     request: {
//       headers: requestHeaders,
//     }
//   });
// }

export default createMiddleware(routing);
 
export const config = {
  // Match all pathnames except for
  // - … if they start with `/api`, `/trpc`, `/_next` or `/_vercel`
  // - … the ones containing a dot (e.g. `favicon.ico`)
  matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)'
};