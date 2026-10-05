import "./Recommendations.css";

function Recommendations() {
  return (
    <div className="recommendations-page">

      {/* ================= HERO ================= */}
      <section className="recommendations-hero">

        <div className="recommendations-label">
          FOOD WASTE REDUCTION
        </div>

        <h1>
          Practical Ways to Reduce Food Waste
        </h1>

        <p>
          Use the predicted food-waste level and restaurant operating
          conditions to make better preparation decisions, reduce
          unnecessary waste and save valuable resources.
        </p>

      </section>


      {/* ================= QUICK ACTIONS ================= */}
      <section className="recommendation-summary">

        <div className="recommendation-summary-card">

          <div className="recommendation-summary-icon">
            🍳
          </div>

          <div>
            <h3>Prepare Carefully</h3>

            <p>
              Adjust preparation quantities according to expected
              customer demand instead of preparing excessive food.
            </p>
          </div>

        </div>


        <div className="recommendation-summary-card">

          <div className="recommendation-summary-icon">
            📦
          </div>

          <div>
            <h3>Cook in Batches</h3>

            <p>
              Prepare food in smaller batches so that additional food
              can be prepared only when demand increases.
            </p>
          </div>

        </div>


        <div className="recommendation-summary-card">

          <div className="recommendation-summary-icon">
            ♻️
          </div>

          <div>
            <h3>Manage Surplus</h3>

            <p>
              Handle safe surplus food responsibly instead of allowing
              usable food to become unnecessary waste.
            </p>
          </div>

        </div>

      </section>


      {/* ================= RISK BASED RECOMMENDATIONS ================= */}
      <section className="risk-section">

        <div className="recommendation-heading">

          <span>
            RISK-BASED ACTIONS
          </span>

          <h2>
            What Should You Do?
          </h2>

          <p>
            Different waste levels require different preparation and
            management strategies.
          </p>

        </div>


        <div className="risk-grid">

          {/* LOW */}
          <div className="risk-card low-risk">

            <div className="risk-top">

              <div className="risk-icon">
                🟢
              </div>

              <div>
                <h3>
                  Low Waste Risk
                </h3>

                <span className="risk-status">
                  Efficient preparation
                </span>
              </div>

            </div>

            <p>
              Continue following the current preparation strategy while
              monitoring daily demand and waste.
            </p>

            <div className="risk-actions">

              <div>✓ Continue monitoring food demand</div>

              <div>✓ Maintain suitable preparation quantities</div>

              <div>✓ Record daily waste for future analysis</div>

            </div>

          </div>


          {/* MEDIUM */}
          <div className="risk-card medium-risk">

            <div className="risk-top">

              <div className="risk-icon">
                🟡
              </div>

              <div>
                <h3>
                  Medium Waste Risk
                </h3>

                <span className="risk-status">
                  Preparation needs attention
                </span>
              </div>

            </div>

            <p>
              Reduce unnecessary preparation and monitor customer demand
              more closely during the day.
            </p>

            <div className="risk-actions">

              <div>✓ Prepare food in smaller quantities</div>

              <div>✓ Monitor demand throughout the day</div>

              <div>✓ Avoid unnecessary overproduction</div>

            </div>

          </div>


          {/* HIGH */}
          <div className="risk-card high-risk">

            <div className="risk-top">

              <div className="risk-icon">
                🔴
              </div>

              <div>
                <h3>
                  High Waste Risk
                </h3>

                <span className="risk-status">
                  Immediate attention required
                </span>
              </div>

            </div>

            <p>
              Significantly reduce initial preparation and use demand
              monitoring and batch cooking to control excess food.
            </p>

            <div className="risk-actions">

              <div>✓ Reduce initial preparation quantity</div>

              <div>✓ Use smaller cooking batches</div>

              <div>✓ Monitor demand frequently</div>

              <div>✓ Safely manage suitable surplus food</div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= PREPARATION STRATEGIES ================= */}
      <section className="strategies-section">

        <div className="recommendation-heading">

          <span>
            PREPARATION STRATEGIES
          </span>

          <h2>
            Smarter Food Preparation
          </h2>

          <p>
            Simple changes in kitchen planning can significantly reduce
            unnecessary food preparation.
          </p>

        </div>


        <div className="strategies-grid">

          <div className="strategy-card">

            <div className="strategy-icon">
              📊
            </div>

            <h3>
              Plan According to Demand
            </h3>

            <p>
              Use expected meal demand and previous waste records when
              deciding how much food should be prepared.
            </p>

          </div>


          <div className="strategy-card">

            <div className="strategy-icon">
              🍲
            </div>

            <h3>
              Use Batch Cooking
            </h3>

            <p>
              Prepare food in smaller batches and increase preparation
              only when customer demand requires it.
            </p>

          </div>


          <div className="strategy-card">

            <div className="strategy-icon">
              ⏱️
            </div>

            <h3>
              Monitor During Service
            </h3>

            <p>
              Compare actual customer demand with prepared food and
              adjust further preparation accordingly.
            </p>

          </div>


          <div className="strategy-card">

            <div className="strategy-icon">
              🌡️
            </div>

            <h3>
              Consider Conditions
            </h3>

            <p>
              Consider environmental conditions and special occasions
              when planning the day's food preparation.
            </p>

          </div>

        </div>

      </section>


      {/* ================= KITCHEN MANAGEMENT ================= */}
      <section className="kitchen-section">

        <div className="kitchen-content">

          <div className="kitchen-heading">

            <span>
              KITCHEN MANAGEMENT
            </span>

            <h2>
              Build Better Waste-Reduction Habits
            </h2>

            <p>
              Consistent monitoring and good kitchen practices can help
              restaurants reduce avoidable food waste over time.
            </p>

          </div>


          <div className="kitchen-list">

            <div className="kitchen-item">

              <div className="kitchen-check">
                ✓
              </div>

              <div>
                <h3>
                  Record Daily Waste
                </h3>

                <p>
                  Maintain accurate records of leftover and discarded
                  food to identify recurring waste patterns.
                </p>
              </div>

            </div>


            <div className="kitchen-item">

              <div className="kitchen-check">
                ✓
              </div>

              <div>
                <h3>
                  Compare Preparation With Demand
                </h3>

                <p>
                  Review how much food was prepared compared with the
                  actual number of meals served.
                </p>
              </div>

            </div>


            <div className="kitchen-item">

              <div className="kitchen-check">
                ✓
              </div>

              <div>
                <h3>
                  Identify Repeated Waste
                </h3>

                <p>
                  Pay attention to dishes, days or conditions that
                  repeatedly result in higher waste.
                </p>
              </div>

            </div>


            <div className="kitchen-item">

              <div className="kitchen-check">
                ✓
              </div>

              <div>
                <h3>
                  Improve Preparation Decisions
                </h3>

                <p>
                  Use previous observations and predicted waste levels
                  to make future preparation decisions more carefully.
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= SURPLUS MANAGEMENT ================= */}
      <section className="surplus-section">

        <div className="surplus-icon">
          ♻️
        </div>

        <div className="surplus-content">

          <span>
            SURPLUS FOOD MANAGEMENT
          </span>

          <h2>
            Handle Suitable Surplus Responsibly
          </h2>

          <p>
            When safe and suitable surplus food remains, restaurants
            can consider responsible redistribution or other approved
            food-recovery practices instead of allowing usable food
            to become waste.
          </p>

          <div className="surplus-points">

            <div>
              ✓ Check food safety and quality before handling surplus
            </div>

            <div>
              ✓ Follow applicable food-safety requirements
            </div>

            <div>
              ✓ Prioritize safe and responsible redistribution
            </div>

          </div>

        </div>

      </section>


      {/* ================= FINAL MESSAGE ================= */}
      <section className="recommendation-footer">

        <div className="footer-icon">
          🌱
        </div>

        <h2>
          Every Small Reduction Matters
        </h2>

        <p>
          Better demand planning, careful preparation and responsible
          surplus management can help restaurants reduce food waste,
          save resources and operate more efficiently.
        </p>

      </section>

    </div>
  );
}

export default Recommendations;