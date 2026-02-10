function TextButton(params) {
   console.log(params)

   let obj = {
    name: "João",
    idade: 30,
    address:"Rua João Pedro",
    phoneNumber: "11999999999"
    }
   
    console.log(obj.name)
     console.log(obj.age)
      console.log(obj.address)
       console.log(obj.phoneNumber)

       let {name,age} = obj 

         console.log(name);
          console.log(age);
    
    return(
        <button type="button">
           {params.label}
        </button>
        
    )
}

export default TextButton