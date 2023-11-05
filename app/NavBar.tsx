import Link from "next/link"
import Image from 'next/image';
import logo from '../public/assets/fixes.png'

const NavBar = () => {
    const links = [
        { label: 'Dashboard', href: '/' },
        { label: 'Issues', href: '/issues' }
    ]
    return (
        <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center">
            <Link href={'/'}>
                <Image
                    src={logo}
                    alt="Logo"
                    width={35}
                    height={35}
                />
            </Link>
            <ul className="flex space-x-6">
                {
                    links.map((link) => <Link key={link.href} className="text-zinc-500 hover:text-zinc-800 transition-colors" href={link.href}>{link.label}</Link>)
                }

            </ul>
        </nav>
    )
}

export default NavBar