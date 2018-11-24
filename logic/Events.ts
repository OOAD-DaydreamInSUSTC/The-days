class Events {
	public schoolNodeList:MapNode[]
	public vacationNodeList:MapNode[]
	public cardlist:Card[]
	public constructor() {
	}
	createCard(e:Events,name:string, content:string, knowledge:number, physicalHealth:number, mentalHealth:number, money:number){
		let cardNew = new Card(name,content,knowledge,physicalHealth,mentalHealth, money)
		e.cardlist.push(cardNew)
	}

	createSchoolNode(e:Events,name:string, content:string, nodetype:string,knowledge:number, physicalHealth:number, mentalHealth:number, money:number){
		let MapNodeNew = new MapNode(name,content,nodetype,knowledge,physicalHealth,mentalHealth, money)
		e.schoolNodeList.push(MapNodeNew)
	}

	createVacationNode(e:Events,name:string, content:string, nodetype:string,knowledge:number, physicalHealth:number, mentalHealth:number, money:number){
		let MapNodeNew = new MapNode(name,content,nodetype,knowledge,physicalHealth,mentalHealth, money)
		e.vacationNodeList.push(MapNodeNew)
	}

}
