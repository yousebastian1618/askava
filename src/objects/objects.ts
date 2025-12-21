import {
  PanelLeft,
  PanelRight,
  MessageSquarePlus,
  MessageSquareHeart,
  Settings
} from 'lucide-react';

export const IconMap = {
  "panel-right": PanelRight,
  "panel-left": PanelLeft,
  "new-chat": MessageSquarePlus,
  "discover": MessageSquareHeart,
  "settings": Settings
}

export const SidebarItems = [
  {
    icon: "new-chat",
    label: 'New Chat'
  },
  {
    icon: "discover",
    label: 'Discover'
  }
]

export const SidebarBottomItems = [
  {
    icon: 'settings',
    label: 'Settings'
  }
]