const fs = require("fs");
const path = require("path");
const axios = require("axios");
const sharp = require("sharp");
const fse = require("fs-extra");

const IMAGE_LIST_FILE = "image-urls.txt";
const OUTPUT_DIR = "public/assets/images";
const MAX_WIDTH = 1200; // Resize width
const QUALITY = 80; // WebP quality

async function downloadAndConvert(url) {
  try {
    const filename = path.basename(url).split("?")[0];
    const nameWithoutExt = filename.substring(0, filename.lastIndexOf(".")) || filename;
    const outputFile = path.join(OUTPUT_DIR, `${nameWithoutExt}.webp`);

    console.log("Downloading:", url);

    const response = await axios({
      url,
      responseType: "arraybuffer",
    });

    await sharp(response.data)
      .resize({ width: MAX_WIDTH, withoutEnlargement: true })
      .webp({ quality: QUALITY })
      .toFile(outputFile);

    console.log("Saved:", outputFile);
  } catch (error) {
    console.error("Failed:", url);
  }
}

async function run() {
  await fse.ensureDir(OUTPUT_DIR);

  const urls = fs.readFileSync(IMAGE_LIST_FILE, "utf-8")
    .split("\n")
    .map((u) => u.trim())
    .filter(Boolean);

  for (const url of urls) {
    await downloadAndConvert(url);
  }

  console.log("✅ All images processed.");
}

run();