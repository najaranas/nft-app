# 🎨 NFT Project - React Native App

A modern and elegant NFT marketplace mobile application built with React Native and Expo. This app showcases a collection of NFTs with detailed views, smooth navigation, and a beautiful user interface.

> ⚠️ **Warning:** This is my first React Native project, created during my early learning stage. Code structure and practices may not reflect professional standards, but it's a valuable milestone in my hands-on journey.


## 📱 Features

- **Welcome Screen**: Attractive onboarding experiencBe
- **NFT Gallery**: Browse through a curated collection of NFTs
- **Detailed Views**: View individual NFT details with high-quality images
- **Modern UI**: Clean and modern design with custom fonts
- **Responsive Design**: Optimized for different screen sizes
- **Navigation**: Smooth navigation between screens using React Navigation

## 🛠️ Tech Stack

- **Framework**: React Native with Expo
- **Navigation**: React Navigation v7
- **Icons**: FontAwesome icons
- **Fonts**: Inter font family (Regular, Medium, SemiBold, Bold, Light)
- **UI Components**: Custom components for reusable elements
- **State Management**: React hooks
- **Performance**: Optimized with FlashList for efficient scrolling

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or later)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- [Android Studio](https://developer.android.com/studio) (for Android development)
- [Xcode](https://developer.apple.com/xcode/) (for iOS development - macOS only)

## 🚀 Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/najaranas/nft-app.git
   cd nft-app
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

## 📱 Running the App

### 💻 Development Mode

```bash
# Start Expo development server
npm start

# Run on Android
npm run android

# Run on iOS
npm run ios

# Run on Web
npm run web
```

### 🏗️ Building for Production

```bash
# Build for Android
expo build:android

# Build for iOS
expo build:ios
```

## 📁 Project Structure

```
NFTProject/
├── assets/
│   ├── fonts/              # Custom Inter font files
│   └── images/             # NFT images and avatars
│       ├── nft01.jpg - nft12.jpg
│       └── avatars/
├── components/             # Reusable UI components
│   ├── Button.jsx
│   ├── CardBottomData.jsx
│   ├── CardImage.jsx
│   ├── CardMiddleData.jsx
│   ├── HomeHeader.jsx
│   ├── LikeIcon.jsx
│   ├── NFTCard.jsx
│   ├── NFTList.jsx
│   └── NFTNotFound.jsx
├── constants/              # App constants and data
│   ├── data.js            # NFT mock data
│   ├── index.js
│   └── theme.js           # Theme configuration
├── screens/                # App screens
│   ├── Home.jsx
│   ├── NFTDetails.jsx
│   └── Welcome.jsx
├── android/                # Android-specific files
└── App.js                  # Main app component
```

## 🎨 Key Components

### 🖥️ Screens

- **Welcome**: Onboarding screen with app introduction
- **Home**: Main screen displaying NFT collection grid
- **NFTDetails**: Detailed view of selected NFT

### 🧩 Components

- **NFTCard**: Individual NFT card component
- **NFTList**: List container for NFT cards
- **HomeHeader**: Header component with navigation
- **Button**: Reusable button component
- **LikeIcon**: Interactive like/favorite icon

## 📊 Dependencies

### ⚡ Core Dependencies

- `react-native`: ^0.76.5
- `expo`: ~52.0.23
- `@react-navigation/native`: ^7.0.14
- `@react-navigation/native-stack`: ^7.2.0

### 🎭 UI & Icons

- `@fortawesome/react-native-fontawesome`: ^0.3.2
- `@fortawesome/free-solid-svg-icons`: ^6.7.2
- `react-native-svg`: ^15.10.1

### ⚡ Performance

- `@shopify/flash-list`: 1.7.1

### 🔤 Fonts & Assets

- `expo-font`: ~13.0.2
- `expo-status-bar`: ~2.0.0

## 🎯 Features in Detail

### 🖼️ NFT Collection

The app includes a curated collection of 12 sample NFTs with:

- High-quality artwork images
- Artist avatars and information
- Pricing and collection details
- Like/favorite functionality

### 🧭 Navigation

- Stack-based navigation
- Smooth transitions between screens
- Header customization
- Back navigation support

### 🎨 Custom Styling

- Inter font family integration
- Consistent color scheme
- Responsive design patterns
- Modern UI/UX principles

## 🔧 Configuration

### 🤖 Android Configuration

- Target SDK: Check `android/app/build.gradle`
- Permissions: Defined in `android/app/src/main/AndroidManifest.xml`
- App icons and splash screens included

### ⚡ Expo Configuration

- App configuration in `app.json`
- Custom fonts and assets properly configured
- Status bar styling

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


## 🙏 Acknowledgments

- NFT artwork used for demonstration purposes
- Inter font family by Rasmus Andersson
- FontAwesome for icons
- React Native and Expo communities

## 📞 Support

If you have any questions or need help with setup, please open an issue or contact the maintainer.

---

## 🚀 Made with ❤️ by Najar Anas
