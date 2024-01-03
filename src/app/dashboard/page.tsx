import Nav from '@/components/nav'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Nav />
      <div className="bg-primary text-primary-foreground">Hello</div>
    </main>
  )
}
