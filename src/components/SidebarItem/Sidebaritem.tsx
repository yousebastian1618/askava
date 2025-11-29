import styles from './styles.module.scss';
import Icon from "@/components/Icon/Icon";

type Props = {
  item: Record<string, string>,
  shrunk: boolean
}

export default function SidebarItem({ item, shrunk }: Props) {
  return (
    <div className={styles.container}>
      <span className={`${styles.icon} ${shrunk ? 'm-0' : 'mr-[10]'}`}>
        <Icon icon={item.name} />
      </span>
      {!shrunk && <span className={styles.label}>{item.label}</span>}
    </div>
  )
}