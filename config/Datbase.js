import { Sequelize } from "sequelize";
import { Comments } from '../models/CommentsModel.js';


const db = new Sequelize("comentarios", "admin", "admin", {
    port:"3306",
    host: "82.180.132.143",
    dialect: "mysql",
    freezeTableName: true
});

db.Comenmts = Comments.init(db,Sequelize);



export default db;
