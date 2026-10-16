export function usePortfolioSeo(options: {
  title: string | (() => string);
  description: string | (() => string);
  ogType?: "website" | "article";
}) {
  useSeoMeta({
    ...options,
    ogTitle: options.title,
    ogDescription: options.description,
  });
}
