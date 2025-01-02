import { DataTypes } from 'sequelize';
import { sequelize } from '../src/sequelize';

let account_model = {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Users',
            key: 'id'
        },
        allowNull: false
    },
    account_number: {
        type: DataTypes.STRING,
        allowNull: false
    },
    ifsc_code: {
        type: DataTypes.STRING,
    },
    bank: {
        type: DataTypes.STRING,
        allowNull: false
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false
    }
}

export const Account = sequelize.define('Account', account_model);
