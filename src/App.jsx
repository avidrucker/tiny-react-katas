import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function isEven(x) {
    return x % 2 === 0;
}

const MessageComponent = ({message}) => <p>{message}</p>;

const MessageComponent2 = ({...props}) => <p>{props.message}</p>;

function App() {
    const [count, setCount] = useState(0)

    return (
	<>
	    
	    <h1>React Katas</h1>

	    
	    <section>

		<h2>1.1. Button & Counter w/ useState</h2>
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

	    
	    <section>

		<h2>1.3. Props Passing & Props Destructuring</h2>
		<p>Passing Props: Pass a prop named message to a child component and render it inside a &lt;p&gt; tag.</p>
		<MessageComponent message="Hi, I am a message." />
		<p>Destructuring Props: Destructure the message prop in the child component and render it.</p>
		<MessageComponent2 message="I'm also a message, passed via destructured props." />
		
	    </section>
	    
	</>
    )
}

export default App
