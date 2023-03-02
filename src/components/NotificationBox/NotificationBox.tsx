import { NotificationBoxI } from "../../types/NotificationBoxI";
import "./Notification.css";

function NotificationBox({ label, state, color }: NotificationBoxI) {
  return (
    <div
      className={state ? "notification" : "notification disabled"}
      style={{ background: color }}
    >
      {label}
    </div>
  );
}

export default NotificationBox;
