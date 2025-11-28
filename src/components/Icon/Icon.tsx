import styles from './styles.module.scss';
import {useState} from "react";
import {IconMap} from "@/objects/objects";

type Props = {
  icon: string;
  tooltip?: string;
  enableCursor?: boolean;
  handleClick?: () => void;
}

export default function Icon({ icon, tooltip, enableCursor, handleClick }: Props) {

  const [showTooltip, setShowTooltip] = useState(false);

  const handleIconClick = () => {
    if (!handleClick) return;
    setShowTooltip(false);
    handleClick();
  }

  return (
    <div className={styles.container}
         onMouseOver={() => setShowTooltip(true)}
         onMouseOut={() => setShowTooltip(false)}
    >
      <span
        className={ enableCursor ? 'cursor-pointer' : ''}
        onClick={handleIconClick}
      >
        {IconMap[icon]}
      </span>
      {tooltip && showTooltip && <span className={styles.tooltip}>{tooltip}</span>}
    </div>

  )
}