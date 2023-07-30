import { useState, useEffect } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'


// for 1.2
function isEven(x) {
    return x % 2 === 0;
}

// for 1.6
function ChildComponent({ incFunc }) { 
  return (
    <button onClick={incFunc}>Increment Counter</button>
  );
}


// for 1.3
const MessageComponent = ({message}) => <p>{message}</p>;


// for 1.3
const MessageComponent2 = ({...props}) => <p>{props.message}</p>;


// for 1.5
const FragmentWrappedComp = () =>
    (<>
	<p>I am a &lt;p&gt; element.</p> 
	<p>I am also a &lt;p&gt; element.</p> 
	</>);


// for 1.7
// This function handles letters a to z.
// I'm leaving the "later" letters for next time.
function nextLetter(x) {
    // console.log("x is " + x);
    // console.log("a".charCodeAt(0));
    return String.fromCharCode(x.charCodeAt(0) + 1);
}

// for 1.7
const lastItem = (x) => ( x.at(-1) );
// ( x[x.length - 1] ); would also work to get the last item in the array


// for 1.7
function ArrayStateComp () {
    const [arr, setArr] = useState([]);

    const appendElement = () => {
	arr.length === 0 ?
		setArr([...arr, "a"]) :
		setArr([...arr, nextLetter(lastItem(arr))]);
		// setArr((x) => x.push("b"))
    };

    function resetArr() {
		setArr(() => []);
    }

    function inspect(x) {
		console.log(x);
		return x;
    }
    
    return (
	<>
		<button onClick={appendElement}>Add item to array</button>
		<button onClick={resetArr}>Reset array back to empty</button>
		{ arr.length === 0 ?
		<p>There is nothing in the array.</p> :
		<ol style={{"textAlign": "left"}}>{/*inspect(arr) && */ arr.map(x => <li key={x}>{x}</li>)}</ol> }
	</> );
}


// 1.8
const EffectComponent = () => {
    useEffect(() => {
	console.log('Component mounted!');
	
	return () => {
		console.log('Component will unmount!');
	};
    }, []); // The empty dependency array ensures this effect runs only once on mount.
    
    console.log('Component rendered!');

    return (
	<p> I am the EffectComponent. Note: This component gets rendered twice in dev due to React's bug checking system. In production, this component gets rendered only once.</p>
  );
};


// 1.9
const BorderWrapper = (props) => {
  return (
    <div style={{border: "1px solid black"}}>
      {props.children}
    </div>
  );
};


// 1.11
function TextInput() {
  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  }

  return (
    <div>
	<input type="text"
	       value={text}
	       onChange={handleChange}
	       placeholder="Type text here"
	/>
	<p>Input text: {text}</p>
    </div>
  );
}


function App() {

    const [count, setCount] = useState(0)
    const [toggle, setToggle] = useState(false)

    // 1.6 
    const incrementFunction = () => {
	setCount((count) => count + 1);
    };

    // 1.10
    useEffect(() => {
	console.log(`Counter value has changed to: ${count}`);
    }, [count]);
    
    return (
	<>
	    
	    <h1>React Katas</h1>

	    <hr />
	    
	    <section>
		<h2>1.1. Button & Counter w/ useState</h2>
		<p>Declare a state variable named count in a functional component and set its initial value to 0.</p>
		<p>State Update & Event Handling: Add an onClick event to a button that updates the count state variable by incrementing it by 1.</p>

		<BorderWrapper>
		    <button onClick={() => setCount((count) => count + 1)}>
		    Increment count by one
		</button>
		    
		    <button onClick={() => setCount((count) => 0)}>Reset count to zero</button>
		    <p>count is {count}</p>
		</BorderWrapper>
	    </section>
	    
	    <hr />
	    
	    <section>
		<h2>1.2. Conditional Rendering</h2>
		<p>Conditional Rendering: Conditionally render a &lt;p&gt; element that says "Counter is even" if counter is an even number.</p>
		<BorderWrapper>
		    <div>
			<p>Conditional text will render below:</p>
			{isEven(count) && <p>count is even</p>}
		    </div>
		</BorderWrapper>
	    </section>

	    <hr />
	    
	    <section>
		<h2>1.3. Props Passing & Props Destructuring</h2>
		<p>Passing Props: Pass a prop named message to a child component and render it inside a &lt;p&gt; tag.</p>
		<BorderWrapper><MessageComponent message="Hi, I am a message." /></BorderWrapper>
		<p>Destructuring Props: Destructure the message prop in the child component and render it.</p>
		<BorderWrapper><MessageComponent2 message="I'm also a message, passed via destructured props." /></BorderWrapper>
	    </section>

	    <hr />

	    <section>
		<h2>1.4. Mapping Arrays & Lists</h2>
		<p>Mapping Arrays: Given an array of integers, render each integer inside a &lt;li&gt; element using the map function.</p>
		<BorderWrapper>
		    <ul style={{"textAlign": "left"}}>
			{["a", "b", "c", "d"].map((x, i) =>
			    <li key={i}>{x}</li>)}
		    </ul>
		</BorderWrapper>
	    </section>

	    <hr />

	    <section>
		<h2>1.5. Fragments</h2>
		<p>React Fragments: Wrap two &lt;p&gt; elements with a React Fragment.</p>
		<BorderWrapper>
		    <FragmentWrappedComp />
		</BorderWrapper>
	    </section>

	    <hr />

	    <section>
		<h2>1.5. Inline Styling</h2>
		<p>Inline Styling: Add inline CSS to a &lt;p&gt; to set its color to blue.</p>
		<BorderWrapper>
		    <p style={{"color": "blue"}}>I am styled to be blue.</p>
		</BorderWrapper>
	    </section>

	    <hr />

	    <section>
		<h2>1.6. Passing Functions as Props</h2>
		<p>Function as Props: Pass a function as a prop to a child component that updates the counter state in the parent component.</p>
		<BorderWrapper>
		    <ChildComponent incFunc={incrementFunction} />
		    count is {count}
		</BorderWrapper>
	    </section>

	    <hr />

	    <section>
		<h2>1.7. Working With Arrays in State</h2>
		<p>Array State: Create an array as a state in a functional component. </p>
		<p>Array State Update: Add a new item to the array state using the spread operator.</p>
		<BorderWrapper>
		    <ArrayStateComp />
		</BorderWrapper>
	    </section>

	    <hr />
	    
	    <section>
		<h2>1.8. useEffect Hook</h2>
		<p>UseEffect Hook: Use the useEffect hook to log a message to the console when the component mounts and unmounts.</p>
		<BorderWrapper>
		    <p>See console log for print-outs</p>
		    <button onClick={() => setToggle((toggle) => !toggle)}>{toggle ? "Hide EffectComponent" : "Show EffectComponent"}</button>
		    {toggle && <EffectComponent />}
		</BorderWrapper>
	    </section>

	    <hr />
	    
	    <section>
		<h2>1.9. Wrapper Component</h2>
		<p>Wrapper Component: Make a component that takes in other components as children, and simply renders a black 1px solid border around them.</p>
		<BorderWrapper>
		    <p>I am text wrapped by a BorderWrapper component.</p>
		</BorderWrapper>
	    </section>

	    <hr />
	    
	    <section>
		<h2>1.10. useEffect Dependency Array</h2>
		<p>UseEffect Dependency Array: Use the useEffect hook to log a message to the console whenever the <code>count</code> state variable changes.</p>
		<BorderWrapper>
		    <p>See console log for print-outs</p>
		    <p>Note: There are no extra components associated with this kata to display here.</p>
		</BorderWrapper>
	    </section>
	    
	    <hr />

	    <section>
		<h2>1.11. </h2>
		<p></p>
		<BorderWrapper>
		    <TextInput />
		</BorderWrapper>
	    </section>
	</>
    )
}

export default App
