
let btn = document.getElementsByClassName('btn')
let btnArr = Array.from(btn)


let str = ""        
for (const iterator of btnArr) {
        iterator.addEventListener('click',(e)=>{
            try {
                if(e.target.innerHTML == '='){
                    str = eval(str)
                    document.getElementById('inp').value = str
                }
                else{
                    str = str + e.target.innerHTML
                    console.log(str)
                    document.getElementById('inp').value = str
    
                }
                
            } catch (error) {
                str = "Invalid Value"
                    console.log(str)
                    document.getElementById('inp').value = str
                
            }
            
            if(e.target.innerHTML=='C'){
                str = ''
                document.getElementById('inp').value = str
            }
            if(e.target.innerHTML=='CLS'){
                str = ''
                document.getElementById('inp').value = str
            }

         })
}