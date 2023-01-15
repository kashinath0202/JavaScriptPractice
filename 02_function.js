console.warn('1. Write any two functions with no arguments and no return type as per your choice & log message on console');

function simple(){
    console.log("I am Angular Developer");
}
 simple();

 function show(){
    console.log("I am Front end developer");
 }
 show();




 console.log('2. Write a function with arguments namely firstName, lastName and concat these two arguments and log on console inside a function.');


 function selfDetails(fName,lName, mName='Gopal'){
  
      console.log(fName);
      console.log(mName);
      console.log(lName);
console.log('concat');
      console.log(fName+mName+lName);
      console.log(fName+' '+mName+' '+lName);
      
 }
 selfDetails('Kashi', 'Jeure');

 console.log("3. Write A functions with two args and should swap the passed values and log on console before swap and after swap values inside function itself.")
 console.log("3.1. Function name: swap_values( )");
 console.log("3.2. Invoke or call the function with values “Virat” and “Anushka");
 console.log("3.3. Invoke or call the same function with values 1000 and 2000;");
  

 function swap_values(val_1,val_2){

    console.log('Before Val_1',val_1);
    console.log('Before Val_2',val_2);

    var temp;
    temp=val_1;
    val_1=val_2;
    val_2=temp;

    console.log('After Val_1',val_1);
    console.log('After Val_2',val_2);

 }
 swap_values('Virat','Anushka');
 swap_values('Sachin','Sandip');
 swap_values(100,200);



 console.log("4. WAF with 3 parameters or arguments and it should return the addition")
 console.log("4.1. Function name: add_three_numbers()");
 console.log("4.2. Call the function for values → 10.23, 600, 40");
 console.log("4.3. Invoke the same function for values “Hello”, “ Good”, “ Morning”");
  
 function add_three_numbers(num_1,num_2,num_3){
  
    return console.log('Addition -',num_1+num_2+num_3);
 }
 add_three_numbers(10,20,30);
 add_three_numbers(10.23,100,200);
 add_three_numbers('Hello','Good','Morning');