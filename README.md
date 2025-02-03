# Natural Language Processing (NLP) Web Tool

## Project Overview
This project is a web-based tool that allows users to perform Natural Language Processing (NLP) on articles or blogs found on other websites. The tool uses an external API (Aylien or MeaningCloud) to analyze the content of the article and determine attributes such as:
- **Polarity**: Whether the content is positive, neutral, or negative.
- **Subjectivity**: Whether the content is subjective (opinion-based) or objective (fact-based).
- **Text Snippet**: A brief excerpt from the article.

The project is built using the following technologies:
- **Webserver**: Node.js
- **Web Framework**: Express.js
- **Build Tool**: Webpack (with configurations for both development and production environments)
- **External API**: Aylien or MeaningCloud
- **Service Workers**: For offline functionality
- **Testing Framework**: Jest for unit testing
