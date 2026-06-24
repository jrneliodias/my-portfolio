const Tag = ({ title }: { title: string }) => {
  return (
    <div className="bg-teal-500/10 hover:bg-teal-500/20 dark:bg-teal-400/10 dark:hover:bg-teal-400/40 scale-100 hover:scale-105 flex items-center rounded-full px-3 py-1 text-xs font-medium leading-5 text-teal-700 dark:text-teal-300 md:text-base transition-all duration-150">
      {title}
    </div>
  );
};

export default Tag;