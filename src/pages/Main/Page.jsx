import './style.css'
import './style.mobile.css'
import Shania from '/images/Shania.jpg'
import Shania2 from '/images/IMG_7303.jpg'
import Shania3 from '/images/IMG_7304.jpg'
import { CiMenuFries } from 'react-icons/ci'
import { BsX } from 'react-icons/bs'
import { IoMail } from 'react-icons/io5'
import { FaGlobe } from 'react-icons/fa'
import { useState, useEffect, useRef } from 'react'

import Shania4 from '/images/IMG_7305.jpg'
import Shania5 from '/images/IMG_7309.jpg'
import Shania6 from '/images/IMG_7314.jpg'
import Shania7 from '/images/IMG_7315.jpg'
import Shania8 from '/images/IMG_7316.jpg'

function Slider ({ setSlider }) {

	const ref = useRef(null)

	function closeSlider () {
		setSlider(false)
	}

	function pointerHandler (e) {
		if (!ref.current.contains(e.target)) {
			closeSlider()
		}
		return;
	}

	useEffect(() => {
		const main = document.querySelector('.main')

		if (!main) return;

		main.addEventListener('pointerdown', pointerHandler)

		return () => main.removeEventListener('pointerdown', pointerHandler)
	}, [])

	return (
		<div className='slider' ref={ref}>
			<span className='slider-exit' onClick={closeSlider}>
				<BsX />
			</span>

			<div className='slider-cnt'>
				<div onClick={closeSlider}> <a href='#home'> Home </a> </div>
				<div onClick={closeSlider}> <a href='#biography' > Biography </a> </div>
				<div onClick={closeSlider}> <a href='#contact'> Contact </a> </div>
			</div>

		</div>
	)
}

function Nav ({ setSlider }) {

	function openSlider () {
		setSlider(true)
	}

	return (
		<div className='nav'>
			<span className='logo'>Shania Twain</span>

			<div className='nav-items'>
				<span> <a href='#home'> Home </a> </span>
				<span> <a href='#biography' > Biography </a> </span>
				<span> <a href='#contact'> Contact </a> </span>
			</div>

			<div className='nav-menu' onClick={openSlider}>
				<CiMenuFries />
			</div>
		</div>
	)
}

function Banner () {

	function handleClick () {
		window.location = 'https://www.Shaniatwain.com'
	}

	return (
		<div className='banner' id='home'>
			<div className='banner-left'>
				<div> Shania Twain - The Queen of Country Pop </div>

				<div> <div className='line' /> From Humble Beginnings to Global Stardom</div>

				<button onClick={handleClick}>Explore her Journey</button>
			</div>

			<div className='banner-right'>
				<img src={Shania} />
			</div>
		</div>
	)
}

function Achivements () {
	return (
		<div className='achivements' id='biography'>
			<div className='achivements-cnt'>
				<span>Album Sales</span>
				<span> 100 Million+ </span>
			</div>

			<div className='achivements-cnt'>
				<span>Awards</span>
				<span>5 Grammys, 27 BMI Songwriter Awards</span>
			</div>

			<div className='achivements-cnt'>
				<span>Records </span>
				<span> 1st to have 3 consecutive albums certified Diamond </span>
			</div>

		</div>
	)
}


function Introduction () {
	return (
		<div className='introduction'>
			<span> Who is Shania Twain? </span>

			<div className='introduction-details'>
				Shania Twain is a name synonymous with innovation in music. Blending the storytelling of country with the universal appeal of pop, she rose to international fame to become one of the best-selling female artists in music history. With hits like “Man! I Feel Like a Woman!” and “That Don’t Impress Me Much,” Twain’s legacy as a trailblazer is unmatched.
			</div>
		</div>
	)
}

function Biography () {
	return (
		<div className='biography-sect' id='story'>
			<div className='biography-sect-img'>
				<img src={Shania2} />
			</div>

			<div className='biography-sect-cnt'>
				<span> A Star’s Journey: Shania Twain’s Life Story </span>

				<div>
					Shania Twain was born Eilleen Regina Edwards on August 28, 1965, in Windsor, Ontario, Canada. Her early life was marked by financial struggles and personal challenges. After her parents divorced, Shania and her siblings were raised by her mother and stepfather in Timmins, Ontario, where she developed a deep love for music.

					From a young age, Twain exhibited extraordinary talent, singing in bars to help support her family financially. Despite the hardships, her determination and passion for music never wavered.

					In 1987, tragedy struck when her parents were killed in a car accident, leaving Twain to care for her younger siblings. She took up a job at a resort in Ontario, performing daily to sustain her family while honing her craft.
				</div>
			</div>
		</div>
	)
}

function Journey () {
	return (
		<div className='journey'>
			<div className='journey-cnt'>
				<span>Breaking into the Spotlight</span>

				<div> 
					In the early 1990s, Twain was discovered by record producer Mary Bailey, who helped her secure a contract with Mercury Nashville Records. Her self-titled debut album, released in 1993, showcased her vocal talent but received moderate success.

					Everything changed with her second album, “The Woman in Me” (1995), produced by Robert John “Mutt” Lange. The album became a global sensation, selling over 20 million copies and winning a Grammy Award.

					Her next album, “Come On Over” (1997), catapulted her to superstardom. It remains the best-selling studio album by a female artist and the best-selling country album of all time, with hits like “You’re Still the One” and “From This Moment On.”</div>
				</div>

			<div className='journey-img'>
				<img src={Shania3} />
			</div>
		</div>
	)
}

function LifeExperience () {

	const [ index, setIndex ] = useState(0)

	const Carousel = [
		Shania4, Shania5, Shania6, Shania7, Shania8
	]

	function rewind () {
		if (index == 0) {
			setIndex(Carousel.length - 1)
			return
		}

		setIndex(slider => slider - 1)
	}

	function forward () {
		
		if (index == (Carousel.length - 1) ) {
			setIndex(0)
			return
		}

		setIndex(slider => slider + 1)
	}
	
	return (
		<div className='experience'>
			<span> Beyond the Spotlight </span>

			<div className='experience-txt'>
				Twain’s personal life has been as inspiring as her career. Twain also overcame Lyme disease, which temporarily damaged her vocal cords, showcasing her resilience and ability to adapt.
			</div>

			<div className='carousel'>

				<div className='carousel-arrow' onClick={rewind}>
					{'<'}
				</div>

				<div className='carousel-main'>
					<img src={Carousel[index]} />
				</div>

				<div className='carousel-arrow' onClick={forward}>
					{'>'}
				</div>
			</div>

		</div>
	)
}


function ContactUs () {
	return (
		<div className='contact' id='contact'>
			<span>
				HEARD<br /> ENOUGH? →
			</span>


			<div>
				<a href='mailto:Maverickmgts@gmail.com'>
					Contact us <div className='contact-line' />
				</a>
			</div>

			<div> <a href='mailto:Maverickmgts@gmail.com'> → </a> </div>
		</div>
	)
}

function Footer () {
	return (
		<div className='footer'>
			<div>Shania Twain</div>

			<div className='footer-contact'>
				<div className='footer-items'>
					<span> <a href='#home'> Home </a> </span>
					<span> <a href='#biography'> Biography </a> </span>
					<span> <a href='#contact'> Contact </a> </span>
					<span> <a href='#story'> Her Story </a> </span>
				</div>

				<div className='footer-extras'>
					<div>
						<span> <IoMail /> </span>
						<span> Maverickmgts@gmail.com </span>
					</div>

					<div>
						<span> <FaGlobe /> </span>
						<span> www.shania-twain.onrender.com </span>
					</div>
				</div>
			</div>

			<div className='copyright'>
				©2025 Shania Twain. All Rights Reserved
			</div>
		</div>
	)
}

export default function Page () {

	const [ slider, setSlider ] = useState(false)

	return (
		<div className='main'>
			<Nav setSlider={setSlider} />
			<Banner />
			<Achivements />
			<Introduction />
			<Biography />
			<Journey />
			<LifeExperience />
			<ContactUs />
			<Footer />

			{
				slider
				?
				<Slider setSlider={setSlider} />
				:
				''
			}
		</div>
	)
}