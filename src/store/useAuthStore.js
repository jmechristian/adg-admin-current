import { create } from 'zustand';

const useAuthStore = create((set) => ({
  isAuthenticated: true,
  user: {
    id: 'f01a7b31-392b-4c77-933c-45ce75849ea4',
    name: 'Jamie Christian',
    email: 'jamie@adg.com',
    role: 'ADMIN',
  },
  login: (user) => set({ isAuthenticated: true, user }),
  logout: () => set({ isAuthenticated: false, user: null }),
}));

export default useAuthStore;
