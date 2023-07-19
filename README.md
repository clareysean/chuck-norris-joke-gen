# Chuck Norris Joke Generator

This is a simple Express.js application that generates Chuck Norris jokes based on user-selected categories. It uses the `chucknorris.io` API to fetch jokes and displays them using EJS templates. This README file provides an overview of the project and instructions for setting up and running the application.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [API Reference](#api-reference)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

To get a local copy of this project up and running on your machine, follow these steps.

### Prerequisites

- Node.js (v12 or higher)
- npm (Node Package Manager)

### Installation

1. Clone the repository to your local machine or download the ZIP file and extract it.
2. Open a terminal or command prompt and navigate to the project's directory.

```bash
cd chuck-norris-joke-gen
```

3. Install the project dependencies using npm.

```bash
npm install
```

## Usage

1. After completing the installation steps, start the application by running the following command:

```bash
npm start
```

2. Open your web browser and visit `http://localhost:3000` to access the Chuck Norris Joke Generator.

3. On the homepage, select a joke category from the dropdown menu and click the "Generate Joke" button.

4. The application will fetch a random Chuck Norris joke from the selected category using the `chucknorris.io` API and display it on the page.

## API Reference

This application uses the Chuck Norris API to retrieve jokes. The `chucknorris.io` API is a free JSON API that provides random Chuck Norris jokes across various categories.

For more information about the API and available endpoints, refer to the official documentation: [chucknorris.io API Documentation](https://api.chucknorris.io/).

## Contributing

Contributions to this project are welcome! If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request.

When contributing to this repository, please follow the existing code style and conventions.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
