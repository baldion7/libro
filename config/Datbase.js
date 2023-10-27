import { Sequelize } from "sequelize";
import { Comments } from '../models/CommentsModel.js';


const db = new Sequelize("comentarios", "root", "admin123", {
    port:"3306",
    host: "62.72.5.157",
    dialect: "mysql",
    freezeTableName: true
});

db.Comenmts = Comments.init(db,Sequelize);



export default db;
