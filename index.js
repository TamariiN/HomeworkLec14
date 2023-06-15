//  #1
//checking the season based on the month with switch case

let month = "march";

switch (month) {
    case ("march"): case ("april"): case ("may"):
        console.log("spring")
        break;
    case ("june"): case ("july"): case ("august"):
        console.log("summer")
        break;
    case ("september"): case ("october"): case ("november"):
        console.log("autumn")
        break;
    case ("december"): case ("january"): case ("february"):
        console.log("winter")
        break;
    default:
        console.log("iput correct month, please.")
        break;

}



    // #2
    //პირობა:
//გამოიანგარიშეთ 3 რიცხვიდან რომელია მაქსიმუმი, 
//ანუ გაქვთ სამი ცვლადი a, b, c და ამ ცვლადებს აქვთ შესაბამისად 
//რიცხვები მაგალითად 10, 15, 8 თქვენი მიზანია გამოითვალოთ რომელია 
//ამ სამიდან მაქსიმუმი. ანუ ამან უნდა დაგიკონსოლოს, მაქსიმუმია b ანუ 15 
//თუ შეცვლით რიცხვებს მაშინაც სწორად უნდა იმუშაოს.

let a=77;
let b=4;
let c=77;

if(a>=b && a>=c){
    console.log(a)
}else if(b>=a && b>=c){
    console.log(b)
}else{
    console.log(c)
}
