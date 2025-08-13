import { Button } from "@mantine/core";
import Link from "next/link";

export default function NotFound(){
    return(
        <main className="max-w-[860px] py-0 px-6 lg:px-0 m-auto text-white md:mt-[240px] mt-[160px] sm:mb-40 mb-20 flex flex-col gap-4 text-center">
            <h1 className="sm:text-[4.5rem] text-[3rem]">I lost this page</h1>
            <p className="text-[1.25rem] text-white/50 font-thin">I searched high and low but couldn't find what you're looking for. Let's find a better place for you to go.</p>
            <Link href={'/'}><Button id={'button'} className="px-10 py-4 h-auto w-auto">Go home</Button></Link>
        </main>
    )
}