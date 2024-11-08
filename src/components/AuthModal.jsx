// AuthModal.jsx
import React, { useState } from 'react';
import { auth } from '../firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import styles from './authmodal.module.css';

const AuthModal = ({ isOpen, onClose }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isRegistering, setIsRegistering] = useState(false);

    const resetForm = () => {
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setError('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        try {
            if (isRegistering) {
                // Validar que las contraseñas coincidan
                if (password !== confirmPassword) {
                    throw new Error('Las contraseñas no coinciden');
                }

                // Validar longitud de la contraseña
                if (password.length < 6) {
                    throw new Error('La contraseña debe tener al menos 6 caracteres');
                }

                await createUserWithEmailAndPassword(auth, email, password);
                alert('¡Registro exitoso! Ahora puedes iniciar sesión.');
                setIsRegistering(false);
            } else {
                await signInWithEmailAndPassword(auth, email, password);
            }
            resetForm();
            onClose();
        } catch (error) {
            let errorMessage = 'Error en la operación';
            
            if (error.message === 'Las contraseñas no coinciden' || 
                error.message === 'La contraseña debe tener al menos 6 caracteres') {
                errorMessage = error.message;
            } else {
                switch (error.code) {
                    case 'auth/email-already-in-use':
                        errorMessage = 'Ya existe una cuenta con este correo';
                        break;
                    case 'auth/invalid-email':
                        errorMessage = 'El correo electrónico no es válido';
                        break;
                    case 'auth/operation-not-allowed':
                        errorMessage = 'Operación no permitida';
                        break;
                    case 'auth/weak-password':
                        errorMessage = 'La contraseña es muy débil';
                        break;
                    case 'auth/user-disabled':
                        errorMessage = 'Esta cuenta ha sido deshabilitada';
                        break;
                    case 'auth/user-not-found':
                        errorMessage = 'No existe una cuenta con este correo';
                        break;
                    case 'auth/wrong-password':
                        errorMessage = 'Contraseña incorrecta';
                        break;
                    default:
                        errorMessage = 'Error al procesar la solicitud';
                }
            }
            setError(errorMessage);
        } finally {
            setIsLoading(false);
        }
    };

    const toggleMode = () => {
        setIsRegistering(!isRegistering);
        resetForm();
    };

    if (!isOpen) return null;

    return (
        <div className={`${styles.modal} ${isOpen ? styles.open : ''}`}>
            <div className={styles['modal-content']}>
                <button 
                    className={styles.close} 
                    onClick={() => {
                        resetForm();
                        onClose();
                    }}
                >
                    &times;
                </button>
                <h2>{isRegistering ? 'Registrarse' : 'Iniciar Sesión'}</h2>
                {error && <p className={styles.error}>{error}</p>}
                <form onSubmit={handleSubmit}>
                    <div className={styles.inputGroup}>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Correo electrónico"
                            required
                            className={styles.input}
                        />
                    </div>
                    <div className={styles.inputGroup}>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Contraseña"
                            required
                            className={styles.input}
                            minLength={6}
                        />
                    </div>
                    {isRegistering && (
                        <div className={styles.inputGroup}>
                            <input
                                type="password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                placeholder="Confirmar contraseña"
                                required
                                className={styles.input}
                                minLength={6}
                            />
                        </div>
                    )}
                    <button 
                        type="submit" 
                        disabled={isLoading}
                        className={styles.submitButton}
                    >
                        {isLoading 
                            ? (isRegistering ? 'Registrando...' : 'Iniciando sesión...') 
                            : (isRegistering ? 'Registrarse' : 'Iniciar Sesión')
                        }
                    </button>
                </form>
                <p className={styles.toggleText}>
                    {isRegistering 
                        ? '¿Ya tienes una cuenta? ' 
                        : '¿No tienes una cuenta? '
                    }
                    <button 
                        onClick={toggleMode}
                        className={styles.toggleButton}
                        type="button"
                    >
                        {isRegistering ? 'Iniciar Sesión' : 'Registrarse'}
                    </button>
                </p>
            </div>
        </div>
    );
};

export default AuthModal;