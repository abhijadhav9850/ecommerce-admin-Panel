import { DataTypes, ModelOptions } from 'sequelize';
import { sequelize } from '../src/sequelize';

let dummy_model = {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    delivered_by: {
        type: DataTypes.INTEGER,
        references: 'User',
        referencesKey: 'id'
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Users',
            key: 'id',
        },
        allowNull: false
    },
    stringField: {
        type: DataTypes.STRING,
        allowNull: false
    },
    integerField: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    floatField: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    doubleField: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    booleanField: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    dateField: {
        type: DataTypes.DATE,
        allowNull: false
    },
    // Other Data Types
    textField: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    blobField: {
        type: DataTypes.BLOB,
        allowNull: false
    },
    jsonField: {
        type: DataTypes.JSON,
        allowNull: false
    },
    // Enum Data Type
    enumField: {
        type: DataTypes.ENUM('Option1', 'Option2', 'Option3'),
        allowNull: false
    },
    // Array Data Types (PostgreSQL Only)
    stringArrayField: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false
    },
    integerArrayField: {
        type: DataTypes.ARRAY(DataTypes.INTEGER),
        allowNull: false
    }
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


export const Dummy = sequelize.define('Dummy', dummy_model, model_options);
