# Git it Done! 🐙

Git it Done! is a responsive web app that allows you to search for GitHub repositories and view open issues for any user or programming language. Built with vanilla HTML, CSS, and JavaScript, it fetches live data from the GitHub API and presents it in a clean, accessible interface.

## Features

* **Search by GitHub username** – quickly list all repositories for any user.
* **Search by programming language** – find featured repositories with help-wanted issues.
* **View repository issues** – see open issues and pull requests in real time.
* **Responsive and modern design** – works on desktop and mobile devices.
* **Loading feedback** – users see a placeholder while fetching data.
* **Accessible UI** – includes `aria-labels`, focus states, and semantic HTML.
* **Paginated issue warning** – informs users when there are more than 30 issues.


## Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/git-it-done.git
```

2. Open `index.html` in your browser.

No backend is required; the app communicates directly with the GitHub API.

## Usage

1. On the homepage, either:

   * Enter a GitHub username and click **Get User**, or
   * Click a programming language button to see featured repositories.

2. Click on any repository to view its open issues.

3. If there are more than 30 issues, a warning link will appear to view the full list on GitHub.

## Technologies

* HTML5 & CSS3
* Vanilla JavaScript (ES6+)
* GitHub REST API v3
* Font Awesome for icons
* Google Fonts (IBM Plex Sans)

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for bug fixes, new features, or improvements.

## License

This project is licensed under the MIT License.
