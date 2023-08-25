const data = [
    {
        "title": "The History of Recent Grocery",
        "img": "images/gre.jpg",
        "description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit error obcaecati magnam repellat, alias rerum exercitationem harum deleniti ipsum nam provident dolorum, dicta saepe expedita nobis et. Doloribus sed et, magni odit repellat ea quidem laboriosam numquam rerum ad libero veniam perspiciatis illo inventore error repellendus, at fuga! Obcaecati necessitatibus reiciendis",
        "category": "History"
    },
    {
        "title": "The Vision of Nest Days",
        "img": "images/pre.jpg",
        "description": " Umami kinfolk salvia jean shorts offal venmo. Knausgaard tilde try-hard, woke fixie banjo man bun. Small batch tumeric mustache tbh wayfarers 8-bit shaman chartreuse tacos. Viral direct trade hoodie ugh chambray, craft beer pork belly flannel tacos single-origin coffee art party migas plaid pop-up.",
        "category": "Vision"
    },
    {
        "title": "The Goals To Achieve in this year",
        "img": "images/sre.jpg",
        "description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit error obcaecati magnam repellat, alias rerum exercitationem harum deleniti ipsum nam provident dolorum, dicta saepe expedita nobis et. Doloribus sed et, magni odit repellat ea quidem laboriosam numquam rerum ad libero veniam perspiciatis illo inventore error repellendus, at fuga! Obcaecati necessitatibus reiciendis, repellat debitis, nulla quibusdam dolor pariatur exercitationem vitae dolorem nesciunt tempore sit cumque praesentium cum quod perferendis mollitia ea deserunt consequuntur blanditiis cupiditate quisquam dolores aliquid.",
        "category": "Goals"
    }
]





window.addEventListener('DOMContentLoaded', () => {
    console.log('DOMContentLoaded')
    DefaultMapData(data)
    FilterMapData()
    
})


const DefaultMapData=(arry)=>{
    let g= arry.map((e,i)=>{
          if (i === 0){
            return `<div class="img">
            <img id="image" class="image" src="${e.img}" alt="image" />
          </div>
          <div id="des" class="des">
            <h1 id="h1">${e.title}</h1>
            <p id="p">${e.description}</p>
          </div>`
        }
    }).join('')
    let info= document.getElementById('info')
    info.innerHTML= g
   
}


const FilterMapData = () => {
   

    let BtnContainer = document.querySelectorAll('.btn')
    console.log(BtnContainer)
    BtnContainer.forEach((buttons) => {
       console.log(buttons)
        buttons.addEventListener('click', (e) => {
            

            let DataSETid = e.currentTarget.dataset.id
            console.log(DataSETid)
            let FilterData = data.filter((e,i)=>{
                if(DataSETid === e.category){
                     return e
                        
                        
                }
                
                
              
            }).map((e)=>{
               console.log(e.img)
                return `<div class="img">
                <img id="image" class="image" src="${e.img}" alt="image" />
              </div>
              <div id="des" class="des">
                <h1 id="h1">${e.title}</h1>
                <p id="p">${e.description}</p>
              </div>`
            }).join('')
          
           
            let FilterInfo= document.getElementById('info')
            FilterInfo.innerHTML= FilterData


        })

    })

}





