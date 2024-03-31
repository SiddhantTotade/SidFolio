import { create } from "zustand";

import type {} from "@redux-devtools/extension";

interface DataStore {
  activeTab: string;
  setActiveTab: any;
  isLoading: boolean;
  aboutData: any[];
  skillsData: any[];
  projectData: any[];
}

const url = process.env.NEXT_PUBLIC_PRODUCTION_URL;

export const useDataStore = create<DataStore>((set, get) => ({
  activeTab: "home",
  aboutData: [],
  skillsData: [],
  projectData: [],
  isLoading: true,
  setActiveTab: (tab: string) => set({ activeTab: tab }),
  fetchAbout: async () => {
    set({ isLoading: true });
    try {
      const response = await fetch(url + "/api/about/", { method: "GET" });
      const data = await response.json();
      set({ aboutData: data });
      set({ isLoading: false });
    } catch (err) {
      console.log(err);
    }
  },
  fetchProject: async () => {
    set({ isLoading: true });
    try {
      const response = await fetch(url + "/api/projects/", { method: "GET" });
      const data = await response.json();
      set({ projectData: data });
      set({ isLoading: false });
    } catch (err) {
      console.log(err);
    }
  },
}));
