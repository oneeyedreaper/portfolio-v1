import React from "react";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function Footer() {
	return (
		<div className="py-5 border-t-3/2">
			<div className="flex justify-center mt-4 ">
				<a
					className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300 "
					href="https://github.com/oneeyedreaper"
				>
					<FaGithub />
					<span className="sr-only"> Github</span>
				</a>
				<a
					className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-pink-600 hover:bg-pink-600 rounded-full hover:text-white transition-colors duration-300 "
					href="https://instagram.com/ihatemyselfsoipostmemes"
				>
					<FaInstagram />
					<span className="sr-only"> Instagram</span>
				</a>
				<a
					className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-blue-600 hover:bg-blue-600 rounded-full hover:text-white transition-colors duration-300 "
					href="https://www.linkedin.com/in/paras-asanani/"
				>
					<FaLinkedinIn />
					<span className="sr-only"> LinkedIn</span>
				</a>
				<a
					className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-red-600 hover:bg-red-600 rounded-full hover:text-white transition-colors duration-300 "
					href="mailto:paras.asa28@gmail.com"
				>
					<SiGmail />
					<span className="sr-only">Mail</span>
				</a>
			</div>
			<div className="flex justify-center mt-4 ">
				<p className="text-black mb-4">
					Made with{" "}
					<span className="mr-2" role="link" aria-label="weed">
						🌿
					</span>
					by{" "}
					<a
						href="mailto:paras.asa28@gmail.com"
						className="text-blue-500 underline"
					>
						Paras Asanani
					</a>
				</p>
			</div>
		</div>
	);
}

export default Footer;
