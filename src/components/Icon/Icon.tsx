'use client'
import {IconMap} from "@/objects/objects";
import './style.scss';
import {useState, useEffect, useRef} from "react";

type Props = {
  name: keyof typeof IconMap;
  color?: string;
  size?: number;
  strokeWidth?: number;
  tooltip?: string;
  hideTooltipSignal?: number;
}

export default function Icon({ name, color, size=20, strokeWidth=2, tooltip, hideTooltipSignal }: Props) {

  const [showTooltip, setShowTooltip] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    if (timeoutRef.current !== null) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setShowTooltip(false);
  }, [hideTooltipSignal]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current);
      }
    }
  }, []);

  const handleMouseEnter = () => {
    if (!tooltip) return;
    timeoutRef.current = window.setTimeout(() => {
      setShowTooltip(true);
    }, 1000);
  }

  const handleMouseLeave = () => {
    if (timeoutRef.current !== null) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setShowTooltip(false);
  }

  const IconComponent = IconMap[name];
  if (!IconComponent) return null;
  return (
    <div className={`icon-container`}
         onMouseEnter={handleMouseEnter}
         onMouseLeave={handleMouseLeave}>
      <IconComponent color={color} size={size} strokeWidth={strokeWidth}/>
      {showTooltip && <span className={'tooltip'}>{tooltip}</span>}
    </div>
  )
}
