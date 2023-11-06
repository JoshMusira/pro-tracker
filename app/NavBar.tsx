"use client"
import Link from "next/link"
import Image from 'next/image';
import logo from '../public/assets/fixes.png'
import { usePathname } from "next/navigation";
import classNames from "classnames";

const NavBar = () => {
    const currentPath = usePathname();

    const links = [
        { label: 'Dashboard', href: '/' },
        { label: 'Issues', href: '/issues' }
    ]
    return (
        <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center bg-gray-100">
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
                    links.map((link) => <Link key={link.href} className={classNames({
                        'text-zinc-900': link.href === currentPath,
                        'text-zinc-500 ': link.href !== currentPath,
                        'hover:text-zinc-800 transition-colors font-bold': true

                    })} href={link.href}>{link.label}</Link>)
                }

            </ul>
        </nav>
    )
}

export default NavBar

