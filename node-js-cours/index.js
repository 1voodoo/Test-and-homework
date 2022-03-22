const dotenv = require('dotenv');
const userRouter = require('./src/user-router');
const jsonPars = require('./framework/parseJson')
dotenv.config();
const PORT = process.env.PORT || 3000;
const Application =require('./framework/Application');
const parseUrl = require('./framework/parseUrl');

const app = new Application();
app.use(parseUrl('htpp://localhost:5000'));
app.addRouter(userRouter); 
app.listen(PORT, () => console.log(`START SERVER PORT ${PORT}`));

