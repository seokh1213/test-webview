import { Link, useNavigate } from "react-router-dom";

function TestPage() {
  const navigate = useNavigate();
  const homeHandler = () => {
    navigate("/");
  };
  const availableHandler = () => {
    navigate("/?layoutId=1&seatId=1&available=true&startTime=10:00&endTime=19:00&date=2021-12-15");
  };
  const unavailableHandler = () => {
    navigate("/?layoutId=1&seatId=1&available=false&startTime=10:00&endTime=19:00&date=2021-12-15");
  };

  return (
    <div>
      <button onClick={homeHandler}>링크 초기화 하기</button>
      <button onClick={availableHandler}>예약 가능한 좌석</button>
      <button onClick={unavailableHandler}>예약 불가능한 좌석</button>
    </div>
  );
}

export default TestPage;
