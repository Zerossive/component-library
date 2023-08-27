import { useRef } from 'react'
import Button from './Components/Button'
import Navbar from './Components/Navbar'
import Panel from './Components/Panel'
import Toggle from './Components/Toggle'
import Modal from './Components/Modal'
import StickySidebar from './Components/StickySidebar'
import VisibilitySensor from 'react-visibility-sensor'

function App() {
	const modal = useRef(0)
	const navbarSelection = useRef(0)
	const stickySidebarSelection = useRef(0)
	const buttonSection = useRef(0)
	const panelSection = useRef(0)
	const toggleSection = useRef(0)
	const modalSection = useRef(0)

	return (
		<>
			<Navbar
				title='Component Library'
				caps
				leftAlign
				border
				stickyMobile
				logoClick={() => (location.href = '/')}
				titleClick={() => (location.href = '/')}
			/>
			<div className='container prose prose-invert relative mx-auto p-6'>
				{/* Sticky Sidebars */}
				<StickySidebar rightAlign offset={0}>
					<Button
						rounded
						underline
						transparent
						raise
						onClick={() => document.body.scrollIntoView({ behavior: 'smooth' })}
					>
						▲ Top
					</Button>
					<Button
						rounded
						underline
						transparent
						raise
						onClick={() =>
							navbarSelection.current.scrollIntoView({ behavior: 'smooth' })
						}
					>
						Navbar
					</Button>
					<Button
						rounded
						underline
						transparent
						raise
						onClick={() =>
							stickySidebarSelection.current.scrollIntoView({ behavior: 'smooth' })
						}
					>
						Sticky Sidebars
					</Button>
					<Button
						rounded
						underline
						transparent
						raise
						onClick={() => buttonSection.current.scrollIntoView({ behavior: 'smooth' })}
					>
						Buttons
					</Button>
					<Button
						rounded
						underline
						transparent
						raise
						onClick={() => panelSection.current.scrollIntoView({ behavior: 'smooth' })}
					>
						Panels
					</Button>
					<Button
						rounded
						underline
						transparent
						raise
						onClick={() => toggleSection.current.scrollIntoView({ behavior: 'smooth' })}
					>
						Toggles
					</Button>
					<Button
						rounded
						underline
						transparent
						raise
						onClick={() => modalSection.current.scrollIntoView({ behavior: 'smooth' })}
					>
						Modal
					</Button>
				</StickySidebar>
				<StickySidebar right rightAlign offset={0}>
					<Panel alt rounded className='max-w-[18rem]'>
						<p>
							<b>Panel on Right Sidebar</b>
						</p>
						<p>These panels have to be quite thin to prevent overflow</p>
					</Panel>
				</StickySidebar>

				{/* Title and Summary */}
				<VisibilitySensor partialVisibility minTopValue={150}>
					{({ isVisible }) => (
						<article
							className={`duration-500 ease-in-out ${
								isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
							}`}
						>
							<h1>Components</h1>
							<p>
								These are some components I've made to aid in the development of new
								websites using React, Tailwind, the Tailwind Merge plugin, and React
								Visibility Sensor.
							</p>
							<p>
								The color palette is a simple implementation of the{' '}
								<a href='https://github.com/catppuccin/catppuccin'>
									Catppuccin Mocha
								</a>{' '}
								theme with sapphire accents.
							</p>
						</article>
					)}
				</VisibilitySensor>

				{/* Navbar Explainer */}
				<VisibilitySensor partialVisibility minTopValue={150}>
					{({ isVisible }) => (
						<article
							ref={navbarSelection}
							className={`duration-500 ease-in-out ${
								isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
							}`}
						>
							<h2>Navbar</h2>
							<p>
								The navbar component features a few simple options including
								alignment, borders, click handlers, and position
							</p>
						</article>
					)}
				</VisibilitySensor>

				{/* Sticky Sidebar Explainer */}
				<VisibilitySensor partialVisibility minTopValue={150}>
					{({ isVisible }) => (
						<article
							ref={stickySidebarSelection}
							className={`duration-500 ease-in-out ${
								isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
							}`}
						>
							<h2>Sticky Sidebars</h2>
							<p>
								The sticky sidebars are made for pages with constrained/thin body
								elements. As such they have to be quite thin, and don't show up on
								smaller displays.
							</p>
							<p>Options include side selection, alignment, and offsets.</p>
						</article>
					)}
				</VisibilitySensor>

				{/* Buttons */}
				<VisibilitySensor partialVisibility minTopValue={150}>
					{({ isVisible }) => (
						<section
							ref={buttonSection}
							className={`duration-500 ease-in-out ${
								isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
							}`}
						>
							<h2>Buttons</h2>
							<p>
								The button component features the most optional properties ranging
								from alternate styles, to border radius, size, hover effects, active
								effects, borders, and more.
							</p>
							<div className='not-prose flex flex-wrap items-center justify-between gap-6'>
								<Button>Default</Button>
								<Button cta>Call to Action</Button>
								<Button alt>Alternate</Button>
								<Button gradientBorder caps raise scale>
									button
								</Button>
								<Button gradient rounded small caps scale>
									button
								</Button>
								<Button pill cta caps changeText='alt text' border>
									button
								</Button>
								<Button square pill alt border scale gradientText>
									Button
								</Button>
								<Button transparent underline rounded raise>
									Button
								</Button>
								<Button rounded simulate>
									Button
								</Button>
								<Button caps pill glow alt className='grow'>
									button
								</Button>
							</div>
						</section>
					)}
				</VisibilitySensor>

				{/* Panels */}
				<VisibilitySensor partialVisibility minTopValue={150}>
					{({ isVisible }) => (
						<section
							ref={panelSection}
							className={`duration-500 ease-in-out ${
								isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
							}`}
						>
							<h2>Panels</h2>
							<p>
								Panel components feature a similar subset of options to buttons
								along with things like blurred background.
							</p>
							<div className='not-prose flex flex-wrap gap-6'>
								<Panel>
									<article>
										<h1 className='pb-6 text-2xl'>Panel</h1>
										<p>default</p>
									</article>
								</Panel>
								<Panel cta>
									<article>
										<h1 className='pb-6 text-2xl'>Panel</h1>
										<p>call to action</p>
									</article>
								</Panel>
								<Panel alt>
									<article>
										<h1 className='pb-6 text-2xl'>Panel</h1>
										<p>alternate</p>
									</article>
								</Panel>
								<Panel rounded border square alt glow>
									<article>
										<h1 className='pb-6 text-2xl'>Panel</h1>
										<p>rounded border square alt glow</p>
									</article>
								</Panel>
								<Panel rounded gradient scale>
									<article>
										<h1 className='pb-6 text-2xl'>Panel</h1>
										<p>rounded, gradient, scale</p>
									</article>
								</Panel>
								<Panel gradientBorder>
									<article>
										<h1 className='pb-6 text-2xl'>Panel</h1>
										<p>gradient border</p>
									</article>
								</Panel>
								<div className='flex grow bg-[url("https://source.unsplash.com/random")] bg-cover p-6'>
									<Panel blur shadow scale rounded>
										<article>
											<h1 className='pb-6 text-2xl'>Panel</h1>
											<p>blur, shadow, scale, rounded</p>
										</article>
									</Panel>
								</div>
							</div>
						</section>
					)}
				</VisibilitySensor>

				{/* Toggles */}
				<VisibilitySensor partialVisibility minTopValue={150}>
					{({ isVisible }) => (
						<section
							ref={toggleSection}
							className={`duration-500 ease-in-out ${
								isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
							}`}
						>
							<h2>Toggles</h2>
							<p>
								The toggle component also features properties similar to buttons
								along with default states, and label placement.
							</p>
							<div className='not-prose flex flex-col gap-3'>
								<Toggle label='Default' />
								<Toggle label='Alternate' alt />
								<Toggle
									label='Clickable Label'
									pill
									small
									labelClick
									overflow
									alt
								/>
								<Toggle label='On By Default' rounded alt defaultOn overflow />
								<Toggle label='Top Label' pill border labelTop />
								<Toggle
									label='Scale on Hover'
									rounded
									gradient
									border
									alt
									defaultOn
									scale
								/>
							</div>
						</section>
					)}
				</VisibilitySensor>

				{/* Modals */}
				<VisibilitySensor partialVisibility minTopValue={50}>
					{({ isVisible }) => (
						<section
							ref={modalSection}
							className={`duration-500 ease-in-out ${
								isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
							}`}
						>
							<h2>Modals</h2>
							<p>
								Modals have a similar feature set to panels, require a bit more to
								setup, and by default close when clicking the background.
							</p>
							<div className='not-prose flex flex-wrap items-center gap-3'>
								<Modal modal={modal} alt rounded blur noPadding>
									<article className='flex flex-col items-start gap-3 p-6'>
										<h1 className='text-2xl font-bold'>Modal</h1>
										<p>This is a modal.</p>
										<p>
											Lorem, ipsum dolor sit amet consectetur adipisicing
											elit. Amet, a dolor. Dolor, ipsa. Ducimus nobis animi
											ratione molestias numquam consectetur.
										</p>
										<Button
											onClick={() => modal.current?.close()}
											transparent
											rounded
											border
											className='self-end'
										>
											Close
										</Button>
									</article>
								</Modal>
								<Button
									onClick={() => modal.current?.showModal()}
									transparent
									rounded
									border
								>
									Open Modal
								</Button>
							</div>
						</section>
					)}
				</VisibilitySensor>
			</div>
		</>
	)
}

export default App
