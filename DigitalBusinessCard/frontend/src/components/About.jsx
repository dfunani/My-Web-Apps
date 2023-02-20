export default function About(props)
{
	return (
		<div className="App-About">
			<div className="App--About-Header">About</div>
			<div className="App--About-Body">{props.about}</div>
			<div className="App-Interests-Header">Interests</div>
			<div className="App-Interests-Body">{props.interests}</div>
		</div>
	)
} 