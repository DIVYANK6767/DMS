import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email, password } = body

    // In a real application, you would validate credentials against a database
    // For demo purposes, we'll just check if the email and password are provided
    if (!email || !password) {
      return NextResponse.json({ error: "Email and password are required" }, { status: 400 })
    }

    // Mock successful authentication
    return NextResponse.json({
      success: true,
      user: {
        id: "123",
        name: "Demo User",
        email: email,
      },
      token: "mock-jwt-token",
    })
  } catch (error) {
    console.error("Login error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

