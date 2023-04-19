export default function maskValue(value){
    if(!value){
        return "0,00"
    }    
    else if(value<10){
        return `0,0${value}`
    }
    else if(value<100){
        return `0,${value}`
    }
    
    const price = String(value)   
    return price.substring(0, price.length - 3) + ',' + price.substring(price.length - 2)

}