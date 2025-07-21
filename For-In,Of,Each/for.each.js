const users = [
    {name: `victor`, age: 22, contact: `554675643564`},
    {name: `joão`, age: 44, contact:`65654645362`},
    {name: `maria`, age: 33, contact:`8754574577345`},
    {name: `marcos`, age: 15, contact:`8745437534543`},
]
    users.forEach(function(item, index){
        //console.log(item)
        //console.log(index)
        if(item.age < 18){
            console.log(`O cliente ${item.name}, posição ${index} é menor de idade`)
        }
    })