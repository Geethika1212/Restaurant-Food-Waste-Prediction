import { useState } from "react";
import "./Predict.css";

function Predict() {
  const [formData, setFormData] = useState({
    meals_served: "",
    kitchen_staff: "",
    temperature_C: "",
    humidity_percent: "",
    day_of_week: "",
    special_event: "0",
    past_waste_kg: "",
    staff_experience: "intermediate",
  });

  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // =====================================================
  // HANDLE INPUT CHANGE
  // =====================================================

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // =====================================================
  // PREDICT FOOD WASTE
  // =====================================================

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setResult(null);

    // Basic validation
    if (
      !formData.meals_served ||
      !formData.kitchen_staff ||
      !formData.temperature_C ||
      !formData.humidity_percent ||
      !formData.day_of_week ||
      !formData.past_waste_kg
    ) {
      setError("Please fill in all required fields.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("https://restaurant-food-waste-prediction.onrender.com/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          meals_served: Number(formData.meals_served),
          kitchen_staff: Number(formData.kitchen_staff),
          temperature_C: Number(formData.temperature_C),
          humidity_percent: Number(formData.humidity_percent),
          day_of_week: Number(formData.day_of_week),
          special_event: Number(formData.special_event),
          past_waste_kg: Number(formData.past_waste_kg),
          staff_experience: formData.staff_experience,
        }),
      });

      if (!response.ok) {
        throw new Error("Unable to get prediction.");
      }

      const data = await response.json();

      setResult(data);
    } catch (err) {
      console.error(err);

      setError(
        "Unable to calculate the prediction. Please make sure the prediction service is running and try again."
      );
    } finally {
      setLoading(false);
    }
  };

  // =====================================================
  // RESET FORM
  // =====================================================

  const handleReset = () => {
    setFormData({
      meals_served: "",
      kitchen_staff: "",
      temperature_C: "",
      humidity_percent: "",
      day_of_week: "",
      special_event: "0",
      past_waste_kg: "",
      staff_experience: "intermediate",
    });

    setResult(null);
    setError("");
  };

  // =====================================================
  // RISK CLASS
  // =====================================================

  const getRiskClass = () => {
    if (!result) return "";

    if (result.risk_level === "LOW") {
      return "risk-low";
    }

    if (result.risk_level === "MEDIUM") {
      return "risk-medium";
    }

    return "risk-high";
  };

  return (
    <div className="predict-page">

      {/* =================================================
          PAGE HEADER
      ================================================= */}

      <section className="predict-header">

        <div>
          <p className="page-label">FOOD WASTE PREDICTION</p>

          <h1>Predict Today's Food Waste</h1>

          <p>
            Enter the restaurant's current operating details to estimate
            how much food may be wasted and understand the level of waste risk.
          </p>
        </div>

      </section>


      {/* =================================================
          MAIN CONTENT
      ================================================= */}

      <div className="predict-container">

        {/* =================================================
            INPUT FORM
        ================================================= */}

        <div className="prediction-form-card">

          <div className="card-heading">
            <div className="heading-icon">🍽️</div>

            <div>
              <h2>Restaurant Details</h2>

              <p>
                Provide today's information to get a food waste estimate.
              </p>
            </div>
          </div>


          <form onSubmit={handleSubmit}>

            {/* ROW 1 */}

            <div className="form-row">

              <div className="form-group">

                <label>
                  Meals Expected to be Served
                  <span>*</span>
                </label>

                <input
                  type="number"
                  name="meals_served"
                  value={formData.meals_served}
                  onChange={handleChange}
                  placeholder="Example: 300"
                  min="1"
                />

                <small>
                  Approximate number of meals expected today.
                </small>

              </div>


              <div className="form-group">

                <label>
                  Kitchen Staff
                  <span>*</span>
                </label>

                <input
                  type="number"
                  name="kitchen_staff"
                  value={formData.kitchen_staff}
                  onChange={handleChange}
                  placeholder="Example: 12"
                  min="1"
                />

                <small>
                  Number of staff preparing food.
                </small>

              </div>

            </div>


            {/* ROW 2 */}

            <div className="form-row">

              <div className="form-group">

                <label>
                  Temperature (°C)
                  <span>*</span>
                </label>

                <input
                  type="number"
                  name="temperature_C"
                  value={formData.temperature_C}
                  onChange={handleChange}
                  placeholder="Example: 25"
                  step="0.1"
                />

                <small>
                  Approximate temperature today.
                </small>

              </div>


              <div className="form-group">

                <label>
                  Humidity (%)
                  <span>*</span>
                </label>

                <input
                  type="number"
                  name="humidity_percent"
                  value={formData.humidity_percent}
                  onChange={handleChange}
                  placeholder="Example: 60"
                  min="0"
                  max="100"
                  step="0.1"
                />

                <small>
                  Current approximate humidity.
                </small>

              </div>

            </div>


            {/* ROW 3 */}

            <div className="form-row">

              <div className="form-group">

                <label>
                  Day of the Week
                  <span>*</span>
                </label>

                <select
                  name="day_of_week"
                  value={formData.day_of_week}
                  onChange={handleChange}
                >

                  <option value="">
                    Select day
                  </option>

                  <option value="0">Sunday</option>

                  <option value="1">Monday</option>

                  <option value="2">Tuesday</option>

                  <option value="3">Wednesday</option>

                  <option value="4">Thursday</option>

                  <option value="5">Friday</option>

                  <option value="6">Saturday</option>

                </select>

                <small>
                  Select the day for which you want the estimate.
                </small>

              </div>


              <div className="form-group">

                <label>
                  Special Event
                </label>

                <select
                  name="special_event"
                  value={formData.special_event}
                  onChange={handleChange}
                >

                  <option value="0">
                    No
                  </option>

                  <option value="1">
                    Yes
                  </option>

                </select>

                <small>
                  Select Yes if there is a festival, event or special occasion.
                </small>

              </div>

            </div>


            {/* ROW 4 */}

            <div className="form-row">

              <div className="form-group">

                <label>
                  Previous Food Waste (kg)
                  <span>*</span>
                </label>

                <input
                  type="number"
                  name="past_waste_kg"
                  value={formData.past_waste_kg}
                  onChange={handleChange}
                  placeholder="Example: 35"
                  min="0"
                  step="0.1"
                />

                <small>
                  Food waste recorded from a previous day.
                </small>

              </div>


              <div className="form-group">

                <label>
                  Kitchen Staff Experience
                </label>

                <select
                  name="staff_experience"
                  value={formData.staff_experience}
                  onChange={handleChange}
                >

                  <option value="beginner">
                    Beginner
                  </option>

                  <option value="intermediate">
                    Intermediate
                  </option>

                  <option value="experienced">
                    Experienced
                  </option>

                </select>

                <small>
                  Choose the general experience level of the kitchen staff.
                </small>

              </div>

            </div>


            {/* ERROR */}

            {error && (
              <div className="error-message">
                ⚠️ {error}
              </div>
            )}


            {/* BUTTONS */}

            <div className="form-actions">

              <button
                type="button"
                className="reset-button"
                onClick={handleReset}
              >
                Clear
              </button>

              <button
                type="submit"
                className="predict-button"
                disabled={loading}
              >

                {loading ? (
                  <>
                    <span className="loader"></span>
                    Calculating...
                  </>
                ) : (
                  <>
                    🔍 Predict Food Waste
                  </>
                )}

              </button>

            </div>

          </form>

        </div>


        {/* =================================================
            RESULT SECTION
        ================================================= */}

        <div className="result-card">

          {!result && !loading && (

            <div className="result-empty">

              <div className="empty-icon">
                📊
              </div>

              <h2>Your Prediction</h2>

              <p>
                Enter the restaurant details and click
                <strong> Predict Food Waste </strong>
                to see the estimated waste and risk level.
              </p>

              <div className="empty-info">

                <div>
                  <span>♻️</span>
                  <p>Estimated waste</p>
                </div>

                <div>
                  <span>📈</span>
                  <p>Waste percentage</p>
                </div>

                <div>
                  <span>⚠️</span>
                  <p>Risk level</p>
                </div>

              </div>

            </div>

          )}


          {loading && (

            <div className="result-loading">

              <div className="big-loader"></div>

              <h2>Calculating Food Waste...</h2>

              <p>
                Analyzing the information you entered.
              </p>

            </div>

          )}


          {result && !loading && (

            <div className="result-content">

              <div className="result-title">

                <span>📊</span>

                <div>
                  <h2>Prediction Result</h2>

                  <p>
                    Estimated food waste for the given conditions
                  </p>
                </div>

              </div>


              {/* MAIN RESULT */}

              <div className="main-waste-result">

                <p>Estimated Food Waste</p>

                <h3>
                  {result.predicted_food_waste_kg}
                  <span> kg</span>
                </h3>

              </div>


              {/* RESULT STATS */}

              <div className="result-stats">

                <div className="result-stat">

                  <span className="stat-icon">
                    📈
                  </span>

                  <div>
                    <p>Waste Percentage</p>

                    <strong>
                      {result.waste_percentage}%
                    </strong>
                  </div>

                </div>


                <div className="result-stat">

                  <span className="stat-icon">
                    ⚠️
                  </span>

                  <div>
                    <p>Waste Risk</p>

                    <strong className={getRiskClass()}>
                      {result.risk_level}
                    </strong>
                  </div>

                </div>

              </div>


              {/* WASTE BAR */}

              <div className="waste-meter">

                <div className="meter-header">

                  <span>Waste Level</span>

                  <strong>
                    {result.waste_percentage}%
                  </strong>

                </div>

                <div className="meter-track">

                  <div
                    className={`meter-fill ${getRiskClass()}`}
                    style={{
                      width: `${Math.min(
                        result.waste_percentage,
                        100
                      )}%`,
                    }}
                  ></div>

                </div>

                <div className="meter-labels">
                  <span>Low</span>
                  <span>Medium</span>
                  <span>High</span>
                </div>

              </div>


              {/* RECOMMENDATION */}

              <div className={`recommendation-box ${getRiskClass()}`}>

                <div className="recommendation-icon">
                  💡
                </div>

                <div>

                  <h3>
                    What should you do?
                  </h3>

                  <p>
                    {result.recommendation}
                  </p>

                </div>

              </div>


              {/* SUCCESS MESSAGE */}

              {result.database_saved && (

                <div className="saved-message">
                  ✓ Prediction recorded successfully.
                </div>

              )}

            </div>

          )}

        </div>

      </div>


      {/* =================================================
          HELPFUL INFORMATION
      ================================================= */}

      <section className="prediction-help">

        <div className="help-card">

          <span>💡</span>

          <div>

            <h3>Why does this matter?</h3>

            <p>
              Knowing the expected food waste before preparation
              can help restaurants plan quantities more carefully,
              reduce unnecessary preparation and save food and money.
            </p>

          </div>

        </div>


        <div className="help-card">

          <span>♻️</span>

          <div>

            <h3>How to reduce waste?</h3>

            <p>
              When the predicted risk is high, consider preparing
              food in smaller batches, monitoring demand and safely
              managing any surplus food.
            </p>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Predict;