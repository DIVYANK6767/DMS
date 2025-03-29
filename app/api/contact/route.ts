import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    // In a real application, you would store the contact form submission in a database
    // and potentially send an email notification
    // For demo purposes, we'll just check if all required fields are provided
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    // Mock successful submission
    return NextResponse.json({
      success: true,
      message: "Your message has been received. We will get back to you soon.",
    })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

