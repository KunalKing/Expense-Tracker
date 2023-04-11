import './ExpenseItem.css';
import './ExpenseDate';
import ExpenseDate from './ExpenseDate';
import Card from './Card';

function ExpenseItem(props){
    /* Props will refer the attributes properties in key value pair 
       we will use it as an aurgument where props is an object */
    /*const expenseDate = new Date(2021, 2, 28);
    const expenseTitle = 'Car Insurance';
    const expenseAmount = '294.67';
     
    -> Once we declare all the props object properties the above variables
       are useless there fore this is how we share data between react compontes
       and make them configurable and turly reusable. This concept is called props.
     
     //Syntax for toLocaleString method. 
       toLocaleString(locales, options)
       */

   

    return (<Card className='expense-item'>
        <ExpenseDate date={props.date}/>
       <div className='expense-item__description'>
       <h2>{props.title}</h2>
       <div className='expense-item__price'>${props.amount}</div>
       </div>
    </Card>);
}

export default ExpenseItem;