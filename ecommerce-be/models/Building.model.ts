import { DataTypes, ModelOptions } from 'sequelize';
import { sequelize } from '../src/sequelize';

let building_model = {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    society_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Societies',
            key: 'id'
        },
        allowNull: false
    },
}

let model_options : ModelOptions = {
    indexes: [
      {
        unique: true,
        fields: ['society_id', 'name'],
        name: 'unique_building_per_society',
      },
    ]
}

export const Building = sequelize.define('Building', building_model,model_options);
