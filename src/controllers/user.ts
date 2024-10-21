import { Request, Response } from "express";
import * as userServices from "../services/userServis";

export const getUser = async (req: Request, res: Response) => {
  try {
    const users = await userServices.getUsers();
    res.json(users);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: (error as Error).message,
    });
  }
};

export const createUser = async (req: Request, res: Response) => {
  try {
    // const body = req.body
  const { body } = req;
  console.log(body);

  const addedUser = await userServices.createUser(body);

  res.json(addedUser);
    
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: (error as Error).message,
    });    
  }
  
};
