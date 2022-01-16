/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React from "react";
import profile from "./oof.png";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function Card() {
	return (
		<div className="w-full">
			<div className="flex flex-col justify-center max-w-xs mx-auto bg-white shadow-xl rounded-xl p-5">
				{/* card body */}
				<div id="image-body">
					<img
						className="w-32 mx-auto shadow-xl rounded-full"
						src={profile}
						alt="profile"
					/>
				</div>

				<div className="text-center mt-5 " id="main-body">
					<p className="text-xl sm:text-2xl text-gray-900">Paras Asanani</p>
					<p className="text-xs sm:text-base pt-2 pb-4 px-5 w-auto inline-block border-b-2 text-gray-600">
						Dipshit/Dikhed
					</p>
					<div className="flex align-center justify-center mt-4">
						<a
							className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300 "
							href="https://github.com/oneeyedreaper"
						>
							<FaGithub className="" />
							<span className="sr-only"> hgj</span>
						</a>
						<a
							className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-pink-600 hover:bg-pink-600 rounded-full hover:text-white transition-colors duration-300 "
							href="https://instagram.com/ihatemyselfsoipostmemes"
						>
							<FaInstagram className="" />
							<span className="sr-only"> hgj</span>
						</a>
						<a
							className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-blue-600 hover:bg-blue-600 rounded-full hover:text-white transition-colors duration-300 "
							href="https://www.linkedin.com/in/paras-asanani/"
						>
							<FaLinkedinIn className="" />
							<span className="sr-only"> hgj</span>
						</a>
						<a
							className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-red-600 hover:bg-red-600 rounded-full hover:text-white transition-colors duration-300 "
							href="mailto:paras.asa28@gmail.com"
						>
							<SiGmail className="" />
							<span className="sr-only"> hgj</span>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Card;
