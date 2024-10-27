import { Request, Response } from "express";
import * as threadServices from "../services/threadService";
import {findManyThreads} from "../repositories/threadRepository";

export const createThread = async (req: Request, res: Response) => {
    try {
        const { body, file} = req;
        const user = res.locals.user;

        body.userId = user.id;

        const thread = await threadServices.createThread(body, file);
        res.json(thread);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: (error as Error).message });
    }
};

export const getThreads = async (req: Request, res: Response) => {
    try {
        const thread = await findManyThreads();
        res.json(thread);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: (error as Error).message });
        
    }
}