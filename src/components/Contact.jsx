import React from "react";
import Title from "./Title.jsx";

export function Contact() {
	return (
		<div>
			<Title>Contato</Title>

			<div className="flex flex-wrap">
				<div className="grow-0 shrink-0 basis-auto mb-12 lg:mb-0 w-full lg:w-5/12 px-3 lg:px-6">
					<p>
						Sinta-se livre para me contatar em qualquer uma destas Redes! <br />
						Toda e qualquer mensagem será bem vinda!
					</p>
				</div>
			<div className="grow-0 shrink-0 basis-auto w-full lg:w-7/12">
				<div className="flex flex-wrap">
					<div className="mb-12 grow-0 shrink-0 basis-auto w-full lg:w-6/12 px-3 lg:px-6">
						<div className="flex items-start">
							<div className="shrink-0">
								<div className="p-4 bg-blue-600 rounded-md shadow-md w-14 h-14 flex items-center justify-center">
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
									     stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
										<path stroke-linecap="round" stroke-linejoin="round"
										      d="M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H6.911a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661z"/>
									</svg>
								</div>
							</div>
							<div className="grow ml-6">
								<p className="font-bold mb-1">Email</p>
								<p className="text-gray-500">natanschneider@protonmail.com</p>
								{/* TODO Add Correct Padding */}
							</div>
						</div>
					</div>
					<div className="mb-12 grow-0 shrink-0 basis-auto w-full lg:w-6/12 px-3 lg:px-6">
						<div className="flex items-start">
							<div className="shrink-0">
								<div className="p-4 bg-blue-600 rounded-md shadow-md w-14 h-14 flex items-center justify-center">
									{/* TODO LinkedIn SVG */}
								</div>
							</div>
							<div className="grow ml-6">
								<p className="font-bold mb-1">LinkedIn</p>
								<p className="text-gray-500">/in/natanschneider/</p>
							</div>
						</div>
					</div>
					<div className="mb-12 grow-0 shrink-0 basis-auto w-full lg:w-6/12 px-3 lg:px-6">
						<div className="flex align-start">
							<div className="shrink-0">
								<div className="p-4 bg-blue-600 rounded-md shadow-md w-14 h-14 flex items-center justify-center">
									{/* TODO GitHub SVG */}
								</div>
							</div>
							<div className="grow ml-6">
								<p className="font-bold mb-1">Github</p>
								<p className="text-gray-500">@natanschneider</p>
							</div>
						</div>
					</div>
					<div className="mb-12 grow-0 shrink-0 basis-auto w-full lg:w-6/12 px-3 lg:px-6">
						<div className="flex align-start">
							<div className="shrink-0">
								<div className="p-4 bg-blue-600 rounded-md shadow-md w-14 h-14 flex items-center justify-center">
									{/* TODO WhatsAPP SVG */}
								</div>
							</div>
							<div className="grow ml-6">
								<p className="font-bold mb-1">Whatsapp</p>
								<p className="text-gray-500">+55 51 9955-9012</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		</div>
	)
}

export default Contact;