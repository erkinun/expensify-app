
export default (expenses) => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    return expenses.map(e => e.amount).reduce(reducer, 0)
}