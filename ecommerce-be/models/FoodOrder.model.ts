import { DataTypes } from 'sequelize';
import { sequelize } from '../src/sequelize';

let food_order_model = {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    order_id : {
        type: DataTypes.INTEGER,
        references: 'Order', // <<< Note, its table's name, not object name
        referencesKey: 'id', // <<< Note, its a column name,
        unique : true
    },
    cooked_by : {
        type: DataTypes.INTEGER,
        references: 'User', // <<< Note, its table's name, not object name
        referencesKey: 'id' // <<< Note, its a column name
    },
    start_time : {
        type : DataTypes.DATE
    },
    prepared_time : {
        type : DataTypes.DATE
    },
    packed_by : {
        type: DataTypes.INTEGER,
        references: 'User', // <<< Note, its table's name, not object name
        referencesKey: 'id' // <<< Note, its a column name
    },
    packed_time : {
        type : DataTypes.DATE
    },
    delivered_by : {
        type: DataTypes.INTEGER,
        references: 'User', // <<< Note, its table's name, not object name
        referencesKey: 'id' // <<< Note, its a column name
    },
    dispatch_time : {
        type : DataTypes.DATE
    },
    delivery_time : {
        type : DataTypes.DATE
    }
}

export const FoodOrder = sequelize.define('Order', food_order_model);














