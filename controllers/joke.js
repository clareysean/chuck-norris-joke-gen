module.exports = { getJoke };

async function getJoke(req, res) {
  const { category } = req.body;
  const apiUrl = `https://api.chucknorris.io/jokes/random?category=${category}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    // Render the index view with the fetched joke
    res.render("index", { joke: data.value, category });
  } catch (error) {
    // Handle any errors that occur during the request
    console.error(error);
    res.status(500).send("Error occurred while fetching the joke.");
  }
}
