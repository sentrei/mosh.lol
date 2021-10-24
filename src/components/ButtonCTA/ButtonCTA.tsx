import type { FC } from "react";

import { useModalWindow } from "@/hooks/useModalWindow";

export const ButtonCTA: FC = () => {
  const [, setModalOpen] = useModalWindow();

  const openModal = () => {
    setModalOpen(true);
  };

  return (
    <div className="flex justify-center pt-6">
      <div className="inline-flex space-x-6">
        <button
          disabled
          className="inline-flex justify-center items-center py-2 px-4 text-sm font-medium leading-6 text-center text-trueGray-50 disabled:hover:bg-gray-300 bg-gradient-to-r from-pink-400 hover:from-pink-300 disabled:hover:from-pink-400 via-purple-400 hover:via-purple-300 disabled:hover:via-purple-400 to-indigo-500 hover:to-indigo-400 disabled:hover:to-indigo-500 rounded-md border hover:border-2 disabled:hover:border border-gray-600 shadow-xl disabled:opacity-60 hover:scale-105 disabled:hover:scale-100"
        >
          Enter App
        </button>
        <button
          className="inline-flex justify-center items-center py-2 px-4 text-sm font-medium leading-6 text-center text-pink-400 bg-pink-100 hover:bg-pink-200 rounded-md border border-transparent hover:border-red-400 focus:ring-pink-500"
          onClick={openModal}
        >
          Learn More
        </button>
      </div>
    </div>
  );
};
