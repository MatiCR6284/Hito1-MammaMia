import React, { useState } from "react";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password || !confirmPassword) {
      setMessage("❌ Todos los campos son obligatorios.");
      return;
    }

    if (password.length < 6) {
      setMessage("❌ La contraseña debe tener al menos 6 caracteres.");
      return;
    }

    if (password !== confirmPassword) {
      setMessage("❌ Las contraseñas no coinciden.");
      return;
    }

    setMessage("✅ Registro exitoso 🎉");
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Registro</h2>
      <form className="mx-auto p-4 border rounded shadow-sm" style={{ maxWidth: "400px" }} onSubmit={handleSubmit}>
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

        {/* Campo Confirmar Contraseña */}
        <div className="mb-3">
          <label className="form-label">Confirmar Contraseña:</label>
          <input
            type="password"
            className="form-control"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>

        {/* Mensaje de validación */}
        {message && <p className="text-center fw-bold">{message}</p>}

        {/* Botón de Enviar */}
        <button type="submit" className="btn btn-primary w-100">
          Registrarse
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
