import React from "react";
import profile from "./oof.png";
function Card() {
	return (
		<div className="w-full">
			<div className="flex flex-col justify-center max-w-ms ">
				<img
					className="w-32 mx-auto shadow-xl rounded-full"
					src={profile}
					alt="profile"
				/>
			</div>
		</div>
	);
}

export default Card;
