
export default (expenses) => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    const amounts = expenses.map(e => e.amount)
    return expenses.map(e => e.amount).reduce(reducer, 0)
}