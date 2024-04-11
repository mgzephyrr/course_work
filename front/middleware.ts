import { NextResponse, NextRequest } from "next/server";
import { WEBSITE_URL, imgExtensions, signingPages, API_URL } from "@/constants"

export async function fetchUserData() {
  let isAuthorized = false;
  const resp = await fetch(API_URL + '/auth/me')
  console.log(resp.status)
  return resp.status === 200;
}

export default async function middleware(req: NextRequest){
  const isAuthorized = await fetchUserData();
  const url = req.url

  if(imgExtensions.some(elem => url.includes(elem))){
    return NextResponse.next()
  }

  if(!isAuthorized && !signingPages.some(link => url.includes(link))){
    return NextResponse.redirect(WEBSITE_URL + '/sign-in')
  }

  //console.log(isAuthorized)

  if (isAuthorized && signingPages.some(link => url.includes(link))){
    return NextResponse.redirect(WEBSITE_URL)
  }

  // добавить логику (бан чужих профилей, неаппрувнутых мероприятий)
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
