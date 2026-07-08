import fs from 'fs/promises';
import path from 'path';

export async function getPriceListPDF() {
    const __dirname = path.dirname(new URL(import.meta.url).pathname);
    const pdfPath = path.resolve(__dirname, '../files/Smile Craft Dental - Price List.pdf');
    const fileBuffer = await fs.readFile(pdfPath);
    return { buffer: fileBuffer, filename: 'Smile Craft Dental - Price List.pdf', path: pdfPath };
}
