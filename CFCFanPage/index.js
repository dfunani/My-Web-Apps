const header_root = ReactDOM.createRoot(document.getElementById('header'))
const facts_root = ReactDOM.createRoot(document.getElementById('facts'))
const image_root = ReactDOM.createRoot(document.getElementById('image'))

const image = (
	<img src="./chelsea_xl.png" width="40px" />
)
const facts = (
	<ul>
		<li>Item 1</li>
	</ul>
)

const header = (
	<h1>
		Header
	</h1>
)

image_root.render(image)
header_root.render(header)
facts_root.render(facts)