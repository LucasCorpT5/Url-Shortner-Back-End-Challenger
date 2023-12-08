import prisma from "../prisma"

export const linkService = {
    createLink: async(url: string, code: string) => {
        const link = await prisma.link.create({
            data: {
                url,
                code
            }
        });

        return link;
    },

    linkFindCode: async(code: string) => {
        const link = await prisma.link.findFirst({
            where: {
                code
            }
        });

        return link;
    }
}