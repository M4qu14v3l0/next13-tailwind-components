import Link from 'next/link'

export default function Navbar() {
  return (
    <header>
      <nav>
        <li>
          <Link href="/cardsComponent"> Cards Component </Link>
          <Link href="/canvasAnimation"> Canvas Animation </Link>
        </li>
      </nav>
    </header>
  )
}
