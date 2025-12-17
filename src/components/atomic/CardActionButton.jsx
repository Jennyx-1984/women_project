import "../../css/cardActionButton.css";
import {
  CiEdit,
  RiDeleteBin6Line,
  RiHeartLine,
} from "react-icons/ci";

const ICONS = {
  edit: <CiEdit />,
  delete: <RiDeleteBin6Line />,
  favorite: <RiHeartLine />,
};

const CardActionButton = ({
  action = "edit",
  onClick,
  disabled = false,
  className = "",
  ariaLabel,
  title,
  ref,
}) => {
  return (
    <button
      ref={ref}
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`card-action-button card-action-button--${action} ${className}`}
      aria-label={ariaLabel}
      title={title}
    >
      {ICONS[action]}
    </button>
  );
};

export default CardActionButton;