import {
  PanelLeft,
  PanelRight,
  MessageSquarePlus,
  MessageSquareHeart,
  Settings,
  BookType
} from 'lucide-react';

export const IconMap = {
  "panel-right": PanelRight,
  "panel-left": PanelLeft,
  "new-chat": MessageSquarePlus,
  "discover": MessageSquareHeart,
  "settings": Settings,
  'flashcards': BookType
}

export const SidebarItems = [
  {
    icon: 'new-chat',
    label: 'New Chat'
  },
  {
    icon: 'flashcards',
    label: 'Generate Flashcards'
  }
]

export const SidebarBottomItems = [
  {
    icon: 'settings',
    label: 'Settings'
  }
]