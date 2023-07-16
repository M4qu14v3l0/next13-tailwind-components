import Link from 'next/link'

export default function Navbar() {
  return (
    <header>
      <nav>
        <li>
          <Link href="/cardsComponent"> Cards Component </Link>
        </li>
      </nav>
    </header>
  )
}
