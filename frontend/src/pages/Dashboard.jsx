import React,{useEffect,useState} from "react";
import {Link} from "react-router-dom";
import "./Dashboard.css";

function Dashboard(){
const [predictions,setPredictions]=useState([]);

useEffect(()=>{
const savedPredictions=JSON.parse(localStorage.getItem("wasteWisePredictions")||"[]");
setPredictions(savedPredictions);
},[]);

const totalPredictions=predictions.length;

const averageWaste=totalPredictions>0
? predictions.reduce((sum,item)=>sum+Number(item.predicted_food_waste_kg||0),0)/totalPredictions
:0;

const highRiskCount=predictions.filter(
item=>String(item.risk_level).toUpperCase()==="HIGH"
).length;

const latestPrediction=predictions.length>0
? predictions[predictions.length-1]
:null;

const latestWaste=latestPrediction
? Number(latestPrediction.predicted_food_waste_kg||0)
:0;

const latestPercentage=latestPrediction
? Number(latestPrediction.waste_percentage||0)
:0;

const latestRisk=latestPrediction
? latestPrediction.risk_level
:"NO DATA";

const lowRiskCount=predictions.filter(
item=>String(item.risk_level).toUpperCase()==="LOW"
).length;

const mediumRiskCount=predictions.filter(
item=>String(item.risk_level).toUpperCase()==="MEDIUM"
).length;

const historicalRecords=911;

const getRiskClass=(risk)=>{
const value=String(risk).toUpperCase();

if(value==="HIGH") return "high";
if(value==="MEDIUM") return "medium";
if(value==="LOW") return "low";

return "none";
};

const maxWaste=Math.max(
...predictions.map(item=>Number(item.predicted_food_waste_kg||0)),
1
);

return(
<div className="dashboard-page">

<div className="dashboard-header">
<div>
<p className="dashboard-label">WASTEWISE OVERVIEW</p>
<h1>Food Waste Dashboard</h1>
<p className="dashboard-description">
Monitor restaurant food waste predictions, identify high-risk situations,
and make better food preparation decisions.
</p>
</div>
</div>

<div className="dashboard-cards">

<div className="dashboard-card">
<div className="card-icon">📊</div>
<div>
<p className="card-title">Records Analyzed</p>
<h2>{historicalRecords}</h2>
<p className="card-subtitle">Historical dataset records</p>
</div>
</div>

<div className="dashboard-card">
<div className="card-icon">🔮</div>
<div>
<p className="card-title">Total Predictions</p>
<h2>{totalPredictions}</h2>
<p className="card-subtitle">Predictions made by you</p>
</div>
</div>

<div className="dashboard-card">
<div className="card-icon">♻️</div>
<div>
<p className="card-title">Average Waste</p>
<h2>{averageWaste.toFixed(2)} kg</h2>
<p className="card-subtitle">Average predicted waste</p>
</div>
</div>

<div className="dashboard-card">
<div className="card-icon">⚠️</div>
<div>
<p className="card-title">High Risk</p>
<h2>{highRiskCount}</h2>
<p className="card-subtitle">High-risk predictions</p>
</div>
</div>

</div>

<div className="dashboard-main-grid">

<div className="dashboard-section waste-overview">

<div className="section-heading">
<div>
<h2>Latest Prediction</h2>
<p>Your most recent food waste prediction</p>
</div>

<span className={`risk-badge ${getRiskClass(latestRisk)}`}>
{latestRisk}
</span>
</div>

{latestPrediction ?(
<div className="latest-prediction">

<div className="waste-circle">
<div className="waste-circle-inner">
<strong>{latestPercentage.toFixed(2)}%</strong>
<span>Waste</span>
</div>
</div>

<div className="latest-details">

<div className="latest-detail">
<span>Predicted Waste</span>
<strong>{latestWaste.toFixed(2)} kg</strong>
</div>

<div className="latest-detail">
<span>Meals Served</span>
<strong>{latestPrediction.meals_served}</strong>
</div>

<div className="latest-detail">
<span>Kitchen Staff</span>
<strong>{latestPrediction.kitchen_staff}</strong>
</div>

<div className="latest-detail">
<span>Date</span>
<strong>{latestPrediction.date}</strong>
</div>

</div>

</div>
):(
<div className="no-data">
<div className="no-data-icon">📋</div>
<h3>No predictions yet</h3>
<p>
Make your first food waste prediction to see live results
on the dashboard.
</p>
<Link to="/predict" className="dashboard-button">
Make Prediction
</Link>
</div>
)}

</div>

<div className="dashboard-section risk-overview">

<div className="section-heading">
<div>
<h2>Risk Overview</h2>
<p>Prediction risk distribution</p>
</div>
</div>

<div className="risk-stats">

<div className="risk-stat">
<div className="risk-stat-number low-text">
{lowRiskCount}
</div>
<div>
<strong>Low Risk</strong>
<span>Efficient preparation</span>
</div>
</div>

<div className="risk-stat">
<div className="risk-stat-number medium-text">
{mediumRiskCount}
</div>
<div>
<strong>Medium Risk</strong>
<span>Needs monitoring</span>
</div>
</div>

<div className="risk-stat">
<div className="risk-stat-number high-text">
{highRiskCount}
</div>
<div>
<strong>High Risk</strong>
<span>Immediate attention</span>
</div>
</div>

</div>

</div>

</div>

<div className="dashboard-section">

<div className="section-heading">
<div>
<h2>Waste Prediction Trend</h2>
<p>Recent predicted food waste values</p>
</div>
</div>

{predictions.length>0 ?(
<div className="prediction-chart">

{predictions.slice(-10).map((item,index)=>{

const waste=Number(item.predicted_food_waste_kg||0);

const height=Math.max(
10,
(waste/maxWaste)*180
);

return(
<div className="chart-column" key={item.id||index}>

<div className="chart-value">
{waste.toFixed(1)} kg
</div>

<div
className={`chart-bar ${getRiskClass(item.risk_level)}`}
style={{height:`${height}px`}}
></div>

<div className="chart-label">
#{index+1}
</div>

</div>
);
})}

</div>
):(
<div className="empty-chart">
<p>Prediction trend will appear here after you make predictions.</p>
</div>
)}

</div>

<div className="dashboard-section">

<div className="section-heading">
<div>
<h2>Prediction History</h2>
<p>Latest food waste predictions</p>
</div>

<Link to="/predict" className="dashboard-button">
+ New Prediction
</Link>
</div>

{predictions.length>0 ?(
<div className="table-container">

<table className="prediction-table">

<thead>
<tr>
<th>Date</th>
<th>Meals</th>
<th>Staff</th>
<th>Predicted Waste</th>
<th>Waste %</th>
<th>Risk</th>
</tr>
</thead>

<tbody>

{[...predictions].reverse().slice(0,10).map((item,index)=>(
<tr key={item.id||index}>

<td>{item.date}</td>

<td>{item.meals_served}</td>

<td>{item.kitchen_staff}</td>

<td>
<strong>
{Number(item.predicted_food_waste_kg||0).toFixed(2)} kg
</strong>
</td>

<td>
{Number(item.waste_percentage||0).toFixed(2)}%
</td>

<td>
<span className={`table-risk ${getRiskClass(item.risk_level)}`}>
{item.risk_level}
</span>
</td>

</tr>
))}

</tbody>

</table>

</div>
):(
<div className="empty-history">
<p>
No prediction history available yet.
</p>
</div>
)}

</div>

<div className="dashboard-section">

<div className="section-heading">
<div>
<h2>Data Analysis</h2>
<p>Factors considered by the WasteWise prediction system</p>
</div>
</div>

<div className="analysis-grid">

<div className="analysis-card">
<div className="analysis-icon">🍽️</div>
<h3>Demand Patterns</h3>
<p>
Meals served is an important factor for estimating the amount
of food that may become waste.
</p>
</div>

<div className="analysis-card">
<div className="analysis-icon">♻️</div>
<h3>Previous Waste</h3>
<p>
Previous food waste helps the model understand recurring
waste patterns.
</p>
</div>

<div className="analysis-card">
<div className="analysis-icon">🌡️</div>
<h3>Weather Conditions</h3>
<p>
Temperature and humidity are considered because environmental
conditions can influence food demand.
</p>
</div>

<div className="analysis-card">
<div className="analysis-icon">👨‍🍳</div>
<h3>Kitchen Factors</h3>
<p>
Kitchen staff and staff experience are included in the
prediction process.
</p>
</div>

</div>

</div>

<div className="dashboard-section">

<div className="section-heading">
<div>
<h2>What WasteWise Does</h2>
<p>From prediction to waste reduction</p>
</div>
</div>

<div className="process-grid">

<div className="process-card">
<div className="process-number">01</div>
<h3>Predict</h3>
<p>
Enter restaurant conditions and let the Machine Learning
model estimate expected food waste.
</p>
</div>

<div className="process-card">
<div className="process-number">02</div>
<h3>Understand</h3>
<p>
Use the predicted waste percentage and risk level to
understand the current situation.
</p>
</div>

<div className="process-card">
<div className="process-number">03</div>
<h3>Reduce</h3>
<p>
Follow the generated recommendations to reduce unnecessary
food preparation and waste.
</p>
</div>

</div>

</div>

<div className="dashboard-actions">

<Link to="/predict" className="action-button primary">
🔮 Predict Food Waste
</Link>

<Link to="/insights" className="action-button">
📈 View Insights
</Link>

<Link to="/recommendations" className="action-button">
💡 Recommendations
</Link>

</div>

</div>
);
}

export default Dashboard;