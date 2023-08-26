import React, { useState } from 'react'
import { twMerge } from 'tailwind-merge'

const Toggle = (props) => {
	const {
		label = '',
		labelTop = false,
		alt = false,
		rounded = false,
		pill = false,
		gradient = false,
		border = false,
		scale = false,
		overflow = false,
		small = false,
		large = false,
		defaultOn = false,
		labelClick = false,
		onClick,
		className,
	} = props

	const [toggled, setToggled] = useState(defaultOn ? true : false)

	const handleClick = () => {
		onClick && onClick(!toggled)
		setToggled(!toggled)
	}

	return (
		<div
			className={twMerge([
				'flex items-center gap-3',
				labelTop && 'flex-col items-start',
				labelClick && 'cursor-pointer',
			])}
			onClick={labelClick ? handleClick : null}
		>
			{label && labelTop && <label className='cursor-[inherit]'>{label}</label>}
			<button
				className={twMerge([
					// Default Style
					'group relative h-8 w-16 bg-primary duration-150',

					// Alternate General Styles
					alt && 'bg-background outline outline-1 outline-primary',

					// Base Properties
					small && 'h-4 w-8',
					large && 'h-12 w-24',
					rounded && 'rounded-md',
					pill && 'rounded-full',
					border && 'outline outline-2 outline-accent',

					// Toggled State
					toggled && 'bg-accent bg-opacity-50',
					alt && toggled && 'bg-secondary bg-opacity-100',

					// Custom Styles
					className,
				])}
				onClick={labelClick ? null : handleClick}
			>
				<div
					className={twMerge([
						// Default Style
						'absolute left-0 top-1/2 aspect-square h-full w-auto -translate-y-1/2 bg-accent transition-all duration-150',
						toggled && 'translate-x-full',

						// Alternate General Styles
						alt && 'bg-primary outline outline-1 outline-primary',

						// Base Properties
						rounded && 'rounded-md',
						pill && 'rounded-full',
						overflow && 'scale-125',
						border && 'scale-105',
						gradient && 'bg-gradient-to-tr from-accent to-rose-400 text-secondary',

						// Effects
						scale && 'group-hover:scale-125',

						// Custom Styles
						className,
					])}
				></div>
			</button>
			{label && !labelTop && <label className='cursor-[inherit]'>{label}</label>}
		</div>
	)
}

export default Toggle
