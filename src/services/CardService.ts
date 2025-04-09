import { AxiosResponse } from "axios";
import $api from "../http";
import { ICard } from "../models/ICard";

export default class CardService { 
  static async getCards(): Promise<AxiosResponse<ICard[]>> { 
    return $api.get<ICard[]>('/cards/getCards');
  }
}