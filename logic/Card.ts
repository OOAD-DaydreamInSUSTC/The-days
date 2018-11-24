class Card {
	public constructor(public cardName:string, public cardContent:string, public knowledge:number, public physicalHealth:number, 
    public mentalHealth:number, public money:number) {	
	}
    setCardChange(c:Card,player: Person[], num:number){
		let playerNow = player[num]
		playerNow.knowledge += c.knowledge
		playerNow.mentalHealth += c.mentalHealth
		playerNow.physicalHealth +=c.physicalHealth
		playerNow.money += c.money
	}

}