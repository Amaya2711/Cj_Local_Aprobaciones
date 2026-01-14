import sql from 'mssql';

const config = {
  user: process.env.SQLSERVER_USER,
  password: process.env.SQLSERVER_PASSWORD,
  server: process.env.SQLSERVER_HOST,
  port: 1433,
  database: process.env.SQLSERVER_DB,
  options: {
    encrypt: false,
    trustServerCertificate: true
  }
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Método no permitido' });
    return;
  }

  const { idUsuario, clave } = req.body;

  if (!idUsuario || !clave) {
    res.status(400).json({ error: 'Faltan parámetros' });
    return;
  }

  try {
    await sql.connect(config);
    const result = await new sql.Request()
      .input('pIdUsuario', sql.NVarChar(50), idUsuario)
      .input('pClave', sql.NVarChar(10), clave)
      .execute('sp_ValidarUsuario');

    if (result.recordset.length === 0) {
      res.status(401).json({ error: 'Usuario o clave incorrectos' });
    } else {
      res.status(200).json(result.recordset[0]);
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  } finally {
    await sql.close();
  }
};
