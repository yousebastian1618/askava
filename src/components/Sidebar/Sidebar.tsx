'use client'
import './style.scss';
import Image from "next/image";
import Icon from "@/components/Icon/Icon";
import {useState} from "react";
import {IconMap, SidebarBottomItems, SidebarItems} from "@/objects";
export default function Sidebar() {

  const [shrunk, setShrunk] = useState(false);

  const handleShrunk = (toggle?: boolean) => {
    setShrunk((prev) => toggle === undefined ? !prev : toggle);
  }

  return (
    <div className={'sidebar'}
         style={{ width: shrunk ? '' : '15rem'}}
    >
      <div className={'top'}>
        <div className={'logo-container'}>
          <Image
            className={'logo'}
            src={'/ava-logo-black.png'}
            alt={'logo'}
            fill
            draggable={false}
            onClick={() => handleShrunk(false)}
          />
        </div>
        {!shrunk && <Icon name={'panel-right'} handleClick={() => handleShrunk()}/>}
      </div>
      <div className={'items'}>
        <div className={'top-items'}>
          {SidebarItems.map((item) => {
            return (
              <div className={'sidebar-item'} key={item.label}>
              <span className={'sidebar-item-icon'}>
                <Icon name={item.icon as keyof typeof IconMap} />
              </span>
                {!shrunk && <span className={'sidebar-item-label'}>{item.label}</span>}
              </div>
            )
          })}
        </div>
        <div className={'bottom-items'}>
          {SidebarBottomItems.map((item) => {
            return (
              <div className={'sidebar-item'} key={item.label}>
              <span className={'sidebar-item-icon'}>
                <Icon name={item.icon as keyof typeof IconMap} />
              </span>
                {!shrunk && <span className={'sidebar-item-label'}>{item.label}</span>}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}