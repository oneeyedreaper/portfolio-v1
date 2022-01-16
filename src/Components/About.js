import React from "react";
import ScrollIntoView from "react-scroll-into-view";
import { FaChevronDown } from "react-icons/fa";
function About() {
	return (
		<div className="max-w-4xl mt-20 mx-auto">
			<p className="text-xl font-bold text-black md:text-xl text-center">
				Ayo!
			</p>
			<p className="text-base sm:text-xl  text-gray-600 md:text-xl text-center leading-relaxed mt-4">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias expedita
				illum, reiciendis facere placeat, architecto excepturi, dolor eum
				repellat nesciunt incidunt! Voluptas voluptate maiores, suscipit totam
				voluptates corporis possimus quisquam!
			</p>
			<ScrollIntoView selector="#tech">
				<div className="mx-auto p-20">
					<FaChevronDown className="animate-bounce text-3xl mx-auto text-blue-600 hover:cursor-pointer" />
				</div>
			</ScrollIntoView>
		</div>
	);
}

export default About;
