import Api from "@/services/Api";

var posts = [
  {
    url: "Ducati-Lenovo-Team-wins-the-title-of-best-MotoGP-team-All-Ducati-podium-in-MotoGP",
    title:
      "Ducati Lenovo Team wins the title of best MotoGP team. All Ducati podium in MotoGP!",
    subheading: "Pecco Bagnaia wins ahead of Jorge Martin and Jack Miller.",
    coverImg: "https://i.imgur.com/MMcF4DH.jpg",
    height: 700,
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.<img
      class="postImg"    
      src="https://i.imgur.com/RKwlCIk.jpg"
      /><figcaption>Scale model of the
    Eiffel tower in
    Parc Mini-France</figcaption><img
      class="postImg"    
      src="https://i.imgur.com/RZcrSjV.jpg"
      /><figcaption>Scale model of the
    Eiffel tower in
    Parc Mini-France</figcaption>`,
    createdDate: "12:45 PM 25/10/2022",
    category: "",
  }
]

export default {
  findAllGame() {
    return Api().get("game");
  },
  findOneByUrl(url) {
    var result = null;
    
    posts.forEach(e=>{
      if(e.url === url){
        result = e;
        return;
      }
    })
    if(result === null) throw "post not found";

    return result;
  },
  
};
