import styles from './styles.module.scss';
import Image from "next/image";
import {SidebarItems} from "@/objects/objects";
import SidebarItem from "@/components/SidebarItem/Sidebaritem";

export default function Sidebar() {
  return (
    <div className={styles.container}>
      <div className={styles.sidebarTop}>
        <div className={styles.logoContainer}>
          <Image
            className={styles.logo}
            src={'/ava-logo-color.png'}
            alt='Ava Logo'
            fill
            draggable={false}
          />
        </div>

      </div>
      <div className={styles.options}>
        {SidebarItems.map((item, index) => {
          return (
            <div key={index}>
              <SidebarItem item={item} />
            </div>
          )
        })}
      </div>
    </div>
  )
}