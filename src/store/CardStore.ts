import AIService from "../services/AIService";
import CardService from "../services/CardService";

export default class CardStore { 
		
	async getCards() { 
		try { 
			const response = await CardService.getCards()
			const cards = response.data
			return cards
		} catch (e:any) { 
			throw e
		}
	}

	async askAI(q:string) { 
		try {
			const response = await AIService.askAI(q)
			return response.data
		} catch(e) { 
			console.log(e)
			throw e;
		}
	}

}