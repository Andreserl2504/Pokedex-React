export let filter = ['none'];

export function takeType(type) {
    if (!filter.includes(type.target.innerHTML) && filter.length < 2) {
        if (filter.includes('none')) filter = [] 
        filter.push(type.target.innerHTML)
        console.log(type.target.className)
        console.log(type)
    }
    else {
        filter = filter.filter(typeFilter => typeFilter != type.target.innerHTML)
        if (filter.length == 0) filter = ['none']  
    }
}