import daisyui from "daisyui";
import Intro from "./Intro";

export default function Navbar() {
    return (
        // <div className="navbar bg-base-100">
        //     <div className="flex-1">
        //         <a className="btn btn-ghost text-xl">about</a>
        //         <a className="btn btn-ghost text-xl">projects</a>
        //         <a className="btn btn-ghost text-xl">hobbies</a>
        //         <a className="btn btn-ghost text-xl">booknook</a>
        //     </div>
        // </div>

    <div className="navbar bg-base-100 fixed z-50">
        <div className="navbar-start">
            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a className="btn btn-ghost text-xl" href="#about">about</a></li>
                    <li><a className="btn btn-ghost text-xl" href="#projects">projects</a></li>
                    <li>
                        <details>
                            <summary className="btn btn-ghost text-xl">hobbies</summary>
                            <ul className="p-2">
                                <li><a className="btn btn-ghost text-xl" href="#japanese_intro">japanese</a></li>
                                <li><a className="btn btn-ghost text-xl">mentoring</a></li>
                                <li><a className="btn btn-ghost text-xl">book nook</a></li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a className="btn btn-ghost text-xl" href="#about">about</a></li>
                    <li><a className="btn btn-ghost text-xl" href="#projects">projects</a></li>
                    <li>
                        <details>
                            <summary className="btn btn-ghost text-xl">hobbies</summary>
                            <ul className="p-2">
                                <li><a className="btn btn-ghost text-xl" href="#japanese_intro">japanese</a></li>
                                <li><a className="btn btn-ghost text-xl">mentoring</a></li>
                                <li><a className="btn btn-ghost text-xl">book nook</a></li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>
        </div>


        <div className="navbar-end">
            <a className="btn btn-md">Contact me!</a>
        </div>
    </div>

    )

}