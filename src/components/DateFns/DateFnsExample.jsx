import React, { useState, useRef } from "react";
import dayjs from "dayjs";
import "dayjs/locale/ko";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.locale("ko");
dayjs.extend(utc);
dayjs.extend(timezone);

export default function DateFnsExample() {
  const [day, setDay] = useState();
  const birthDayRef = useRef(null);

  const handleBirthDayChange = (event) => {
    setDay(dayjs(event.target.value, "YYYY-MM-DD").format("dddd"));
  };

  const dateFnsDate = new Date();
  const newDateFnsDate = add(dateFnsDate, { days: 1 });
  const newDateFnsDate2 = newDateFnsDate.add(1, "week");

  return (
    <div>
      <h1>date-fns</h1>

      <div>
        <h4>Immutable Check</h4>
      </div>
      <div>
        {dateFnsDate.format()}
        <br />
        {newDateFnsDate.format()}
        <br />
        {newDateFnsDate2.format()}
        <br />
      </div>

      <br />

      <div>
        <h4>Summer Time (New-york)</h4>
      </div>
      <div>{dayjs.tz.guess()}</div>
      <div>
        2018년 3월 10일 13시에 하루 더하기:
        {dayjs
          .tz("2018-03-10 13:00:00", "America/New_York")
          .add(1, "day")
          .format()}
      </div>
      <div>
        2018년 3월 10일 13시에 2시간 더하기:
        {dayjs
          .tz("2018-03-10 13:00:00", "America/New_York")
          .add(24, "hour")
          .format()}
        {}
      </div>

      <br />

      <div>
        <h4>Leap yer (Korea)</h4>
      </div>
      <div>
        2017년 1월 1일에 1년 빼기:
        {dayjs("2017-01-01").subtract(1, "year").format()}
      </div>
      <div>
        2017년 1월 1일에 365일 빼기:
        {dayjs("2017-01-01").subtract(365, "day").format()}
        {}
      </div>

      <br />

      <div>
        <h4>한국어로 표기(07-17-2021을 2021년 7월 17일로 표기)</h4>
      </div>
      <div>{dayjs("07-17-2021").format("YYYY년 M월 DD일")}</div>

      <br />

      <div>
        <h4>자기 생일 요일 찾기</h4>
      </div>
      <div>
        <input type="date" ref={birthDayRef} onChange={handleBirthDayChange} />
        <div>무슨 요일이었을까?</div>
        <div>{day}</div>
      </div>

      <div>
        <h4>두 날짜 비교</h4>
      </div>
      <div>2017-07-17 03:00 와 2021-07-10 02:00는 몇시간 차이인가?</div>
      <div>
        {dayjs("2017-07-17 03:00").diff(dayjs("2021-07-10 02:00"), "hours")}시간
      </div>
    </div>
  );
}
