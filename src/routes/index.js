import express from 'express';
import { indexPage, messagesPage, addMessage, getAttemptsData, addAttemptsData, runSingleTest } from '../controllers';
const indexRouter = express.Router();

indexRouter.get('/', indexPage);
indexRouter.get('/messages', messagesPage);
indexRouter.post('/messages', addMessage);
indexRouter.get('/get-test-from-state', getAttemptsData);
indexRouter.post('/add-attempts-data', addAttemptsData);
indexRouter.post('/run-single-test', runSingleTest);

export default indexRouter;