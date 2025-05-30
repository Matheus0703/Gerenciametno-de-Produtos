const express = require('express');
const { body, validationResult } = require('express-validator');
const Product = require('../models/Product.Js');
const router = express.Router();

// Validações comuns para criação e edição de produtos
const validateProduct = [
    body('name').notEmpty().withMessage('O nome do produto é obrigatório'),
    body('price').isNumeric().withMessage('O preço deve ser um número válido'),
    body('category').notEmpty().withMessage('A categoria do produto é obrigatória'),
];

// Criar um produto
router.post('/', validateProduct, async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const { name, price, category } = req.body;
        const newProduct = new Product({ name, price, category });
        await newProduct.save();
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao criar produto', error });
    }
});

// Obter todos os produtos
router.get('/', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar produtos', error });
    }
});

// Atualizar um produto
router.put('/:id', validateProduct, async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const { name, price, category } = req.body;
        const updatedProduct = await Product.findByIdAndUpdate(
            req.params.id,
            { name, price, category },
            { new: true }
        );

        if (!updatedProduct) return res.status(404).json({ message: 'Produto não encontrado' });

        res.json(updatedProduct);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao atualizar produto', error });
    }
});

// Deletar um produto
router.delete('/:id', async (req, res) => {
    try {
        const deletedProduct = await Product.findByIdAndDelete(req.params.id);
        if (!deletedProduct) return res.status(404).json({ message: 'Produto não encontrado' });

        res.json({ message: 'Produto excluído com sucesso' });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao excluir produto', error });
    }
});

module.exports = router;
