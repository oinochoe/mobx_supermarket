import React from 'react';
import SuperMarketTemplate from './SuperMarketTemplate';
import ShopItemList from './ShopItemList';
//import Basket from './BasketItemList';

const SuperMarket = () => {
    return <SuperMarketTemplate items={<ShopItemList />} basket={null} />;
};

export default SuperMarket;
