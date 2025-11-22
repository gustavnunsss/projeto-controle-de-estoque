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
      res.status(500).json({ error: "Erro ao criar produto" });
    }
};  

// Listar produtos 
exports.getProducts = async (req, res) => {
    try {
        const products = await prisma.product.findMany();
        res.json(products);
    }   catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erro ao buscar produtos" });
    }
};

// Buscar produtos pelo ID
exports.getProducts = async (req, res) => {
    try {
        const { id } = res.params;

        const product = await prisma.product.findunique({
            where: { id: Number(id) },
        });

        if (!product) {
            return res.status(404).json({ error: "Produto não encontrado"});
        }

        res.json(product);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erro ao buscar produto"});
    }
};

// Atualizar produtos 
exports.updateproduct = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, quantity, price } = req.body;

        const upadate = await prisma.product.upadate({
            where: { id: Number(id) },
            data: {
                name,
                quantity: Number(quantity),
                price: Number(price),
            },
        });

        res.json({ message: "Produto atualizado com sucesso!", updated });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erro ao atualizar produto" });
    }
};

// Deletar produto
exports.deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    await prisma.product.delete({
      where: { id: Number(id) },
    });

    res.json({ message: "Produto deletado com sucesso!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao deletar produto" });
  }
};