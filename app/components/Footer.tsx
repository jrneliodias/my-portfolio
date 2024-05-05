import SocialMedia from "@/app/static/SocialMedia";

export default function Footer() {
    return (
        <footer className="bg-gradient-to-r from-amber-600 to-slate-500">

            <div id="Footer" className="flex  flex-col gap-2 justify-center items-center p-4 bg-gray-800 h-max text-white">
                <p>Contatos</p>
                <SocialMedia size={30} />
            </div>
        </footer>
    )
}