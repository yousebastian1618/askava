import {PiCardsThin} from "react-icons/pi";
import { GoSidebarExpand } from "react-icons/go";
import { GoSidebarCollapse } from "react-icons/go";
import { CiSearch } from "react-icons/ci";
import {JSX} from "react";


export const SidebarItems = [
  {
    name: 'flashcard',
    label: 'Generate Flashcards'
  },
  {
    name: 'search',
    label: 'Previous Interviews'
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
  search: <CiSearch />,
  shrinkSidebar: <GoSidebarExpand />,
  expandSidebar: <GoSidebarCollapse />
};