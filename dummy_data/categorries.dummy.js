const Category = require("../models/category.model");

const categories = [
    {
      name: 'Action',
      image: 'https://example.com/action.jpg'
    },
    {
      name: 'Comedy',
      image: 'https://example.com/comedy.jpg'
    },
    {
      name: 'Drama',
      image: 'https://example.com/drama.jpg'
    },
    {
      name: 'Horror',
      image: 'https://example.com/horror.jpg'
    },
    {
      name: 'Sci-Fi',
      image: 'https://example.com/scifi.jpg'
    }
  ];

const insertCategories = async () => Category.insertMany(categories).then((docs) => {
    console.log('Dummy data inserted', docs);
})

module.exports = {
    insertCategories,
}