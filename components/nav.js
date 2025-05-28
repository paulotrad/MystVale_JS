
import Link from 'next/link';
export default function Nav() {

    return (
<nav className="space-y-2">
<Link href="/shop">Shop</Link><br/>
<Link href="/how-it-works">How It Works</Link><br/>
<Link href="/dragons">Meet the Dragons</Link><br/>
<Link href="/party">Host or Join a Party</Link><br/>
<Link href="/gallery">Gallery & Community</Link><br/>
<Link href="/blog">Blog or News</Link>
</nav>
    );

}