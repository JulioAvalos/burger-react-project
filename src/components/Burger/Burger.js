import React from 'react';

import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    const transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            console.log(igKey);
            return [...Array(props.ingredients[igKey])].map((_,i) => {
                console.log(_,i, (igKey + i));
                return <BurgerIngredient key={igKey + i} type={igKey} />
            }); 
        });
    // console.log(transformedIngredients);
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default burger;