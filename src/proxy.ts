import createMiddleware from 'next-intl/middleware'
import { NextRequest, NextResponse } from 'next/server'
import { routing } from './i18n/routing'

const intlMiddleware = createMiddleware(routing)

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const hasLocaleCookie = request.cookies.has('NEXT_LOCALE')

  const isDev = process.env.NODE_ENV === 'development'
  const country = isDev ? undefined : (request as { geo?: { country?: string } }).geo?.country

  if (!hasLocaleCookie && country === 'IT') {
    const hasLocaleInUrl = routing.locales.some(l =>
      pathname === `/${l}` || pathname.startsWith(`/${l}/`)
    )

    if (!hasLocaleInUrl) {
      const newPath = `/it${pathname === '/' ? '' : pathname}`
      const url = new URL(newPath, request.url)
      const response = NextResponse.redirect(url)
      response.cookies.set('NEXT_LOCALE', 'it', {
        maxAge: 60 * 60 * 24 * 30,
        path: '/',
        sameSite: 'lax',
      })
      return response
    }
  }

  return intlMiddleware(request)
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
}
