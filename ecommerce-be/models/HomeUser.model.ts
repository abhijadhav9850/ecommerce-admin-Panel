import { DataTypes, ModelOptions } from 'sequelize';
import { sequelize } from '../src/sequelize';

let home_user_model = {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    home_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Homes',
            key: 'id',
        },
        allowNull: false
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Users',
            key: 'id',
        },
        allowNull: false
    },
}

let model_options: ModelOptions = {
    indexes: [
        {
            unique: true,
            fields: ['home_id', 'user_id'],
            name: 'unique_home_per_user',
        },
    ]
}

export const HomeUser = sequelize.define('HomeUser', home_user_model, model_options);
