'use client'
import './style.scss';
import Image from "next/image";
import Icon from "@/components/Icon/Icon";
import {useState} from "react";
import {IconMap, SidebarBottomItems, SidebarItems} from "@/objects/objects";

type SidebarItemProp = {
  item: {
    icon: string;
    label: string;
  }
}

export default function Sidebar() {

  const [shrunk, setShrunk] = useState(false);
  const [hideTooltipSignal, setHideTooltipSignal] = useState(0);

  const toggleShrunk = () => {
    setHideTooltipSignal((n) => n + 1);
    setShrunk((s) => !s);
  }

  function SidebarItem({ item }: SidebarItemProp) {
    return (
      <>
        <Icon name={item.icon as keyof typeof IconMap} strokeWidth={3} />
        <span className={`${shrunk ? 'hidden' : ''}`}>{item.label}</span>
      </>
    )
  }

  return (
    <div className={`sidebar-container ${!shrunk ? 'w-1/5' : ''}`}>
      <div className={"sidebar-top-container"}>
        <div className={'sidebar-top'}>
          <div className={`askava-logo-container`} onClick={() => setShrunk(false)}>
            <Image
              id={"askava-logo"}
              src={'/ava-logo-color.png'}
              alt={'AskAva'}
              fill
              draggable={false}
            />
          </div>
          <div onClick={toggleShrunk} className={`cursor-pointer ${shrunk ? 'hidden' : 'block'}`}>
            <Icon name={ shrunk ? 'panel-right' : 'panel-left' }
                  size={24}
                  tooltip={ shrunk ? 'expand' : 'shrink' }
                  hideTooltipSignal={hideTooltipSignal}
            />
          </div>
        </div>
        <div className={'sidebar-body'}>
          <div className={'sidebar-items'}>
            {SidebarItems.map((item) => {
              return (
                <div key={item.label} className={'sidebar-item'}>
                  <SidebarItem item={item} />
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <div className={'sidebar-bottom-container'}>
        <div className={'sidebar-items'}>
          {SidebarBottomItems.map((item) => {
            return (
              <div key={item.label} className={'sidebar-item'}>
                <SidebarItem item={item} />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
