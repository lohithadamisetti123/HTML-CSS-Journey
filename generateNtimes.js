var MyCards=[
    {
        "image":"https://clipartix.com/wp-content/uploads/2016/09/Cartoons-clipart-image-1.jpg",
        "Price" :"2000",
        "Brand":"Siri"

    },
     {
        "image":"https://clipart-library.com/2024/cartoon-picture/cartoon-picture-1.jpg",
        "Price" :"4000",
        "Brand":"ShortChaami"

    },
     {
        "image":"https://easydrawingguides.com/wp-content/uploads/2016/12/how-to-draw-a-cute-cartoon-cat-featured-image-1200.png",
        "Price" :"8000",
        "Brand":"Cat"

    },
     {
        "image":"https://static.vecteezy.com/system/resources/previews/022/717/127/original/cute-rabbit-with-carrot-bag-cartoon-icon-illustration-animal-education-icon-concept-isolated-generat-ai-free-photo.jpg",
        "Price" :"1000",
        "Brand":"Rabbit"

    }
]

var Cards=MyCards.map(ele=>{
     return (`<div class="card">
                <div class="img-section">
                    <img src=${ele.image} />
                </div>
                <div class="info-section">
                    <div class="price">Price: ${ele.Price}</div>
                    <div class="brand">Name: ${ele.Brand}</div>
                </div>
            </div>`)
});
Cards=Cards.join(' ')
var parent=document.getElementsByClassName("card-parent")[0]
parent.innerHTML=Cards