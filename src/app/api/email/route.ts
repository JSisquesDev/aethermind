// src/app/api/sendEmail/route.ts
import { NextResponse } from 'next/server';
import sendEmail from '@/util/emailManager';
import logMessage from '@/util/logger';
import { HttpStatusCode } from 'axios';

// Función para manejar la petición POST y enviar el correo
export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    logMessage('debug', `Datos recibidos: ${JSON.stringify({ name, email, message })}`);

    logMessage('info', `Enviando correo de ${name} con email ${email}`);
    await sendEmail(email, `Mensaje de ${name}`, message);
    logMessage('info', 'Correo enviado correctamente');

    return NextResponse.json({ success: true, message: 'Correo enviado correctamente' }, { status: HttpStatusCode.Ok });
  } catch (error) {
    logMessage('error', `Error al enviar el correo: ${error}`);
    return NextResponse.json({ success: false, message: 'Error al enviar el correo' }, { status: HttpStatusCode.InternalServerError });
  }
}
