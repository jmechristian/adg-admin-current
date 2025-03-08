import { NextRequest, NextResponse } from 'next/server';
import sharp from 'sharp';

export const config = {
  api: {
    bodyParser: false,
  },
};

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get('image') as File;
    if (!file) {
      return NextResponse.json(
        { message: 'No file uploaded' },
        { status: 400 }
      );
    }

    // Get original filename, remove spaces, and change extension to .webp
    const fileName =
      file.name
        .replace(/\.[^/.]+$/, '') // remove extension
        .replace(/\s+/g, '-') // replace spaces with hyphens
        .toLowerCase() + // convert to lowercase for consistency
      '.webp';

    // Convert to WebP
    const buffer = Buffer.from(await file.arrayBuffer());
    const webpBuffer = await sharp(buffer).webp({ quality: 90 }).toBuffer();

    // Sanitize the filename to remove special characters
    const sanitizedFileName = encodeURIComponent(fileName);

    // Return the converted image with processed filename
    return new NextResponse(webpBuffer, {
      headers: {
        'Content-Type': 'image/webp',
        'Content-Disposition': `attachment; filename="${sanitizedFileName}"`,
      },
    });
  } catch (error) {
    console.error('Conversion error:', error);
    return NextResponse.json({ message: 'Conversion failed' }, { status: 500 });
  }
}
