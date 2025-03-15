# Pokedex App  

This is a **Pokedex App** built with **React Native** that allows users to:  
✅ View detailed information about Pokémon  
✅ Filter Pokémon based on their type  
✅ Mark Pokémon as favorites for quick access  

---

## 🚀 Getting Started  

Follow the steps below to set up and run the project locally.  

---

### 1. Clone the Repository  

```sh
git clone https://github.com/Shuvadeep002/Pokedex2_1.git
cd Pokedex2
```

---

### 2. Install Dependencies  

Make sure you have Node.js installed. Then, install the dependencies using npm or Yarn:  

```sh
# Using npm
npm install

# OR using Yarn
yarn install
```

---

### 3. Start Metro  

Metro is the JavaScript bundler for React Native. Start Metro using the following command:  

```sh
# Using npm
npm start

# OR using Yarn
yarn start
```

---

### 4. Run the App  

Use one of the following commands to run the app on Android or iOS:  

#### **Android**  

```sh
# Using npm
npm run android

# OR using Yarn
yarn android
```

#### **iOS**  

Make sure to install CocoaPods dependencies first:  

```sh
# Install CocoaPods
cd ios
pod install
```

Then, run:  

```sh
# Using npm
npm run ios

# OR using Yarn
yarn ios
```

---

## ✨ Features  

### 🐾 **View Pokémon Details**  
- Browse through a list of Pokémon fetched from the [PokeAPI](https://pokeapi.co).  
- Tap on a Pokémon to see detailed information like stats, abilities, and moves.  

### 🔍 **Filter Pokémon by Type**  
- Easily filter Pokémon based on their type (e.g., Fire, Water, Grass).  

### ⭐ **Favorite Pokémon**  
- Mark Pokémon as favorites and access them quickly from a dedicated list.  

---

## 📂 Project Structure  

```
pokedex-app
├── src
│   ├── assets          # Images, icons, etc.
│   ├── components      # Reusable components
│   ├── navigation      # Navigation setup
│   ├── redux           # State management with Redux
│   ├── screens         # App screens (Home, Details, Favorites, etc.)
│   ├── services        # API calls and related functions
│   └── utils           # Helper functions
├── App.tsx             # Main App file
├── package.json        # Project dependencies and scripts
└── README.md           # Project documentation
```

---

## 📡 API Reference  

This app uses the [PokeAPI](https://pokeapi.co) to fetch Pokémon data.  

### Example API Endpoints:  
- **Get All Pokémon:** `https://pokeapi.co/api/v2/pokemon?offset=0&limit=20`  
- **Get Pokémon Details:** `https://pokeapi.co/api/v2/pokemon/{id}`  
- **Get Pokémon Types:** `https://pokeapi.co/api/v2/type`  

---

## 🛠️ Troubleshooting  

If you encounter any issues while setting up or running the app, try the following:  

- Ensure you have installed all dependencies correctly.  
- If the port is in use, stop any running processes using port `8081`:  
```sh
npx kill-port 8081
```
- Clear Metro's cache:  
```sh
npm start -- --reset-cache
```

---
  
