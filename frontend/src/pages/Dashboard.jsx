import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard-page">

      {/* ================= HEADER ================= */}

      <div className="dashboard-header">
        <div>
          <span className="dashboard-label">WASTEWISE OVERVIEW</span>

          <h1>Food Waste Dashboard</h1>

          <p>
            Monitor food waste patterns, understand important factors,
            and make better food preparation decisions.
          </p>
        </div>
      </div>


      {/* ================= SUMMARY CARDS ================= */}

      <div className="dashboard-cards">

        {/* TOTAL RECORDS */}

        <div className="dashboard-card">
          <div className="card-icon">
            📋
          </div>

          <div>
            <h3>Records Analyzed</h3>

            <p className="card-number">
              911
            </p>

            <span>Restaurant records</span>
          </div>
        </div>


        {/* LATEST WASTE */}

        <div className="dashboard-card">
          <div className="card-icon">
            ♻️
          </div>

          <div>
            <h3>Predicted Waste</h3>

            <p className="card-number">
              44.72 kg
            </p>

            <span>Latest prediction</span>
          </div>
        </div>


        {/* WASTE PERCENTAGE */}

        <div className="dashboard-card">
          <div className="card-icon">
            📊
          </div>

          <div>
            <h3>Waste Percentage</h3>

            <p className="card-number">
              14.91%
            </p>

            <span>Latest prediction</span>
          </div>
        </div>


        {/* RISK */}

        <div className="dashboard-card">
          <div className="card-icon risk-icon">
            ⚠️
          </div>

          <div>
            <h3>Current Risk</h3>

            <p className="card-number risk-high">
              HIGH
            </p>

            <span>Requires attention</span>
          </div>
        </div>

      </div>


      {/* ================= MAIN GRID ================= */}

      <div className="dashboard-grid">


        {/* ================= WASTE OVERVIEW ================= */}

        <div className="dashboard-panel">

          <div className="panel-header">

            <div>
              <h2>Waste Overview</h2>

              <p className="panel-subtitle">
                Latest estimated food waste level
              </p>
            </div>

            <span className="status-badge">
              High Risk
            </span>

          </div>


          <div className="waste-overview">


            {/* WASTE CIRCLE */}

            <div className="waste-circle">

              <div>

                <strong>
                  14.91%
                </strong>

                <small>
                  Waste
                </small>

              </div>

            </div>


            {/* OVERVIEW TEXT */}

            <div className="overview-text">

              <h3>
                High Food Waste Risk
              </h3>

              <p>
                The latest prediction indicates that approximately
                <strong> 44.72 kg </strong>
                of food may be wasted from the expected meals.
              </p>

              <div className="risk-indicator">

                <span className="risk-dot"></span>

                Immediate attention recommended

              </div>

            </div>

          </div>

        </div>


        {/* ================= QUICK ACTIONS ================= */}

        <div className="dashboard-panel">

          <div className="panel-header">

            <div>
              <h2>Quick Actions</h2>

              <p className="panel-subtitle">
                Explore WasteWise
              </p>
            </div>

          </div>


          <div className="quick-actions">

            <a
              href="/predict"
              className="action-button"
            >
              <span>🔮</span>

              <div>
                <strong>Predict Food Waste</strong>

                <small>
                  Estimate today's expected waste
                </small>
              </div>

              <b>→</b>
            </a>


            <a
              href="/insights"
              className="action-button"
            >
              <span>📈</span>

              <div>
                <strong>View Insights</strong>

                <small>
                  Explore waste patterns
                </small>
              </div>

              <b>→</b>
            </a>


            <a
              href="/recommendations"
              className="action-button"
            >
              <span>💡</span>

              <div>
                <strong>View Recommendations</strong>

                <small>
                  Learn how to reduce waste
                </small>
              </div>

              <b>→</b>
            </a>

          </div>

        </div>

      </div>


      {/* ================= DATA MINING SUMMARY ================= */}

      <div className="analysis-section">

        <div className="section-heading">

          <span>
            DATA ANALYSIS
          </span>

          <h2>
            What the Data Reveals
          </h2>

          <p>
            The restaurant records were analyzed to identify
            relationships and patterns associated with food waste.
          </p>

        </div>


        <div className="analysis-cards">


          {/* DEMAND */}

          <div className="analysis-card">

            <div className="analysis-icon">
              🍽️
            </div>

            <h3>
              Demand Patterns
            </h3>

            <p>
              The number of meals expected to be served is an
              important factor when estimating the amount of food
              that may remain unused.
            </p>

          </div>


          {/* PREVIOUS WASTE */}

          <div className="analysis-card">

            <div className="analysis-icon">
              ♻️
            </div>

            <h3>
              Previous Waste
            </h3>

            <p>
              Previous food-waste levels provide useful information
              for understanding recurring waste patterns.
            </p>

          </div>


          {/* WEATHER */}

          <div className="analysis-card">

            <div className="analysis-icon">
              🌡️
            </div>

            <h3>
              Weather Conditions
            </h3>

            <p>
              Temperature and humidity are included to examine how
              environmental conditions can influence food preparation
              and waste.
            </p>

          </div>


          {/* KITCHEN */}

          <div className="analysis-card">

            <div className="analysis-icon">
              👨‍🍳
            </div>

            <h3>
              Kitchen Factors
            </h3>

            <p>
              Kitchen staffing and staff experience are considered
              when studying restaurant food-waste behavior.
            </p>

          </div>

        </div>

      </div>


      {/* ================= PATTERN SUMMARY ================= */}

      <div className="pattern-panel">

        <div className="pattern-header">

          <div>

            <span>
              PATTERN ANALYSIS
            </span>

            <h2>
              Important Waste Patterns
            </h2>

          </div>

          <div className="pattern-icon">
            📊
          </div>

        </div>


        <div className="pattern-list">


          <div className="pattern-item">

            <div className="pattern-number">
              01
            </div>

            <div>

              <h3>
                Demand and Waste
              </h3>

              <p>
                Higher meal demand can be associated with increased
                food preparation and therefore greater potential waste.
              </p>

            </div>

          </div>


          <div className="pattern-item">

            <div className="pattern-number">
              02
            </div>

            <div>

              <h3>
                Previous Waste Matters
              </h3>

              <p>
                Previous waste levels can help identify recurring
                preparation and demand patterns.
              </p>

            </div>

          </div>


          <div className="pattern-item">

            <div className="pattern-number">
              03
            </div>

            <div>

              <h3>
                Multiple Factors Influence Waste
              </h3>

              <p>
                Food waste is influenced by a combination of demand,
                weather, staffing, special events and previous waste.
              </p>

            </div>

          </div>

        </div>

      </div>


      {/* ================= INFORMATION ================= */}

      <div className="dashboard-info">

        <div className="info-heading">

          <span>
            WASTEWISE
          </span>

          <h2>
            From Prediction to Action
          </h2>

          <p>
            WasteWise helps restaurants understand expected food
            waste before preparation decisions are made.
          </p>

        </div>


        <div className="info-items">


          <div>

            <span>
              🔮
            </span>

            <h3>
              Predict
            </h3>

            <p>
              Estimate the amount of food that may be wasted.
            </p>

          </div>


          <div>

            <span>
              📊
            </span>

            <h3>
              Understand
            </h3>

            <p>
              Explore patterns and factors related to food waste.
            </p>

          </div>


          <div>

            <span>
              🌱
            </span>

            <h3>
              Reduce
            </h3>

            <p>
              Use the findings to make better preparation decisions.
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;