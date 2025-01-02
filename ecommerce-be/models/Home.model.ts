import { DataTypes } from 'sequelize';
import { sequelize } from '../src/sequelize';

let home_model = {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    room_no: {
        type: DataTypes.STRING,
        allowNull: false
    },
    floor: {
        type: DataTypes.STRING,
        allowNull: false
    },
    wing_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Wings',
            key: 'id',
        },
        allowNull: false
    }
}

export const Home = sequelize.define('Home', home_model);
