const storeLocations = [
  {
    title: "CHINO HILLS",
    address: "2983 Chino Ave #A8, Chino Hills CA 91709",
    phone: "(909) 364-8644",
    hours: [
      { day: "Sunday", timeString: "11AM-8PM" },
      { day: "Monday", timeString: "11AM-8PM" },
      { day: "Tuesday", timeString: "11AM-8PM" },
      { day: "Wednesday", timeString: "11AM-8PM" },
      { day: "Thursday", timeString: "11AM-8PM" },
      { day: "Friday", timeString: "11AM-8PM" },
      { day: "Saturday", timeString: "11AM-8PM" },
    ],
    imgSrc:
      "https://res.cloudinary.com/ricky-ho/image/upload/v1618704316/Omomo/Locations/location-image1-1590w.jpg",
    imgSrcSet:
      "https://res.cloudinary.com/ricky-ho/image/upload/v1618709730/Omomo/Locations/location-image1-500w.jpg 500w, https://res.cloudinary.com/ricky-ho/image/upload/v1618709762/Omomo/Locations/location-image1-1080w.jpg 1080w, https://res.cloudinary.com/ricky-ho/image/upload/v1618704316/Omomo/Locations/location-image1-1590w.jpg 1590w",
    gmaps:
      "https://www.google.com/maps/place/OMOMO+Tea+Shoppe/@34.0103382,-117.7424176,17z/data=!3m1!4b1!4m5!3m4!1s0x80c32d5694a8c81b:0x1e21b35a236d6fe8!8m2!3d34.0103465!4d-117.7402429",
    embedSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.3066743458503!2d-117.74241228448057!3d34.01033822738398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c32d610760c2cb%3A0x1c6b89ecd8be6421!2s2983%20Chino%20Ave%20A8%2C%20Chino%20Hills%2C%20CA%2091709!5e0!3m2!1sen!2sus!4v1618792032897!5m2!1sen!2sus",
  },
  {
    title: "IRVINE-ALTON",
    address: "5365 Alton Pkwy Unit G, Irvine CA 92604",
    phone: "(949) 861-8828",
    hours: [
      { day: "Sunday", timeString: "11AM-5PM" },
      { day: "Monday", timeString: "11AM-5PM" },
      { day: "Tuesday", timeString: "11AM-5PM" },
      { day: "Wednesday", timeString: "11AM-5PM" },
      { day: "Thursday", timeString: "11AM-5PM" },
      { day: "Friday", timeString: "11AM-5PM" },
      { day: "Saturday", timeString: "11AM-5PM" },
    ],
    imgSrc:
      "https://res.cloudinary.com/ricky-ho/image/upload/v1618704315/Omomo/Locations/location-image2-1590w.jpg",
    imgSrcSet:
      "https://res.cloudinary.com/ricky-ho/image/upload/v1618709761/Omomo/Locations/location-image2-500w.jpg 500w, https://res.cloudinary.com/ricky-ho/image/upload/v1618709762/Omomo/Locations/location-image2-1080w.jpg 1080w, https://res.cloudinary.com/ricky-ho/image/upload/v1618704315/Omomo/Locations/location-image2-1590w.jpg 1590w",
    gmaps:
      "https://www.google.com/maps/place/OMOMO+Tea+Shoppe/@33.6714702,-117.791266,17z/data=!3m1!4b1!4m5!3m4!1s0x80dcdd6c3e05b253:0x7af1faa168bc037a!8m2!3d33.671458!4d-117.7890776",
    embedSrc:
      "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13281.795015223823!2d-117.7888306!3d33.6714426!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7af1faa168bc037a!2sOMOMO%20Tea%20Shoppe!5e0!3m2!1sen!2sus!4v1618792080198!5m2!1sen!2sus",
  },
  {
    title: "IRVINE-WALNUT VILLAGE",
    address: "14433 Culver Dr, Irvine CA 92604",
    phone: "(949) 418-9470",
    hours: [
      { day: "Sunday", timeString: "11AM-8PM" },
      { day: "Monday", timeString: "11AM-8PM" },
      { day: "Tuesday", timeString: "11AM-8PM" },
      { day: "Wednesday", timeString: "11AM-8PM" },
      { day: "Thursday", timeString: "11AM-8PM" },
      { day: "Friday", timeString: "11AM-8PM" },
      { day: "Saturday", timeString: "11AM-8PM" },
    ],
    imgSrc:
      "https://res.cloudinary.com/ricky-ho/image/upload/v1618704315/Omomo/Locations/location-image3-1590w.jpg",
    imgSrcSet:
      "https://res.cloudinary.com/ricky-ho/image/upload/v1618709796/Omomo/Locations/location-image3-500w.jpg 500w, https://res.cloudinary.com/ricky-ho/image/upload/v1618709708/Omomo/Locations/location-image3-1080w.jpg 1080w, https://res.cloudinary.com/ricky-ho/image/upload/v1618704315/Omomo/Locations/location-image3-1590w.jpg 1590w",
    gmaps:
      "https://www.google.com/maps/place/Omomo+Tea+Shoppe/@33.7064824,-117.788591,19z/data=!3m1!4b1!4m5!3m4!1s0x80dcdd80a27f962b:0x8c47a3fa21092ac7!8m2!3d33.7064721!4d-117.788036",
    embedSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d829.7738292100059!2d-117.78859101188246!3d33.70648241444141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcdd80a27f962b%3A0x8c47a3fa21092ac7!2sOmomo%20Tea%20Shoppe!5e0!3m2!1sen!2sus!4v1618792146107!5m2!1sen!2sus",
  },
];

export default storeLocations;
