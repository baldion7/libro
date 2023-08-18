import express from 'express';
import cors from 'cors';
import session from 'express-session';
import SequelizeStore from "connect-session-sequelize";
import dotenv from "dotenv";
import bodyParser from 'body-parser';
import  db  from './config/Datbase.js';
import Comments from './routes/comments.js';


dotenv.config();

const app= express();
(async()=>{
    await  db.sync();
  }
)();


const sessionStore =SequelizeStore(session.Store);
const store =new sessionStore({
  db: db
});

app.use(session({
  secret:process.env.SESS_SECRET,
  resave:false,
  saveUninitialized:true,
  store:store,
  cookie:{
    secure:'auto'
  }
}))
app.use(cors());


app.use(bodyParser.json({ limit: '5gb' }));
app.use(bodyParser.urlencoded({ limit: '5gb', extended: true }));
app.use(Comments)
store.sync();
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Servidor backend escuchando en el puerto ${PORT}`);
});
