export const searchFilters = [
  "Product Types",
  "Indianbrand",
  "Join Ventures",
  "Global Brands",
  "Govt Brands",
  "Home Made",
  "Top Brands",
  "Colgomorate Best",
];

export const mainNav = [
  { title: "Home", href: "/" },
  { title: "All Brands", href: "/brands" },
  { title: "All Blogs", href: "/blogs" },
  { title: "Offers", href: "/offers" },
  { title: "Men Clothing & Fashion", href: "/category/men-clothing-fashion" },
  { title: "Computer & Accessories", href: "/category/computer-accessories" },
  { title: "Electronics", href: "/category/electronics" },
];

export const allCategories = [
  {
    title: "Fashion",
    href: "/category/fashion",
    subtitle: "Men, Women, Kids & Ethnic",
    imgUrl: "/category-icon/Fashion.png",
    bgColor: "bg-orange-50/80 dark:bg-orange-950/40",
    glowOrb: "bg-orange-300/40 dark:bg-orange-500/20",
    subCategories: ["Men's Clothing", "Women's Clothing", "Kids Wear", "Ethnic Wear"],
    groups: [
      {
        title: "Men's Fashion",
        items: ["T-Shirts", "Shirts", "Jeans", "Trousers", "Footwear"]
      },
      {
        title: "Women's Fashion",
        items: ["Kurtas & Suits", "Sarees", "Western Wear", "Footwear", "Handbags"]
      },
      {
        title: "Kids & Ethnic",
        items: ["Boys Wear", "Girls Wear", "Ethnic Wear", "Traditional Accessories"]
      }
    ]
  },
  {
    title: "Electronics",
    href: "/category/electronics",
    subtitle: "Laptops, Accessories",
    imgUrl: "/category-icon/Electronics.png",
    bgColor: "bg-blue-50/80 dark:bg-blue-950/40",
    glowOrb: "bg-blue-300/40 dark:bg-blue-500/20",
    subCategories: ["Laptops", "Desktops", "Cameras", "Gaming"],
    groups: [
      {
        title: "Consumer Electronic",
        items: [
          "Home Audio & Theaters",
          "TV & Videos",
          "Camera, Photos & Videos",
          "Cellphones & Accessories",
          "Headphones",
          "Videos games",
          "Wireless Speakers",
          "Office Electronic"
        ]
      },
      {
        title: "Accessories & Parts",
        items: ["Digital Cables", "Audio & Video Cables", "Batteries"]
      }
    ]
  },
  {
    title: "Smartphones",
    href: "/category/smartphones",
    subtitle: "Mobiles & Tablets",
    imgUrl: "/category-icon/Smartphones.png",
    bgColor: "bg-gray-100/80 dark:bg-gray-800/50",
    glowOrb: "bg-gray-300/40 dark:bg-gray-500/20",
    subCategories: ["Mobile Phones", "Smartphones", "Tablets", "Accessories"],
    groups: [
      {
        title: "Smartphones & Tablets",
        items: ["Android Phones", "iPhones", "Tablets", "E-Readers"]
      },
      {
        title: "Mobile Accessories",
        items: ["Cases & Covers", "Screen Protectors", "Power Banks", "Chargers & Cables"]
      }
    ]
  },
  {
    title: "Groceries",
    href: "/category/grocery",
    subtitle: "Fruits, Vegetables, Snacks",
    imgUrl: "/category-icon/Groceries.png",
    bgColor: "bg-amber-50/80 dark:bg-amber-950/40",
    glowOrb: "bg-amber-300/40 dark:bg-amber-500/20",
    subCategories: ["Fruits", "Vegetables", "Snacks", "Beverages"],
    groups: [
      {
        title: "Fresh Produce",
        items: ["Fruits", "Vegetables", "Herbs & Seasonings"]
      },
      {
        title: "Packaged Foods",
        items: ["Snacks", "Beverages", "Spices & Masalas", "Ghee & Oils"]
      }
    ]
  },
  {
    title: "Home & Kitchen",
    href: "/category/home-kitchen",
    subtitle: "Cookware, Storage, Dining",
    imgUrl: "/category-icon/Home.png",
    bgColor: "bg-cyan-50/80 dark:bg-cyan-950/40",
    glowOrb: "bg-cyan-300/40 dark:bg-cyan-500/20",
    subCategories: ["Cookware", "Kitchen Tools", "Dining Sets"],
    groups: [
      {
        title: "Kitchenware",
        items: ["Cookware", "Kitchen Tools", "Dining & Serving", "Bakeware"]
      },
      {
        title: "Home Decor",
        items: ["Bedsheets", "Curtains", "Cushions", "Wall Art"]
      }
    ]
  },
  {
    title: "Beauty & Personal Care",
    href: "/category/beauty",
    subtitle: "Makeup, Skincare, Haircare",
    imgUrl: "/category-icon/Beauty.png",
    bgColor: "bg-green-50/80 dark:bg-green-950/40",
    glowOrb: "bg-green-300/40 dark:bg-green-500/20",
    subCategories: ["Makeup", "Skincare", "Haircare", "Fragrances"],
    groups: [
      {
        title: "Cosmetics",
        items: ["Makeup", "Nail Care", "Tools & Brushes"]
      },
      {
        title: "Personal Care",
        items: ["Skincare", "Haircare", "Fragrances", "Bath & Body"]
      }
    ]
  },
  {
    title: "Jewelry",
    href: "/category/jewelry",
    subtitle: "Necklaces, Rings, Earrings",
    imgUrl: "/category-icon/Jwellery.png",
    bgColor: "bg-yellow-50/80 dark:bg-yellow-950/40",
    glowOrb: "bg-yellow-300/40 dark:bg-yellow-500/20",
    subCategories: ["Necklaces", "Rings", "Earrings", "Bracelets"],
    groups: [
      {
        title: "Fine Jewelry",
        items: ["Gold Jewelry", "Diamond Jewelry", "Silver Jewelry", "Gemstone Jewelry"]
      },
      {
        title: "Fashion Jewelry",
        items: ["Necklaces", "Rings", "Earrings", "Bracelets"]
      }
    ]
  },
  {
    title: "Furniture",
    href: "/category/furniture",
    subtitle: "Sofa, Beds, Chairs, Tables",
    imgUrl: "/category-icon/Furniture.png",
    bgColor: "bg-stone-50/80 dark:bg-stone-900/40",
    glowOrb: "bg-stone-300/40 dark:bg-stone-500/20",
    subCategories: ["Sofa", "Beds", "Chairs", "Tables"],
    groups: [
      {
        title: "Living Room",
        items: ["Sofa sets", "Chairs", "Coffee Tables", "TV Units"]
      },
      {
        title: "Bedroom & Study",
        items: ["Beds", "Mattresses", "Study Tables", "Wardrobes"]
      }
    ]
  },
  {
    title: "Kids & Toys",
    href: "/category/kids-toys",
    subtitle: "Educational Toys, Board Games",
    imgUrl: "/category-icon/kids-and-toys.png",
    bgColor: "bg-indigo-50/80 dark:bg-indigo-950/40",
    glowOrb: "bg-indigo-300/40 dark:bg-indigo-500/20",
    subCategories: ["Educational Toys", "Action Figures", "Board Games"],
    groups: [
      {
        title: "Toys",
        items: ["Educational Toys", "Action Figures", "Board Games", "Dolls & Playsets"]
      },
      {
        title: "Baby Care",
        items: ["Diapers", "Baby Clothing", "Strollers & Pram", "Feeding & Nursing"]
      }
    ]
  },
  {
    title: "Books",
    href: "/category/books",
    subtitle: "Books, Notebooks, Pens",
    imgUrl: "/category-icon/book.png",
    bgColor: "bg-purple-50/80 dark:bg-purple-950/40",
    glowOrb: "bg-purple-300/40 dark:bg-purple-500/20",
    subCategories: ["Books", "Notebooks", "Pens", "Office Supplies"],
    groups: [
      {
        title: "Stationery",
        items: ["Notebooks", "Pens & Pencils", "Office Supplies", "Art & Craft"]
      },
      {
        title: "Books",
        items: ["Fiction", "Non-Fiction", "Children Books", "Academic Books"]
      }
    ]
  },
  {
    title: "Bags & Luggage",
    href: "/category/bags",
    subtitle: "Backpacks, Handbags, Wallets",
    imgUrl: "/category-icon/Bags.png",
    bgColor: "bg-rose-50/80 dark:bg-rose-950/40",
    glowOrb: "bg-rose-300/40 dark:bg-rose-500/20",
    subCategories: ["Backpacks", "Handbags", "Wallets", "Travel Bags"],
    groups: [
      {
        title: "Daily Bags",
        items: ["Backpacks", "Handbags", "Sling Bags", "Wallets"]
      },
      {
        title: "Travel Gear",
        items: ["Trolley Bags", "Duffle Bags", "Luggage Covers"]
      }
    ]
  },
  {
    title: "Gifts",
    href: "/category/gifts",
    subtitle: "Special Occasions, Corporate",
    imgUrl: "/category-icon/Gifts.png",
    bgColor: "bg-red-50/80 dark:bg-red-950/40",
    glowOrb: "bg-red-300/40 dark:bg-red-500/20",
    subCategories: ["Special Occasions", "Corporate Gifts", "Personalized"],
    groups: [
      {
        title: "Gifts by Recipient",
        items: ["For Him", "For Her", "For Kids", "For Couples"]
      },
      {
        title: "Gifts by Occasion",
        items: ["Birthday Gifts", "Anniversary Gifts", "Corporate Gifts", "Festival Gifts"]
      }
    ]
  },
  {
    title: "Kurtis & Dress",
    href: "/category/kurtis",
    subtitle: "Ethnic Wear, Traditional",
    imgUrl: "/category-icon/kurti-and-dress.png",
    bgColor: "bg-fuchsia-50/80 dark:bg-fuchsia-950/40",
    glowOrb: "bg-fuchsia-300/40 dark:bg-fuchsia-500/20",
    subCategories: ["Kurtis", "Dress Materials", "Sarees"],
    groups: [
      {
        title: "Traditional Wear",
        items: ["Kurtis & Tunics", "Salwar Kameez", "Sarees", "Lehengas"]
      },
      {
        title: "Dress Material",
        items: ["Unstitched Suits", "Cotton Fabric", "Silk Fabric"]
      }
    ]
  },
  {
    title: "Wedding",
    href: "/category/wedding-accessories",
    subtitle: "Bridal, Groom, Decor",
    imgUrl: "/category-icon/Wedding Accessories.png",
    bgColor: "bg-pink-50/80 dark:bg-pink-950/40",
    glowOrb: "bg-pink-300/40 dark:bg-pink-500/20",
    subCategories: ["Bridal Accessories", "Groom Accessories", "Wedding Decor"],
    groups: [
      {
        title: "Wedding Fashion",
        items: ["Bridal Wear", "Groom Wear", "Sherwanis", "Wedding Sarees"]
      },
      {
        title: "Accessories & Decor",
        items: ["Bridal Jewelry", "Wedding Decor", "Groom Accessories", "Invitations"]
      }
    ]
  },
  {
    title: "Top Brands",
    href: "/category/top-brands",
    subtitle: "Exclusive Collections",
    imgUrl: "/category-icon/Top_Brands.png",
    bgColor: "bg-slate-50/80 dark:bg-slate-900/40",
    glowOrb: "bg-slate-300/40 dark:bg-slate-500/20",
    subCategories: ["Premium Brands", "Exclusive Collections"],
    groups: [
      {
        title: "Popular Brands",
        items: ["Premium Brands", "Local Favorites", "Trending Brands"]
      },
      {
        title: "Premium Selections",
        items: ["Exclusive Collections", "New Launches"]
      }
    ]
  }
];
