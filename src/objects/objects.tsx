import {PiCardsThin} from "react-icons/pi";
import { GoSidebarExpand } from "react-icons/go";
import { GoSidebarCollapse } from "react-icons/go";
import {JSX} from "react";


export const SidebarItems = [
  {
    name: 'flashcard',
    label: 'Generate Flashcards'
  }
]

export const sampleJobTitles = [
  'Frontend Engineer',
  'Account Analyst',
  'Civil Engineer',
  'Librarian',
  'Design Engineer',
  'Dental Hygienist',
  'Web Developer II',
  'Director of Sales'
]

export const IconMap: Record<string, JSX.Element> = {
  flashcard: <PiCardsThin />,
  shrinkSidebar: <GoSidebarExpand />,
  expandSidebar: <GoSidebarCollapse />
};