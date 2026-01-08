import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://qisolhealth.com'
  const locales = ['th', 'en', 'ja']
  
  const sitemap: MetadataRoute.Sitemap = []
  
  // Add locale-specific URLs
  locales.forEach(locale => {
    sitemap.push({
      url: `${baseUrl}/${locale}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
      alternates: {
        languages: {
          th: `${baseUrl}/th`,
          en: `${baseUrl}/en`,
          ja: `${baseUrl}/ja`,
        }
      }
    })
  })
  
  return sitemap
}
