import {create} from 'zustand'

interface AppStore{
    theme: 'dark' | 'light',
    headerSelectedKey: string,
    setHeaderSelectedKey: (headerSelectedKey: string) => void,
    setTheme: (theme: 'dark' | 'light') => void
}

export const useAppStore = create<AppStore>((set) => ({
    theme: 'light',
    headerSelectedKey: '1',
    setHeaderSelectedKey: (headerSelectedKey: string) => set({headerSelectedKey}),
    setTheme: (theme: 'dark' | 'light') => set({theme})
}))

