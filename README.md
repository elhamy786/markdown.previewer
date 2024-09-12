# Markdown Previewer React 🚀

## A React-based Markdown Previewer application that dynamically converts and displays GitHub-flavored Markdown into HTML. This project allows users to enter Markdown syntax into a text area and see a live preview of the rendered HTML as they type.📝


```css
textarea:focus,
#preview:hover {
  background-color: rgba(13, 49, 2, 0.3);
  transform: translateY(-3px);
  border: 2px solid #276749;
}
```

```javascript
function App() {
  const [markdown, setMarkdown] = useState(defaultMarkdown);
  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };
  return (
    <div className="App">
      <div className="content-container">
        <h4 className="header">Editor</h4>
        <textarea id="editor" value={markdown} onChange={handleChange} />
        <h4 className="header">Preview</h4>
        <div id="preview" dangerouslySetInnerHTML={{ __html: marked(markdown) }} />
      </div>
    </div>
  );
}
export default App;
```

## Demo 📸

[Live Demo](https://deploy-preview-1--aquamarine-nougat-106d52.netlify.app/)

![Screenshot](./src/Screenshot%202024-09-01%20184954.png)

![Screenshot](./src/Screenshot%202024-09-01%20184914.png)

## Technologies Used 🛠️

- HTML
- CSS
- JavaScript
- React
- Node.js


## Installation 💻

```bash
1: Clone the Repository:
git clone https://github.com/elhamy786/markdown.previewer/tree/markdown.previewer
```

```bash
2: Navigate to the Project Directory:
cd markdown.previewer
```

```bash
3: Open the index.html , App.js , App.css and another Files in Your Browser.
```

## Usage 🎯

```bash
# Clone the repo to your local machine.
# Install dependencies using npm install or yarn install.
# Run the project with npm start or yarn start.
# Write markdown and see the live preview instantly.
# Customize the preview using CSS and build for production if needed.
```

## Features ⭐

- User-Friendly Interface: The application features a clean and intuitive design, making it easy to write and preview markdown without distractions.
- Responsive Design: The interface adapts seamlessly to different screen sizes, ensuring a smooth experience on both desktop and mobile devices.
- Syntax Highlighting: Supports syntax highlighting for code blocks, enhancing readability and making it easier for developers to showcase their code.

## Author 👩‍💻

- [Linkedin](https://www.linkedin.com/in/elham-afzali-05326130b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app)
- [Email](elham.afzali1383@gmail.com)

## Contributing 🤝
To contribute, submit bug reports, feature requests, or pull requests via the GitHub repository issues and pull requests tabs.
