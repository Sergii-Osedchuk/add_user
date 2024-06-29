import classes from './Card.module.css';

const Card = ({className, children}) => {
  return (
    <div className={`${className} ${classes.card}`}>{children}</div>
  )
}

export default Card;