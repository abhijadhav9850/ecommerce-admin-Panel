import { DataTypes } from 'sequelize';
import { sequelize } from '../src/sequelize';

let user_model = {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: DataTypes.STRING,
    email : {
        type : DataTypes.STRING,
        unique:true
    },
    preferred_language : {
        type : DataTypes.STRING,
    },
    phone : {
        type : DataTypes.STRING,
        unique:true
    },
    role : {
        type : DataTypes.STRING
    },
    address : {
        type : DataTypes.STRING
    },
    city : {
        type : DataTypes.STRING
    },

}

export const User = sequelize.define('User', user_model);
