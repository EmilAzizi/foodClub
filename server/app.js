import "dotenv/config";
import express from 'express';
import session from 'express-session';
import cors from 'cors';
import { Server } from 'socket.io';
import http from 'http';

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: 'http://localhost:5173',
        credentials: true
    }
});

app.use(cors({
    secre: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {secure: false}
}));

app.use((req, res, next) => {
    req.io = io;
    next();
});

io.on('connection', socket => {
    socket.on('update', () => {
    });

    socket.on('disconnect', () => {
    });
});

const PORT = Number(process.env.PORT) || 8080;
server.listen(PORT);
