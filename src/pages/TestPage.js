import { Link, useNavigate } from "react-router-dom";

function TestPage() {
  const baseUrl = "/test-webview/result";

  const navigate = useNavigate();
  const homeHandler = () => {
    navigate("/");
  };
  const availableHandler = () => {
    navigate(
      "/?layoutId=1&seatId=1&available=true&startTime=10:00&endTime=19:00&date=2021-12-15"
    );
  };
  const unavailableHandler = () => {
    navigate(
      "/?layoutId=1&seatId=1&available=false&startTime=10:00&endTime=19:00&date=2021-12-15"
    );
  };

  return (
    <div>
      <div>
        <button>
          <Link to={`${baseUrl}/`}>링크 초기화 하기</Link>
        </button>
        <button>
          <Link
            to={`${baseUrl}/?layoutId=1&seatId=1&available=true&startTime=10:00&endTime=19:00&date=2021-12-15`}
          >
            예약 가능한 좌석
          </Link>
        </button>
        <button>
          <Link
            to={`${baseUrl}/?layoutId=1&seatId=1&available=false&startTime=10:00&endTime=19:00&date=2021-12-15`}
          >
            예약 불가능한 좌석
          </Link>
        </button>
      </div>
      <div>
        <p>
          <a href={`${baseUrl}/`}>test - home </a>
        </p>
        <p>
          <a
            href={`${baseUrl}/?layoutId=1&seatId=1&available=true&startTime=10:00&endTime=19:00&date=2021-12-15`}
          >
            test - 예약 가능한 좌석{" "}
          </a>
        </p>
        <p>
          <a
            href={`${baseUrl}/?layoutId=1&seatId=1&available=false&startTime=10:00&endTime=19:00&date=2021-12-15`}
          >
            test - 예약 불가능한 좌석{" "}
          </a>
        </p>
      </div>
    </div>
  );
}

export default TestPage;
