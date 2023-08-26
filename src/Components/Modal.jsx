import React from 'react'
import { twMerge } from 'tailwind-merge'

const Modal = (props) => {
	const {
		modal,
		children,
		fullWidth = false,
		noMaxWidth = false,
		alt = false,
		rounded = false,
		border = false,
		gradient = false,
		square = false,
		blur = false,
		noPadding = false,
		className,
	} = props

	// Close modal on clicking outside
	const handleModalClick = (e) => {
		if (e.target === modal.current) modal.current.close()
	}

	return (
		<dialog
			ref={modal}
			className={twMerge([
				// Default Style
				'z-50 bg-transparent backdrop:bg-background backdrop:bg-opacity-80',

				// Max width handling (fullWidth sets to the full window, noMaxWidth lets content stretch the modal, default is for max prose width)
				fullWidth || noMaxWidth ? `${fullWidth && 'w-full'}` : 'max-w-prose',
			])}
			onClick={(e) => handleModalClick(e)}
		>
			<div
				className={twMerge([
					// Default Style
					'flex flex-col items-start gap-3 overflow-hidden bg-primary p-6 text-text duration-150 ease-in-out',

					// Alternate General Styles
					alt && 'border border-primary bg-secondary',

					// Base Properties
					rounded && 'rounded-xl',
					border && 'border border-accent',
					gradient && 'bg-gradient-to-tr from-accent to-rose-400 text-secondary',
					square && 'aspect-square grow-0 items-center justify-center',
					blur && 'bg-opacity-50 backdrop-blur-xl',
					noPadding && 'p-0',

					// Custom Styles
					className,
				])}
			>
				{children}
			</div>
		</dialog>
	)
}

export default Modal
