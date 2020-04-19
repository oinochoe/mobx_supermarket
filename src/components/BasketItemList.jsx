import React from 'react';
import BasketItem from './BasketItem';

const BasketItemList = () => {
    return (
        <div>
            <BasketItem name='포카칩' price={1500} count={2} />
            <BasketItem name='생수' price={500} count={1} />
            <hr />
            <p>
                <b>총합: </b> 3500원
            </p>
        </div>
    );
};

export default BasketItemList;
