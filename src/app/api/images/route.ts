import { NextRequest, NextResponse } from "next/server";
import path from "path";
import fs from "fs";

const UPLOAD_DIR = path.resolve(process.env.ROOT_PATH ?? "", "public/uploads");

export const GET = async (req: NextRequest) => {
  if (!fs.existsSync(UPLOAD_DIR)) {
    return NextResponse.json({ images: [] });
  }

  const files = fs.readdirSync(UPLOAD_DIR).map(file => ({
    name: file,
    url: `/uploads/${file}`,
  }));

  return NextResponse.json({ images: files });
};