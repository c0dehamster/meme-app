const meme = document.querySelector(".meme__image")
const comment = document.querySelector(".comment")
const refreshButton = document.querySelector(".refresh")

// API URL
let memeAPI = "https://meme-api.herokuapp.com/gimme/"

// Subreddits I chose
const subreddits = ["funny", "dankmemes", "depression_memes", "surrealmemes"]

// Function to get a random meme

const getMeme = () => {
	// Choose a random subreddit from the subreddits array
	const randomSubreddit = subreddits[Math.floor(Math.random() * subreddits.length)]

	// Fetch data from the API
	fetch(memeAPI + randomSubreddit)
		.then(response => response.json())
		.then(data => {
			console.log(data)
			const memeImg = new Image()

			// Display the meme image and title only after the image loads
			memeImg.onload = () => {
				meme.src = data.url
				comment.innerHTML = data.title
			}

			memeImg.src = data.url
		})
}

// Call the getMeme() on button click and on window load
refreshButton.addEventListener("click", getMeme)
window.addEventListener("load", getMeme)
