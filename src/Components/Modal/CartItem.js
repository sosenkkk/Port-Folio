import classes from './CartItem.module.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';

const CartItem = (props) => {

  const visitHandler=()=>{
    if(props.id==="1"){
      window.open("https://sosenkkk-zwiggy.netlify.app/")
    }
    if(props.id==="2"){
      window.open("https://expense-handler-sosenkkk.netlify.app/")
    }
    if(props.id==="3"){
      window.open("https://github.com/sosenkkk/Typo-App")
    }
    if(props.id==="4"){
      window.open("https://sosenkkk.github.io/Calculator-app/")
    }
    if(props.id==="5"){
      window.open("https://sosenkkk.github.io/Netwiz/")
    }
  }
  const repoHandler=()=>{
    if(props.id==="1"){
      window.open("https://github.com/sosenkkk/Food-Order-App")
    }
    if(props.id==="2"){
      window.open("https://github.com/sosenkkk/Expense-Handler")
    }
    if(props.id==="3"){
      window.open("https://github.com/sosenkkk/Typo-App")
    }
    if(props.id==="4"){
      window.open("https://github.com/sosenkkk/Calculator-app")
    }
    if(props.id==="5"){
      window.open("https://github.com/sosenkkk/Netwiz")
    }
  }
  return (
    <li className={classes['cart-item']}>
      <div className={classes.description} >
        <h2>{props.title}</h2>
        <div className={classes.summary}>
          <p className={classes.price}>{props.describe}</p>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={repoHandler}><GitHubIcon/></button>
        <button onClick={visitHandler}><LaunchIcon/></button>
      </div>
    </li>
  );
};

export default CartItem;