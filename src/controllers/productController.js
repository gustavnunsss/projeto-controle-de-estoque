const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Criar produto
exports.createProduct = async (req, res) => {
    try {
        const { name, quantity, price } = req.body;

        const product = await prisma.product.create({
            data: {
                name,
                quantity: parseInt(quantity),
                price: parseFloat(price)
            },
        });

        res.status(201).json({ message: "Produto criado com sucesso", product });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erro ao criar produto"});
    }
};  