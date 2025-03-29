import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, password } = body

    // In a real application, you would validate and store user data in a database
    // For demo purposes, we'll just check if all required fields are provided
    if (!name || !email || !phone || !password) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    // Mock successful registration
    return NextResponse.json({
      success: true,
      user: {
        id: "123",
        name: name,
        email: email,
        phone: phone,
      },
      token: "mock-jwt-token",
    })
  } catch (error) {
    console.error("Registration error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

