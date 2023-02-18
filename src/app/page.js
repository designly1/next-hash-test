"use client"
import { Inter } from '@next/font/google'
import paragraph from './paragraph'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [navClick, setNavClick] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      const hash = window.location.hash;
      if (hash) document.querySelector(hash).scrollIntoView();
    }, 0);
  }, [navClick])

  const toggleNavClick = () => setNavClick((oldVal) => !oldVal);

  return (
    <main>
      <nav>
        <ul>
          <li>
            <Link href="/#one" onClick={toggleNavClick}>Section One</Link>
          </li>
          <li>
            <Link href="/#two" onClick={toggleNavClick}>Section Two</Link>
          </li>
          <li>
            <Link href="/#three" onClick={toggleNavClick}>Section Three</Link>
          </li>
        </ul>
      </nav>
      <div className="container">
        <section id="one">
          <h1>Section One</h1>
          <div dangerouslySetInnerHTML={{ __html: paragraph }} />
        </section>
        <section id="two">
          <h1>Section Two</h1>
          <div dangerouslySetInnerHTML={{ __html: paragraph }} />
        </section>
        <section id="three">
          <h1>Section Three</h1>
          <div dangerouslySetInnerHTML={{ __html: paragraph }} />
        </section>
      </div>
    </main>
  )
}
