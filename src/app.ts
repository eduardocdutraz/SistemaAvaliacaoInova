import * as express  from 'express';
import AlunoRouter from './routes/AlunoRoutes';
import AvaliadorRouter from './routes/AvaliadorRoutes';
import GroupRouter from './routes/GroupRoutes';

const app = express();
const port = 5401;

app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', './src/views');

app.use(AlunoRouter);
app.use(AvaliadorRouter);
app.use(GroupRouter)

app.listen(port, function(){
    console.log(`Server running on port ${port}`);
})