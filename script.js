//circle






//PERSON DETAILS
class person{
    constructor(name,age,gender,salary)
    {
        this.name=name;
        this.age=age;
        this.gender=gender;
        this.salary=salary;

    }
    
}
var obj1=new person("mani",27,"female","50k");
var obj2=new person("ranji",27,"female","70k")
    console.log(obj1.name,Object.age,obj1.gender,obj1.salary);
    console.log(obj2.name,obj2.age,obj2.gender,obj2.salary);

//UBER PRICE CALCULATOR
let intialpay = 10
let cities = ["BEACH", "TNAGAR", "TAMBARAM", ]
let uberRates = [50, 40, 35]


let customerName = "JOE" 
let customerCity = "TAMBARAM" 
function getRate(customerCity) {
  function uberRate(customerCity, index) {
    
    let finalRate = (uberRates[index]) * intialpay
    return finalRate
  }
  
  console.log(customerCity, "rate is:", uberRate(customerCity, cities.indexOf(customerCity)))
}

getRate(customerCity)


