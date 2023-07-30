import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
    const [count, setCount] = useState(0)

    return (
	<>
	    <h1>React Katas 001</h1>
	    
	    <section>
		<h2>1.1. button & counter w/ useState</h2>
		<p>Declare a state variable named count in a functional component and set its initial value to 0.</p>
		<button onClick={() => setCount((count) => count + 1)}>
		    Increment count by one
		</button>

		<button onClick={() => setCount((count) => 0)}>Reset count to zero</button>
		<p>count is {count}</p>
	    </section>
	</>
    )
}

export default App
