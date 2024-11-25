'use client';
import React from 'react';
import styles from './style.module.scss';

export default function Projects({ index, title, manageModal }) {
    const descriptions = [
        '191 Games - 112 Goals - 61 Assists',
        '778 Games - 672 Goals - 303 Assists',
        '75 Games - 32 Goals - 35 Assists',
        '39 Games - 34 Goals - 18 Assists'
    ];

    return (
        <div
            onMouseEnter={(e) => { manageModal(true, index, e.clientX, e.clientY); }}
            onMouseLeave={(e) => { manageModal(false, index, e.clientX, e.clientY); }}
            className={styles.project}
        >
            <h2>{title}</h2>
            <p>{descriptions[index % descriptions.length]}</p>
        </div>
    );
}
