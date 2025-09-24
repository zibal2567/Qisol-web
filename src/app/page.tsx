import { redirect } from 'next/navigation'

export default function RootPage() {
  // Redirect to default locale (Thai) with full format
  redirect('/th-TH')
}
