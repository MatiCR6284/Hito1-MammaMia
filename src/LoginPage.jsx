import React, { useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validaciones
    if (!email || !password) {
      setMessage("❌ Todos los campos son obligatorios.");
      return;
    }

    if (password.length < 6) {
      setMessage("❌ La contraseña debe tener al menos 6 caracteres.");
      return;
    }

    // Simulación de éxito (esto se reemplazaría con una autenticación real)
    setMessage("✅ Inicio de sesión exitoso 🎉");
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Iniciar Sesión</h2>
      <form
        className="mx-auto p-4 border rounded shadow-sm"
        style={{ maxWidth: "400px" }}
        onSubmit={handleSubmit}
      >
        {/* Campo Email */}
        <div className="mb-3">
          <label className="form-label">Email:</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        {/* Campo Contraseña */}
        <div className="mb-3">
          <label className="form-label">Contraseña:</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {/* Mensaje de validación */}
        {message && <p className="text-center fw-bold">{message}</p>}

        {/* Botón de Enviar */}
        <button type="submit" className="btn btn-primary w-100">
          Iniciar Sesión
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
