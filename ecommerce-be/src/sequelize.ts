import { Sequelize } from "sequelize";

export const sequelize = new Sequelize('postgres://emp_crud_backend_user:oXbmQcnYGz6RiWkZgeE44GGdXWWPSUws@dpg-cnokgd8cmk4c73e3m0r0-a.oregon-postgres.render.com/emp_crud_backend', {
    dialect: 'postgres',
    host: 'localhost',
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
});
// sequelize.sync({alter:true}).then(function(errors) {});
