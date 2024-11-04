import { prismaClient } from "../database/PrismaCliente.js"

export class AdotanteController {

    async getAdotantes (request, response) {
        try {
            const adotantes = await prismaClient.adotante.findMany();
            return response.status(200).json(adotantes);
        } catch (error) {
            return response.status(500).json({ error: error.message });
        }
    }

    async getAdotanteById (request, response) {
        const { id } = request.params;
        try {
            const adotante = await prismaClient.adotante.findUnique({
                where: { id }
            })
            return response.status(200).json(adotante);
        } catch (error) {
            return response.status(500).json({ error: error.message });
        }
    }

    async postAdotante (request, response) {
        const { email, nome, endereco, telefone } = request.body;
        try {
            const adotante = await prismaClient.adotante.create({
                data: {email, nome, endereco, telefone}
            })
            return response.status(201).json(adotante);
        } catch (error) {
            return response.status(500).json({ error: error.message });
        }
    }

    async putAdotante (request, response) {
        const { id } = request.params;
        const { email, nome, endereco, telefone } = request.body;
        try {
            const adotante = await prismaClient.adotante.update({
                data: {
                    email, nome, endereco, telefone
                },
                where: { id }
            })
            return response.status(200).json(adotante);
        } catch (error) {
            return response.status(500).json({ error: error.message });
        }
    }

    async deleteAdotante (request, response) {
        const { id } = request.params;
        try {
            await prismaClient.adotante.delete({
                where: { id }
            })
            return response.status(200).json({ message: 'Cliente excluído com sucesso' });
        } catch (error) {
            return response.status(500).json({ error: error.message });
        }
    }
}
