import { DataTypes } from 'sequelize';
import { sequelize } from '../src/sequelize';

let employee_model = {
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
    address : {
        type : DataTypes.STRING
    },
    phone : {
        type : DataTypes.STRING,
        unique:true
    }
}
  


export const employee = sequelize.define('employee', employee_model);
