import React from "react";
export function Intro() {
	return (
		<div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
			<h1 className="text-4x1 md:text-7x1 dark:text-white mb-1 md:mb-3 font-bold text-2xl" >Natãn Schneider</h1>
			<p className="text-base md:text-x1 mb-3 font-medium">
				Desenvolvedor de Software. Situado no Brasil
			</p>
			<p className="text-small max-w-x1 mb-6 font-bold">
				Sou uma pessoa com muita sede de conhecimento. Ótimo em aprender sozinho, e em trabalho em equipe. <br />
				Comecei meu aprendizado em 2020, e foi aonde me encontrei como pessoa e como profissional.
			</p>
		</div>
	)
}

export default Intro;