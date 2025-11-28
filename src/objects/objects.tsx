import {PiCardsThin} from "react-icons/pi";
import {JSX} from "react";


export const SidebarItems = [
  {
    name: 'flashcard',
    label: 'Generate Flashcards'
  }
]


export const IconMap: Record<string, JSX.Element> = {
  flashcard: <PiCardsThin />
};