import createImageUrlBuilder from "@sanity/image-url";
import { createClient, createPreviewSubscriptionHook } from "next-sanity";

const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "nmc1iz26",
  useCdn:
    typeof document !== "undefined" && process.env.NODE_ENV === "production",
  apiVersion: "2022-03-13",
  token: process.env.SANITY_API_TOKEN,
};

export const imageBuilder = createImageUrlBuilder(config);

export const urlForImage = (source) =>
  imageBuilder.image(source).auto("format").fit("max");

export const usePreviewSubscription = createPreviewSubscriptionHook(config);

export const client = createClient(config);
export const previewClient = createClient({
  ...config,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
});

export const getClient = (usePreview) => (usePreview ? previewClient : client);
export default client;
