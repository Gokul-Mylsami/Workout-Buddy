const express = require("express");
const requireAuth = require("../middleware/requireAuth");

const {
  createWorkout,
  getSingleWorkout,
  getWorkouts,
  deleteWorkout,
  updateWorkouts,
} = require("../controllers/workoutsController");

const router = express.Router();

//require auth for all workout auth
router.use(requireAuth);

//GET all workouts
router.get("/", getWorkouts);

//GET a single WORKOUT
router.get("/:id", getSingleWorkout);

//POST a new Workout
router.post("/", createWorkout);

//DELETE a workout
router.delete("/:id", deleteWorkout);

//UPDATE a new Workout
router.patch("/:id", updateWorkouts);

module.exports = router;
