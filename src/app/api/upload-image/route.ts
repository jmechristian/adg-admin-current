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

    const isGif = file.type === 'image/gif';

    // Get original filename, remove spaces, and change extension based on file type
    const fileName =
      file.name
        .replace(/\.[^/.]+$/, '') // remove extension
        .replace(/\s+/g, '-') // replace spaces with hyphens
        .toLowerCase() + // convert to lowercase for consistency
      (isGif ? '.gif' : '.webp');

    // Get the buffer
    const buffer = Buffer.from(await file.arrayBuffer());

    // Only convert to WebP if it's not a GIF
    const processedBuffer = isGif
      ? buffer
      : await sharp(buffer).webp({ quality: 96 }).toBuffer();

    // Sanitize the filename to remove special characters
    const sanitizedFileName = encodeURIComponent(fileName);

    // Return the processed image with appropriate content type
    return new NextResponse(processedBuffer, {
      headers: {
        'Content-Type': isGif ? 'image/gif' : 'image/webp',
        'Content-Disposition': `attachment; filename="${sanitizedFileName}"`,
      },
    });
  } catch (error) {
    console.error('Conversion error:', error);
    return NextResponse.json({ message: 'Conversion failed' }, { status: 500 });
  }
}
