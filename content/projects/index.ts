import type { ComponentType } from "react";
import GeniusHubArticle from "./geniushub";

// Articoli scritti a mano, per i progetti con content: { source: "local" }.
export const localContent: Record<string, ComponentType> = {
  geniushub: GeniusHubArticle,
};
