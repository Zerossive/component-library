import React from 'react'
import { twMerge } from 'tailwind-merge'

/**
 * Renders a modal component with customizable options.
 *
 * @param {Object} props - The properties for the modal component.
 * @param {Object} props.modal - The ref to the modal component.
 * @param {ReactNode} props.children - The content of the modal.
 * @param {boolean} [props.fullWidth=false] - Whether the modal should take up the full width of the window.
 * @param {boolean} [props.noMaxWidth=false] - Whether the modal should stretch to fit the content.
 * @param {boolean} [props.alt=false] - Whether to use alternate styling for the modal.
 * @param {boolean} [props.rounded=false] - Whether to apply rounded corners to the modal.
 * @param {boolean} [props.border=false] - Whether to apply a border to the modal.
 * @param {boolean} [props.gradient=false] - Whether to apply a gradient background to the modal.
 * @param {boolean} [props.square=false] - Whether to make the modal a square shape.
 * @param {boolean} [props.blur=false] - Whether to apply a blur effect to the modal.
 * @param {boolean} [props.noPadding=false] - Whether to remove padding from the modal.
 * @param {string} [props.className] - Additional CSS classes to apply to the modal.
 * @returns {ReactNode} The rendered modal component.
 */
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
				'z-50 bg-transparent backdrop:bg-dark backdrop:bg-opacity-80',

				// Max width handling (fullWidth sets to the full window, noMaxWidth lets content stretch the modal, default is for max prose width)
				fullWidth || noMaxWidth ? `${fullWidth && 'w-full'}` : 'max-w-prose',
			])}
			onClick={(e) => handleModalClick(e)}
		>
			<div
				className={twMerge([
					// Default Style
					'flex flex-col items-start gap-3 overflow-hidden bg-surface p-6 text-light duration-150 ease-in-out',

					// Alternate General Styles
					alt && 'border border-surface bg-base',

					// Base Properties
					rounded && 'rounded-xl',
					border && 'border border-primary',
					gradient && 'bg-gradient-to-tr from-primary to-purple-400 text-dark',
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
