import React, { useState, useRef } from "react";
import moment from "moment-timezone";
import 'moment/locale/ko';

export default function MomentExample() {
  const [day, setDay] = useState();
  const birthDayRef = useRef(null);

  const handleBirthDayChange = (event) => {
    setDay(moment(event.target.value, 'YYYY-MM-DD').format('dddd'));
  };
  
  const momentDate = moment();
  const newMomentDate = momentDate.add(1, "week");
  const cloneNewMomentDate = newMomentDate.clone().add(1, "week");

  return (
    <div>
      <h1>Moment</h1>

      <div><h4>Immutable Check</h4></div>
      <div>
        {momentDate.format()}
        <br />
        {newMomentDate.format()}
        <br />
        {cloneNewMomentDate.format()}
        <br />
      </div>

      <br />

      <div><h4>Summer Time (New-york)</h4></div>
      <div>
        2018년 3월 10일 13시에 하루 더하기:
        {moment
          .tz("2018-03-10 13:00:00", "America/New_York")
          .add(1, "day")
          .format()}
      </div>
      <div>
        2018년 3월 10일 13시에 2시간 더하기:
        {moment
          .tz("2018-03-10 13:00:00", "America/New_York")
          .add(24, "hour")
          .format()}
        {}
      </div>

      <br />

      <div><h4>Leap yer (Korea)</h4></div>
      <div>
        2017년 1월 1일에 1년 빼기:
        {moment("2017-01-01").subtract(1, "year").format()}
      </div>
      <div>
        2017년 1월 1일에 365일 빼기:
        {moment("2017-01-01").subtract(365, "day").format()}
        {}
      </div>

      <br />

      <div><h4>한국어로 표기(07-17-2021을 2021년 7월 17일로 표기)</h4></div>
      <div>{moment("07-17-2021").format("YYYY년 M월 DD일")}</div>

      <br />

      <div><h4>자기 생일 요일 찾기</h4></div>
      <div>
        <input type="date" ref={birthDayRef} onChange={handleBirthDayChange} />
        <div>무슨 요일이었을까?</div>
        <div>{day}</div>
      </div>

      <div><h4>두 날짜 비교</h4></div>
      <div>2017-07-17 03:00 와 2021-07-10 02:00는 몇시간 차이인가?</div>
      <div>
        {moment('2017-07-17 03:00').diff(moment('2021-07-10 02:00'), 'hours')}시간
      </div>
    </div>
  );
}
