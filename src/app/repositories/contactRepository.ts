import { prisma } from '../lib/prisma';

export const contactRepository = {
    findById: async (id: string) => {
        return prisma.contact.findUnique({ where: { id } });
    },
    findAll: async () => {
        return prisma.contact.findMany();
    },
    create: async (data: any) => {
        return prisma.contact.create({ data });
    },
    delete: async (id: string) => {
        return prisma.contact.delete({ where: { id } });
    }
    };