import styles from "../../css/cardActionButton.module.css";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin6Line, RiHeartLine } from "react-icons/ri";

const ICONS = {
  edit: <CiEdit />,
  delete: <RiDeleteBin6Line />,
  favorite: <RiHeartLine />,
};

const CardActionButton = ({ action = "edit", onClick, disabled = false, className = "", ariaLabel, title, ref }) => {
  return (
    <button ref={ref} type="button" onClick={onClick} disabled={disabled} className={`${styles.button} ${styles[action]} ${className}`} aria-label={ariaLabel} title={title}>
      {ICONS[action]}
    </button>
  );
};

export default CardActionButton;  