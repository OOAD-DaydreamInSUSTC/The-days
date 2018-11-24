class Person {
	public constructor(public fullname:string, public sex:string, public personType:string, public knowledge:number,
		public physicalHealth:number, public mentalHealth:number, public money:number, public location:number, public partner: Person[],public message:Object[]) {

	}
	sendmsg(sender:Person,receiver:Person,msg:string){
		receiver.message[0]=sender
		receiver.message[1]=msg

	}
	agree(message){
		
		this.partner.push(message[0])
		message[0].partner.push(this)
		this.message[0]=""
		this.message[1]=""

	}
	disagree(message){
		this.message[0]=""
		this.message[1]=""


	}
}