const facts = [
	'Node.js can handle tens of thousands of simultaneous connections using a single thread!',
	'Node.js was created by Ryan Dahl in 2009.',
	"The name 'Node' reflects its purpose: building scalable network nodes.",
	'npm (Node Package Manager) is the largest software registry in the world!',
	'Node.js is used by companies like Netflix, PayPal, Uber, and LinkedIn.',
	'Node.js is built on Google’s high-performance V8 JavaScript engine.',
	'You can use JavaScript for both front-end and back-end thanks to Node.js!',
	'Node.js excels at real-time applications like chat apps and streaming services.',
	'The event loop in Node.js makes non-blocking I/O possible.',
	'Node.js has over 1.5 million packages available via npm!',
]

const factBox = document.getElementById('fact')
const randomFact = facts[Math.floor(Math.random() * facts.length)]

factBox.innerHTML = `
  <h2>💡 Fun Fact</h2>
  <p>${randomFact}</p>
`
