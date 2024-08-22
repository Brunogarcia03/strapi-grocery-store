import type { Schema, Attribute } from '@strapi/strapi';

export interface OrdererItemOrdererItem extends Schema.Component {
  collectionName: 'components_orderer_item_orderer_items';
  info: {
    displayName: 'OrdererItem';
    icon: 'shoppingCart';
    description: '';
  };
  attributes: {
    quantity: Attribute.Decimal;
    amount: Attribute.Decimal;
    product: Attribute.Relation<
      'orderer-item.orderer-item',
      'oneToOne',
      'api::product.product'
    >;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'orderer-item.orderer-item': OrdererItemOrdererItem;
    }
  }
}
