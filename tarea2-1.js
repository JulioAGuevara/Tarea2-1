let div = ''
const sec = document.querySelector('#sec')


const obtener = async ()=>{
    const res = await fetch('https://fakestoreapi.com/products')
    const data = await res.json()


    const info = [...data]


    info.forEach(item   =>{
        div += `<div class="col-12 col-md-6 col-lg-4 col-xl-3 " >
                    <div class="card align-items-center card-container" >
                        <div class="card card-container" style="max-width: 100%;">
                            <img src="${item['image']}" class="card-img-top" style="max-width: 15rem; height: 15rem; margin: 0 auto">
                            <div class="card-body d-flex flex-column justify-content-center">
                                <h5 class="card-title">${item['title']}</h5>
                                <h4>${item['category']}</h4>
                                <h3 class="card-text">$${item['price']}</h3>
                                <p class="card-text">${item['description']}</p>
                            </div>
                        </div>
                    </div>
                </div>`
        sec.innerHTML = div
    })


    
}


if(sec){
    obtener()
}

