import { atom } from 'jotai'

export enum NavState {
	Firms = "firms",
	About = "about"
}

const navbarStateAtom = atom<NavState>(NavState.Firms)

export {
	navbarStateAtom
}
