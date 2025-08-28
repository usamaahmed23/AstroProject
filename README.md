# Chatty

A simple, elegant chat interface built with vanilla HTML, CSS, and JavaScript that simulates conversations with an AI assistant.

## Features

- **Clean Chat Interface**: Modern, paper-like design with rounded corners and subtle shadows
- **Responsive Design**: Mobile-friendly layout that adapts to different screen sizes
- **Real-time Simulation**: Simulates AI responses with predefined messages and random selection
- **Auto-scroll**: Automatically scrolls to the latest messages
- **Reset Functionality**: Clear chat history with a single click
- **No Dependencies**: Built entirely with vanilla web technologies

## Project Structure

```
Chatty/
├── index.html          # Main chat interface with external CSS
├── standalone.html     # Self-contained version with inline CSS  
├── styles.css         # External stylesheet
├── package.json       # Project configuration
└── README.md          # This file
```

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- No additional software or dependencies required

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Chatty
```

2. Open the application:
```bash
npm start
```

Or simply open `index.html` in your web browser.

## Usage

1. **Start Chatting**: Type your message in the input field at the bottom
2. **Send Messages**: Click the "Send" button or press Enter
3. **View Responses**: The AI assistant will respond with simulated messages
4. **Clear Chat**: Click the "Reset" button to start a new conversation

## Architecture

### ChatInterface Class

The core functionality is implemented in the `ChatInterface` class which handles:

- **Message Management**: Adding user and assistant messages to the chat
- **DOM Manipulation**: Updating the UI elements and managing interactions
- **User Input**: Processing text input and button clicks
- **Response Simulation**: Generating realistic assistant responses

### Key Components

- **Message System**: Distinct styling for user (blue) and assistant (gray) messages
- **Input Validation**: Prevents empty messages from being sent
- **Button States**: Dynamic enable/disable of send button based on input
- **Smooth Animations**: CSS transitions for message appearance and interactions

## Customization

### Adding New Responses

The assistant responses are stored in a predefined array. To add new responses:

1. Locate the `responses` array in the JavaScript code
2. Add new response strings to simulate different AI personalities or topics

### Styling

The application uses modern CSS features:

- **CSS Grid & Flexbox**: For responsive layouts
- **Custom Scrollbars**: Styled scrolling areas
- **CSS Animations**: Smooth transitions and hover effects
- **Mobile Breakpoints**: Responsive design at 768px

### Two Deployment Options

- **`index.html`**: Uses external CSS file (`styles.css`) - better for development
- **`standalone.html`**: Self-contained with inline CSS - better for single-file deployment

## Browser Compatibility

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Future Enhancements

- Integration with real AI APIs
- Message persistence with localStorage
- Typing indicators
- Message timestamps
- Theme customization
- Export chat history