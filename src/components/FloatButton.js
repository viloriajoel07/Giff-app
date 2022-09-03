import { Icon } from "@iconify/react";

export const FloatButton = () => {
  return (
    <a
      href="#anchor"
      className="fixed text-xl text-white bg-slate-800 bottom-4 right-4 sm:bottom-8 sm:right-8 w-10 h-10 rounded-full flex items-center justify-center"
    >
      <span>
        <Icon icon="akar-icons:arrow-up" />
      </span>
    </a>
  );
};
