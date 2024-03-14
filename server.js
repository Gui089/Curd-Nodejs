import 'dotenv/config';
import app from './src/index.js';

app.listen(3030, () => {
  console.log("Escutando servidor");
});