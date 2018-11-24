class MapNode {
	public constructor(public name:string, public content:string, public personType:string, public knowledge:number, 
	public physicalHealth:number, public mentalHealth:number, public money:number) {
	}

	setNodeChange(n:MapNode,player: Person[], num:number){
		let playerNow = player[num]
		if(n.personType=="k"){
			if (n.personType==playerNow.personType){
				playerNow.knowledge = n.knowledge
				playerNow.mentalHealth += n.mentalHealth
			}else{
				playerNow.mentalHealth += n.mentalHealth
				playerNow.knowledge = n.knowledge*0.8
			}
		}else if(n.personType=="s"){
			if (n.personType==playerNow.personType){
				playerNow.knowledge = n.knowledge
				playerNow.mentalHealth += n.mentalHealth
			}else{
				playerNow.mentalHealth += n.mentalHealth*0.8
				playerNow.knowledge = n.knowledge
			}
		}
		playerNow.physicalHealth += n.physicalHealth
		playerNow.money += n.money
	}

}