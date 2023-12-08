import { Request, Response } from "express"
import { linkService } from "../services/linkService";

function generateCode() {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for(let i = 0; i < 5; i++) 
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
}

export const linkController = {
    createLink: async(req: Request, res: Response) => {
        const { originalUrl } = req.body;
        const code = generateCode();

        const resultado = await linkService.createLink(originalUrl, code);

        return res.status(201).json({resultado});
    },

    codeCreate: async(req: Request, res: Response) => {
        const code = req.params.code;

        const resultado = await linkService.linkFindCode(code);
        if (!resultado) return res.status(404).json({ message: "O link não existe" });

        return res.status(200).json({ message: resultado.url });
        	
    }
}