import React from 'react'
import { twMerge } from 'tailwind-merge'

const Panel = (props) => {
	const {
		children,
		cta = false,
		alt = false,
		rounded = false,
		pill = false,
		gradient = false,
		border = false,
		shadow = false,
		scale = false,
		square = false,
		glow = false,
		gradientBorder = false,
		blur = false,
		className,
	} = props

	return (
		<section
			className={twMerge([
				// Default Style
				'group relative grow bg-primary p-6 text-text duration-150 ease-in-out',

				// Alternate General Styles
				cta && 'bg-accent text-secondary',
				alt && 'border border-primary bg-secondary',

				// Base Properties
				rounded && 'rounded-xl',
				pill && 'items-center rounded-full px-16',
				border && 'border border-accent',
				gradient && 'bg-gradient-to-tr from-accent to-purple-400 text-secondary',
				square && 'aspect-square items-center justify-center',
				shadow && 'shadow-lg shadow-[rgba(0,0,0,0.5)]',
				blur && 'bg-opacity-50 backdrop-blur',

				// Effects
				scale && 'hover:scale-105 active:scale-105',

				// Complex Style Modifiers
				gradientBorder && 'bg-gradient-to-tr from-accent to-purple-400 p-[1px]',

				// Custom Styles
				className,
			])}
		>
			{/* Child Elements */}
			{!gradientBorder && children}

			{/* More Complex Effects */}
			{glow && (
				<div
					className={twMerge([
						'absolute left-0 top-0 h-full w-full shadow-[0_0_5px_1px_#74c7ec] duration-150 ease-in-out hover:shadow-[0_0_10px_3px_#74c7ec] group-hover:animate-pulse group-active:shadow-[0_0_15px_5px_#74c7ec]',
						rounded && 'rounded-xl',
						pill && 'rounded-full',
					])}
				></div>
			)}
			{gradientBorder && (
				<div
					className={twMerge([
						'h-full w-full bg-secondary px-4 py-3',
						rounded && 'rounded-xl',
						pill && 'rounded-full',
					])}
				>
					{children}
				</div>
			)}
		</section>
	)
}

export default Panel
