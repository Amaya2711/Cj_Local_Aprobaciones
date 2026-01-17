import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function ValidarUsuarioScreen() {
  const [usuario, setUsuario] = useState('');
  const [resultado, setResultado] = useState(null);
  const [error, setError] = useState(null);

  const handleValidar = async () => {
    setError(null);
    setResultado(null);
    try {
      const response = await fetch('http://192.168.0.197:3000/api/validarUsuario', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ usuario }),
      });
      const data = await response.json();
      if (response.ok) {
        setResultado(data);
      } else {
        setError(data.message || 'Error al validar usuario');
      }
    } catch (err) {
      setError('Error de conexión');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Validar Usuario</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingrese usuario"
        value={usuario}
        onChangeText={setUsuario}
      />
      <Button title="Validar" onPress={handleValidar} />
      {resultado && <Text style={styles.resultado}>Resultado: {JSON.stringify(resultado)}</Text>}
      {error && <Text style={styles.error}>Error: {error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  input: {
    width: '80%',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginBottom: 16,
    borderRadius: 4,
  },
  resultado: {
    marginTop: 16,
    color: 'green',
  },
  error: {
    marginTop: 16,
    color: 'red',
  },
});
