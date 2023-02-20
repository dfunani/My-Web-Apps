export default function Title(props)
{
	return (
		<div className="App-Title">
			<div className="App-Title-FullName">{props.fullName}</div>
			<div className="App-Title-Job">{props.job}</div>
			<a href="props.website"><div className="App-Title-Website">{props.fullName.replace(" ","").toLowerCase()}.website</div></a>
		</div>
	)
}