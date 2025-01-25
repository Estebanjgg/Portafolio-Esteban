const isGithubPages = process.env.NODE_ENV === "production";

module.exports = {
  output: "export", // Habilita `next export`
  basePath: isGithubPages ? "/portafolio-esteban" : "",
  assetPrefix: isGithubPages ? "/portafolio-esteban/" : "",
  trailingSlash: true, // Asegura que las rutas sean correctas
};
