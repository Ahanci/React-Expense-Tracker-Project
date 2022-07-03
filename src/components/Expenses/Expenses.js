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

    let expensesContent= <p>No expenses found</p>; // aşağıda bunu uzun uzun yazmaktansa burada bir değişken içine atıyorum, bu kodu daha okunaklı hale getiriyor


    return (

        <Card className='expenses' >
            <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />

            {filteredExpenses.length === 0 && {expensesContent}}

            {filteredExpenses.length > 0 &&
                filteredExpenses.map((expense) => (
                    <ExpenseItem
                        key={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}

                    />
                ))

            }





        </Card>

    )
}

export default Expenses;