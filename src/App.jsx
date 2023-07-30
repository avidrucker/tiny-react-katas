import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function isEven(x) {
    return x % 2 === 0;
}

function App() {
    const [count, setCount] = useState(0)

    return (
	<>
	    <h1>React Katas 001</h1>
	    
	    <section>
		<h2>1.1. button & counter w/ useState</h2>
		<p>Declare a state variable named count in a functional component and set its initial value to 0.</p>
		<p>State Update & Event Handling: Add an onClick event to a button that updates the count state variable by incrementing it by 1.</p>
		<button onClick={() => setCount((count) => count + 1)}>
		    Increment count by one
		</button>

		<button onClick={() => setCount((count) => 0)}>Reset count to zero</button>
		<p>count is {count}</p>
	    </section>

	    <section>
		<h2>1.2. Conditional Rendering</h2>
		<p>Conditional Rendering: Conditionally render a &lt;p&gt; element that says "Counter is even" if counter is an even number.</p>
		{isEven(count) && <p>count is even</p>}
	    </section>
	</>
    )
}

export default App
