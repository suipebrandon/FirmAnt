import { createClient } from "@sanity/client";

export const sanityClient =
  process.env.SANITY_PROJECT_ID && process.env.SANITY_DATASET
    ? createClient({
        projectId: process.env.SANITY_PROJECT_ID,
        dataset: process.env.SANITY_DATASET,
        apiVersion: process.env.SANITY_API_VERSION ?? "2026-07-08",
        useCdn: true
      })
    : null;
