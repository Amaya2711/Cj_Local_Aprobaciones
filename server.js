// server.js
const express = require('express');
const sql = require('mssql');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;

const config = {
    user: process.env.SQLSERVER_USER,
    password: process.env.SQLSERVER_PASSWORD,
    server: process.env.SQLSERVER_HOST,
    port: parseInt(process.env.SQLSERVER_PORT, 10),
    database: process.env.SQLSERVER_DB,
    options: {
        encrypt: true, // true for Azure, false for local
        trustServerCertificate: true // change to true for local dev / self-signed certs
    }
};

app.get('/health', async (req, res) => {
    try {
        await sql.connect(config);
        res.status(200).json({ status: 'ok', message: 'SQL Server connection successful' });
    } catch (err) {
        res.status(500).json({ status: 'error', message: err.message });
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
