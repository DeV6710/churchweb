let main = document.getElementById("main")
let kitchenId = document.getElementById("Kitchen")
class vendor{
    constructor(img,name,tag,about){
        this.img = img
        this.name = name
        this.tag = tag
        this.about = about
    }

    displayIt() {
        return main.innerHTML +=`
        <div class="vendor">
            <img src=${this.img} loading="lazy" class="imgs">
            <p class = "vendorTag">Vendor</p>
            <h1 class="title">${this.name}</h1>
            <h3 class="tag">${this.tag}</h3>
            <p class="about" >${this.about}</p>
        </div>
        `
    }
}

let vendor1  = new vendor("https://assets.caresies.io/articles/990/conversions/RqaINFD4oP2qfzRKADnP-webp-featured.webp","Jack","arts and crafts","aboutaboutaboutaboutabout about about about")
vendor1.displayIt()

let vendorrla  = new vendor("https://www.eatingwell.com/thmb/m5xUzIOmhWSoXZnY-oZcO9SdArQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/article_291139_the-top-10-healthiest-foods-for-kids_-02-4b745e57928c4786a61b47d8ba920058.jpg","Martin","Food Court","aboutaboutaboutaboutabout about about about")
vendorrla.displayIt()
let vendorrl  = new vendor("https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Jumping_castle.jpg/1200px-Jumping_castle.jpg","Klara","activities","aboutaboutaboutaboutabout about about about")
vendorrl.displayIt()
let vendorl  = new vendor("https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Jumping_castle.jpg/1200px-Jumping_castle.jpg","Klara","activities","aboutaboutaboutaboutabout about about about")
vendorl.displayIt()
let endorrl  = new vendor("https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Jumping_castle.jpg/1200px-Jumping_castle.jpg","Klara","activities","aboutaboutaboutaboutabout about about about")
endorrl.displayIt()


