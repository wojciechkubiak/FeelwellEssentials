import * as SQLite from "expo-sqlite";

export const getDBConnection = () => {
  const db = SQLite.openDatabase("feelwell.db");
  return db;
};
