    
    //consts
    const toHave = document.querySelector('.to_have');
    const toExchange = document.querySelector('.to_exchange');
    const options1 = document.querySelector('.dropDown_1');
    const options2 = document.querySelector('.dropDown_2');


    const a = {
        'AMD': '1',
        'USD': '481',
        'EUR': '526',
        'RUB': '5.3'
    }

    //events
   toExchange.addEventListener('click', toCurrencyExchange) 
   options1.addEventListener('click', onDeleteAll)

   //functions
    function toCurrencyExchange(){
        if(options1.value === options2.value) { 
            toExchange.value=toHave.value;
        }else if
            (options1.value !== 'AMD' && options2.value === 'AMD') {   
            toExchange.value=(toHave.value*a[options1.value]).toFixed(2);
        }else if
            (options1.value === 'AMD' && options2.value !== 'AMD') {   
            toExchange.value=(toHave.value/a[options2.value]).toFixed(2);
        }
        else {    
            let z = a[options1.value] / (a[options2.value]*1 + 10);
            toExchange.value =(toHave.value*z).toFixed(2);
            }
        }

    function onDeleteAll(){
        toHave.value ='0';
        toExchange.value = '0';
    }
    

  