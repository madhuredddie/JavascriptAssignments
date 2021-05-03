let restarauntMenu={
    name : "Prost",
    items :[
        {
            itemName : "chillychicken",
            itemPrice : 270
        },
        {
            itemName : "pasta",
            itemPrice : 300
        },
        {
            itemName : "pizza",
            itemPrice : 360
        },
        {
            itemName : "crispycorn",
            itemPrice : 250
        },
        {
            itemName : "pepperchicken",
            itemPrice : 300
        } 
        
    ],
    showMenu : function()
    {
        window.alert(
           " itemName : chillychicken    itemPrice : 270"+"\n"+
           " itemName : pasta            itemPrice : 300"+"\n"+
            " itemName : pizza           itemPrice : 360"+"\n"+
            "itemName : crispycorn       itemPrice : 250"+"\n"+
             "itemName : pepperchicken   itemPrice : 300"+"\n")
              
    },
    placeOrder :function(){
        this.showMenu()
        let order= prompt("what do you like to order ??")
    }


}
restarauntMenu.showMenu()
restarauntMenu.placeOrder()
