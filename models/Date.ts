export class DateModel {
  static compareDates(savedDate: string): boolean {
    const currentDate = new Date();
    const previousDate = new Date(savedDate);
    return (
      currentDate.getFullYear() === previousDate.getFullYear() &&
      currentDate.getMonth() === previousDate.getMonth() &&
      currentDate.getDate() === previousDate.getDate()
    );
  }
}
