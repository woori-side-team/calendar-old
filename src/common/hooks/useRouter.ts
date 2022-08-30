import { useHistory, useLocation } from "react-router";

export default function useRouter() {
  const location = useLocation();
  const history = useHistory();

  function openSchedule() {
    if (location.pathname.includes("/schedule/month")) {
      history.push("/schedule/week");
    } else {
      history.push("/schedule/month");
    }
  }

  return {
    location,
    history,
    openSchedule,
  };
}
