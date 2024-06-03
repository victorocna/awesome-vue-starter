module.exports = {
  sitename: 'Your Awesome App',
  title: 'Your Awesome App',
  description: `
  Starter template for Vue and Nuxt projects packed with features like authentication,
  custom hooks, Tailwind support and many more.
  `,
  baseurl: `${process.env.APP_BASE_URL}`,
  image: `${process.env.APP_BASE_URL}/images/logo.png`,
  stylesheets: [
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css',
    'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500',
  ],
  scripts: [
    // eg: tracking scripts
  ],
  languages: [
    'en', // add any other languages here
    'ro',
  ],
};
