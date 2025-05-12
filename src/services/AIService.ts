import { AxiosResponse } from "axios";
import $api from "../http";
import { AIAns } from "../models/AIAns";

export default class AIService { 
  static async askAI(q:string): Promise<AxiosResponse<AIAns>> { 
    return $api.post('/ai/askAI', {q})
  }
}