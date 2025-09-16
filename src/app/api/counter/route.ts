import { NextRequest } from "next/server"

export async function GET(request:NextRequest) {
    console.log(request.url)
  return Response.json({
     message: 'Hello GET from the Counter API',
     count: 10
    })
}

export async function POST(request:NextRequest) {
    console.log(request.url)
  return Response.json({
     message: 'Hello POST from the Counter API',
     count: 100
    })
}