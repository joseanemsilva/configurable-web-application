import { NextRequest, NextResponse, userAgent } from 'next/server'
 
export function proxy(request: NextRequest) {
  const { device } = userAgent(request)
 
  // device.type can be: 'mobile', 'tablet', 'console', 'smarttv',
  // 'wearable', 'embedded', or undefined (for desktop browsers)
  const viewport = device.type || 'desktop'

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-url', request.url);
  requestHeaders.set('x-viewport', viewport);

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    }
  });
}