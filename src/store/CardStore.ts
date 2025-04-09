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

}