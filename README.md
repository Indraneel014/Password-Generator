# 🔐 Password Generator

A simple web app that generates random passwords instantly in your browser. Choose a password length of 6, 8, 10, 12, 14, or 16 characters and generate a new one with a click.

🌐 **Live Demo:** [https://passgen14.netlify.app/](https://passgen14.netlify.app/)

![Screenshot](./screenshot.png)

## Features

- Choose the password length: **6, 8, 10, 12, 14, or 16** characters
- Passwords mix uppercase letters, lowercase letters, numbers, and symbols
- Generate a new random password with one click
- Copy the password to the clipboard
- Runs entirely in the browser, so nothing is sent to a server or stored
- Responsive layout that works on desktop and mobile

## Sample Output

| Length | Example password |
|--------|------------------|
| 10     | `]m%~H.!9i?`     |

> This is only an example. Never use a published sample as a real password. Generate your own.

## Tech Stack

- **HTML5**: structure
- **CSS3**: styling and layout
- **JavaScript (ES6)**: password generation logic

## Getting Started

### Prerequisites

A modern web browser. No installation or build tools needed.

### Run locally

```bash
# Clone the repository
git clone https://github.com/Indraneel014/Password-Generator.git

# Move into the project folder
cd Password-Generator
```

Then open `index.html` in your browser.

## Usage

1. Open the [live site](https://passgen14.netlify.app/) or run it locally.
2. Select the password length (6, 8, 10, 12, 14, or 16).
3. Click **Generate** to create a password.
4. Copy the password and use it for your account.

## Project Structure

```
Password-Generator/
├── index.html      # App markup
├── index.css       # Styles
├── index.js       # Password generation logic
└── README.md
```

## Deployment

The app is deployed on [Netlify](https://www.netlify.com/) at
[https://passgen14.netlify.app/](https://passgen14.netlify.app/).

To deploy your own copy, fork this repository, then connect it to Netlify and deploy. No build command is needed because it is a static site.

## Security Tips

- Longer passwords are stronger, so prefer 12 to 16 characters for important accounts.
- Use a unique password for every account.
- Store your passwords in a trusted password manager.

## Contributing

Contributions are welcome!

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m "Add your feature"`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Author

**Indraneel014**
GitHub: [@Indraneel014](https://github.com/Indraneel014)
