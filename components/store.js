import create from 'zustand';

const useStore = create((set) => ({
  historico: [],

  historicoJogo: (dado1, dado2, resultado) => {
    set((state) => ({
      historico: [
        ...state.historico,
        { dado1: dado1, dado2: dado2, resultado: resultado },
      ],
    }));
  },
}));

export default useStore;
