import React from "react";
import { FaArrowRight } from "react-icons/fa";
function ContactMe() {
	return (
		<div className="max-w-lg  w-full text-center pt-36 pb-10 ">
			<h1 className="text-4xl hover:tooltip">
				{" "}
				Interested in Working Together?
			</h1>
			<a className="" href="mailto:paras.asa28@gmail.com">
				<span className="mt-10 inline-block bg-black w-auto font-display text-white text-base md:text-xl py-4 px-7 cursor-pointer  text-gray-800 hover:bg-gray-800 rounded-full hover:text-white tranis duration-300">
					<div className="flex flex-row items-centersjajai">
						<span className="mr-3">Get in Touch</span>
						<FaArrowRight color="white" />
					</div>
				</span>
			</a>
		</div>
	);
}

export default ContactMe;
