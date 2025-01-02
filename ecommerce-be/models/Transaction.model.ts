import { DataTypes } from 'sequelize';
import { sequelize } from '../src/sequelize';

let transaction_model = {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    sub_head: {
        type: DataTypes.STRING,
        allowNull: false
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false
    },
    amount: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    method: {
        type: DataTypes.STRING,
        allowNull: false
    },
    account_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Accounts',
            key: 'id',
        },
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    head: {
        type: DataTypes.STRING,
        allowNull: true
    },
}

export const Transaction = sequelize.define('Transaction', transaction_model);
