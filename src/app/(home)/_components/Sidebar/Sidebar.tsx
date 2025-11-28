import styles from './styles.module.scss';
import Image from "next/image";
import {SidebarItems} from "@/objects/objects";
import SidebarItem from "@/components/SidebarItem/Sidebaritem";
import Icon from "@/components/Icon/Icon";
import {useRef, useState} from "react";

export default function Sidebar() {

  const [shrunk, setShrunk] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  return (
    <div className={styles.container} ref={sidebarRef}>
      <div className={styles.sidebarTop}>
        {!shrunk && (
          <div className={styles.logoContainer}>
            <Image
              className={styles.logo}
              src={'/ava-logo-color.png'}
              alt='Ava Logo'
              fill
              draggable={false}
            />
          </div>
        )}
        <div className={styles.shrunkIcon}>
          <Icon icon={shrunk ? 'expandSidebar' : 'shrinkSidebar'}
                tooltip={shrunk ? 'Expand Sidebar' : 'Shrink Sidebar'}
                enableCursor={true}
                handleClick={() => setShrunk((s) => !s)}
          />
        </div>
      </div>
      <div className={styles.options}>
        {SidebarItems.map((item, index) => {
          return (
            <div key={index}>
              <SidebarItem item={item} shrunk={shrunk}/>
            </div>
          )
        })}
      </div>
    </div>
  )
}