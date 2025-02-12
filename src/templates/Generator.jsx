import { useState } from "react";
import './Generator.css'

export default function Generator() {
    const [length, setLength] = useState(12);
    const [useUppercase, setUseUppercase] = useState(true);
    const [useLowercase, setUseLowercase] = useState(true);
    const [useNumbers, setUseNumbers] = useState(true);
    const [useSymbols, setUseSymbols] = useState(true);
    const [useSeparators, setUseSeparators] = useState(false);
    const [password, setPassword] = useState("Пароль появится здесь");

    const generatePassword = () => {
        const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const lowercase = "abcdefghijklmnopqrstuvwxyz";
        const numbers = "0123456789";
        const symbols = "!@#$%^&*()_+[]{}|;:,.<>?/`~";
        const separators = "-_";

        let characters = "";
        if (useUppercase) characters += uppercase;
        if (useLowercase) characters += lowercase;
        if (useNumbers) characters += numbers;
        if (useSymbols) characters += symbols;
        if (useSeparators) characters += separators;

        if (!characters) {
            setPassword("Выберите хотя бы один тип символов");
            return;
        }

        let newPassword = "";
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            newPassword += characters[randomIndex];
        }
        setPassword(newPassword);
    };

    const copyPassword = async () => {
        if (password === "Пароль появится здесь" || password === "Выберите хотя бы один тип символов") {
            alert("Сначала сгенерируйте пароль!");
            return;
        }
        try {
            await navigator.clipboard.writeText(password);
            alert("Пароль скопирован в буфер обмена!");
        } catch (err) {
            alert("Не удалось скопировать пароль: " + err);
        }
    };

    return (
        <div className="password-generator">
            <h2>Генератор паролей</h2>
            <div className="password-length-container">
                <label htmlFor="password-length">Длина пароля:</label>
                <input type="number" id="password-length" min="4" max="64" value={length} onChange={(e) => setLength(Number(e.target.value))}/>
            </div>
            <div className="checkbox-group">
                <label><input type="checkbox" checked={useUppercase} onChange={() => setUseUppercase(!useUppercase)} /> Прописные латинские буквы</label>
                <label><input type="checkbox" checked={useLowercase} onChange={() => setUseLowercase(!useLowercase)} /> Строчные латинские буквы</label>
                <label><input type="checkbox" checked={useNumbers} onChange={() => setUseNumbers(!useNumbers)} /> Цифры</label>
                <label><input type="checkbox" checked={useSymbols} onChange={() => setUseSymbols(!useSymbols)} /> Специальные символы</label>
                <label><input type="checkbox" checked={useSeparators} onChange={() => setUseSeparators(!useSeparators)} /> Разделители (тире и подчёркивание)</label>
            </div>
            <button onClick={generatePassword}>Сгенерировать</button>
            <div className="password-output" id="password-output">{password}</div>
            <button onClick={copyPassword}>Copy</button>
        </div>
    );
}