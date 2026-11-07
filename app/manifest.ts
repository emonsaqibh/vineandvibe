import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Vine & Vibe Event | Premium Event Management",
    short_name: "Vine & Vibe",
    description:
      "Premier event management and wedding planning company in Rangpur, Bangladesh. Tailored weddings, corporate events, birthday decorations, and photography.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0a",
    theme_color: "#c9a84c",
    icons: [
      {
        src: "/icon.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
