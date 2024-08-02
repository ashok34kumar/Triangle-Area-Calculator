cal = () => {
    
const a = parseInt(document.getElementById('a').value)
const b = parseInt(document.getElementById('b').value)
const c = parseInt(document.getElementById('c').value)

let s = (a+b+c)/2

let area = Math.sqrt(s*((s-a)*(s-b)*(s-c))).toFixed(2);


document.getElementById('area-ans').innerHTML="Answer:"+area

}


