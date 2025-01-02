import { DataTypes } from 'sequelize';
import { sequelize } from '../src/sequelize';

let wing_model = {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    building_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Buildings',
            key: 'id'
        },
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }, 
}

export const Wing = sequelize.define('Wing', wing_model);
