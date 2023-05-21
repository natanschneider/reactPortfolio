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
						<div className="mb-12 grow-0 shrink-0 basis-auto w-full lg:w-6/12 px-3 lg:px-6 md:mr-16">
							<a
								href="mailto:natanschneider@protonmail.com"
								target="_blank"
								rel="noopener noreferrer">
							<div className="flex items-start">
								<div className="shrink-0">
									<div className="p-4 bg-blue-600 rounded-md shadow-md w-14 h-14 flex items-center justify-center">
										<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
										     strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
											<path strokeLinecap="round" strokeLinejoin="round"
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
							</a>
						</div>
						<div className="mb-12 grow-0 shrink-0 basis-auto w-full lg:w-6/12 px-3 lg:px-6">
							<a
								href="https://www.linkedin.com/in/natanschneider/"
								target="_blank"
								rel="noopener noreferrer">
								<div className="flex items-start">
									<div className="shrink-0">
										<div className="p-4 bg-blue-600 rounded-md shadow-md w-14 h-14 flex items-center justify-center">
											<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
											     strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
												<path strokeLinecap="round" strokeLinejoin="round"
												      d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"/>
											</svg>
										</div>
									</div>
									<div className="grow ml-6">
										<p className="font-bold mb-1">LinkedIn</p>
										<p className="text-gray-500">/in/natanschneider/</p>
									</div>
								</div>
							</a>
						</div>
						<div className="mb-12 grow-0 shrink-0 basis-auto w-full lg:w-6/12 px-3 lg:px-6 md:mr-16">
							<a
								href="https://github.com/natanschneider"
								target="_blank"
								rel="noopener noreferrer">
								<div className="flex align-start">
									<div className="shrink-0">
										<div className="p-4 bg-blue-600 rounded-md shadow-md w-14 h-14 flex items-center justify-center">
											<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
											     strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
												<path strokeLinecap="round" strokeLinejoin="round"
												      d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"/>
											</svg>
										</div>
									</div>
									<div className="grow ml-6">
										<p className="font-bold mb-1">Github</p>
										<p className="text-gray-500">@natanschneider</p>
									</div>
								</div>
							</a>
						</div>
						<div className="mb-12 grow-0 shrink-0 basis-auto w-full lg:w-6/12 px-3 lg:px-6">
							<a
								href="https://whatsa.me/5551995559012"
								target="_blank"
								rel="noopener noreferrer">
								<div className="flex align-start">
									<div className="shrink-0">
										<div className="p-4 bg-blue-600 rounded-md shadow-md w-14 h-14 flex items-center justify-center">
											<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
											     strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
												<path strokeLinecap="round" strokeLinejoin="round"
												      d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"/>
											</svg>
										</div>
									</div>
									<div className="grow ml-6">
										<p className="font-bold mb-1">Whatsapp</p>
										<p className="text-gray-500">51 99555-9012</p>
									</div>
								</div>
							</a>
						</div>
				</div>
			</div>
		</div>
		</div>
	)
}

export default Contact;