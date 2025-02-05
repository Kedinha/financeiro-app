// server.js
const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const port = 3000;

// Configurar o body-parser para processar dados JSON
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

// Conectar ao banco de dados SQLite
const db = new sqlite3.Database("./financeiro.db", (err) => {
	if (err) {
		console.error("Erro ao conectar ao banco de dados:", err.message);
		throw err;
	}
	console.log("Conectado ao banco de dados SQLite.");
});

// Criar tabela se não existir
db.serialize(() => {
	db.run(
		`CREATE TABLE IF NOT EXISTS lancamentos (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        setor TEXT,
        descricao TEXT,
        valor REAL
    )`,
		(err) => {
			if (err) {
				console.error("Erro ao criar tabela:", err.message);
			}
		}
	);
});

// Endpoint para adicionar um lançamento
app.post("/api/lancamentos", (req, res) => {
	const {setor, descricao, valor} = req.body;
	db.run(
		`INSERT INTO lancamentos (setor, descricao, valor) VALUES (?, ?, ?)`,
		[setor, descricao, valor],
		(err) => {
			if (err) {
				console.error("Erro ao adicionar lançamento:", err.message);
				return res.status(500).json({error: err.message});
			}
			res.status(200).json({message: "Lançamento adicionado com sucesso"});
		}
	);
});

// Endpoint para obter lançamentos
app.get("/api/lancamentos/:setor", (req, res) => {
	const setor = req.params.setor;
	db.all(`SELECT * FROM lancamentos WHERE setor = ?`, [setor], (err, rows) => {
		if (err) {
			console.error("Erro ao obter lançamentos:", err.message);
			return res.status(500).json({error: err.message});
		}
		res.status(200).json(rows);
	});
});

// Tratamento de erros gerais
process.on("unhandledRejection", (reason, promise) => {
	console.error("Unhandled Rejection at:", promise, "reason:", reason);
});

app.listen(port, () => {
	console.log(`Servidor rodando em http://localhost:${port}`);
});
