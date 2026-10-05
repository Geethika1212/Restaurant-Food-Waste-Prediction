from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import pandas as pd
import joblib


# =========================================================
# LOAD ENVIRONMENT VARIABLES
# =========================================================




# =========================================================
# CREATE FASTAPI APPLICATION
# =========================================================

app = FastAPI(
    title="Restaurant Food Waste Prediction API",
    description="Predict restaurant food waste using Machine Learning",
    version="1.0.0"
)


# =========================================================
# CORS
# =========================================================

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)


# =========================================================
# LOAD ML MODEL
# =========================================================

model = joblib.load(
    "model/restaurant_food_waste_model.pkl"
)


# =========================================================
# INPUT DATA MODEL
# =========================================================

class FoodWasteInput(BaseModel):

    meals_served: float
    kitchen_staff: float
    temperature_C: float
    humidity_percent: float
    day_of_week: int
    special_event: int
    past_waste_kg: float
    staff_experience: str


# =========================================================
# DATABASE CONNECTION
# =========================================================

def get_db_connection():

    return psycopg2.connect(
        host=os.getenv("DB_HOST"),
        port=os.getenv("DB_PORT"),
        database=os.getenv("DB_NAME"),
        user=os.getenv("DB_USER"),
        password=os.getenv("DB_PASSWORD")
    )


# =========================================================
# HOME
# =========================================================

@app.get("/")
def home():

    return {
        "message": "Restaurant Food Waste Prediction API is running",
        "status": "success"
    }


# =========================================================
# HEALTH CHECK
# =========================================================

@app.get("/health")
def health():

    try:

        connection = get_db_connection()
        connection.close()

        database_status = True

    except Exception as error:

        print("Database health check error:", error)

        database_status = False


    return {

        "status": "healthy",

        "model_loaded": True,

        "database_connected": database_status

    }


# =========================================================
# FOOD WASTE PREDICTION
# =========================================================

@app.post("/predict")
def predict(data: FoodWasteInput):

    # =====================================================
    # CONVERT INPUT INTO DICTIONARY
    # =====================================================

    input_dict = data.model_dump()


    # =====================================================
    # CREATE DATAFRAME
    # =====================================================

    input_data = pd.DataFrame({

        "meals_served": [
            input_dict["meals_served"]
        ],

        "kitchen_staff": [
            input_dict["kitchen_staff"]
        ],

        "temperature_C": [
            input_dict["temperature_C"]
        ],

        "humidity_percent": [
            input_dict["humidity_percent"]
        ],

        "day_of_week": [
            input_dict["day_of_week"]
        ],

        "special_event": [
            input_dict["special_event"]
        ],

        "past_waste_kg": [
            input_dict["past_waste_kg"]
        ],

        "staff_experience": [
            input_dict["staff_experience"]
        ]

    })


    # =====================================================
    # ML PREDICTION
    # =====================================================

    prediction = model.predict(input_data)[0]

    # Prevent negative prediction

    prediction = max(
        0,
        float(prediction)
    )


    # =====================================================
    # WASTE PERCENTAGE
    # =====================================================

    meals_served = float(
        input_dict["meals_served"]
    )

    if meals_served > 0:

        waste_percentage = (
            prediction / meals_served
        ) * 100

    else:

        waste_percentage = 0


    # =====================================================
    # RISK LEVEL + RECOMMENDATION
    # =====================================================

    if waste_percentage < 5:

        risk = "LOW"

        recommendation = (
            "Food preparation is efficient. "
            "Continue monitoring daily demand."
        )

    elif waste_percentage < 10:

        risk = "MEDIUM"

        recommendation = (
            "Consider preparing food in smaller batches "
            "and monitoring customer demand."
        )

    else:

        risk = "HIGH"

        recommendation = (
            "High food waste risk. "
            "Reduce initial preparation quantity, "
            "use batch cooking, and consider safe "
            "surplus redistribution."
        )


    # =====================================================
    # SAVE PREDICTION TO POSTGRESQL
    # =====================================================

    connection = None
    cursor = None

    database_saved = False


    try:

        connection = get_db_connection()

        cursor = connection.cursor()


        insert_query = """

            INSERT INTO predictions (

                meals_served,
                kitchen_staff,
                temperature_c,
                humidity_percent,
                day_of_week,
                special_event,
                past_waste_kg,
                staff_experience,
                predicted_food_waste_kg,
                waste_percentage,
                risk_level,
                recommendation

            )

            VALUES (
                %s,
                %s,
                %s,
                %s,
                %s,
                %s,
                %s,
                %s,
                %s,
                %s,
                %s,
                %s
            )

        """


        cursor.execute(

            insert_query,

            (

                input_dict["meals_served"],

                input_dict["kitchen_staff"],

                input_dict["temperature_C"],

                input_dict["humidity_percent"],

                input_dict["day_of_week"],

                input_dict["special_event"],

                input_dict["past_waste_kg"],

                input_dict["staff_experience"],

                round(
                    prediction,
                    2
                ),

                round(
                    waste_percentage,
                    2
                ),

                risk,

                recommendation

            )

        )


        connection.commit()

        database_saved = True


        print(
            "Prediction saved to PostgreSQL successfully!"
        )


    except Exception as error:

        print(
            "Database error:",
            error
        )

        database_saved = False


    finally:

        if cursor:

            cursor.close()

        if connection:

            connection.close()


    # =====================================================
    # RETURN RESULT
    # =====================================================

    return {

        "predicted_food_waste_kg": round(
            prediction,
            2
        ),

        "waste_percentage": round(
            waste_percentage,
            2
        ),

        "risk_level": risk,

        "recommendation": recommendation,

        "database_saved": database_saved

    }
# =========================================================
# GET PREDICTION HISTORY
# =========================================================

@app.get("/predictions")
def get_predictions():

    connection = None
    cursor = None

    try:

        connection = get_db_connection()
        cursor = connection.cursor()

        query = """
            SELECT
                id,
                meals_served,
                kitchen_staff,
                temperature_c,
                humidity_percent,
                day_of_week,
                special_event,
                past_waste_kg,
                staff_experience,
                predicted_food_waste_kg,
                waste_percentage,
                risk_level,
                recommendation
            FROM predictions
            ORDER BY id DESC
        """

        cursor.execute(query)

        rows = cursor.fetchall()

        columns = [
            "id",
            "meals_served",
            "kitchen_staff",
            "temperature_c",
            "humidity_percent",
            "day_of_week",
            "special_event",
            "past_waste_kg",
            "staff_experience",
            "predicted_food_waste_kg",
            "waste_percentage",
            "risk_level",
            "recommendation"
        ]

        predictions = []

        for row in rows:

            prediction_data = dict(
                zip(columns, row)
            )

            predictions.append(
                prediction_data
            )

        return {
            "status": "success",
            "count": len(predictions),
            "predictions": predictions
        }

    except Exception as error:

        print(
            "Error fetching predictions:",
            error
        )

        return {
            "status": "error",
            "message": str(error)
        }

    finally:

        if cursor:
            cursor.close()

        if connection:
            connection.close()