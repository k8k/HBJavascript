
//python code to "translate"
// def fibonacci_set(max):
//     if max > 1:
//         fib_list = [1]
//         current_fib = 1
//         while current_fib < max:
//             fib_list.append(current_fib)
//             current_fib = fib_list[-1] + fib_list[-2]

//         return fib_list
//     else:
//         return [1, 1]

// ## Tell me if a number is even
// def even(n):
//     return n % 2 == 0

// print sum(filter(even,fibonacci_set(4000000)))



function fibonacci_set(max)
{   
    if(max >1)
    {
        var fib_list = [1];
        var current_fib = 1;

    while(current_fib < max)        
        
        {
            fib_list.push(current_fib);
            current_fib =(fib_list[fib_list.length-1] + fib_list[fib_list.length-2]);
            
        }
    
        return(fib_list);
    
    }
    else 
    {
        return([1,1]);
    }
    
}    


// for (var i=0; i < myLotteryNumbers.length; i++){




function evens_list(fib)
{
    var evens = [];
    for (var i=0; i<fib.length; i++)
{
    // console.log(i, fib[i]);

    if(fib[i] % 2 === 0)
    {
        
        evens.push(fib[i]); 
        
    
    }

}
return(evens);
}


function sum(newlist) {
    var summation = 0;
    for (var i=0; i<newlist.length; i++) {
        summation += newlist[i];
        
}
return summation;
}


var value = fibonacci_set(400);


var evensteven = evens_list(value);

sum(evensteven);







