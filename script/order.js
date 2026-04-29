"use script";
//objects
let addCart = document.querySelectorAll('.add_cart');
let orderList = document.querySelector('#order');
let total = 0;
let totalDisplay = document.querySelector('#total');
let placeOrder = document.querySelector('#place_order');
let clearOrder = document.querySelector('#clear_order');
let orderForm = document.querySelector('#order_form');
let linkPage = document.querySelectorAll('a');

//for each statement that loops through the buttons
addCart.forEach(btn =>{
    //event listener for when the button is clicked 
    btn.addEventListener('click', () =>{
        //object that stores the closest table row associated with the button
        const row = btn.closest('tr');
        //objects
        const item = row.querySelector(".item").textContent;
        const price = row.querySelector('.price').textContent;
        //turns the text into a INT
        const intprice = parseInt(price);
        //adds the  price to itself
        total += intprice;
        //if the button pressed is associated with the current row
        if(row){
            const opt = document.createElement("option");
            //string of how the data will be displayed to the list
            opt.textContent = `${price} = ${item}`;
            // adds the data to the select element
            orderList.appendChild(opt);
            //string of how the total will be displayed
            totalDisplay.textContent = `Total: $${total.toFixed(2)}`;
        }
    })
})

//displays a warning when the user clicks away form the link
linkPage.forEach(link => {
    //event listener for click
    link.addEventListener('click', (e) =>{
        //objects
        const currentPage = window.location.pathname;
        const targetPath = link.pathname;
        //if the list is greater than 0 and the selected path is different than the current
        if(orderList.length > 0 && targetPath !== currentPage){
            //creates an object that asks the user if they want to continue with their action
            const answer = confirm("If you leave this page you will lose the items in your cart.");
            //if they choose no then it prevents them from going to the next screen
            if(!answer){
                e.preventDefault();
            }
        }
    })
})

//event listner for when the place order button is pressed
placeOrder.addEventListener('click', () =>{
    //stores teh number of items
    let orderItems = orderList.length;
    //if statement for if the user tries to place the order with nothing in the list
    if(orderItems === 0){
        alert("Please enter at least one item before placing your order");
        return;
    }
    //submits the form
    orderForm.submit();
})

//event listener for when the clear order button is pressed
clearOrder.addEventListener('click', () =>{
    //displays empty string to order list
    orderList.innerHTML = '';
    //reverts total back to 0
    total = 0;
    //displays the total to the user as 0.00
    totalDisplay.textContent = `Total: $${total.toFixed(2)}`;
})