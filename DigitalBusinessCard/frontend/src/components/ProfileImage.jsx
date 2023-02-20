function ProfileImage(props)
{
	return (
		<header className="App-Header">
			<img src={props.image} alt={props.name} onClick={() => {window.location.href=props.portfolio}} />
</header>
	)
}

export default ProfileImage