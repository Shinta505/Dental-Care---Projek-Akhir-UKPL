// .eslintrc.js
module.exports = {
    env: {
        browser: true, // Untuk kode sisi klien (React)
        es2021: true,
        node: true,    // Untuk kode sisi server (Node.js/Express)
    },
    // Gunakan set aturan yang direkomendasikan
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:security/recommended', // <-- Aturan keamanan ditambahkan di sini
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
    },
    // Daftarkan plugin yang Anda gunakan
    plugins: [
        'react',
        'security', // <-- Plugin keamanan
    ],
    settings: {
        react: {
            version: 'detect', // Mendeteksi versi React secara otomatis
        },
    },
    // Anda bisa menimpa atau menambahkan aturan spesifik di sini
    rules: {
        'react/react-in-jsx-scope': 'off', // Tidak perlu untuk React 17+
        'security/detect-object-injection': 'warn', // Bisa diatur sebagai 'warn' atau 'error'
        // Tambahkan aturan lain jika perlu
    },
};