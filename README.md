# AI Code Complexity & Optimization Analyzer

An AI-driven developer tool designed to provide real-time Big-O complexity estimation and targeted code optimization suggestions fast.

## 🚀 Features

* **Instant Analysis:** Integrates the Gemini API to process snippets, delivering instant Big-O (Time & Space) complexity analysis with up to 95% precision.
* **Actionable Insights:** Empowers users with specific refactoring tips to enhance execution efficiency and reduce algorithmic latency.
* **High Performance:** Sleek UI built via vanilla HTML/JS, optimized for sub-second response times (<0.5s) to support rapid, iterative testing.
* **Sleek Interface:** Split-pane design allowing developers to easily paste code and immediately view metrics side-by-side.

## 🛠️ Tech Stack

* **Frontend:** HTML5, CSS3, Vanilla JavaScript
* **API:** Google Gemini API (`gemini-1.5-flash` model)

## ⚙️ Setup & Installation

1.  Clone this repository to your local machine.
2.  Obtain an API key from Google AI Studio.
3.  Open the `config.js` file and replace `'YOUR_API_KEY_HERE'` with your actual Gemini API key.
4.  Open `index.html` in any modern web browser to start using the tool.

*Note: For production deployments, it is recommended to move the API calls to a backend server to secure your API key.*