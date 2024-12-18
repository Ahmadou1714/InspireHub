import React, { useState } from "react";
import { IonIcon } from "@ionic/react";
import { personCircle, logOut, mail, lockClosed, personAdd } from "ionicons/icons";
import { useAuth } from "../context/AuthContext";

export default function Profile() {
  const { user, login, logout, register } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
  });
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      if (isLogin) {
        // Simulation de connexion
        if (formData.email && formData.password) {
          login({
            email: formData.email,
            name: formData.email.split("@")[0],
          });
          setIsModalOpen(false);
        }
      } else {
        // Simulation d'inscription
        if (formData.email && formData.password && formData.name) {
          await register({
            email: formData.email,
            name: formData.name,
          });
          setIsModalOpen(false);
        }
      }
    } catch (error) {
      setError("Une erreur est survenue. Veuillez réessayer.");
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="profile-container">
      {user ? (
        <div className="profile-info">
          <button className="profile-button" onClick={() => setIsModalOpen(true)}>
            <IonIcon icon={personCircle} />
            <span>{user.name}</span>
          </button>
          <button className="icon-button logout-button" onClick={logout}>
            <IonIcon icon={logOut} />
          </button>
        </div>
      ) : (
        <button className="profile-button" onClick={() => setIsModalOpen(true)}>
          <IonIcon icon={personCircle} />
          <span>Connexion</span>
        </button>
      )}

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="auth-modal">
            <button
              className="close-button"
              onClick={() => setIsModalOpen(false)}
            >
              ×
            </button>
            <h2>{isLogin ? "Connexion" : "Inscription"}</h2>
            {error && <div className="error-message">{error}</div>}
            <form onSubmit={handleSubmit}>
              {!isLogin && (
                <div className="form-group">
                  <IonIcon icon={personAdd} />
                  <input
                    type="text"
                    name="name"
                    placeholder="Nom"
                    value={formData.name}
                    onChange={handleChange}
                    required={!isLogin}
                  />
                </div>
              )}
              <div className="form-group">
                <IonIcon icon={mail} />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <IonIcon icon={lockClosed} />
                <input
                  type="password"
                  name="password"
                  placeholder="Mot de passe"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className="submit-button">
                {isLogin ? "Se connecter" : "S'inscrire"}
              </button>
            </form>
            <button
              className="switch-auth-button"
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin
                ? "Pas encore de compte ? S'inscrire"
                : "Déjà un compte ? Se connecter"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
