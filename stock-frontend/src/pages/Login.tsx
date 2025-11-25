import React, { useState } from 'react';
import api from '../api/httpClient';
import axios from 'axios';

interface AuthResponse {
  user: {
    id: number;
    email: string;
  };
  token: string;
}

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsLoading(true);
    setError(null);

    try {
      const response = await api.post<AuthResponse>('/auth/Login', {
        email,
        password,
      });

      const { token } = response.data;

      localStorage.setItem('authToken', token);

      setEmail('');
      setPassword('');

      console.log('Login bem-sucedido!  Token salvo:', token);
      alert('Login efetuado! (Próxima etapa: navegação)');
    } catch (err) {
      if (axios.isAxiosError(err) && err.response) {
        setError(err.response.data.message || 'Credenciais inválidas.');
      } else {
        setError('Erro de conexão. Verifique o backend.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      style={{
        padding: '40px',
        maxWidth: '400px',
        margin: '50px auto',
        border: '1px solid #ccc',
        borderRadius: '8px',
      }}
    >
      <h2>Controle de Estoque - Login</h2>

      {error && (
        <p style={{ color: 'red', fontWeight: 'bold' }}>{error}</p>
      )}

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '4px',
              border: '1px solid #ddd',
            }}
          />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '4px',
              border: '1px solid #ddd',
            }}
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          style={{
            width: '100%',
            padding: '12px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            opacity: isLoading ? 0.6 : 1,
          }}
        >
          {isLoading ? 'Acessando...' : 'Entrar'}
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
