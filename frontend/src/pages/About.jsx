import "./About.css";

function About() {
  return (
    <div className="about-page">

      {/* HERO SECTION */}
      <section className="about-hero">

        <div className="about-label">
          ABOUT WASTEWISE
        </div>

        <h1>
          Turning Food Waste Into
          <span> Smarter Decisions</span>
        </h1>

        <p>
          WasteWise helps restaurants understand and reduce food waste
          by using their daily operating information to estimate potential
          waste and identify practical ways to improve food preparation.
        </p>

      </section>


      {/* WHAT IS WASTEWISE */}
      <section className="about-section">

        <div className="about-card large-card">

          <div className="about-icon">
            🍽️
          </div>

          <div>
            <h2>What is WasteWise?</h2>

            <p>
              WasteWise is a restaurant food-waste prediction and reduction
              system designed to help restaurants make better food
              preparation decisions.
            </p>

            <p>
              By considering factors such as expected meals, kitchen staff,
              weather conditions, special events, previous food waste and
              staff experience, WasteWise estimates the amount of food that
              may be wasted.
            </p>

          </div>

        </div>

      </section>


      {/* THREE CARDS */}
      <section className="about-section">

        <div className="about-grid">

          <div className="about-card">

            <div className="about-icon">
              🎯
            </div>

            <h2>Our Goal</h2>

            <p>
              Help restaurants reduce unnecessary food preparation,
              minimize food waste and make more informed daily decisions.
            </p>

          </div>


          <div className="about-card">

            <div className="about-icon">
              📊
            </div>

            <h2>What We Analyze</h2>

            <p>
              WasteWise considers demand, kitchen conditions, weather,
              special events, previous waste and staff-related factors
              to understand possible waste patterns.
            </p>

          </div>


          <div className="about-card">

            <div className="about-icon">
              ♻️
            </div>

            <h2>Why It Matters</h2>

            <p>
              Reducing food waste can help restaurants save resources,
              control preparation costs and use available food more
              responsibly.
            </p>

          </div>

        </div>

      </section>


      {/* HOW IT HELPS */}
      <section className="about-section">

        <div className="about-heading">
          <div className="about-label">
            HOW WASTEWISE HELPS
          </div>

          <h2>
            From Prediction to Action
          </h2>

          <p>
            WasteWise turns restaurant information into useful insights
            that can support better food-waste management.
          </p>
        </div>


        <div className="process-grid">

          <div className="process-card">
            <div className="process-number">01</div>

            <h3>Provide Information</h3>

            <p>
              Enter the restaurant's expected meals, kitchen conditions,
              previous waste and other relevant information.
            </p>
          </div>


          <div className="process-card">
            <div className="process-number">02</div>

            <h3>Estimate Waste</h3>

            <p>
              WasteWise estimates the amount of food that may be wasted
              and determines the corresponding waste risk level.
            </p>
          </div>


          <div className="process-card">
            <div className="process-number">03</div>

            <h3>Take Action</h3>

            <p>
              Use the prediction and identified patterns to prepare food
              more carefully and reduce unnecessary waste.
            </p>
          </div>

        </div>

      </section>


      {/* BENEFITS */}
      <section className="benefits-section">

        <div className="benefits-content">

          <div className="about-label">
            OUR PURPOSE
          </div>

          <h2>
            Better Planning.
            <br />
            Less Waste.
            <br />
            Smarter Restaurants.
          </h2>

          <p>
            WasteWise aims to support restaurants in making practical,
            data-informed preparation decisions while encouraging
            responsible food management.
          </p>

        </div>

        <div className="benefits-list">

          <div className="benefit-item">
            <span>✓</span>
            <p>Reduce unnecessary food preparation</p>
          </div>

          <div className="benefit-item">
            <span>✓</span>
            <p>Understand food-waste patterns</p>
          </div>

          <div className="benefit-item">
            <span>✓</span>
            <p>Improve daily preparation decisions</p>
          </div>

          <div className="benefit-item">
            <span>✓</span>
            <p>Encourage responsible surplus management</p>
          </div>

        </div>

      </section>


      {/* FINAL MESSAGE */}
      <section className="about-footer">

        <div className="about-icon">
          🌱
        </div>

        <h2>
          Every Meal Counts.
        </h2>

        <p>
          Small improvements in food preparation can make a meaningful
          difference in reducing food waste.
        </p>

      </section>

    </div>
  );
}

export default About;