import styles from './styles.module.scss';
import Icon from "@/components/Icon/Icon";

type Props = {
  item: Record<string, string>,
  shrunk: boolean
}

export default function SidebarItem({ item, shrunk }: Props) {
  return (
    <div className={styles.container}>
      <span className={styles.icon}>
        <Icon icon={item.name} />
      </span>
      {!shrunk && <span className={styles.label}>{item.label}</span>}
    </div>
  )
}