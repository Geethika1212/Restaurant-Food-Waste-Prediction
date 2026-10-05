import "./Insights.css";

function Insights() {
  return (
    <div className="insights-page">

      {/* ================= HERO ================= */}
      <section className="insights-hero">

        <div className="hero-label">
          DATA MINING INSIGHTS
        </div>

        <h1>
          Understand Your Food Waste Patterns
        </h1>

        <p>
          Explore the factors that influence food waste in restaurants
          and identify patterns that can help reduce unnecessary
          preparation and improve food management.
        </p>

      </section>


      {/* ================= OVERVIEW CARDS ================= */}
      <section className="insight-summary">

        <div className="insight-summary-card">
          <div className="summary-icon">🍽️</div>

          <div>
            <h3>Demand Patterns</h3>
            <p>
              Compare expected meals with previous food waste to
              understand demand-related waste patterns.
            </p>
          </div>
        </div>


        <div className="insight-summary-card">
          <div className="summary-icon">🌡️</div>

          <div>
            <h3>Weather Influence</h3>
            <p>
              Examine how temperature and humidity can influence
              food preparation and waste.
            </p>
          </div>
        </div>


        <div className="insight-summary-card">
          <div className="summary-icon">👨‍🍳</div>

          <div>
            <h3>Kitchen Factors</h3>
            <p>
              Study the relationship between kitchen staffing,
              experience and food waste.
            </p>
          </div>
        </div>

      </section>


      {/* ================= DATA MINING METHODS ================= */}
      <section className="mining-section">

        <div className="section-heading">

          <span>DATA MINING ANALYSIS</span>

          <h2>
            Discover Hidden Patterns
          </h2>

          <p>
            WasteWise analyzes restaurant information to discover
            useful patterns and support better food preparation decisions.
          </p>

        </div>


        <div className="mining-grid">

          {/* K-MEANS */}
          <div className="mining-card">

            <div className="mining-icon">
              🎯
            </div>

            <div>

              <h3>
                Waste Pattern Clustering
              </h3>

              <p>
                Restaurants and operating conditions can be grouped
                according to similar food-waste behavior.
              </p>

              <div className="analysis-points">

                <div>
                  <span>•</span>
                  Low waste conditions
                </div>

                <div>
                  <span>•</span>
                  Moderate waste conditions
                </div>

                <div>
                  <span>•</span>
                  High waste conditions
                </div>

              </div>

              <div className="method-tag">
                Pattern-based analysis
              </div>

            </div>

          </div>


          {/* ASSOCIATION RULES */}
          <div className="mining-card">

            <div className="mining-icon">
              🔗
            </div>

            <div>

              <h3>
                Food Waste Associations
              </h3>

              <p>
                Related restaurant conditions can be analyzed to
                identify combinations that frequently occur with
                higher food waste.
              </p>

              <div className="analysis-points">

                <div>
                  <span>•</span>
                  Demand and waste
                </div>

                <div>
                  <span>•</span>
                  Special events and preparation
                </div>

                <div>
                  <span>•</span>
                  Weather and waste patterns
                </div>

              </div>

              <div className="method-tag">
                Association analysis
              </div>

            </div>

          </div>


          {/* PATTERN ANALYSIS */}
          <div className="mining-card">

            <div className="mining-icon">
              📈
            </div>

            <div>

              <h3>
                Waste Trend Analysis
              </h3>

              <p>
                Historical restaurant records can be examined to
                identify recurring changes in food waste.
              </p>

              <div className="analysis-points">

                <div>
                  <span>•</span>
                  Daily waste patterns
                </div>

                <div>
                  <span>•</span>
                  Demand-related changes
                </div>

                <div>
                  <span>•</span>
                  Previous waste behavior
                </div>

              </div>

              <div className="method-tag">
                Historical analysis
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= FACTOR ANALYSIS ================= */}
      <section className="factor-section">

        <div className="section-heading">

          <span>WASTE FACTORS</span>

          <h2>
            What Can Influence Food Waste?
          </h2>

          <p>
            WasteWise considers multiple restaurant conditions before
            estimating the amount of food that may be wasted.
          </p>

        </div>


        <div className="factor-grid">

          <div className="factor-card">

            <div className="factor-number">
              01
            </div>

            <div>
              <h3>Meals Served</h3>

              <p>
                The expected number of meals is an important indicator
                of how much food needs to be prepared.
              </p>
            </div>

          </div>


          <div className="factor-card">

            <div className="factor-number">
              02
            </div>

            <div>
              <h3>Kitchen Staff</h3>

              <p>
                The number of staff members involved in food preparation
                can influence preparation capacity.
              </p>
            </div>

          </div>


          <div className="factor-card">

            <div className="factor-number">
              03
            </div>

            <div>
              <h3>Temperature</h3>

              <p>
                Temperature conditions can be considered when analyzing
                restaurant food-waste behavior.
              </p>
            </div>

          </div>


          <div className="factor-card">

            <div className="factor-number">
              04
            </div>

            <div>
              <h3>Humidity</h3>

              <p>
                Humidity is another environmental condition considered
                during waste analysis.
              </p>
            </div>

          </div>


          <div className="factor-card">

            <div className="factor-number">
              05
            </div>

            <div>
              <h3>Special Events</h3>

              <p>
                Festivals, occasions and special events can change
                normal restaurant demand and preparation patterns.
              </p>
            </div>

          </div>


          <div className="factor-card">

            <div className="factor-number">
              06
            </div>

            <div>
              <h3>Previous Waste</h3>

              <p>
                Previous food-waste records provide useful information
                about recurring waste behavior.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* ================= PATTERN FLOW ================= */}
      <section className="pattern-section">

        <div className="pattern-content">

          <div className="pattern-text">

            <span className="section-label">
              HOW INSIGHTS ARE GENERATED
            </span>

            <h2>
              From Restaurant Data to Useful Decisions
            </h2>

            <p>
              Historical restaurant information can be examined to
              identify meaningful relationships between demand,
              operating conditions and food waste.
            </p>

          </div>


          <div className="pattern-flow">

            <div className="flow-item">

              <div className="flow-icon">
                📋
              </div>

              <h3>
                Restaurant Data
              </h3>

              <p>
                Meals, staff, weather, events and previous waste
              </p>

            </div>


            <div className="flow-arrow">
              →
            </div>


            <div className="flow-item">

              <div className="flow-icon">
                🔎
              </div>

              <h3>
                Pattern Discovery
              </h3>

              <p>
                Find relationships and recurring waste patterns
              </p>

            </div>


            <div className="flow-arrow">
              →
            </div>


            <div className="flow-item">

              <div className="flow-icon">
                💡
              </div>

              <h3>
                Actionable Insight
              </h3>

              <p>
                Support better preparation and waste reduction
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================= KEY TAKEAWAY ================= */}
      <section className="takeaway-section">

        <div className="takeaway-icon">
          💡
        </div>

        <div>

          <h2>
            Why These Insights Matter
          </h2>

          <p>
            Understanding food-waste patterns can help restaurants
            prepare food more carefully, reduce unnecessary
            overproduction and make better use of available resources.
          </p>

        </div>

      </section>

    </div>
  );
}

export default Insights;