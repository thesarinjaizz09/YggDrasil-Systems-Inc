"use client";
import { FaLinkedin, FaTwitter, FaGithub, FaYoutube } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="backdrop-blur-md bg-neutral-950/80 text-neutral-300 border-t border-neutral-800">
            <div className=" mx-auto px-6 lg:px-12 py-16 grid grid-cols-1 md:grid-cols-5 gap-12">

                {/* Brand - Left Side */}
                <div className="md:col-span-2 text-left md:text-left">
                    <h2 className="text-2xl font-bold text-white"> <a
                        href="#"
                        className="relative z-20 flex items-start"
                    >
                        <img
                            src="./assets/download.png"
                            alt="logo"
                            width={150}
                        />
                    </a></h2>
                    <p className="mt-4 text-sm lg:text-lg text-neutral-400 leading-relaxed">
                        Building the future of intelligent defence and next-generation
                        cybersecurity infrastructure. From Zero Trust to AI-driven systems,
                        we create resilient digital ecosystems.
                    </p>
                    <p className="mt-4 text-sm lg:text-lg text-neutral-500">
                        Headquarters: Kolkata, India
                    </p>
                </div>

                {/* Right Side - 3 Columns */}
                <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left sm:text-left space-y-4 lg:space-y-0">

                    {/* Company */}
                    <div>
                        <h3 className="text-sm lg:text-lg font-semibold uppercase tracking-wider text-neutral-400">
                            Company
                        </h3>
                        <ul className="mt-4 space-y-2 text-sm lg:text-lg">
                            <li><a href="#" className="hover:text-white">About Us</a></li>
                            <li><a href="#" className="hover:text-white">Leadership</a></li>
                            <li><a href="#" className="hover:text-white">Careers</a></li>
                            <li><a href="#" className="hover:text-white">Newsroom</a></li>
                            <li><a href="#" className="hover:text-white">Contact</a></li>
                        </ul>
                    </div>

                    {/* Solutions */}
                    <div>
                        <h3 className="text-sm lg:text-lg font-semibold uppercase tracking-wider text-neutral-400">
                            Solutions
                        </h3>
                        <ul className="mt-4 space-y-2 text-sm lg:text-lg">
                            <li><a href="#" className="hover:text-white">Cybersecurity Mesh</a></li>
                            <li><a href="#" className="hover:text-white">Zero Trust Networks</a></li>
                            <li><a href="#" className="hover:text-white">AI Defence Systems</a></li>
                            <li><a href="#" className="hover:text-white">Threat Intelligence</a></li>
                            <li><a href="#" className="hover:text-white">Enterprise Consulting</a></li>
                        </ul>
                    </div>

                    {/* Follow Us */}
                    <div>
                        <h3 className="text-sm lg:text-lg font-semibold uppercase tracking-wider text-neutral-400">
                            Follow Us
                        </h3>
                        <div className="mt-4 flex justify-start sm:justify-start space-x-4">
                            <a href="#" className="hover:text-white"><FaLinkedin size={20} /></a>
                            <a href="#" className="hover:text-white"><FaTwitter size={20} /></a>
                            <a href="#" className="hover:text-white"><FaGithub size={20} /></a>
                            <a href="#" className="hover:text-white"><FaYoutube size={20} /></a>
                        </div>
                        <p className="mt-4 text-sm lg:text-lg text-neutral-400 leading-relaxed">
                            Stay connected for the latest insights on cybersecurity,
                            AI innovation, and next-gen technology.
                        </p>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-neutral-800">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 py-8 flex flex-col md:flex-row justify-between items-center text-sm lg:text-lg text-neutral-500">
                    <p className="text-center md:text-left">
                        © {new Date().getFullYear()} Yggdrasil Systems. All rights reserved.
                    </p>
                    <div className="flex flex-wrap justify-center md:justify-end space-x-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white">Privacy Policy</a>
                        <a href="#" className="hover:text-white">Terms of Service</a>
                        <a href="#" className="hover:text-white">Security</a>
                        <a href="#" className="hover:text-white">Compliance</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
