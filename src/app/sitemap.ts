import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://qisolhealth.com'
  const locales = ['th', 'en', 'ja']
  
  const sitemap: MetadataRoute.Sitemap = []
  
  // Add home pages for each locale
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
  
  // Add privacy pages for each locale
  locales.forEach(locale => {
    sitemap.push({
      url: `${baseUrl}/${locale}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: {
        languages: {
          th: `${baseUrl}/th/privacy`,
          en: `${baseUrl}/en/privacy`,
          ja: `${baseUrl}/ja/privacy`,
        }
      }
    })
  })
  
  return sitemap
}
