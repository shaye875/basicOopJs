class BankcCount {
    constructor(owner, balance) {
       this.owner = owner
       this.balance = balance
    }
    deposit(amount){
        this.balance+=amount
    }
    withdraw(amount){
        if(this.balance-amount>=0){
            this.balance-=amount
        }
    }
     checkBalance(){
        console.log(this.balance)  
     }
    }