import { DataTypes } from 'sequelize';
import { sequelize } from '../src/sequelize';

let order_item_model = {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    order_id : {
        type: DataTypes.INTEGER,
        references: {
            model: 'Orders', // Corrected references to an object with 'model'
            key: 'id',     // Corrected referencesKey to 'key'
        },
        allowNull : false
    },
    product_id : {
        type: DataTypes.INTEGER,
        references: {
            model: 'Products', // Corrected references to an object with 'model'
            key: 'id',     // Corrected referencesKey to 'key'
        },
        allowNull : false
    },
    quantity : {
        type : DataTypes.INTEGER
    },
    price_per_item : {
        type : DataTypes.INTEGER
    },
    price : {
        type : DataTypes.INTEGER
    }
}

export const OrderItem = sequelize.define('OrderItem', order_item_model);
