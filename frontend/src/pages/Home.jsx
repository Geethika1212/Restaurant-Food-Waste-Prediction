import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home">

      {/* Hero Section */}
      <section className="hero">

        <div className="hero-content">

          <div className="hero-badge">
            🌱 Smart Food Waste Management
          </div>

          <h1>
            Reduce Food Waste.
            <br />
            <span>Make Smarter Decisions.</span>
          </h1>

          <p>
            WasteWise uses Machine Learning and Data Mining to predict
            restaurant food waste and provide actionable recommendations
            for reducing waste, cost, and environmental impact.
          </p>

          <div className="hero-buttons">
            <Link to="/predict" className="primary-btn">
              Predict Food Waste →
            </Link>

            <Link to="/dashboard" className="secondary-btn">
              View Dashboard
            </Link>
          </div>

        </div>

        <div className="hero-card">

          <div className="food-icon">
            🍽️
          </div>

          <h3>Smart Waste Prediction</h3>

          <p>
            Analyze restaurant conditions and predict
            the amount of food likely to be wasted.
          </p>

          <div className="mini-stats">

            <div>
              <strong>ML</strong>
              <span>Prediction</span>
            </div>

            <div>
              <strong>DM</strong>
              <span>Insights</span>
            </div>

            <div>
              <strong>♻️</strong>
              <span>Reduction</span>
            </div>

          </div>

        </div>

      </section>

      {/* Features */}
      <section className="features">

        <div className="section-heading">
          <span>WHAT WASTEWISE DOES</span>
          <h2>From Data to Better Decisions</h2>
          <p>
            Transform restaurant data into useful insights that
            help reduce unnecessary food preparation.
          </p>
        </div>

        <div className="feature-grid">

          <div className="feature-card">
            <div className="feature-icon">🤖</div>
            <h3>Waste Prediction</h3>
            <p>
              Predict the expected amount of food waste using
              a Machine Learning model.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3>Data Mining Insights</h3>
            <p>
              Discover patterns and relationships hidden inside
              historical restaurant data.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">💡</div>
            <h3>Smart Recommendations</h3>
            <p>
              Receive practical recommendations to reduce
              overproduction and food waste.
            </p>
          </div>

        </div>

      </section>

    </div>
  );
}

export default Home;