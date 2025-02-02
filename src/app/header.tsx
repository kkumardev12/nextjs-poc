import Link from 'next/link';

export default function Header() {
  return (
    <>
      {/* <h3 className='logo'>Logo</h3> */}
      <ul className='nav'>
        <li><Link href="/">Home</Link></li>
        <li>
          <Link href="/about">About Us</Link>
        </li>
        <li>
          <Link href="/about">Services</Link>
        </li>
        <li>
          <Link href="/home/blog">Blog</Link>
        </li>
        <li>
          <Link href="/signup">Sign Up</Link>
        </li>
        <li>
          <Link href="/login">Login</Link>
        </li>
      </ul>
    </>
  )
}