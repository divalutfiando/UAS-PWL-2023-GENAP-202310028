const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const mysql = require('mysql');
const app = express();
const port = 8080;
const cors = require('cors');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static('public'));

// untuk konfigurasi ke SQL
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'data_kegiatan',
});

// menghubungkan ke database
connection.connect((err) => {
  if (err) {
    console.error('Koneksi ke database gagal', err);
  } else {
    console.log('Koneksi ke database berhasil');
  }
});

app.use((request, response, next) => {
  response.setHeader('Access-Control-Allow-Origin', '*'); //mengizinkan permintaan dari asal apapun
  response.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, SELECT');
  response.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// endpoint untuk menambahkan kegiatan
app.post('/api/kegiatan', (request, response) => {
  const { judul, deskripsi, gambar } = request.body;

  const sql = `INSERT INTO kegiatan (judul, deskripsi, gambar) VALUES (?, ?, ?)`;
  const values = [judul, deskripsi, gambar];

  connection.query(sql, values, (error, results) => {
    if (error) {
      console.error('Gagal menambahkan kegiatan', error);
      response.status(500).json({ message: 'Input gagal' });
    } else {
      console.log('Data berhasil terkirim');
      response.status(200).json({ message: 'Data berhasil terkirim' });
    }
  });
});

// Endpoint untuk mendapatkan semua kegiatan
app.get("/api/kegiatan", (request, response) => {
  const sql = "SELECT * FROM kegiatan";

  connection.query(sql, (error, results) => {
    if (error) {
      console.error("Gagal mendapatkan kegiatan", error);
      response.status(500).json({ message: "Gagal mendapatkan kegiatan" });
    } else {
      console.log("Data kegiatan berhasil didapatkan");
      response.status(200).json(results);
    }
  });
});


// Konfigurasi multer untuk menyimpan gambar
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/uploads');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({ storage });

app.post('/api/form', upload.single('image'), (request, response) => {
  const { judul, deskripsi } = request.body;

  if (!request.file) {
    return response.status(400).json({ message: 'No file uploaded' });
  }

  const imagePath = request.file.path;

  const sql = `INSERT INTO form (judul, deskripsi, image) VALUES (?, ?, ?)`;
  const values = [judul, deskripsi, imagePath];

  connection.query(sql, values, (error, results) => {
    if (error) {
      console.error('Gagal mengirim data form', error);
      response.status(500).json({ message: 'Input form gagal' });
    } else {
      console.log('Data form terkirim!');
      response.status(200).json({ message: 'Data sudah terkirim coy' });
    }
  });
});

// endpoint untuk menampilkan FORM
app.get('/api/form', (request, response) => {
  connection.query('SELECT judul, deskripsi, image FROM form', (error, results) => {
    if (error) {
      console.error('Gagal menampilkan form yang telah diisi', error);
      response.status(500).json({ message: 'Gagal menampilkan form' });
    } else {
      console.log('Form berhasil ditampilkan');
      response.status(200).json(results);
    }
  });
});


// Endpoint untuk login
app.post("/api/login", (req, res) => {
  const { username, password } = req.body;

  const sql = `SELECT * FROM signup WHERE username = ? AND password = ?`;
  const values = [username, password];

  connection.query(sql, values, (error, results) => {
    if (error) {
      console.error('Gagal melakukan login', error);
      res.status(500).json({ message: 'Login gagal' });
    } else {
      if (results.length > 0) {
        console.log('Login berhasil');
        res.status(200).json({ message: 'Login berhasil' });
      } else {
        console.log('Login gagal');
        res.status(401).json({ message: 'Invalid credentials' });
      }
    }
  });
});

app.post("/api/signup", (req, res) => {
  const { username, password } = req.body;
  const sql = `INSERT INTO signup (username, password) VALUES (?, ?)`;
  const values = [username, password];

  connection.query(sql, values, (error, results) => {
    if (error) {
      console.error('Gagal menambahkan user', error);
      res.status(500).json({ message: 'Sign up gagal' });
    } else {
      console.log('User berhasil ditambahkan');
      res.status(200).json({ message: 'Sign up berhasil' });
    }
  });
});

// Endpoint untuk mendapatkan data user berdasarkan username
app.get("/api/username/:username", (req, res) => {
  const { username } = req.params;

  const sql = `SELECT * FROM signup WHERE username = ?`;
  const values = [username];

  connection.query(sql, values, (error, results) => {
    if (error) {
      console.error("Gagal mendapatkan data user", error);
      res.status(500).json({ message: "Gagal mendapatkan data user" });
    } else {
      if (results.length > 0) {
        console.log("Data user ditemukan");
        res.status(200).json(results[0]); // Mengirimkan data user pertama yang ditemukan
      } else {
        console.log("Data user tidak ditemukan");
        res.status(404).json({ message: "Data user tidak ditemukan" });
      }
    }
  });
});

// menjalankan server
app.listen(port, () => {
  console.log(`Server berjalan di port ${port}`);
});

