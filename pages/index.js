
import Link from 'next/link';

export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-4">Welcome to Dragon Paint Kits</h1>
      <nav className="space-y-2">
        <Link href="/shop">Shop</Link><br/>
        <Link href="/how-it-works">How It Works</Link><br/>
        <Link href="/dragons">Meet the Dragons</Link><br/>
        <Link href="/party">Host or Join a Party</Link><br/>
        <Link href="/gallery">Gallery & Community</Link><br/>
        <Link href="/blog">Blog or News</Link>
      </nav>
      <footer className="mt-10 text-sm text-gray-600">
        <p>Follow us on Instagram and Facebook.</p>
        <p>Contact: support@dragonkits.com</p>
      </footer>
    </main>
  );
}
