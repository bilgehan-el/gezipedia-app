const popularPlaces = {
  France: [
    {
      name: "Eiffel Tower",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Tour_Eiffel_Wikimedia_Commons.jpg/500px-Tour_Eiffel_Wikimedia_Commons.jpg",
      info: "Iconic symbol of Paris and France.",
    },
    {
      name: "Louvre Museum",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Louvre_Museum_Wikimedia_Commons.jpg/500px-Louvre_Museum_Wikimedia_Commons.jpg",
      info: "World's largest art museum.",
    },
  ],
  Germany: [
    {
      name: "Brandenburg Gate",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Berlin_-_0266_-_16052015_-_Brandenburger_Tor.jpg/500px-Berlin_-_0266_-_16052015_-_Brandenburger_Tor.jpg",
      info: "18th-century neoclassical monument in Berlin.",
    },
    {
      name: "Neuschwanstein Castle",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Schloss_Neuschwanstein_2013.jpg/500px-Schloss_Neuschwanstein_2013.jpg",
      info: "Famous 19th-century Romanesque Revival palace.",
    },
  ],
  Japan: [
    {
      name: "Mount Fuji",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/View_of_Mount_Fuji_from_%C5%8Cwakudani_20211202.jpg/500px-View_of_Mount_Fuji_from_%C5%8Cwakudani_20211202.jpg",
      info: "Japan's tallest mountain and iconic symbol.",
    },
    {
      name: "Fushimi Inari Shrine",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Torii_path_with_lantern_at_Fushimi_Inari_Taisha_Shrine%2C_Kyoto%2C_Japan.jpg/500px-Torii_path_with_lantern_at_Fushimi_Inari_Taisha_Shrine%2C_Kyoto%2C_Japan.jpg",
      info: "Famous for its thousands of vermilion torii gates.",
    },
  ],
  Italy: [
    {
      name: "Colosseum",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Colosseo_2020.jpg/500px-Colosseo_2020.jpg",
      info: "Ancient Roman gladiatorial arena in Rome.",
    },
    {
      name: "Leaning Tower of Pisa",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Italy_-_Pisa_-_Cathedral_Square.jpg/1200px-Italy_-_Pisa_-_Cathedral_Square.jpg",
      info: "Famous leaning bell tower in Pisa.",
    },
  ],
  Turkey: [
    {
      name: "Hagia Sophia",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Hagia_Sophia_Mars_2013.jpg/500px-Hagia_Sophia_Mars_2013.jpg",
      info: "Historic former Greek Orthodox Christian cathedral and Ottoman imperial mosque in Istanbul.",
    },
    {
      name: "Cappadocia",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Cappadocia_balloon_trip%2C_Ortahisar_Castle_%2811893715185%29.jpg/500px-Cappadocia_balloon_trip%2C_Ortahisar_Castle_%2811893715185%29.jpg",
      info: "Region known for its unique rock formations and hot air balloon rides.",
    },
  ],
  "United States": [
    {
      name: "Statue of Liberty",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Liberty_Island_photo_Don_Ramey_Logan.jpg/500px-Liberty_Island_photo_Don_Ramey_Logan.jpg",
      info: "Iconic symbol of freedom in New York City.",
    },
    {
      name: "Grand Canyon",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Canyon_River_Tree_%28165872763%29.jpeg/500px-Canyon_River_Tree_%28165872763%29.jpeg",
      info: "Famous natural wonder in Arizona.",
    },
  ],
  "United Kingdom": [
    {
      name: "Big Ben",
      image:
        "https://res.cloudinary.com/aenetworks/image/upload/c_fill,ar_2,w_3840,h_1920,g_auto/dpr_auto/f_auto/q_auto:eco/v1/this-day-in-history-05-31-1859-big-ben-in-london?_a=BAVAZGDX0",
      info: "Iconic clock tower in London.",
    },
    {
      name: "Stonehenge",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Stonehenge2007_07_30.jpg/500px-Stonehenge2007_07_30.jpg",
      info: "Prehistoric monument in Wiltshire, England.",
    },
  ],
  Brazil: [
    {
      name: "Christ the Redeemer",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Christ_on_Corcovado_mountain.JPG/500px-Christ_on_Corcovado_mountain.JPG",
      info: "Famous statue overlooking Rio de Janeiro.",
    },
    {
      name: "Sugarloaf Mountain",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/P%C3%A3o_de_A%C3%A7ucar_-_Sugarloaf_Mountain_-_Zuckerhut_-_2022.jpg/500px-P%C3%A3o_de_A%C3%A7ucar_-_Sugarloaf_Mountain_-_Zuckerhut_-_2022.jpg",
      info: "Peak situated in Rio de Janeiro at the mouth of Guanabara Bay.",
    },
  ],
  Egypt: [
    {
      name: "Pyramids of Giza",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Pyramids_of_the_Giza_Necropolis.jpg/500px-Pyramids_of_the_Giza_Necropolis.jpg",
      info: "Ancient pyramids and one of the Seven Wonders of the Ancient World.",
    },
    {
      name: "Karnak Temple",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Temple_de_Louxor_68.jpg/500px-Temple_de_Louxor_68.jpg",
      info: "Large temple complex in Luxor.",
    },
  ],
  France: [
    {
      name: "Eiffel Tower",
      image:
        "https://planetrail.co.uk/wp-content/uploads/Eiffel-Tower-Paris-resized-768x510.jpg",
      info: "Iconic symbol of Paris and France.",
    },
    {
      name: "Louvre Museum",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Louvre_Museum_Wikimedia_Commons.jpg/500px-Louvre_Museum_Wikimedia_Commons.jpg",
      info: "World's largest art museum.",
    },
  ],
  Canada: [
    {
      name: "CN Tower",
      image:
        "http://breathedreamgo.com/wp-content/uploads/2014/05/CN-Tower-BCL-600.jpg",
      info: "Iconic tower in Toronto offering panoramic views.",
    },
    {
      name: "Banff National Park",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Moraine_Lake_17092005.jpg/500px-Moraine_Lake_17092005.jpg",
      info: "Famous park with stunning mountains and lakes.",
    },
  ],
  Australia: [
    {
      name: "Sydney Opera House",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Sydney_Opera_House_%2830111403413%29.jpg/500px-Sydney_Opera_House_%2830111403413%29.jpg",
      info: "World-famous performing arts center in Sydney.",
    },
    {
      name: "Great Barrier Reef",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/ISS-45_StoryOfWater%2C_Great_Barrier_Reef%2C_Australia.jpg/500px-ISS-45_StoryOfWater%2C_Great_Barrier_Reef%2C_Australia.jpg",
      info: "The world's largest coral reef system.",
    },
  ],
  Russia: [
    {
      name: "Saint Basil's Cathedral",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Saint_Basil%27s_Cathedral_in_Moscow.jpg/500px-Saint_Basil%27s_Cathedral_in_Moscow.jpg",
      info: "Colorful cathedral in Moscow's Red Square.",
    },
    {
      name: "Hermitage Museum",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Hermitage_Museum_in_Saint_Petersburg.jpg/1500px-Hermitage_Museum_in_Saint_Petersburg.jpg",
      info: "One of the largest and oldest museums in the world.",
    },
  ],
  China: [
    {
      name: "Great Wall of China",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/The_Great_Wall_of_China_at_Jinshanling-edit.jpg/500px-The_Great_Wall_of_China_at_Jinshanling-edit.jpg",
      info: "Ancient wall stretching across northern China.",
    },
    {
      name: "Forbidden City",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/The_Forbidden_City_-_View_from_Coal_Hill.jpg/500px-The_Forbidden_City_-_View_from_Coal_Hill.jpg",
      info: "Historic palace complex in Beijing.",
    },
  ],
  India: [
    {
      name: "Taj Mahal",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Taj_Mahal_%28Edited%29.jpeg/500px-Taj_Mahal_%28Edited%29.jpeg",
      info: "White marble mausoleum in Agra.",
    },
    {
      name: "Jaipur City Palace",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Chandra_Mahal%2C_City_Palace%2C_Jaipur%2C_20191218_0951_9043.jpg/500px-Chandra_Mahal%2C_City_Palace%2C_Jaipur%2C_20191218_0951_9043.jpg",
      info: "Historic palace complex in Rajasthan.",
    },
  ],
};

export default popularPlaces;
