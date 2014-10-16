var dog = {
        tiredness: 20,
        hunger: 20,
        lonliness: 20,
        happiness: 150,
        obedience: 750,
        feed: function(foodtype){
            console.log("Om nom nom");
            if(foodtype === "treat"){
                this.happiness = this.happiness + 25;
                this.hunger = this.hunger - 1;
            
            }
            else if(foodtype === "poo"){
                this.happiness = this.happiness - 50;
                this.hunger = 0;
            }
                
            else {this.hunger = this.hunger - 5;}
            
           this.status();
            
        },
        exercise: function(playtype){
            
            if(playtype === "fetch"){
                console.log("Woof! I love fetch!");
                this.happiness = this.happiness + 50;
                this.hunger = this.hunger +10;
            }
            else if(playtype === "jog"){
                console.log("Are you joking? I hate jogging.");
                this.happiness = this.happiness - 5;
                this.hunger = this.hunger + 25;
            }
            else{
                console.log("Woof! I love to play!");
                this.hunger = this.hunger + 5;
                this.happiness = this.happiness + 5;
            }
            
            this.status();
            
        },
        bathtime: function(){
            console.log("Oh no!!!!");
            this.happiness = this.happiness - 4;
            this.obedientness = this.obedientness - 500;
            this.hunger = this.hunger + 5;
            this.lonliness = this.lonliness + 20;
            this.status();
        },
        status: function(){
            console.log("Happiness:", this.happiness);
            console.log("Hunger:", this.hunger);
            console.log("Tiredness:", this.tiredness);
            console.log("Lonliness:", this.lonliness);
            console.log("Obedience:", this.obedience);
            
            if (this.hunger >= 15 && this.lonliness >= 30 && this.happiness <= 140){
                this.death();
            }
            
            },
        death: function() {
                console.log("YOU KILLED YOUR DOG!");
            },
         pet: function(){
             
            if(this.happiness >= 170){
             console.log("Don't touch me, that's disgusting.");
            }
            else if(this.lonliness >=200){
            console.log("Mmm....never stop.");     
            }
            else{
            console.log("Sure, petting is fine.");
            
            
            }
        this.status();
         }
            
               
};

