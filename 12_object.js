let person = {
   name:'Sachin',
   age:25,
     address:{
        village:'Arali',
        dist:'Solapur',
        tal:'Mangalwedha',
        contact:{
           moNo:9096949202,
           email:'sachi@gmail.com'
        }
   }
}
 
 var pEmail = person.address.contact.email
 console.log(pEmail);
 var pEmail = person.address.contact.email='abc@gmail.com';
 console.log(pEmail);

 person.address.state='Maharashtra'
 console.log(person.address.state);
 person.isMarried='Yes'
 
 console.log(Object.keys(person));

 delete person.age

 for (const key in person) {
    if (Object.hasOwnProperty.call(person, key)) {
        const element = person[key];
        console.table(element);
    }
 }
 
    console.table(person.address.contact)
 