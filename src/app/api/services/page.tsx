import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';

const services = [
  {
    title: 'Servicio 1',
    description: 'Descripción del servicio 1',
    imageUrl: '/path/to/image1.jpg',
    imagePosition: 'left',
    colorType: 'primary',
  },
  {
    title: 'Servicio 2',
    description: 'Descripción del servicio 2',
    imageUrl: '/path/to/image2.jpg',
    imagePosition: 'right',
    colorType: 'secondary',
  },
  {
    title: 'Servicio 3',
    description: 'Descripción del servicio 3',
    imageUrl: '/path/to/image3.jpg',
    imagePosition: 'left',
    colorType: 'primary',
  },
];

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  try {
    return NextResponse.json({ data: services, message: 'Servicios obtenidos con éxito' });
  } catch (error) {
    console.error('Error al obtener los servicios:', error);
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}
