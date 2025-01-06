// import { NextResponse } from 'next/server';
// import nodemailer from 'nodemailer';
// import { PrismaClient } from '@prisma/client';

// // Initialize Prisma client
// const prisma = new PrismaClient();

// // Configure email transporter
// const transporter = nodemailer.createTransport({
//   service: 'gmail', // You can use other services like SendGrid, AWS SES, etc.
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASSWORD, // Use app-specific password for Gmail
//   },
// });

// export async function POST(request) {
//   try {
//     // Parse the incoming request body
//     const body = await request.json();
//     const { email, phone, description } = body;

//     // 1. Store submission in database
//     const submission = await prisma.contactSubmission.create({
//       data: {
//         email,
//         phone,
//         description,
//         submittedAt: new Date(),
//       },
//     });

//     // 2. Send notification email
//     await transporter.sendMail({
//       from: process.env.EMAIL_USER,
//       to: process.env.ADMIN_EMAIL,
//       subject: 'New Contact Form Submission',
//       html: `
//         <h2>New Contact Form Submission</h2>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Phone:</strong> ${phone}</p>
//         <p><strong>Description:</strong> ${description}</p>
//       `,
//     });

//     // 3. Return success response
//     return NextResponse.json({ 
//       success: true, 
//       id: submission.id 
//     });

//   } catch (error) {
//     console.error('Error processing contact form:', error);
//     return NextResponse.json(
//       { error: 'Failed to process submission' },
//       { status: 500 }
//     );
//   }
// }

import { NextResponse } from 'next/server';

// Check for required environment variables
const requiredEnvVars = ['EMAIL_USER', 'EMAIL_PASSWORD', 'ADMIN_EMAIL', 'DATABASE_URL'];
const missingEnvVars = requiredEnvVars.filter(envVar => !process.env[envVar]);

if (missingEnvVars.length > 0) {
  console.error(`Missing required environment variables: ${missingEnvVars.join(', ')}`);
}

// Dynamic imports to handle missing dependencies gracefully
let prisma;
let transporter;

try {
  const { PrismaClient } = require('@prisma/client');
  prisma = new PrismaClient();
} catch (error) {
  console.error('Failed to initialize Prisma:', error);
}

try {
  const nodemailer = require('nodemailer');
  transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });
} catch (error) {
  console.error('Failed to initialize nodemailer:', error);
}

export async function POST(request) {
  try {
    if (!prisma || !transporter) {
      throw new Error('Required dependencies not initialized');
    }

    // Parse the incoming request body
    const body = await request.json();
    const { email, phone, description } = body;

    // Validate required fields
    if (!email || !phone || !description) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Store in database
    const submission = await prisma.contactSubmission.create({
      data: {
        email,
        phone,
        description,
        submittedAt: new Date(),
      },
    });

    // Send email
    try {
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.ADMIN_EMAIL,
        subject: 'New Contact Form Submission',
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Description:</strong> ${description}</p>
        `,
      });
    } catch (emailError) {
      console.error('Failed to send email:', emailError);
      // Continue execution - don't fail the submission just because email failed
    }

    return NextResponse.json({ 
      success: true, 
      id: submission.id 
    });

  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Failed to process submission' },
      { status: 500 }
    );
  }
}


