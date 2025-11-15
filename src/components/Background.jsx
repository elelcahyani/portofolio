import React, { useEffect, useRef } from "react"

const AnimatedBackground = () => {
	const blobRefs = useRef([])
	const initialPositions = [
		{ x: -4, y: 0 },
		{ x: -4, y: 0 },
		{ x: 20, y: -8 },
		{ x: 20, y: -8 },
	]

	useEffect(() => {
		let currentScroll = 0
		let requestId

		const handleScroll = () => {
			const newScroll = window.pageYOffset
			const scrollDelta = newScroll - currentScroll
			currentScroll = newScroll

			blobRefs.current.forEach((blob, index) => {
				// Check if blob exists and has style property
				if (!blob || !blob.style) return;
				
				const initialPos = initialPositions[index]
				if (!initialPos) return;

				// Calculating movement in both X and Y direction
				const xOffset = Math.sin(newScroll / 100 + index * 0.5) * 340 // Horizontal movement
				const yOffset = Math.cos(newScroll / 100 + index * 0.5) * 40 // Vertical movement

				const x = initialPos.x + xOffset
				const y = initialPos.y + yOffset

				// Apply transformation with smooth transition
				blob.style.transform = `translate(${x}px, ${y}px)`
				blob.style.transition = "transform 1.4s ease-out"
			})

			requestId = requestAnimationFrame(handleScroll)
		}

		window.addEventListener("scroll", handleScroll)
		return () => {
			window.removeEventListener("scroll", handleScroll)
			cancelAnimationFrame(requestId)
		}
	}, [])

	return (
		<div className="fixed inset-0 ">
			<div className="absolute inset-0">
				<div
					ref={(ref) => (blobRefs.current[0] = ref)}
					className="absolute top-0 -left-4 md:w-96 md:h-96 w-72 h-72 bg-cyan-400 dark:bg-cyan-400 light:bg-cyan-300 rounded-full mix-blend-multiply filter blur-[128px] opacity-40 md:opacity-20 dark:opacity-40 dark:md:opacity-20 light:opacity-20 light:md:opacity-10"></div>
				<div
					ref={(ref) => (blobRefs.current[1] = ref)}
					className="absolute top-0 -right-4 w-96 h-96 bg-blue-500 dark:bg-blue-500 light:bg-blue-400 rounded-full mix-blend-multiply filter blur-[128px] opacity-40 md:opacity-20 dark:opacity-40 dark:md:opacity-20 light:opacity-20 light:md:opacity-10 hidden sm:block"></div>
				<div
					ref={(ref) => (blobRefs.current[2] = ref)}
					className="absolute -bottom-8 left-[-40%] md:left-20 w-96 h-96 bg-cyan-500 dark:bg-cyan-500 light:bg-cyan-400 rounded-full mix-blend-multiply filter blur-[128px] opacity-40 md:opacity-20 dark:opacity-40 dark:md:opacity-20 light:opacity-20 light:md:opacity-10"></div>
					<div
					ref={(ref) => (blobRefs.current[3] = ref)}
					className="absolute -bottom-10 right-20 w-96 h-96 bg-blue-400 dark:bg-blue-400 light:bg-blue-300 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 md:opacity-10 dark:opacity-20 dark:md:opacity-10 light:opacity-15 light:md:opacity-5 hidden sm:block"></div>
			</div>
			<div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f10_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f10_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#4f4f4f10_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f10_1px,transparent_1px)] light:bg-[linear-gradient(to_right,#e2e8f010_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f010_1px,transparent_1px)] bg-[size:24px_24px]"></div>
		</div>
	)
}

export default AnimatedBackground

