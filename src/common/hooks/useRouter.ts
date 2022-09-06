import { useHistory, useLocation } from "react-router";

export default function useRouter() {
  const location = useLocation();
  const history = useHistory();

  function openMonthOrWeek() {
    if (location.pathname.includes("/schedule/month")) {
      history.push("/schedule/week");
    } else {
      history.push("/schedule/month");
    }
  }

  function openDay() {
    history.push("/schedule/day");
  }

  return {
    location,
    history,
    openMonthOrWeek,
    openDay,
  };
}
