import { DataTypes } from 'sequelize';
import { sequelize } from '../src/sequelize';

let otp_model = {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    user_id : {
        type: DataTypes.INTEGER,
        references: {
            model: 'Users', // Corrected references to an object with 'model'
            key: 'id',     // Corrected referencesKey to 'key'
        },
        allowNull : false
    },
    otp : {
        type : DataTypes.STRING
    },
    type : {
        type : DataTypes.STRING // Phone or Email
    }
}

export const Otp = sequelize.define('Otp', otp_model);