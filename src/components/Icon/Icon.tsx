'use client'

type Props = {
  name: keyof typeof IconMap;
  color?: string;
  size?: number;
  strokeWidth?: number;
  tooltip?: string;
  handleClick?: () => void;
}

import {IconMap} from "@/objects";

export default function Icon({ name, color, size=20, strokeWidth=2, tooltip, handleClick }: Props) {

  const IconComponent = IconMap[name]
  if (!IconComponent) return null;
  return (
    <div className={'icon-container'}
         onClick={handleClick}
         style={{ cursor: handleClick ? 'pointer' : ''}}
    >
      <IconComponent color={color} size={size} strokeWidth={strokeWidth} />
    </div>
  )
}