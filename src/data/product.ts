export const products = [
    {
      id: 1,
      name: "French Kiss Bag",
      price: 500,
      image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80",
      description: "ALDO",
      category: "Women",
      rating: "2k+"
    },
    {
      id: 2,
      name: "Burberry shine",
      price: 150,
      image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80",
      description: "FENDI",
      category: "Kids",
      rating: "1k+"
    },
    {
      id: 3,
      name: "Alvero Gown",
      price: 300,
      image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?auto=format&fit=crop&q=80",
      description: "DIVINE",
      category: "Women",
      rating: "5k+"
    }
  ];
  
  export const categories = [
    { id: 1, name: "Men", link: "#", active: true  },
    { id: 2, name: "Women", link: "#", active: false },
    { id: 3, name: "Kids", link: "#", active: false  },
    { id: 4, name: "Perfumes", link: "#", active: false  },
    { id: 5, name: "Sport", link: "#", active: false  },
    { id: 6, name: "Jewelry", link: "#", active: false  }
  ];
  
  export const collections = [ 
     // Category 1: Men's Fashion
  { id: 1, name: "Men's Shoes", image: "https://plus.unsplash.com/premium_photo-1670209796088-129525be6545?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWVuJ3MlMjBzaG9lc3xlbnwwfHwwfHx8MA%3D%3D", link: "#", description: "See all collections", categoryId: 1 },
  { id: 2, name: "Men's T-Shirts", image: "https://images.unsplash.com/photo-1484517186945-df8151a1a871?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1lbidzJTIwdHNoaXJ0fGVufDB8fDB8fHww", link: "#", description: "See all collections", categoryId: 1 },
  { id: 3, name: "Men's Jackets", image: "https://images.unsplash.com/photo-1559810941-84847828a99f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWVuJ3MlMjBjbG90aHxlbnwwfHwwfHx8MA%3D%3D", link: "#", description: "See all collections", categoryId: 1 },
  { id: 4, name: "Men's Accessories", image: "https://images.unsplash.com/photo-1732538204289-474ac52286b1?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGFjY2Vzc29yeXxlbnwwfHwwfHx8MA%3D%3D", link: "#", description: "See all collections", categoryId: 1 },
  { id: 5, name: "Men's Jeans", image: "https://plus.unsplash.com/premium_photo-1674828601362-afb73c907ebe?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8amVhbnN8ZW58MHx8MHx8fDA%3D", link: "#", description: "See all collections", categoryId: 1 },
  { id: 6, name: "Men's Suits", image: "https://plus.unsplash.com/premium_photo-1681841596729-4e6c62e23f0a?q=80&w=961&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", link: "#", description: "See all collections", categoryId: 1 },
  { id: 7, name: "Men's Shorts", image: "https://plus.unsplash.com/premium_photo-1666265087913-9326638decfd?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8U2hvcnRzfGVufDB8fDB8fHww", link: "#", description: "See all collections", categoryId: 1 },
  { id: 8, name: "Men's Sneakers", image: "https://images.unsplash.com/photo-1599670998937-441a3a74b2f1?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c25lYWtlcnN8ZW58MHx8MHx8fDA%3D", link: "#", description: "See all collections", categoryId: 1 },
  { id: 9, name: "Men's Formal Shoes", image: "https://plus.unsplash.com/premium_photo-1668376939292-bd6953dd1bac?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TWVuJ3MlMjBGb3JtYWwlMjBTaG9lc3xlbnwwfHwwfHx8MA%3D%3D", link: "#", description: "See all collections", categoryId: 1 },
  { id: 10, name: "Men's Belts", image: "https://i5.walmartimages.com/asr/b421a04d-a0ec-4b10-8126-dcda70e4d303_1.7cad2dde57db5213698154e9a6abb3f3.jpeg", link: "#", description: "See all collections", categoryId: 1 },
  { id: 11, name: "Men's Hats", image: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", link: "#", description: "See all collections", categoryId: 1 },
  { id: 12, name: "Men's Watches", image: "https://images.unsplash.com/photo-1660959325000-18ed85b8fd3a?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8TWVuJ3MlMjB3YXRjaGVzfGVufDB8fDB8fHww", link: "#", description: "See all collections", categoryId: 1 },

  // Category 2: Women's Fashion
  { id: 13, name: "Women's Bags", image: "https://img.icons8.com/ios-filled/50/000000/handbag.png", link: "#", description: "See all collections", categoryId: 2 },
  { id: 14, name: "Women's Dresses", image: "https://img.icons8.com/ios-filled/50/000000/dress.png", link: "#", description: "See all collections", categoryId: 2 },
  { id: 15, name: "Women's Shoes", image: "https://img.icons8.com/ios-filled/50/000000/shoe.png", link: "#", description: "See all collections", categoryId: 2 },
  { id: 16, name: "Women's Accessories", image: "https://img.icons8.com/ios-filled/50/000000/accessories.png", link: "#", description: "See all collections", categoryId: 2 },
  { id: 17, name: "Women's Tops", image: "https://img.icons8.com/ios-filled/50/000000/t-shirt.png", link: "#", description: "See all collections", categoryId: 2 },
  { id: 18, name: "Women's Skirts", image: "https://img.icons8.com/ios-filled/50/000000/shorts.png", link: "#", description: "See all collections", categoryId: 2 },
  { id: 19, name: "Women's Outerwear", image: "https://img.icons8.com/ios-filled/50/000000/jacket.png", link: "#", description: "See all collections", categoryId: 2 },
  { id: 20, name: "Women's Sandals", image: "https://img.icons8.com/ios-filled/50/000000/sandals.png", link: "#", description: "See all collections", categoryId: 2 },
  { id: 21, name: "Women's Heels", image: "https://img.icons8.com/ios-filled/50/000000/heel.png", link: "#", description: "See all collections", categoryId: 2 },
  { id: 22, name: "Women's Jewelry", image: "https://img.icons8.com/ios-filled/50/000000/jewelry.png", link: "#", description: "See all collections", categoryId: 2 },
  { id: 23, name: "Women's Hats", image: "https://img.icons8.com/ios-filled/50/000000/hat.png", link: "#", description: "See all collections", categoryId: 2 },
  { id: 24, name: "Women's Watches", image: "https://img.icons8.com/ios-filled/50/000000/watch.png", link: "#", description: "See all collections", categoryId: 2 },

  // Category 3: Kids' Fashion
  { id: 25, name: "Kids' T-Shirts", image: "https://img.icons8.com/ios-filled/50/000000/t-shirt.png", link: "#", description: "See all collections", categoryId: 3 },
  { id: 26, name: "Kids' Dresses", image: "https://img.icons8.com/ios-filled/50/000000/dress.png", link: "#", description: "See all collections", categoryId: 3 },
  { id: 27, name: "Kids' Shoes", image: "https://img.icons8.com/ios-filled/50/000000/shoe.png", link: "#", description: "See all collections", categoryId: 3 },
  { id: 28, name: "Kids' Accessories", image: "https://img.icons8.com/ios-filled/50/000000/accessories.png", link: "#", description: "See all collections", categoryId: 3 },
  { id: 29, name: "Kids' Outerwear", image: "https://img.icons8.com/ios-filled/50/000000/jacket.png", link: "#", description: "See all collections", categoryId: 3 },
  { id: 30, name: "Kids' Swimwear", image: "https://img.icons8.com/ios-filled/50/000000/swimwear.png", link: "#", description: "See all collections", categoryId: 3 },
  { id: 31, name: "Kids' Hats", image: "https://img.icons8.com/ios-filled/50/000000/hat.png", link: "#", description: "See all collections", categoryId: 3 },
  { id: 32, name: "Kids' Backpacks", image: "https://img.icons8.com/ios-filled/50/000000/backpack.png", link: "#", description: "See all collections", categoryId: 3 },
  { id: 33, name: "Kids' Socks", image: "https://img.icons8.com/ios-filled/50/000000/socks.png", link: "#", description: "See all collections", categoryId: 3 },
  { id: 34, name: "Kids' Jewelry", image: "https://img.icons8.com/ios-filled/50/000000/jewelry.png", link: "#", description: "See all collections", categoryId: 3 },
  { id: 35, name: "Kids' Jackets", image: "https://img.icons8.com/ios-filled/50/000000/jacket.png", link: "#", description: "See all collections", categoryId: 3 },
  { id: 36, name: "Kids' Formal Wear", image: "https://img.icons8.com/ios-filled/50/000000/suit.png", link: "#", description: "See all collections", categoryId: 3 },
    // Category 4: Accessories
  { id: 37, name: "Sunglasses", image: "https://img.icons8.com/ios-filled/50/000000/sunglasses.png", link: "#", description: "See all collections", categoryId: 4 },
  { id: 38, name: "Watches", image: "https://img.icons8.com/ios-filled/50/000000/watch.png", link: "#", description: "See all collections", categoryId: 4 },
  { id: 39, name: "Hats & Caps", image: "https://img.icons8.com/ios-filled/50/000000/hat.png", link: "#", description: "See all collections", categoryId: 4 },
  { id: 40, name: "Belts", image: "https://img.icons8.com/ios-filled/50/000000/belt.png", link: "#", description: "See all collections", categoryId: 4 },
  { id: 41, name: "Wallets", image: "https://img.icons8.com/ios-filled/50/000000/wallet.png", link: "#", description: "See all collections", categoryId: 4 },
  { id: 42, name: "Scarves", image: "https://img.icons8.com/ios-filled/50/000000/scarf.png", link: "#", description: "See all collections", categoryId: 4 },
  { id: 43, name: "Jewelry", image: "https://img.icons8.com/ios-filled/50/000000/jewelry.png", link: "#", description: "See all collections", categoryId: 4 },
  { id: 44, name: "Handbags", image: "https://img.icons8.com/ios-filled/50/000000/handbag.png", link: "#", description: "See all collections", categoryId: 4 },
  { id: 45, name: "Backpacks", image: "https://img.icons8.com/ios-filled/50/000000/backpack.png", link: "#", description: "See all collections", categoryId: 4 },
  { id: 46, name: "Gloves", image: "https://img.icons8.com/ios-filled/50/000000/gloves.png", link: "#", description: "See all collections", categoryId: 4 },
  { id: 47, name: "Keychains", image: "https://img.icons8.com/ios-filled/50/000000/keychain.png", link: "#", description: "See all collections", categoryId: 4 },
  { id: 48, name: "Hair Accessories", image: "https://img.icons8.com/ios-filled/50/000000/hair-accessories.png", link: "#", description: "See all collections", categoryId: 4 },

  // Category 5: Footwear
  { id: 49, name: "Sneakers", image: "https://img.icons8.com/ios-filled/50/000000/sneakers.png", link: "#", description: "See all collections", categoryId: 5 },
  { id: 50, name: "Boots", image: "https://img.icons8.com/ios-filled/50/000000/boot.png", link: "#", description: "See all collections", categoryId: 5 },
  { id: 51, name: "Sandals", image: "https://img.icons8.com/ios-filled/50/000000/sandals.png", link: "#", description: "See all collections", categoryId: 5 },
  { id: 52, name: "Formal Shoes", image: "https://img.icons8.com/ios-filled/50/000000/formal-shoe.png", link: "#", description: "See all collections", categoryId: 5 },
  { id: 53, name: "Loafers", image: "https://img.icons8.com/ios-filled/50/000000/loafers.png", link: "#", description: "See all collections", categoryId: 5 },
  { id: 54, name: "Slippers", image: "https://img.icons8.com/ios-filled/50/000000/slippers.png", link: "#", description: "See all collections", categoryId: 5 },
  { id: 55, name: "Sports Shoes", image: "https://img.icons8.com/ios-filled/50/000000/sports-shoe.png", link: "#", description: "See all collections", categoryId: 5 },
  { id: 56, name: "High Heels", image: "https://img.icons8.com/ios-filled/50/000000/high-heel.png", link: "#", description: "See all collections", categoryId: 5 },
  { id: 57, name: "Flip Flops", image: "https://img.icons8.com/ios-filled/50/000000/flip-flops.png", link: "#", description: "See all collections", categoryId: 5 },
  { id: 58, name: "Clogs", image: "https://img.icons8.com/ios-filled/50/000000/clogs.png", link: "#", description: "See all collections", categoryId: 5 },
  { id: 59, name: "Espadrilles", image: "https://img.icons8.com/ios-filled/50/000000/espadrilles.png", link: "#", description: "See all collections", categoryId: 5 },
  { id: 60, name: "Moccasins", image: "https://img.icons8.com/ios-filled/50/000000/moccasin.png", link: "#", description: "See all collections", categoryId: 5 },
  // Category 6: Sportswear
  { id: 61, name: "Activewear Tops", image: "https://img.icons8.com/ios-filled/50/000000/sports-top.png", link: "#", description: "See all collections", categoryId: 6 },
  { id: 62, name: "Activewear Bottoms", image: "https://img.icons8.com/ios-filled/50/000000/sports-bottoms.png", link: "#", description: "See all collections", categoryId: 6 },
  { id: 63, name: "Running Shoes", image: "https://img.icons8.com/ios-filled/50/000000/running-shoe.png", link: "#", description: "See all collections", categoryId: 6 },
  { id: 64, name: "Track Suits", image: "https://img.icons8.com/ios-filled/50/000000/track-suit.png", link: "#", description: "See all collections", categoryId: 6 },
  { id: 65, name: "Yoga Wear", image: "https://img.icons8.com/ios-filled/50/000000/yoga.png", link: "#", description: "See all collections", categoryId: 6 },
  { id: 66, name: "Swimwear", image: "https://img.icons8.com/ios-filled/50/000000/swimwear.png", link: "#", description: "See all collections", categoryId: 6 },
  { id: 67, name: "Sports Socks", image: "https://img.icons8.com/ios-filled/50/000000/socks.png", link: "#", description: "See all collections", categoryId: 6 },
  { id: 68, name: "Jerseys", image: "https://img.icons8.com/ios-filled/50/000000/jersey.png", link: "#", description: "See all collections", categoryId: 6 },
  { id: 69, name: "Sports Jackets", image: "https://img.icons8.com/ios-filled/50/000000/sports-jacket.png", link: "#", description: "See all collections", categoryId: 6 },
  { id: 70, name: "Compression Wear", image: "https://img.icons8.com/ios-filled/50/000000/compression.png", link: "#", description: "See all collections", categoryId: 6 },
  { id: 71, name: "Workout Gloves", image: "https://img.icons8.com/ios-filled/50/000000/gloves.png", link: "#", description: "See all collections", categoryId: 6 },
  { id: 72, name: "Sports Bags", image: "https://img.icons8.com/ios-filled/50/000000/sports-bag.png", link: "#", description: "See all collections", categoryId: 6 }
];
