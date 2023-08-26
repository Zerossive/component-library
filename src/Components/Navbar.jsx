import React, { useState } from 'react'
import { twMerge } from 'tailwind-merge'
import Button from './Button'

const Navbar = (props) => {
	const {
		title = '',
		titleClick,
		logoClick,
		caps = false,
		transparent = false,
		leftAlign = false,
		border = false,
		sticky = false,
		stickyMobile = false,
		linksLeft = false,
		className,
	} = props

	const [showLinks, setShowLinks] = useState(false)

	const links = [
		{ title: 'Home', url: '/' },
		{ title: 'About', url: '/about' },
		{ title: 'Contact', url: '/contact' },
	]

	return (
		<nav
			className={twMerge([
				'relative z-30 flex w-full flex-col bg-secondary font-bold md:flex-row md:px-12',
				caps && 'uppercase',
				transparent && 'bg-transparent',
				border && 'border-b-2 border-primary',
				sticky && 'sticky top-0',
				stickyMobile && 'sticky top-0 md:relative',
				linksLeft && 'justify-between',
				className,
			])}
		>
			<div
				className={twMerge([
					'flex w-full items-center justify-between gap-6 bg-secondary px-3 py-2',
					linksLeft && 'w-auto',
				])}
			>
				{/* Logo */}
				<div
					className={twMerge(['aspect-square h-12', logoClick && 'cursor-pointer'])}
					onClick={logoClick}
				>
					<img src='/logo.svg' className='h-full w-full' />
				</div>

				{/* Title */}
				<h1
					className={twMerge([
						'grow text-center text-2xl',
						leftAlign && 'text-left',
						titleClick && 'cursor-pointer',
						linksLeft && 'md:order-first md:grow-0',
					])}
					onClick={titleClick}
				>
					{title}
				</h1>

				{/* Menu Button */}
				<svg
					className={twMerge([
						'h-10 w-12 cursor-pointer fill-primary p-2 duration-150 ease-in-out hover:opacity-80 active:scale-90 active:opacity-100 md:hidden',
					])}
					viewBox='0 0 100 100'
					preserveAspectRatio='none'
					onClick={() => setShowLinks(!showLinks)}
				>
					<rect x='0' y='0' width='100%' height='25' />
					<rect x='0' y='37' width='100' height='25' />
					<rect x='0' y='75' width='100' height='25' />
				</svg>
			</div>
			<ul
				className={twMerge([
					'absolute bottom-0 -z-10 flex h-max w-full flex-col items-center bg-secondary duration-150 md:static md:z-0 md:w-auto md:flex-row',
					showLinks && 'translate-y-full md:translate-y-0',
					linksLeft && 'order-first justify-start',
				])}
			>
				{links.map((link) => (
					<li
						key={link.title}
						className={twMerge([
							'w-full p-3',
							border && 'border-b-2 border-primary first:border-t-2 md:border-none',
						])}
					>
						<a href={link.url}>
							<Button fullWidth alt caps className={leftAlign && 'justify-start'}>
								{link.title}
							</Button>
						</a>
					</li>
				))}
			</ul>
		</nav>
	)
}

export default Navbar
