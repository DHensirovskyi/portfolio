import Link from "next/link"
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";



type Links = {
    path: string,
    name: string,
}

const links: Links[] = [
    {
        path: '/',
        name: 'Home'
    },
    {
        path: '/works',
        name: 'Projects'
    },
    {
        path: '/about',
        name: 'About'
    },
    {
        path: '/contact',
        name: 'Contact'
    }
]

const socials = [
    {
        path: 'https://wa.me/380638969882',
        icon: <FaWhatsapp fontSize="1.5rem"/>,
        id: 1
    },
    {
        path: 'https://www.instagram.com/dimagensirovskiy/',
        icon: <FaInstagram fontSize="1.5rem"/>,
        id: 2
    },
    {
        path: 'https://t.me/dmytrohensirovskyi',
        icon: <FaTelegram fontSize="1.5rem"/>,
        id: 3
    },
    {
        path: 'https://www.linkedin.com/in/dmytro-hensirovskyi-8585b8249/',
        icon: <FaLinkedin fontSize="1.5rem"/>,
        id: 4
    },
    {
        path: 'https://github.com/DHensirovskyi',
        icon: <FaGithub fontSize="1.5rem"/>,
        id: 5
    },
]

export default function Footer(){
    return(
        <footer className=" text-white p-4 h-[410px] sm:h-[610px] bg-[radial-gradient(100%_50%_at_50%_0%,#141414_0%,#0D0D0D_100%)] border-t-[0.5] border-white/15 sm:pt-35 pt-20">
            <section className="max-w-[840px] m-auto flex flex-col pb-20">
                <div className="mb-[42px]">
                    <h1 className="text-[1.5rem] sm:text-[2rem] sm:leading-[38.4px] leading-[30px] text-white font-light">
                        Let's create something <br/><span className="text-white/50">awesome together</span>.
                    </h1>
                </div>
                <nav>
                    <p className="text-[0.875rem] text-white">Pages</p>
                    <ul>
                    {links.map(link => (
                        <li className="my-3 text-[1rem]" key={link.name}>
                            <Link className="text-white/50 hover:text-white/100 active:text-white/100 transition duration-300 font-normal" href={link.path}>{link.name}</Link>
                        </li>
                    ))}
                    </ul>
                </nav>
                <nav className="flex gap-6 mt-[30px] mb-[42px]">
                    {socials.map((soc) => (
                        <Link key={soc.id} className="text-white/100 hover:text-white/50 active:text-white/50 transition duration-300" href={soc.path}>{soc.icon}</Link>
                    ))}
                </nav>
                <p className="text-[1rem] text-white/50 font-light">Built by Dmytro Hensirovskyi</p>
            </section>
        </footer>
    )
}