import './style.css'
import './style.mobile.css'
import Shania from '/images/IMG_7306-removebg-preview.png'
import Shania2 from '/images/IMG_7303.jpg'
import Shania3 from '/images/IMG_7304.jpg'

function Nav () {
	return (
		<div className='nav'>
			<span className='logo'>Shania Twain</span>

			<div className='nav-items'>
				<span>Home</span>
				<span>Biography</span>
				<span>Contact</span>
			</div>
		</div>
	)
}

function Banner () {
	return (
		<div className='banner'>
			<div className='banner-left'>
				<div> Shania Twain - The Queen of Country Pop </div>

				<div> <div className='line' /> From Humble Beginnings to Global Stardom</div>

				<button>Explore her Journey</button>
			</div>

			<div className='banner-right'>
				<img src={Shania} />
			</div>
		</div>
	)
}

function Achivements () {
	return (
		<div className='achivements'>
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
		<div className='biography-sect'>
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

export default function Page () {
	return (
		<div className='main'>
			<Nav />
			<Banner />
			<Achivements />
			<Introduction />
			<Biography />
			<Journey />
		</div>
	)
}