//现在的map数组,两种形式 vacation school
let mapVacationArray:number[][]
let mapSchoolArray:number[][]
let mapNodeNow:MapNode[]
let mapArrayNow:number[][]
let player:Person[] = []

function main(){
	let personNum = 4;
	let i:number=0
	let j:number=0
	let round = 48
	for(i=0;i<personNum;i++){
		let fullname: string="a"
		let sex: string="m"
		let personType = "k"
		let initialK = 0
		let initialM = 0
		let initialP = 0
		let initialMoney = 0
		let initialL = 0
		let eachPerson = new Person(fullname,sex,personType,initialK,initialP,initialM,initialMoney,initialL,0)
		player.push(eachPerson)
	}
	let event = new Events()
	createEvent(event)
	//现在的mapNodeList
	mapNodeNow = event.schoolNodeList
	for(i=0;i<round;i++){
		for(j=0;j<personNum;j++){
			perMove(i,j)
		}
	}
}

function perMove(round:number,per:number){
	//check if there is an event for all player
	eventForAll(per)
	//check if any one would like to be your partener
	checkResponse(per)
	//get the number of next step
	let nextStep = randomStep()
	changeLocation(per,nextStep)

}

//change the event on the map as time goes by
function changeMap(round:number,e:Events){
	//for example
	if(round==4||round==10){ 
		mapNodeNow = e.vacationNodeList
		mapArrayNow = mapVacationArray
	}else if(round==6||round==12){
		mapNodeNow = e.schoolNodeList
		mapArrayNow = mapSchoolArray
	}
}

//move and change location
function changeLocation(per:number,step:number){
	let temp = player[per]
	temp.location +=step
}

//initialize all the map and card
//add event,includes map and card
function createEvent(e:Events){
	//for example
	e.createCard(e,"a","aa",0,0,0,0)
}

//for the events published to all the players, the time it appears depends on the round number
//includes compulsory events and optional events
//these part of events should be added into the personal files
//if the event needs to find a partener, the personal file needs to read and rewrite
function eventForAll(n:number){
	//midTerm quiz: example of compulsory events
	if(n==2){

	}
	//sports meeting: example of optional events
	if(n==9){

	}
}

//check if anyone would like to be your partener
function checkResponse(per:number){

}

//determine the number of step that the player should go
function randomStep(){
	let step = Math.ceil(Math.random()*6)
	if(step==0){
		step=1
	}
	return step
}