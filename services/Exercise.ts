import { getDBConnection } from "./Database";
import { ExerciseModel } from "./../models/Exercise";

const db = getDBConnection();

export const createExercisesTable = () => {
  const query = `CREATE TABLE IF NOT EXISTS Exercises(
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      date VARCHAR(30),
      isCompleted BOOLEAN NOT NULL CHECK (isCompleted IN (0, 1))
    );`;

  db.transaction((tx) => tx.executeSql(query));
};

export const getExercise = async (): Promise<ExerciseModel> => {
  try {
    return new Promise<ExerciseModel>((resolve) => {
      db.transaction((tx) => {
        tx.executeSql(
          `SELECT * FROM Exercises ORDER BY id DESC LIMIT 1;`,
          [],
          (_, { rows: { _array } }) => {
            resolve({
              date: _array.length ? _array[0]?.date : "",
              isCompleted: _array.length ? !!_array[0]?.isCompleted : false,
            });
          }
        );
      });
    });
  } catch (error) {
    console.error(error);
    throw Error(`Failed to get Exercise`);
  }
};

export const saveExercise = async (exercise: ExerciseModel) => {
  const insertQuery = `INSERT INTO Exercises(date, isCompleted) VALUES (?,?)`;

  console.log(exercise);
  return db.transaction((tx) => {
    tx.executeSql(insertQuery, [exercise.date, exercise.isCompleted ? 1 : 0]);
  });
};
