const github = true;

export const basename = github ? "findmypurpose" : null;

export const sidebarLinks = [
  {
    imgURL: `/${basename}/assets/icons/home.svg`,
    route: "/",
    label: "Home",
  },
  {
    imgURL: `/${basename}/assets/icons/shopping.svg`,
    route: "/product",
    label: "Products",
  },

  {
    imgURL: `/${basename}/assets/icons/calendar.svg`,
    route: "/appointment",
    label: "Appointment",
  },
];

export const bottombarLinks = sidebarLinks;

export const business = {
  name: "Find My Purpose",
  email: "test@gmail.com",
  detail: "Career Consulting",
  video: "test",
};

export const homeLinks = [
  {
    imgURL: `/${basename}/assets/images/meeting.jpg`,
    route: "/product",
    label: "Products & Services",
  },
  {
    imgURL: `/${basename}/assets/images/sponsor.jpg`,
    route: "/appointment",
    label: "Book an appointment",
  },
];

export const homeInfo = [
  {
    id: 1,
    name: true,
  },
  {
    id: 2,
    image: `/${basename}/assets/images/Ngon.png`,
  },
];

export const sponsor = [
  {
    id: 1,
    imageUrl: "/assets/images/money theory.png",
    url: "https://www.patreon.com/moneytheory",
    title: "Purpose Finder",
    description: "Questionaire tool that helps you find your life purpose.",
  },
  {
    id: 2,
    imageUrl: "/assets/images/Ngon.png",
    url: "https://www.ngonapp.com",
    title: "Ngon",
    description: "Social media app for foodies and restaurants",
  },
  {
    id: 3,
    imageUrl: "/assets/images/youtube.png",
    url: "https://www.youtube.com/@moneytheory",
    title: "Money Theory Youtube",
    description: "Educational videos about finance and investment",
  },
];

export const product = [
  {
    id: 1,
    imageUrl:
      "https://images.pexels.com/photos/801885/pexels-photo-801885.jpeg?auto=compress&cs=tinysrgb&w=600",

    title: "Purpose Finder",
    description: "Questionnaire tool that helps you find your life purpose.",
  },
  {
    id: 2,
    imageUrl:
      "https://images.pexels.com/photos/4098215/pexels-photo-4098215.jpeg?auto=compress&cs=tinysrgb&w=600",
    url: "https://www.amazon.com/dp/B0DBGBJRYY",
    title: "Career Coaching",
    description: "Coaching service that helps you reach your life goals.",
  },
];

export const rental = [
  {
    id: 1,
    imageUrl:
      "https://target.scene7.com/is/image/Target/GUEST_23dc61be-d199-461d-81e3-36c010e7f745",
    url: "",
    title: "Drone DJI Mavic Mini 2",
    description:
      "Aerial photography and video. Ideal for real estate listings, outdoor adventures, or weddings. 4K Video & 3-Axis Gimbal for Cinematic Quality Shooting. Accessories: Carrying bag, charging cable, memory card",
    deposit: "400.00",
  },
  {
    id: 2,
    imageUrl: "https://m.media-amazon.com/images/I/61kHENeCK8L._AC_SL1000_.jpg",
    url: "",
    title: "Sony Alpha a6000 Mirrorless Digital Camera",
    description:
      "Includes both f2.8 35mm lens for portraits and f3.5 16-50mm lens for street photography. Accessories: Carrying bag, charging cable, memory card",
    deposit: "800.00",
  },
  {
    id: 3,
    imageUrl: "https://m.media-amazon.com/images/I/61UCYP4v-sL._AC_SL1500_.jpg",
    url: "",
    title: "Neewer Softbox Lighting Kit (quantity 2)",
    description:
      "Diffuses light to give continuous soft lighting. Ideal for portraits, youtube, or products",
    deposit: "80.00",
  },
];

export const service = [
  {
    id: 1,
    imageUrl:
      "https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Business consulting",
    description:
      "Identify business and marketing opportunities, and provide efficient management strategies with cost-effective tools and apps. Develop websites or social media business profiles. Manage the development of products and services",
  },
  {
    id: 2,
    imageUrl:
      "https://images.pexels.com/photos/128867/coins-currency-investment-insurance-128867.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Financial coaching",
    description:
      "Develop financial strategies that address budgeting, saving, investing, and debt management. Through education and practical tools, you can make informed decisions and achieve your financial goals.",
  },
];

export const resumeSummary = [
  {
    id: 1,
    name: "Business Management (8 years)",
    detail: [
      "Product management",
      "Project management",
      "Business analyst",
      "PMP in progress",
    ],
  },
  {
    id: 2,
    name: "Software Development (4 years)",
    detail: [
      "Python: Pandas Numpy Pytorch",
      "Javascript: React JS Next JS",
      "Database: Appwrite, SQL",
    ],
  },
];

export const resumeSoftware = [
  {
    id: 1,
    name: "Ngonapp",
    detail: [
      "Social media application to share photos of food and discover restaurants",
      "Tanstack Query for API data fetching and queries",
      "User authentication, relational database, infinite scroll",
    ],
    link: "http://ngonapp.com",
  },
  {
    id: 2,
    name: "Machine Learning & Neural Networks",
    detail: [
      "Develop & train models to make classifications and predictions",
      "Linear models, binary and multiclass classification, computer vision",
      "Determine the activation function, loss functions, and optimizers",
    ],
    link: "https://drive.google.com/drive/folders/18LZ0Y6KZRWOuVJgnmRl34JZW31yQK6Fb?usp=drive_link",
  },
  {
    id: 2,
    name: "Money Theory",
    detail: [
      "Business and financial consulting services website",
      "Appointment scheduling and payment processing widget",
      "Implemented interactive chat forum with api and database",
    ],
    link: "http://moneytheory.net",
  },
];
