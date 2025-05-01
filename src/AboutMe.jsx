export default function AboutMe() {

    return (
        <section className="flex flex-col items-center gap-8 md:flex-row-reverse md:items-center md:justify-center max-w-7xl mx-auto px-6">
            <img
                alt="Your Photo"
                className="rounded-lg"
                src="assets/IMG_2560.jpg"
                width="175"
                height="175"
            />
            <div className="flex flex-col items-center md:items-start">
                <h1 className="text-4xl md:text-5xl text-center font-semibold">Hi, I'm Alex👋</h1>
                <p className="mt-4 text-lg font-light">A software developer and tech enthusiast from Des Moines, Iowa</p>
                <p className="mt-2 text-lg font-light">
                    I love working full-stack, solving real-world problems, and learning new technologies.
                </p>
                <section className="mt-8 flex items-center gap-8 text-gray-400">
                    <a href="/Alex%20Weakland%20Resume%202025.pdf" target="_blank">
                        <button className="cursor-pointer inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium border border-input bg-background shadow-sm hover:text-white h-9 px-4 py-2 hover:scale-105 transition-all duration-300">
                            <span className="font-semibold">Resume</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-file-down ml-2 size-5">
                                <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                                <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                                <path d="M12 18v-6"></path>
                                <path d="m9 15 3 3 3-3"></path>
                            </svg>
                        </button>
                    </a>
                    <section className="flex gap-6">
                        <a href="https://www.linkedin.com/in/alex-weakland/" target="_blank" className="hover:text-white hover:scale-105 transition-all duration-300" rel="noopener noreferrer" title="LinkedIn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-linkedin size-5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                        </a>
                        <a href="mailto:ajweakland@gmail.com" target="_blank" className="hover:scale-105 transition-all duration-300 hover:text-white" rel="noopener noreferrer" title="Email">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-mail size-5"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                        </a>
                    </section>
                </section>
            </div>
        </section>
    );
}
