

---

## 🚀 Key Features & React Hooks Implementation
- **`useState`**: Local component state for search query, category filter pills (`Municipal`, `Executive`, `Referendum`, `Council`, `State`), mobile menu toggle, ballot casting state (`registered`), and controlled login/registration forms.
- **`useEffect`**: Side effects handling for restoring voter sessions from `localStorage` on component mount and simulating asynchronous election data loading with loading spinners.
- **`useContext` & Context API**: Global authentication and ballot state management (`AuthContext` and `AuthProvider`) shared across all routes.
- **Custom Hook (`useAuth`)**: Clean context consumption across components without prop drilling.
- **Conditional Rendering**: Dynamic UI rendering for guest vs. authenticated voters, loading states, ballot confirmation receipts, and empty search results.

---

## 🛠️ Project Structure
```
src/
├── components/
│   ├── Button.jsx
│   ├── EventCard.jsx      # Election Card with useState & ballot status toggle
│   ├── Loading.jsx        # Animated spinner for async data loading
│   ├── Modal.jsx
│   └── Navbar.jsx         # Responsive navigation with conditional Auth rendering
├── context/
│   └── AuthContext.jsx    # React Context API with useState & useEffect
├── hooks/
│   └── useAuth.js         # Custom hook for useContext(AuthContext)
├── pages/
│   ├── AdminDashboard.jsx
│   ├── Events.jsx         # Elections catalog with search & category filter
│   ├── Home.jsx           # Landing page with core trust pillars
│   ├── Login.jsx          # Controlled form for voter authentication
│   ├── MyRegistrations.jsx# My Ballots & cryptographic receipts
│   └── Register.jsx       # Voter registration page
├── App.jsx                # Multi-page routing with React Router
├── main.jsx               # Root entry wrapped with AuthProvider
└── index.css              # Tailwind CSS styling
```

---

## 💻 How to Run Locally
1. Clone this repository:
   ```bash
   git clone https://github.com/pushparaj132006/CivicVote-OnlineVotingSystem.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:5173](http://localhost:5173) in your browser.
