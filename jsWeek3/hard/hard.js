function person(){
    let pii = {
        name:"John Doe",
        ssn: "123-456-7890",
    }
    return {
        getName:() =>{
        return pii.name;
    }
}
}
let a = person();
console.log(a.getName());