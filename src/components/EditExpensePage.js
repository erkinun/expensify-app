import React from 'react';

// edit page
const EditExpensePage = ({ match }) => (
    <div>
        This is from my edit expense component for expense: {match.params.id}
    </div>
);

export default EditExpensePage