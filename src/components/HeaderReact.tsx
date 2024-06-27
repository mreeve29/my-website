import { useState } from "react";
import { useMediaQuery } from 'react-responsive';

import "@fontsource/roboto/500.css";

type Props = {
    activePath: string;
}


const HeaderReact = ({ activePath }: Props) => {

    const [open, setOpen] = useState(false);

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 850px)'
    })

    const desktopHeader =
        <div className="flex justify-between items-center">
            <div className="flex items-baseline">
                <div className="text-2xl font-['Roboto'] pr-2">Michael Reeve</div>
                <div className="text-xl [&>a]:mx-3 [&>a]:cursor-pointer">
                    <a className={"hover:text-sky-500 " + (activePath == "home" ? "text-sky-500" : "")} href="/">Home</a>
                    <a className={"hover:text-sky-500 " + (activePath == "experience" ? "text-sky-500" : "")} href="/experience.html">Experience</a>
                    <a className={"hover:text-sky-500 " + (activePath == "projects" ? "text-sky-500" : "")} href="/projects.html">Projects</a>
                    <a className={"hover:text-sky-500 " + (activePath == "blog" ? "text-sky-500" : "")} href="/blog.html">Blog</a>
                    <a className={"hover:text-sky-500 " + (activePath == "contact" ? "text-sky-500" : "")} href="/contact.html">Contact</a>
                </div>
            </div>

            <div className="flex">
                <div
                    className="bg-white dark:bg-[#161b22] rounded border dark:border-[#21262d] ml-1"
                >
                    <a
                        target="_blank"
                        href="mailto:michael.s.reeve@gmail.com"
                        className="flex float-left w-12 h-12 items-center justify-center hover:bg-white/20 rounded transition-all"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="30"
                            viewBox="0 0 24 24"
                            className="dark:fill-white fill-black"
                        ><path
                            d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"
                        ></path>
                        </svg>
                    </a>
                </div>
                <div
                    className="bg-white dark:bg-[#161b22] rounded border dark:border-[#21262d] ml-1"
                >
                    <a
                        target="_blank"
                        href="https://linkedin.com/in/michaelsreeve/"
                        className="flex float-left w-12 h-12 items-center justify-center hover:bg-white/20 rounded transition-all"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="30"
                            viewBox="0 0 24 24"
                            className="dark:fill-white fill-black"
                        ><path
                            d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                        ></path>
                        </svg>
                    </a>
                </div>
                <div
                    className="bg-white dark:bg-[#161b22] rounded border dark:border-[#21262d] ml-1"
                >
                    <a
                        target="_blank"
                        href="https://github.com/mreeve29"
                        className="flex float-left w-12 h-12 items-center justify-center hover:bg-white/20 rounded transition-all"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="30"
                            viewBox="0 0 24 24"
                            className="dark:fill-white fill-black"
                        ><path
                            d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                        ></path>
                        </svg>
                    </a>
                </div>
            </div>
        </div>;

    const mobileHeader = <>
        <div className="flex justify-between items-center">
            <a className="text-2xl font-['Roboto']" href="/">Michael Reeve</a>

            <button onClick={() => setOpen(!open)} className="h-[21px]">
                {/* menu button animation from https://www.w3schools.com/howto/howto_css_menu_icon.asp */}
                <div className="inline-block">
                    <div className={"w-7 h-[3px] bg-white transition-all duration-[0.4s] rounded " + (open ? "transform -rotate-45 translate-y-[9px]" : "")}></div>
                    <div className={"w-7 h-[3px] bg-white my-[6px] transition-all duration-[0.4s] rounded " + (open ? "opacity-0" : "")}></div>
                    <div className={"w-7 h-[3px] bg-white transition-all duration-[0.4s] rounded " + (open ? "transform rotate-45 translate-y-[-9px]" : "")}></div>
                </div>
            </button>
        </div>


        {(open && !isDesktopOrLaptop) ? <div className="text-lg [&>a]:my-2 [&>a]:inline-block">
            <a href="/" className={(activePath == "home" ? "text-sky-500" : "")}>Home</a> <br />
            <a href="/experience.html" className={(activePath == "experience" ? "text-sky-500" : "")}>Experience</a> <br />
            <a href="/projects.html" className={(activePath == "projects" ? "text-sky-500" : "")}>Projects</a> <br />
            <a href="/blog.html" className={(activePath == "blog" ? "text-sky-500" : "")}>Blog</a> <br />
            <a href="/contact.html" className={(activePath == "contact" ? "text-sky-500" : "")}>Contact</a> <br />
        </div> : <></>}


    </>;

    return (

        <div className={"top-0 z-20 w-full h-14 " + ((open && !isDesktopOrLaptop) ? "sticky" : "")}>
            <div className="absolute w-full">
                <div
                    className={"px-3 sm:px-5 pb-1 pt-2 md:mb-6 items-center sm:max-w-screen-xl mx-auto " + ((open && !isDesktopOrLaptop) ? "bg-[#121725]" : "")}
                    style={{ transition: "all .1s ease-in-out" }}
                >
                    {isDesktopOrLaptop ? desktopHeader : mobileHeader}
                </div>
            </div>
        </div>
    );
}

export default HeaderReact;