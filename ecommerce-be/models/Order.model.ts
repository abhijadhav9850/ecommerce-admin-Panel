import { DataTypes } from 'sequelize';
import { sequelize } from '../src/sequelize';

let order_model = {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    order_by : {
        type: DataTypes.INTEGER,
        references: {
            model: 'Users', // Corrected references to an object with 'model'
            key: 'id',     // Corrected referencesKey to 'key'
        },
        allowNull : false
    },
    order_otp : {
        type : DataTypes.STRING,
    },
    status : {
        type : DataTypes.STRING
    },
    taste : {
        type : DataTypes.STRING
    },
    instructions : {
        type : DataTypes.STRING
    },
    payment_method : {
        type : DataTypes.STRING
    }
}

export const Order = sequelize.define('Order', order_model);
