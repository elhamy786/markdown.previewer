import React, { useState } from 'react';
import { marked } from 'marked';
import './App.css';

marked.setOptions({
  breaks: true,
});

const defaultMarkdown = `
# Welcome to My React Markdown Previewer!

## This is a Sub-heading

Here’s some inline code: \`<div></div>\`.

\`\`\`JavaScript
// This is a multi-line code block:
function exampleFunction(startLine, endLine) {
 
    return multiLineCode;
  }
}
\`\`\`

You can also format text to be **bold**, _italic_, or **_both_**. 
Additionally, you can use ~~strikethrough~~ text.

There are also [links](https://github.com/elhamy786/markdown.previewer), and
> Block Quotes!

For more advanced formatting, here’s a table:

| Wild Header | Crazy Header | Another Header? |
|-------------|--------------|-----------------|
| Your content | can be here, | and it can be here |
| And here.    | Okay.        | I think we get it |

- Bullet lists are available.
  - Some items are nested.
    - With different levels of indentation.

1. Numbered lists are supported too.
1. Use \`1.\` for all items if you prefer.
1. Finally, you can embed images:
![Typig picture](https://drive.google.com/file/d/1oAg5-pLrd9IVBS-l3m9to1EGlNXzW1zq/view?usp=drive_link)
`;

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
        {/* eslint-disable react/no-danger */}
        <div id="preview" dangerouslySetInnerHTML={{ __html: marked(markdown) }} />
        {/* eslint-enable react/no-danger */}
      </div>
    </div>
  );
}

export default App;
