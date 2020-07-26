import React from 'react';

import classes from './Modal.module.css';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Backdrop from '../Backdrop/Backdrop';

const modal = props => { //or we could use a PureComponent, but we dont really need to do many props checks in this one
    //this could be a function component, doesn't have to be a class

    // shouldComponentUpdate(nextProps, nextState) {
    //     return nextProps.show !== props.show || nextProps.children !== props.children;
    // }
    return (
        <Aux>
            <Backdrop show={props.show} clicked={props.modalClosed}/>
            <div 
                className={classes.Modal}
                style={{
                    transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0'
                }}>
                {props.children}
            </div>
        </Aux>
    );
}

export default React.memo(
    modal, 
    (prevProps, nextProps) => 
        nextProps.show === prevProps.show || 
        nextProps.children === prevProps.children
);