import React from "react";
export function Footer() {
	return (
		<div className="py-5 text-center">
			<p className="text-sm mt-2 opacity-50">
				&copy; {new Date().getFullYear()} Natãn Schneider. All Rights Reserved.
			</p>
		</div>
	)
}

export default Footer;