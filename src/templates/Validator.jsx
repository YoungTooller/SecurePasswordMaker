import { useState } from "react";
import "./Validator.css"

export default function Validator() {
    const [password, setPassword] = useState("");
    const getPasswordStrength = (password) => {
        let strength = 0;
        if (password.length >= 8) strength++;
        if (/[A-Z]/.test(password)) strength++;
        if (/[a-z]/.test(password)) strength++;
        if (/\d/.test(password)) strength++;
        if (/[^A-Za-z0-9]/.test(password)) strength++;
        return strength;
    };

    const strength = getPasswordStrength(password);
    const strengthPercentage = (strength / 5) * 100;
    const strengthColors = ["#e74c3c", "#e67e22", "#f1c40f", "#2ecc71"];
    const strengthColor = strengthColors[Math.min(strength, strengthColors.length - 1)];

    return (
        <div className="password-validator">
            <h2>Проверка пароля</h2>
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Введите пароль"
                className="password-input"
            />
            <div className="progress-bar">
                <div
                    className="progress"
                    style={{ width: `${strengthPercentage}%`, backgroundColor: strengthColor }}
                ></div>
            </div>
            <ul className="password-criteria">
                <li className={password.length >= 8 ? "valid" : "invalid"}>Минимум 8 символов</li>
                <li className={/[A-Z]/.test(password) ? "valid" : "invalid"}>Заглавная буква</li>
                <li className={/[a-z]/.test(password) ? "valid" : "invalid"}>Строчная буква</li>
                <li className={/\d/.test(password) ? "valid" : "invalid"}>Цифра</li>
                <li className={/[^A-Za-z0-9]/.test(password) ? "valid" : "invalid"}>Спецсимвол</li>
            </ul>
        </div>
    );
};