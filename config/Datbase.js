import { Sequelize } from "sequelize";
import { Comments } from '../models/CommentsModel.js';


const db = new Sequelize("comentarios", "admin", "admin", {
    port:"3306",
    host: "191.101.1.160",
    dialect: "mysql",
    freezeTableName: true
});

db.Comenmts = Comments.init(db,Sequelize);



export default db;
