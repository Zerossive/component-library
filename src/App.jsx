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
				{/* Floating Sidebars */}
				<StickySidebar rightAlign offset={0}>
					<Button
						rounded
						underline
						noBackground
						raise
						onClick={() => document.body.scrollIntoView({ behavior: 'smooth' })}
					>
						▲ Top
					</Button>
					<Button
						rounded
						underline
						noBackground
						raise
						onClick={() => buttonSection.current.scrollIntoView({ behavior: 'smooth' })}
					>
						Buttons
					</Button>
					<Button
						rounded
						underline
						noBackground
						raise
						onClick={() => panelSection.current.scrollIntoView({ behavior: 'smooth' })}
					>
						Panels
					</Button>
					<Button
						rounded
						underline
						noBackground
						raise
						onClick={() => toggleSection.current.scrollIntoView({ behavior: 'smooth' })}
					>
						Toggles
					</Button>
					<Button
						rounded
						underline
						noBackground
						raise
						onClick={() => modalSection.current.scrollIntoView({ behavior: 'smooth' })}
					>
						Modal
					</Button>
				</StickySidebar>
				<StickySidebar right rightAlign offset={0}>
					<Panel alt>
						<p className='max-w-[15rem] text-red-300'>[Explain stuff]</p>
					</Panel>
				</StickySidebar>

				{/* Title and explaner */}
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
							<p className='text-red-300'>
								[Explain stuff like colors and general use here]
							</p>
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
							<p className='text-red-300'>[Explain stuff]</p>
							<div className='not-prose flex flex-wrap items-center gap-3'>
								<Button>Default Button</Button>
								<Button cta>Call to Action</Button>
								<Button alt>Alternate</Button>
								<Button>
									<p>✓</p>
									<p>Icons</p>
								</Button>
								<Button rounded>Rounded</Button>
								<Button pill>Pill Shaped</Button>
								<Button scale>Scaled</Button>
								<Button gradient>Gradient</Button>
								<Button gradientText>Gradient Text</Button>
								<Button border>Border</Button>
								<Button noBackground>No Background</Button>
								<Button caps>All Caps</Button>
								<Button fullWidth>Full Width</Button>
								<Button square>Square</Button>
								<Button raise>Raised</Button>
								<Button glow>Glowing</Button>
								<Button changeText='New Text'>Change Text</Button>
								<Button gradientBorder>Gradient Border</Button>
								<Button underline>Underline</Button>
								<Button small>Small</Button>
								<Button large>Large</Button>
								<Button simulate rounded>
									Simulate 3D
								</Button>
								<Button
									className={
										'grow rounded rounded-bl-2xl rounded-tr-2xl border-4 border-transparent bg-secondary text-accent shadow hover:border-accent'
									}
									onClick={(e) => {
										console.log('this is a test', e.target)
									}}
								>
									Custom Classnames
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
							<p className='text-red-300'>[Explain stuff]</p>
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
								<Panel rounded border square>
									<article>
										<h1 className='pb-6 text-2xl'>Panel</h1>
										<p>rounded, border, square</p>
									</article>
								</Panel>
								<Panel pill gradient>
									<article>
										<h1 className='pb-6 text-2xl'>Panel</h1>
										<p>pill, gradient</p>
									</article>
								</Panel>
								<Panel gradientBorder glow>
									<article>
										<h1 className='pb-6 text-2xl'>Panel</h1>
										<p>gradient border, glow</p>
									</article>
								</Panel>
								<div className='flex grow bg-[url("https://source.unsplash.com/random")] bg-cover p-6'>
									<Panel blur shadow scale>
										<article>
											<h1 className='pb-6 text-2xl'>Panel</h1>
											<p>blur, shadow, scale</p>
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
							<p className='text-red-300'>[Explain stuff]</p>
							<div className='not-prose flex flex-col gap-3'>
								<Toggle label='Default' />
								<Toggle label='Alternate' alt />
								<Toggle
									label='Small Pill Border w/ Clickable Label'
									pill
									border
									small
									labelClick
								/>
								<Toggle
									label='Overflow Pill On By Default'
									overflow
									pill
									defaultOn
								/>
								<Toggle label='Scaled Pill Border' scale pill border />
								<Toggle
									label='Large Round Gradient w/ Top Label'
									rounded
									large
									gradient
									labelTop
									// Example of using the toggle to performa an action
									onClick={(toggled) => {
										console.log('Toggled:', toggled)
									}}
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
							<p className='text-red-300'>[Explain stuff]</p>
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
											rounded
											alt
											glow
											className='self-end'
										>
											Close
										</Button>
									</article>
								</Modal>
								<Button onClick={() => modal.current?.showModal()} rounded alt glow>
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
