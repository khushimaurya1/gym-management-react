import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Members from './components/Members';
import './App.css';

function Home() {
  const [totalMembers, setTotalMembers] = useState(150);
  return (
    <div>
      <section className="hero">
        <div className="hero-content">
          <h1>Transform Your Body</h1>
          <p>Join our gym and start your fitness journey today.</p>
          <p>Total Members: <strong>{totalMembers}</strong></p>
          <button 
            className="btn-primary"
            onClick={() => setTotalMembers(totalMembers + 1)}
          >
            Join Now (+1 Member)
          </button>
        </div>
      </section>
    </div>
  );
}

function Dashboard() {
  return (
    <section className="section">
      <h2 className="section-title">Gym Dashboard</h2>
      <div className="dashboard-cards">
        <div className="card">
          <h3>Total Members</h3>
          <p>150</p>
        </div>
        <div className="card">
          <h3>Active Plans</h3>
          <p>85</p>
        </div>
        <div className="card">
          <h3>Today's Attendance</h3>
          <p>42</p>
        </div>
      </div>
    </section>
  );
}

function Plans() {
  return (
    <section className="section">
      <h2 className="section-title">Membership Plans</h2>
      <div className="plans-container">
        <div className="plan-card">
          <h3>Basic</h3>
          <p>Access to gym floor</p>
          <p className="price">₹799 / month</p>
        </div>
        <div className="plan-card">
          <h3>Standard</h3>
          <p>Gym + Group Classes</p>
          <p className="price">₹1199 / month</p>
        </div>
        <div className="plan-card">
          <h3>Premium</h3>
          <p>All access + Personal Trainer</p>
          <p className="price">₹1999 / month</p>
        </div>
      </div>
    </section>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navbar */}
        <header className="navbar">
          <div className="logo">FitZone Gym</div>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/plans">Plans</Link>
            <Link to="/members">Members</Link>
          </nav>
        </header>

        {/* Main Content */}
        <main style={{ paddingTop: '70px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/plans" element={<Plans />} />
            <Route path="/members" element={<Members />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
