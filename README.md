# NetflixClone
This Netflix clone is a React-based application that replicates the popular streaming platform, with the addition of user authentication powered by Firebase. It allows users to sign in, browse movies, and watch trailers, creating an engaging streaming experience. Credit to GreatStack for tutorial and Credit to Netflix for all logos.


Key Features:
	•	Home Page: Displays a carousel of trending movies and TV shows, fetched from an external API (The Movie Database API).
	•	Player Page: Embedded YouTube video player to watch trailers or video content, with the ability to navigate back to the homepage.
	•	User Authentication: Firebase Authentication enables users to sign in with email/password or Google sign-in, allowing for a personalized experience.
	•	Login/Sign-Up Page: Secure and responsive user authentication screens, allowing users to either log in or create a new account.
	•	Dynamic Routing: React Router is used for navigating between pages, with the player/:id route dynamically fetching movie details and displaying a corresponding trailer.


Technologies Used:
	•	React: JavaScript library for building interactive user interfaces.
	•	React Router: Enables dynamic routing between components like Home, Login, and Player pages.
	•	Firebase: Handles user authentication, providing secure login, sign-up, and session management.
	•	The Movie Database API (TMDb): Fetches real-time data on popular, now-playing, and trending movies and TV shows.
	•	CSS Flexbox & Grid: Layout techniques to ensure the app is fully responsive, mimicking Netflix’s interface.
