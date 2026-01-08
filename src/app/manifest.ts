import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'QiSol Health - นวัตกรรมฟิล์มรักษาแผลไฮโดรเจล',
    short_name: 'QiSol Health',
    description: 'นวัตกรรมแผ่นฟิล์มไฮโดรเจลรักษาแผลจากสารสกัดปูดเบญกานี รักษาแผลเบาหวาน แผลกดทับ และแผลเรื้อรัง',
    start_url: '/th',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#439b83',
    icons: [
      {
        src: '/Image/LOGO.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/Image/LOGO.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
