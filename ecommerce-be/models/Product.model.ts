import { DataTypes } from 'sequelize';
import { sequelize } from '../src/sequelize';

let product_model = {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
}

export const Product = sequelize.define('Product', product_model);
