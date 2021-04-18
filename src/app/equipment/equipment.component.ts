import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {
   equipmentItems: object[] = [
       {name: 'Duct Tape', mass: 0.5},
       {name: 'Space Camera', mass: 20},
       {name: 'Food', mass: 150},
       {name: 'Oxygen Tanks', mass: 400},
       {name: 'AE-35 Unit', mass: 5},
       {name: 'ISS Supplies', mass: 800},
       {name: 'Water', mass: 250},
       {name: 'Satellite', mass: 1200},
       {name: 'R2 Unit', mass: 32}
   ];
   cargoHold: object[] = [];
   cargoMass: number = 0;
   maximumAllowedMass: number = 2000;
   maxItems: number = 10;
   nearMaxMassClassActive: boolean = false;

   //buttonActive: 


   constructor() { }

   ngOnInit() { }

   // Code your addItem function here:
   addItem(equipmentObj:object) : boolean
   {
     this.cargoHold.push(equipmentObj);
     this.cargoMass += equipmentObj['mass'];
     return this.maximumAllowedMass - this.cargoMass <= 200 ;

     /*
     if ((this.maximumAllowedMass >= (this.cargoMass + equipmentObj["mass"])) && this.massBudgetRemaining > 0)
     {
        this.cargoMass += equipmentObj["mass"]; 
        this.massBudgetRemaining -= equipmentObj["mass"]; 
        this.cargoHold.push(equipmentObj);

        if(this.massBudgetRemaining<=200){
          this.nearMaxMassClassActive = true;
         }
         else{
            this.nearMaxMassClassActive = false;
           return false;  
         }
     }    
   }
     */
  }
}
