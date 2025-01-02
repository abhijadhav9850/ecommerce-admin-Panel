import { DataTypes, ModelOptions } from 'sequelize';
import { sequelize } from '../src/sequelize';

let review_model = {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    rating: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    review: {
        type: DataTypes.STRING,
        allowNull: false
    },
    user_id : {
        type: DataTypes.INTEGER,
        references: {
            model: 'Users', // Corrected references to an object with 'model'
            key: 'id',     // Corrected referencesKey to 'key'
        },
        allowNull : false
    },
}

let model_options: ModelOptions = <any>{
    indexes: [
        {
            unique: true,
            fields: ['Your Model_id', 'Your Model_name'], //your column name
            name: 'unique_name_per_Model', //your massage 
        },
    ],
}


export const Review = sequelize.define('Review', review_model);
