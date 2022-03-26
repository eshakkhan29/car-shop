import React from 'react';

const Question = () => {
    return (
        <div>
            <div className='row row-cols-lg-3 row-cols-1 mt-4'>
                <div className='col'>
                <h1>How to work React</h1>
                <p>
                    React is a library of JavaScript. It was made by Dom himself. It loads all the data at once. For this reason, it is very much used as a single page application. It changes the state by creating a visual dom and comparing it.</p>
                </div>
                <div className="col">
                    <h1>The difference between state and props</h1>
                    <p><b>states</b> are used to manage the internal environment of a component means the data changes inside the component.
                    states are mutable. A state for a component it cannot be used in another component. states are used for rendering dynamic changes within component.</p>
                    <p><b>props</b> are immutable
                    props are used by a component to get data from external environment  
                    you can pass props between components.
                    props are mostly used to communicate between components.You can pass from parent to child directly. For passing from child to parent you need use concept of lifting up states.</p>
                </div>
                <div className='col'>
                    <h1>How to work useState</h1>
                    <p>useState is used to convert inside the dome. Passing the initial state in this function returns a variable value with the current state value. Iti returns from there keeping the value in it.</p>
                </div>
            </div>
        </div>
    );
};

export default Question;