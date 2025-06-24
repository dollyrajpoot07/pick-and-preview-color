'use client';
import React, { useState } from 'react';
import styles from './pickAndPreviewColor.module.css';

export default function PickAndPreviewColor() {
    const [color, setColor] = useState('#123456');

    const copyColor = () => {
        navigator.clipboard.writeText(color);
        alert(`Copied ${color} to clipboard`);
    }
    return (
        <div className={styles.container}>
            <h2>Color Picker</h2>
            <input
                className={styles.input}
                type='color'
                value={color}
                onChange={(e) => setColor(e.target.value)}
            />
            <div className={styles.preview} style={{ backgroundColor: color }}>
                <p>{color}</p>
            </div>
            <button onClick={copyColor} className={styles.button}>
                Copy Hex Code
            </button>

        </div>
    )
}