import React from 'react'
import { twMerge } from 'tailwind-merge'

/**
 * Generates a sticky sidebar component.
 *
 * @param {Object} props - The props object.
 * @param {ReactNode} props.children - The child components.
 * @param {boolean} props.right - Flag indicating if sidebar is on the right side.
 * @param {boolean} props.centerAlign - Flag indicating if sidebar is center-aligned.
 * @param {boolean} props.rightAlign - Flag indicating if sidebar is right-aligned.
 * @param {number} props.offset - The offset from the top of the page.
 * @param {string} props.className - Additional class name for the component.
 * @return {ReactNode} The rendered sticky sidebar component.
 */
const StickySidebar = (props) => {
	const {
		children,
		right = false,
		centerAlign = false,
		rightAlign = false,
		offset = 0,
		className,
	} = props
	return (
		<section
			className={twMerge([
				// Default Style
				'pointer-events-none sticky top-0 z-10 origin-left scale-x-50 opacity-0 duration-150 ease-in-out xl:pointer-events-auto xl:scale-x-100 xl:opacity-100',

				// Base Properties
				right && 'w-full origin-right',
			])}
			style={{ top: offset }}
		>
			<div
				className={twMerge([
					// Default Style
					'fixed top-0 hidden w-max flex-col items-start p-6 xl:flex',

					// Base Properties
					right ? 'right-0 translate-x-full' : 'left-0 -translate-x-full',
					rightAlign && 'items-end',
					centerAlign && 'items-center',

					// Custom Styles
					className,
				])}
			>
				{children}
			</div>
		</section>
	)
}

export default StickySidebar
