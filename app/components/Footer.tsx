import SocialMedia from '@/app/static/SocialMedia';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-700">
      <div
        id="Footer"
        className="flex flex-col gap-3 justify-center items-center p-8 bg-background text-slate-900 dark:text-white"
      >
        <SocialMedia size={30} />
        <p className="text-sm text-slate-500 dark:text-slate-400">
          © {new Date().getFullYear()} Nélio Dias
        </p>
      </div>
    </footer>
  );
}
