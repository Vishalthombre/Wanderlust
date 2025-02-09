const sampleListings = [
    {
      title: "Secluded Treehouse Getaway",
      description:
        "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
      image: "  ",
      price: 800,
      location: "Portland",
      country: "United States",
    },
    {
      title: "Eco-Friendly Treehouse Retreat",
      description:
        "Stay in an eco-friendly treehouse nestled in the forest. It's the perfect escape for nature lovers.",
      image: "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      price: 750,
      location: "Costa Rica",
      country: "Costa Rica",
    },
    {
      title: "Beachfront Paradise",
      description:
        "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
      image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      price: 2000,
      location: "Cancun",
      country: "Mexico",
    },
    {
      title: "Mountain View Cabin in Banff",
      description:
        "Enjoy breathtaking mountain views from this cozy cabin in the Canadian Rockies.",
      image: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      price: 1500,
      location: "Banff",
      country: "Canada",
    },
    {
      title: "Cozy Beachfront Cottage",
      description:
        "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
      image: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      price: 1500,
      location: "Malibu",
      country: "United States",
    },
    {
      title: "Charming Cottage in the Cotswolds",
      description:
        "Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.",
      image: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2glMjB2YWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      price: 1200,
      location: "Cotswolds",
      country: "United Kingdom",
    },
    {
      title: "Modern Loft in Downtown",
      description:
        "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
      image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      price: 1200,
      location: "New York City",
      country: "United States",
    },
    {
      title: "Lakefront Cabin in New Hampshire",
      description:
        "Spend your days by the lake in this cozy cabin in the scenic White Mountains of New Hampshire.",
      image: "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      price: 1200,
      location: "New Hampshire",
      country: "United States",
    },
    {
      title: "Beachfront Bungalow in Bali",
      description:
        "Relax on the sandy shores of Bali in this beautiful beachfront bungalow with a private pool.",
      image: "https://images.unsplash.com/photo-1602391833977-358a52198938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      price: 1800,
      location: "Bali",
      country: "Indonesia",
    },
    {
      title: "Art Deco Apartment in Miami",
      description:
        "Step into the glamour of the 1920s in this stylish Art Deco apartment in South Beach.",
      image: "https://plus.unsplash.com/premium_photo-1670963964797-942df1804579?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      price: 1600,
      location: "Miami",
      country: "United States",
    },
    {
      title: "Historic Brownstone in Boston",
      description:
        "Step back in time in this elegant historic brownstone located in the heart of Boston.",
      image: "https://images.unsplash.com/photo-1533619239233-6280475a633a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      price: 2200,
      location: "Boston",
      country: "United States",
    },
    {
      title: "Ski Chalet in Aspen",
      description:
        "Hit the slopes in style with this luxurious ski chalet in the world-famous Aspen ski resort.",
      image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      price: 4000,
      location: "Aspen",
      country: "United States",
    },
    {
      title: "Rustic Log Cabin in Montana",
      description:
        "Unplug and unwind in this cozy log cabin surrounded by the natural beauty of Montana.",
      image: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      price: 1100,
      location: "Montana",
      country: "United States",
    },
    {
          title: "Charming Villa in Tuscany",
          description:
            "Experience the beauty of Tuscany in this charming villa surrounded by vineyards and olive groves.",
          image: "https://images.unsplash.com/photo-1543991041-0b17887248f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHR1c2NhbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
          price: 3000,
          location: "Tuscany",
          country: "Italy",
    },
        {
          title: "Luxury Apartment in Paris",
          description:
            "Indulge in luxury with this stunning apartment in the heart of Paris, just steps away from the Eiffel Tower.",
          image: "https://images.unsplash.com/photo-1579370520918-7479c4a6d7a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHBhcmlzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
          price: 2500,
          location: "Paris",
          country: "France",
        },
        {
          title: "Oceanfront Retreat in Maui",
          description:
            "Enjoy breathtaking ocean views and easy access to the beach in this luxurious oceanfront retreat.",
          image: "https://images.unsplash.com/photo-1547655600-1e127e4c1348?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1hdWl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
          price: 3500,
          location: "Maui",
          country: "United States",
        },
        {
          title: "Spacious Farmhouse in the Countryside",
          description:
            "Escape to the countryside in this spacious farmhouse surrounded by rolling hills and farmland.",
          image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzB8fGFjY29tX3NwbGxpdGVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
          price: 1400,
          location: "Kentucky",
          country: "United States",
        },
        {
          title: "Contemporary Villa in Mykonos",
          description:
            "Experience luxury in this contemporary villa with private pool and stunning views of the Aegean Sea.",
          image: "https://images.unsplash.com/photo-1617487131883-5c1f3f7de299?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fG15a29ub3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
          price: 4000,
          location: "Mykonos",
          country: "Greece",
        },
        {
          title: "Tranquil Retreat in the Smoky Mountains",
          description:
            "Relax in this tranquil retreat located in the heart of the Smoky Mountains with scenic views.",
          image: "https://images.unsplash.com/photo-1583604568903-46e9e3cbe1f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1vdW50YWluJTIwcGFyaXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
          price: 2200,
          location: "Tennessee",
          country: "United States",
        },
        {
          title: "Historic Lighthouse in Maine",
          description:
            "Stay in a historic lighthouse with stunning views of the Atlantic Ocean and surrounding cliffs.",
          image: "https://images.unsplash.com/photo-1613208443455-5be11c6cb5b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGxpaGh0b3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
          price: 1800,
          location: "Maine",
          country: "United States",
        },
        {
          title: "Chic Studio in Barcelona",
          description:
            "Enjoy the vibrant culture of Barcelona in this chic studio apartment located in the city center.",
          image: "https://images.unsplash.com/photo-1619020363641-86c4732b49f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGJhcmNlbG9uYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
          price: 1400,
          location: "Barcelona",
          country: "Spain",
        },
        {
          title: "Elegant Penthouse in Tokyo",
          description:
            "Experience the vibrant energy of Tokyo from this elegant penthouse with breathtaking city views.",
          image: "https://images.unsplash.com/photo-1574082561665-58a273be536b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fHRva3lvJTIwZWxlZ2FudHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
          price: 3000,
          location: "Tokyo",
          country: "Japan",
        },
        {
          title: "Rustic Cabin in the Adirondacks",
          description:
            "Unwind in this rustic cabin nestled in the Adirondack Mountains, perfect for hiking and nature walks.",
          image: "https://images.unsplash.com/photo-1579488489399-c7a7c9a9f614?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29uZmlydGFibGUifGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
          price: 1300,
          location: "New York",
          country: "United States",
        },
        {
          title: "Charming Bed & Breakfast in Savannah",
          description:
            "Stay in this charming bed & breakfast located in the historic district of Savannah, Georgia.",
          image: "https://images.unsplash.com/photo-1572255784905-12f6c9da0a29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fHNhdmFubmFofGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
          price: 1800,
          location: "Savannah",
          country: "United States",
        },
        {
          title: "Luxury Beach House in the Hamptons",
          description:
            "Enjoy summer in style in this luxury beach house located in the beautiful Hamptons.",
          image: "https://images.unsplash.com/photo-1561367988714-793db88f0dc5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGJlYWNoJTIwaG9tZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
          price: 5000,
          location: "Hamptons",
          country: "United States",
        },      
];
    module.exports = { data: sampleListings };