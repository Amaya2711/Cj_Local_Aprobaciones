import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

export default function LoginScreen() {
  const [usuario, setUsuario] = useState('');
  const [clave, setClave] = useState('');
  const [loading, setLoading] = useState(false);

  const validarUsuario = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://TU-VERCEL-APP.vercel.app/api/validarUsuario', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ idUsuario: usuario, clave }),
      });
      const data = await response.json();
      if (response.ok) {
        Alert.alert('Bienvenido', `Usuario: ${data.NombreEmpleado || data.idusuario}`);
      } else {
        Alert.alert('Error', data.error || 'Usuario o clave incorrectos');
      }
    } catch (error) {
      Alert.alert('Error', 'No se pudo conectar al servidor');
    }
    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Validar Usuario</Text>
      <TextInput
        style={styles.input}
        placeholder="Usuario"
        value={usuario}
        onChangeText={setUsuario}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Clave"
        value={clave}
        onChangeText={setClave}
        secureTextEntry
      />
      <Button title={loading ? 'Validando...' : 'Validar'} onPress={validarUsuario} disabled={loading} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});
