import React from 'react'
import { twMerge } from 'tailwind-merge'

/**
 * Render a button component with various styling options and effects.
 *
 * @param {Object} props - The properties of the button component.
 * @param {ReactNode} props.children - The child elements of the button.
 * @param {boolean} [props.cta=false] - Determines if the button is a call-to-action button.
 * @param {boolean} [props.alt=false] - Determines if the button has an alternate style.
 * @param {boolean} [props.rounded=false] - Determines if the button has rounded corners.
 * @param {boolean} [props.pill=false] - Determines if the button has a pill shape.
 * @param {boolean} [props.gradient=false] - Determines if the button has a gradient background.
 * @param {boolean} [props.gradientText=false] - Determines if the button's text has a gradient effect.
 * @param {boolean} [props.border=false] - Determines if the button has a border.
 * @param {boolean} [props.transparent=false] - Determines if the button has a transparent background.
 * @param {boolean} [props.caps=false] - Determines if the button's text is in uppercase.
 * @param {boolean} [props.fullWidth=false] - Determines if the button spans the full width.
 * @param {boolean} [props.square=false] - Determines if the button has a square shape.
 * @param {boolean} [props.scale=false] - Determines if the button scales down when active.
 * @param {boolean} [props.raise=false] - Determines if the button raises slightly when hovered or active.
 * @param {boolean} [props.glow=false] - Determines if the button has a glowing effect.
 * @param {string} [props.changeText=''] - The text that appears when the button is hovered.
 * @param {boolean} [props.small=false] - Determines if the button has a small size.
 * @param {boolean} [props.large=false] - Determines if the button has a large size.
 * @param {boolean} [props.gradientBorder=false] - Determines if the button has a gradient border.
 * @param {boolean} [props.underline=false] - Determines if the button has an underline effect.
 * @param {boolean} [props.simulate=false] - Determines if the button simulates a specific effect.
 * @param {Function} props.onClick - The function to be called when the button is clicked.
 * @param {string} props.className - The custom class name for the button.
 * @return {ReactNode} The rendered button component.
 */
const Button = (props) => {
	const {
		children,
		cta = false,
		alt = false,
		rounded = false,
		pill = false,
		gradient = false,
		gradientText = false,
		border = false,
		transparent = false,
		caps = false,
		fullWidth = false,
		square = false,
		scale = false,
		raise = false,
		glow = false,
		changeText = '',
		small = false,
		large = false,
		gradientBorder = false,
		underline = false,
		simulate = false,
		onClick,
		className,
	} = props

	return (
		<button
			className={twMerge(
				// Default Style
				'group relative inline-flex items-center justify-center gap-3 bg-surface px-6 py-3 font-bold text-light duration-150 ease-in-out hover:opacity-90 active:opacity-80',

				// Alternate General Styles
				cta && 'bg-primary text-dark',
				alt && 'border border-surface bg-mantle hover:border-primary hover:text-primary',

				// Base Properties
				transparent && 'bg-transparent text-primary',
				gradient && 'bg-gradient-to-tr from-primary to-purple-400 text-dark',
				gradientText &&
					'bg-gradient-to-tr from-primary to-purple-400 bg-clip-text text-transparent',
				border && 'border border-primary',
				rounded && 'rounded-md', //adjust complex effects below when changing rounded amount
				pill && 'rounded-full',
				caps && 'uppercase',
				square && 'aspect-square p-3',
				fullWidth && 'w-full',
				small && 'px-2 py-1',
				large && 'px-8 py-4 text-2xl',

				// Effects
				raise && 'hover:-translate-y-1 active:-translate-y-1',
				scale && 'active:scale-95 active:opacity-100',

				// Complex Style Modifiers
				changeText && 'overflow-hidden',
				gradientBorder && 'bg-gradient-to-tr from-primary to-purple-400 p-[1px]', // pading effects border width
				simulate &&
					'border-b border-blue-400 bg-blue-500 [box-shadow:0_10px_0_0_#1b6ff8,0_15px_0_0_#1b70f841] active:translate-y-1 active:border-b-0 active:[box-shadow:0_0px_0_0_#1b6ff8,0_0px_0_0_#1b70f841]',

				// Custom Styles
				className
			)}
			onClick={onClick}
		>
			{/* Child Elements */}
			{!gradientBorder && !simulate && children}

			{/* More Complex Effects */}
			{glow && (
				<div
					className={twMerge([
						'absolute left-0 top-0 h-full w-full shadow-[0_0_5px_1px_#74c7ec] duration-150 ease-in-out hover:shadow-[0_0_10px_3px_#74c7ec] group-hover:animate-pulse group-active:shadow-[0_0_15px_5px_#74c7ec]',
						rounded && 'rounded-md',
						pill && 'rounded-full',
					])}
				></div>
			)}
			{changeText && (
				<div
					className={twMerge([
						'absolute left-0 top-0 flex h-full w-full translate-y-full items-center justify-center bg-mantle text-light opacity-0 duration-150 group-hover:-translate-y-0 group-hover:opacity-100',
					])}
				>
					{changeText}
				</div>
			)}
			{gradientBorder && (
				<div
					className={twMerge([
						'grow bg-mantle px-4 py-3',
						small && 'px-2 py-1',
						rounded && 'rounded-md',
						pill && 'rounded-full',
					])}
				>
					{children}
				</div>
			)}
			{underline && (
				<div
					className={twMerge([
						'absolute left-1/2 top-full h-1 w-3/4 -translate-x-1/2 bg-primary opacity-0 duration-150 ease-in-out group-hover:-translate-y-3 group-hover:opacity-100 group-active:w-5/6 group-active:opacity-100',
						(rounded || pill) && 'rounded-full',
					])}
				></div>
			)}
			{simulate && (
				<div className={twMerge(['', rounded && 'rounded-md', pill && 'rounded-full'])}>
					{children}
				</div>
			)}
		</button>
	)
}

export default Button
