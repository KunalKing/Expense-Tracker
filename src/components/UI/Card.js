import './Card.css'

const Card = (props) => {
    const classes = 'card ' + props.className;  //To fix the alinment
    return <div className={classes}>{props.children}</div>; //render that classname here
}

export default Card;//testing comment for git