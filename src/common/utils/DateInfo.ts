export default class DateInfo {
  readonly date: Date;

  readonly year: number;
  readonly month: number; // 1 ~ 12. (1: January)
  readonly monthDay: number;
  readonly hour: number;
  readonly minute: number;
  readonly second: number;
  readonly weekDay: number; // 0 ~ 6. (0: Sunday, 1: Monday, ...)

  private constructor(date: Date) {
    this.date = date;

    this.year = this.date.getFullYear();
    this.month = this.date.getMonth() + 1;
    this.monthDay = this.date.getDate();
    this.hour = this.date.getHours();
    this.minute = this.date.getMinutes();
    this.second = this.date.getSeconds();
    this.weekDay = this.date.getDay();
  }

  // =================================================
  // Methods for construction.

  static fromDate(date: Date) {
    return new DateInfo(date);
  }

  static fromValues(
    args: Partial<{
      year: number;
      month: number;
      monthDay: number;
      hour: number;
      minute: number;
      second: number;
    }>
  ) {
    // We don't put the values into members directly.
    // Since JS Date can handle overflows (ex. 2022.7.0, 2022.7.55, 2022.-2.30, ...),
    // we create JS Date first and compute the members using it.
    return DateInfo.fromDate(
      new Date(
        args.year ?? 0,
        // In JS Date, month starts from 0.
        (args.month ?? 0) - 1,
        // Day starts from 1. (Day = 0 gives the last day of the previous month!)
        args.monthDay ?? 1,
        args.hour ?? 0,
        args.minute ?? 0,
        args.second ?? 0
      )
    );
  }

  static now() {
    return DateInfo.fromDate(new Date());
  }

  // =================================================
  // Chainable methods.

  getFirstDayOfMonth() {
    return DateInfo.fromValues({
      ...this.getValues(),
      monthDay: 1,
    });
  }

  getLastDayOfMonth() {
    return DateInfo.fromValues({
      ...this.getValues(),
      monthDay: this.getMonthSize(),
    });
  }

  addMonth(value: number) {
    const newMonthSize = new Date(this.year, this.month + value, 0).getDate();

    return DateInfo.fromValues({
      ...this.getValues(),
      month: this.month + value,
      // Since the maximum days of the months are different, changing the month can give wrong results.
      // ex. Prev. month of 2022.7.31: new Date(2022, 7 - 1, 31) = 2022.6.31 = 2022.7.1
      // So we need to adjust the day, too.
      // ex. Prev. month of 2022.7.31: new Date(2022, 7 - 1, Math.min(31, Last day of June)) = 2022.6.30
      monthDay: Math.min(this.monthDay, newMonthSize),
    });
  }

  addDay(value: number) {
    return DateInfo.fromValues({
      year: this.year,
      month: this.month,
      monthDay: this.monthDay + value,
    });
  }

  // this <= ... <= other.
  getDaysUntil(other: DateInfo): Array<DateInfo> {
    if (this.compare(other) > 0) {
      return [];
    }

    if (this.isSameDay(other)) {
      return [this];
    }

    const result: Array<DateInfo> = [this];

    while (true) {
      const next = result[result.length - 1].addDay(1);

      if (!next.isSameDay(other)) {
        result.push(next);
      } else {
        break;
      }
    }

    result.push(other);
    return result;
  }

  // =================================================
  // Non-chainable methods.

  getValues() {
    return {
      year: this.year,
      month: this.month,
      monthDay: this.monthDay,
      hour: this.hour,
      minute: this.minute,
      second: this.second,
      weekDay: this.weekDay,
    };
  }

  getMonthSize() {
    return new Date(this.year, this.month, 0).getDate();
  }

  compare(other: DateInfo) {
    return this.date.getTime() - other.date.getTime();
  }

  isSameMonth(other: DateInfo) {
    return this.year === other.year && this.month === other.month;
  }

  isSameDay(other: DateInfo) {
    return this.isSameMonth(other) && this.monthDay === other.monthDay;
  }

  getMonthCalendar() {
    const monthSize = this.getMonthSize();
    const monthFirstDay = this.getFirstDayOfMonth();

    const prevMonthInfo = this.addMonth(-1);
    const prevMonthSize = prevMonthInfo.getMonthSize();

    const nextMonthInfo = this.addMonth(1);

    const weeks: Array<Array<DateInfo>> = [[]];
    let pushCount = 0;

    function pushDay(day: DateInfo) {
      const currentWeek = weeks[weeks.length - 1];

      if (currentWeek.length < 7) {
        currentWeek.push(day);
      } else {
        weeks.push([day]);
      }

      pushCount++;
    }

    for (let monthDay = prevMonthSize - monthFirstDay.weekDay + 1; monthDay <= prevMonthSize; monthDay++) {
      pushDay(DateInfo.fromValues({ ...prevMonthInfo.getValues(), monthDay }));
    }

    for (let monthDay = 1; monthDay <= monthSize; monthDay++) {
      pushDay(DateInfo.fromValues({ year: this.year, month: this.month, monthDay }));
    }

    const remainingSize = 7 * 6 - pushCount;

    for (let monthDay = 1; monthDay <= remainingSize; monthDay++) {
      pushDay(DateInfo.fromValues({ ...nextMonthInfo.getValues(), monthDay }));
    }

    return weeks;
  }
}
