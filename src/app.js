import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { JSON_SIZE_LIMIT } from './constants';

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));

app.use(express.json({limit: JSON_SIZE_LIMIT}));

app.use(express.urlencoded({extended: true, limit: JSON_SIZE_LIMIT}));

app.use(express.static("public"));

app.use(cookieParser());

export { app };