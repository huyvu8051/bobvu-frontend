import Api from "@/services/Api";

var posts = [
  {
    url: "Ducati-Lenovo-Team-wins-the-title-of-best-MotoGP-team-All-Ducati-podium-in-MotoGP",
    title:
      "Ducati Lenovo Team wins the title of best MotoGP team. All Ducati podium in MotoGP!",
    subheading: "Pecco Bagnaia wins ahead of Jorge Martin and Jack Miller.",
    coverImg: "https://i.imgur.com/AytGDLi.jpg",
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
    createdDate: "25/10/2022",
    category: "Ducati Desmocedici",
  },
  {
    url: "motogp-Mir-Says-Suzuki-s-Success-Has-Been-Years-In-The-Making-Roadracing-World-Magazine",
    title:
      "motogp: Mir Says Suzuki's Success Has Been Years In The Making - Roadracing World Magazine",
    subheading: "Pecco Bagnaia wins ahead of Jorge Martin and Jack Miller.",
    coverImg: "https://i.imgur.com/EguZGAz.jpg",
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
    createdDate: "25/10/2022",
    category: "Ducati Desmocedici",
  },
  {
    url: "Ducati-Lenovo-Team-wins-the-title-of-best-MotoGP-team-All-Ducati-podium-in-MotoGP",
    title:
      " Yamaha giới thiệu đôi đua và xe đua cho MotoGP 2020",
    subheading: "Pecco Bagnaia wins ahead of Jorge Martin and Jack Miller.",
    coverImg: "https://i.imgur.com/oYicPqK.jpg",
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
    createdDate: "25/10/2022",
    category: "Ducati Desmocedici",
  },
  {
    url: "Ducati-Lenovo-Team-wins-the-title-of-best-MotoGP-team-All-Ducati-podium-in-MotoGP",
    title:
      "The 2021 Aprilia RS-GP MotoGP Race Bike, In All Its Weird Glory - Asphalt & Rubber",
    subheading: "Pecco Bagnaia wins ahead of Jorge Martin and Jack Miller.",
    coverImg: "https://i.imgur.com/MVSzCkL.jpg",
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
    createdDate: "25/10/2022",
    category: "Ducati Desmocedici",
  },
  {
    url: "Ducati-Lenovo-Team-wins-the-title-of-best-MotoGP-team-All-Ducati-podium-in-MotoGP",
    title:
      `2020 KTM MotoGP bike unveiled. 265+ hp and 157 kg | DriveMag Riders Visit`,
    subheading: "Pecco Bagnaia wins ahead of Jorge Martin and Jack Miller.",
    coverImg: "https://i.imgur.com/LGsvG4c.jpg",
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
    createdDate: "25/10/2022",
    category: "Ducati Desmocedici",
  },
  {
    url: "Ducati-Lenovo-Team-wins-the-title-of-best-MotoGP-team-All-Ducati-podium-in-MotoGP",
    title:
      "Ducati Lenovo Team wins the title of best MotoGP team. All Ducati podium in MotoGP!",
    subheading: "Pecco Bagnaia wins ahead of Jorge Martin and Jack Miller.",
    coverImg: "https://i.imgur.com/MOMv5r8.jpg",
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
    createdDate: "25/10/2022",
    category: "Ducati Desmocedici",
  }, {
    url: "Ducati-Lenovo-Team-wins-the-title-of-best-MotoGP-team-All-Ducati-podium-in-MotoGP",
    title:
      "Ducati Lenovo Team wins the title of best MotoGP team. All Ducati podium in MotoGP!",
    subheading: "Pecco Bagnaia wins ahead of Jorge Martin and Jack Miller.",
    coverImg: "https://i.imgur.com/SncFZhh.jpg",
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
    createdDate: "25/10/2022",
    category: "Ducati Desmocedici",
  }, {
    url: "Ducati-Lenovo-Team-wins-the-title-of-best-MotoGP-team-All-Ducati-podium-in-MotoGP",
    title:
      "Ducati Lenovo Team wins the title of best MotoGP team. All Ducati podium in MotoGP!",
    subheading: "Pecco Bagnaia wins ahead of Jorge Martin and Jack Miller.",
    coverImg: "https://i.imgur.com/thVhXwE.jpg",
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
    createdDate: "25/10/2022",
    category: "Ducati Desmocedici",
  }, {
    url: "Ducati-Lenovo-Team-wins-the-title-of-best-MotoGP-team-All-Ducati-podium-in-MotoGP",
    title:
      "Ducati Lenovo Team wins the title of best MotoGP team. All Ducati podium in MotoGP!",
    subheading: "Pecco Bagnaia wins ahead of Jorge Martin and Jack Miller.",
    coverImg: "https://i.imgur.com/X1RQjMh.png",
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
    createdDate: "25/10/2022",
    category: "Ducati Desmocedici",
  }, {
    url: "Ducati-Lenovo-Team-wins-the-title-of-best-MotoGP-team-All-Ducati-podium-in-MotoGP",
    title:
      "Ducati Lenovo Team wins the title of best MotoGP team. All Ducati podium in MotoGP!",
    subheading: "Pecco Bagnaia wins ahead of Jorge Martin and Jack Miller.",
    coverImg: "https://i.imgur.com/FT9lDeP.jpg",
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
    createdDate: "25/10/2022",
    category: "Ducati Desmocedici",
  }, {
    url: "Ducati-Lenovo-Team-wins-the-title-of-best-MotoGP-team-All-Ducati-podium-in-MotoGP",
    title:
      "Ducati Lenovo Team wins the title of best MotoGP team. All Ducati podium in MotoGP!",
    subheading: "Pecco Bagnaia wins ahead of Jorge Martin and Jack Miller.",
    coverImg: "https://i.imgur.com/MHTyHBS.jpg",
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
    createdDate: "25/10/2022",
    category: "Ducati Desmocedici",
  },

]

export default {
  findAll() {
    return posts;
  },
  findOneByUrl(url) {
    var result = null;

    posts.forEach(e => {
      if (e.url === url) {
        result = e;
        return;
      }
    })
    if (result === null) throw "Post not found";

    return result;
  },

};
