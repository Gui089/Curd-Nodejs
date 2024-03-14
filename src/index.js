import  express  from 'express';
import dbConnect from './config/dbconect.js';
import book from './models/Book.js';

const connection = await dbConnect();

connection.on('error', (error) => {
  console.error("error de conexao:", error);
});

connection.once('open', () => {
  console.log("Conexao feita com o  DB");
});

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  return res.status(200).send("Curso de Nodejs");
});

app.get('/livros',async (req, res) => {
  const booksList = await book.find({});
   return res.status(200).json(booksList);
});

app.post('/livros', (req, res) => {
  const newId = crypto.randomUUID();
  const { title } = req.body;

  const newBook = { id: newId, title }
  livros.push(newBook);
  return res.status(201).json(newBook);
});

export default app;

