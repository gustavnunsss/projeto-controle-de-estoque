const express = require('require'); 
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.user(express.json());

const authRouthes = require('./routes/auth');
app.use('/api/auth', authRouthes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Server rumming on port ' + PORT));