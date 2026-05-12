const { registrar, login } = require('../models/usuarioModel');

exports.registrarUsuario = async (req, res) => {
    const { nombre, apellidos, telefono, correo, contrasena } = req.body;
    try {
        await registrar(nombre, apellidos, telefono, correo, contrasena);
        res.status(201).json({ ok: true, message: 'Usuario registrado con éxito' });
    } catch (err) {
        res.status(500).json({ ok: false, message: err.message });
    }
};

exports.loginUsuario = async (req, res) => {
    const { correo, contrasena } = req.body;
    try {
        const usuario = await login(correo, contrasena);
        if (!usuario) {
            return res.status(401).json({ ok: false, message: 'Correo o contraseña incorrectos' });
        }
        res.status(200).json({ ok: true, message: 'Inicio de sesión exitoso', usuario });
    } catch (err) {
        res.status(500).json({ ok: false, message: err.message });
    }
};