import React from 'react'
import { twMerge } from 'tailwind-merge'

/**
 * Render a panel component with various styling options and effects.
 *
 * @param {object} props - The props object containing various options for the Panel component.
 * @param {boolean} props.cta - Whether the Panel should have a CTA style.
 * @param {boolean} props.alt - Whether the Panel should have an alternate style.
 * @param {boolean} props.rounded - Whether the Panel should have rounded corners.
 * @param {boolean} props.pill - Whether the Panel should have a pill shape.
 * @param {boolean} props.gradient - Whether the Panel should have a gradient background.
 * @param {boolean} props.border - Whether the Panel should have a border.
 * @param {boolean} props.shadow - Whether the Panel should have a shadow.
 * @param {boolean} props.scale - Whether the Panel should scale on hover.
 * @param {boolean} props.square - Whether the Panel should have a square aspect ratio.
 * @param {boolean} props.glow - Whether the Panel should have a glow effect.
 * @param {boolean} props.gradientBorder - Whether the Panel should have a gradient border.
 * @param {boolean} props.blur - Whether the Panel should have a blurred background.
 * @param {string} props.className - Additional class names to be applied to the Panel.
 * @param {ReactNode} props.children - The children elements of the Panel.
 * @return {JSX.Element} The rendered Panel component.
 */
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
				'group relative grow bg-surface p-6 text-light duration-150 ease-in-out',

				// Alternate General Styles
				cta && 'bg-primary text-dark',
				alt && 'border border-surface bg-mantle',

				// Base Properties
				rounded && 'rounded-xl',
				pill && 'items-center rounded-full px-16',
				border && 'border border-primary',
				gradient && 'bg-gradient-to-tr from-primary to-purple-400 text-dark',
				square && 'aspect-square items-center justify-center',
				shadow && 'shadow-lg shadow-[rgba(0,0,0,0.5)]',
				blur && 'bg-opacity-50 backdrop-blur',

				// Effects
				scale && 'hover:scale-105 active:scale-105',

				// Complex Style Modifiers
				gradientBorder && 'bg-gradient-to-tr from-primary to-purple-400 p-[1px]',

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
						'h-full w-full bg-mantle px-4 py-3',
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
