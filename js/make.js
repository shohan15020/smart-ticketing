// first select all button using for of loop
const allBtn = document.getElementsByClassName('seat-btn');
let count = 0;
let seatsLeftCount = 40;
let totalPrice = 0;

const applyBtn = document.getElementById('apply');

for(let btn of allBtn){
    // console.log(btn);
    // seat count section
    
    btn.addEventListener('click', function(event){
        
        // you cannot select more than 4
        if(count >= 4){
            alert('You cannot selected more then 4 ticket')
            return;
        }

        count = count + 1;
        const seatCount = document.getElementById('seat-count');
        seatCount.innerText = count;
        // button bg-color set
        btn.style.backgroundColor = "#1DD100";
        btn.style.color = "white";
        // seat left value will decrease
        seatsLeftCount = seatsLeftCount - 1;

        const seatLeft = document.getElementById('seats-left');
        seatLeft.innerText = seatsLeftCount
        // append time in ticket-show container
        const seatNo = btn.innerText;
        
        const ticketShow = document.getElementById('ticket-show');

              // set inner text
        const li = document.createElement('ul');
        li.style.display = 'flex';
        li.style.justifyContent = 'space-between';
        const p = document.createElement('p');
        p.innerText = seatNo;
        const p1 = document.createElement('p');
        p1.innerText = "Economy";
        const p2 = document.createElement('p');
        p2.innerText = "550";
        let price = p2.innerText;
            //   append to div
        li.appendChild(p);    
        li.appendChild(p1);    
        li.appendChild(p2);
        
        ticketShow.appendChild(li);
        
        console.log(typeof totalPrice);
        
        totalPrice = totalPrice + parseInt(price);
        console.log(totalPrice);
        // console.log(totalPrice);

        const totalPriceElement = document.getElementById('total-cost');
        totalPriceElement.innerText = totalPrice;
        
        // coupon code
        // Check if 4 seats are selected, then enable the coupon code button
        
        if (count === 4) {
            applyBtn.classList.remove('hide');
        } else {
            applyBtn.classList.add('hide');
        }
        
        // next button 
        const nextButton = document.getElementById('nextButton')
        console.log(nextButton);

        const phoneNumber = document.getElementById('phoneNumber').value;

        if (count !== 0   && phoneNumber != '') {
            nextButton.classList.remove('hide');
        } else {
            nextButton.classList.add('hide');
        }
        

        // button disable if clicked again
        if (!btn.disabled) {
            btn.disabled = true;
        }
        
        
    })
}

// coupon code apply 

const apply = document.getElementById('apply');
apply.addEventListener('click', function(){
    const couponElement = document.getElementById('input-field').value;
    const convertCoupon = couponElement.split(' ').join('').toUpperCase();
    // console.log(convertCoupon);
    if(convertCoupon === 'NEW15'){
        // grand total
        const grandPriceElement = document.getElementById('grand');
        const grantTotal = totalPrice * 0.15;
        const discountGrantTotal = totalPrice - grantTotal ;
        grandPriceElement.innerText = discountGrantTotal;
         // clear value of input field
         document.getElementById('input-field').value = '';
    }else if(convertCoupon === 'COUPLE20'){
        // grand total
        const grandPriceElement = document.getElementById('grand');
        const grantTotal = totalPrice * 0.2;
        const discountGrantTotal = totalPrice - grantTotal ;
        grandPriceElement.innerText = discountGrantTotal;
         // clear value of input field
         document.getElementById('input-field').value = '';
    }
    else{
        alert('Invalid Coupon code')
            // clear value of input field
        document.getElementById('input-field').value = '';
    }
})

// set innerText
function setInnerText(id, value) {
    document.getElementById(id).innerText = value;
}
// get InnerText
function getInnerText(id, value) {
    document.getElementById(id).innerText = value;
}
