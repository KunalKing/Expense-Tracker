import './Card.css'

function Card(props) {
    const classes = 'card ' + props.className;  //To fix the alinment
    return <div className={classes}>{props.children}</div>; //render that classname here
}

export default Card;