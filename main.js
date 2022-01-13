/*
<section id="computer--1">
	<h1>Apple Macbook</h1>
	<div>Model: Pro</div>
	<div>Memory: 32 GB</div>
	<div>Hard drive space: 500 GB</div>
	<div>Processor speed: 2.4 Ghz</div>
</section>

Define a function that takes the Macbook Pro object
as input (need a parameter), and outputs (returns)
the HTML shown above (line 2-8)

*/

const computer = {
	id: 1,
	manufacturer: "Apple",
	make: "Macbook",
	model: "Pro",
	specs: {
		memory: 32,
		hardDrive: "500 GB",
		processor: 2.4
	}
}

// Define a function to convert the object to a string
const computerHTMLMaker = (computerObject) => {

// Make HTML to represent the computer
    const computerHTMLSection = `
<section id="computer--${computerObject.id}">\r
        <h1>${computer.manufacturer} ${computerObject.make}</h1>\r
        <div>Model: ${computerObject.model}</div>\r
        <div>Memory: ${computerObject.specs.memory} GB</div>\r
        <div>Hard Drive Space: ${computerObject.specs.hardDrive}</div>\r
        <div>Processor Speed: ${computerObject.specs.processor} Ghz</div>\r
</section>
`
//return the HTML
return computerHTMLSection
}


// invoke the function
const longStringOfHTMLReturnedByFunction = computerHTMLMaker(computer)
console.log(longStringOfHTMLReturnedByFunction)

