import React, { useState } from 'react';
import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import ExpenseFilter from './ExpenseFilter'
import Card from './Card';

function Expenses(props) {

    const [filteredYear, setFilteredYear] = useState('select please')

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    }

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    })

    let expensesContent = <p style={{color: "white"}}>No expenses found</p>; // aşağıda bunu uzun uzun yazmaktansa burada bir değişken içine atıyorum, bu kodu daha okunaklı hale getiriyor

    if (filteredExpenses.length > 0) {
        expensesContent =
            filteredExpenses.map((expense) => (
                <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}

                />
            ))
    }
    else if(filteredYear==='select please'){
        expensesContent= 
        props.items.map((expense) => (
            <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}

            />
        ))

    }


    return (

        <Card className='expenses' >
            <ExpenseFilter 
            selected={filteredYear} 
            onChangeFilter={filterChangeHandler} 
            />
            {expensesContent};

        </Card>

    )
}

export default Expenses;