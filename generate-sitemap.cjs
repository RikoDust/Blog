console.log("🚀 Script lancé");

const fs = require("fs");
const path = require("path");

const articlesDir = path.join(__dirname, "public", "articles");
const outputPath = path.join(__dirname, "public", "sitemap.xml");

const baseUrl = "https://blog-pi-eight-5sppfyd7b5.vercel.app/"; // Remplace par ton vrai domaine si besoin

const formatDate = (dateStr) => {
  const mois = {
    janvier: "01", février: "02", mars: "03", avril: "04",
    mai: "05", juin: "06", juillet: "07", août: "08",
    septembre: "09", octobre: "10", novembre: "11", décembre: "12"
  };

  const clean = dateStr.replace("1er", "1").toLowerCase();
  const parts = clean.split(" ");
  if (parts.length !== 3) return new Date().toISOString().split("T")[0];

  const [jour, moisTexte, annee] = parts;
  const moisNum = mois[moisTexte];
  if (!moisNum) return new Date().toISOString().split("T")[0];

  const isoDate = `${annee}-${moisNum}-${jour.padStart(2, "0")}`;
  return isoDate;
};

try {
  if (!fs.existsSync(articlesDir)) {
    throw new Error(`Le dossier ${articlesDir} n'existe pas.`);
  }

  const files = fs.readdirSync(articlesDir).filter(f => f.endsWith(".json"));

  if (files.length === 0) {
    throw new Error(`Aucun fichier JSON trouvé dans ${articlesDir}`);
  }

  const urls = files.map((file) => {
    const content = fs.readFileSync(path.join(articlesDir, file), "utf-8");
    const article = JSON.parse(content);

    const slug = article.id;
    const lastmod = article.date ? formatDate(article.date) : new Date().toISOString().split("T")[0];

    return `
  <url>
    <loc>${baseUrl}/articles/${slug}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`;
  });

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}/</loc>
    <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  ${urls.join("\n")}
</urlset>`;

  fs.writeFileSync(outputPath, sitemap.trim());
  console.log(`✅ sitemap.xml généré dans ${outputPath}`);

} catch (error) {
  console.error("❌ Erreur lors de la génération du sitemap :", error.message);
  process.exit(1);
}

