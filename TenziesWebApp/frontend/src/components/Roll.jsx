import { Button, Row, Container, Col } from "react-bootstrap"

export default function Roll(props)
{
	return (
		<div className="App-Roll">
			<Button className='w-20 mb-4 mt-5 text-light m-5 p-3 w-100' onClick={!props.gameState ? (event) => { props.roll(event) } : () => { window.location.reload() }} style={{backgroundColor: "#5035FF" ,border: "none"}}>
        {!props.gameState ? "Roll" : "Restart Game"}
			</Button>
			</div>
	)
}