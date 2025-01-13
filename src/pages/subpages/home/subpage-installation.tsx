import { Copy, CopyCheck } from "lucide-react";
import { toast, Toaster } from "sonner";

function SubpageInstallation() {
    const codeBlock = `/* 𝓯𝓻𝓮𝓪𝓴𝔂 */
  @import url('https://fonts.cdnfonts.com/css/satoshi');
  @import url('https://fonts.cdnfonts.com/css/sf-pro-display');
  @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap');
  
  :root {
      /* may be useful later for making new variables, for now, it only serves
      to change the blur ammount in sections like the top bar and typing thing */
      --blur-ammount: 50px;
      --font-primary: "SF Pro Display", Satoshi, "gg sans", sans-serif;
      --font-code: "JetBrains Mono", "gg mono";
  }`;

    return (
        <section id="installation" className="flex flex-col gap-2 p-10 -mx-10 my-10 rounded-3xl shadow-xl">
            <div>
                <div className="mb-5">
                    <h1 className="text-5xl font-bold text-center">Installation</h1>
                    <p className="text-xl font-medium text-center">Liked the theme so far? How about you try it yourself!</p>
                </div>
                <div>
                    <div>
                        <p className="text-xl font-medium text-center mb-5">
                            ⚠️ Before doing any of the steps below, make sure you have some
                            sort of Discord client modifier (Vencord, BetterCord, etc). The
                            entire theme was written with Vencord in my mind, so some features
                            may not work properly on other clients ⚠️
                        </p>
                        <p className="mb-2">
                            There are two ways of using this theme:{" "}
                            <a href="#manual">manually</a> and{" "}
                            <a href="#automatic">automatically (recommended)</a>. The manual
                            way is more complicated but allows you to change variables in the
                            theme.
                        </p>
                        <h2 className="text-2xl font-bold mt-4 mb-2" id="manual">
                            Manual Installation
                        </h2>
                        <p className="mb-2">
                            Let's start with the manual. First, click{" "}
                            <a href="https://github.com/guizinhomartinez/custom-discord-theme/archive/refs/tags/0.2.zip">
                                here
                            </a>{" "}
                            to download the latest stable version of the theme (also avaliable
                            by clicking in the <i>Releases</i> section of GitHub). Now that
                            you have
                            <code className="dark:text-[#e9e9e9] dark:bg-[#171717] text-black bg-slate-300 rounded-sm p-1 px-2 mx-1">
                                0.2.zip
                            </code>
                            downloaded on your computer, extract it and now you will have a
                            file called
                            <code className="dark:text-[#e9e9e9] dark:bg-[#171717] text-black bg-slate-300 rounded-sm p-1 px-2 mx-1">
                                theme.css
                            </code>
                            . Now that we have this, we can continue.
                        </p>
                        <p>
                            Now, on Discord, go to{" "}
                            <code className="dark:text-[#e9e9e9] dark:bg-[#171717] text-black bg-slate-300 rounded-sm p-1 px-2 mx-1">
                                Settings {">"} Vencord {">"} Themes {">"} Open Themes Folder
                            </code>{" "}
                            (in the case of Vencord. If you are using something else, the
                            steps should be similar). Your file browser program will open up.
                            Now throw the{" "}
                            <code className="dark:text-[#e9e9e9] dark:bg-[#171717] text-black bg-slate-300 rounded-sm p-1 px-2 mx-1">
                                theme.css
                            </code>{" "}
                            file there, restart Discord and the theme should appear in the
                            list!
                        </p>
                        <p>
                            The cool thing about this approach is that inside the file there
                            are some mini settings you can tweak to make the theme{" "}
                            <span>truly yours</span>.
                        </p>
                        <p>
                            Here is the start of the theme file in case you're not confused:
                        </p>
                        <div className="mockup-code light:bg-white my-5 border-2 border-[#1f1f1f7e] dark:bg-[#171717] bg-slate-300 text-[#213547] rounded-xl relative">
                            <pre className="px-5 dark:text-[#e9e9e9]">
                                <code>{codeBlock}</code>
                            </pre>
                        </div>
                        <p>
                            Here, you can change three variables:
                            <code className="dark:text-[#e9e9e9] dark:bg-[#171717] text-black bg-slate-300 rounded-sm p-1 px-2 mx-1">
                                --blur-amount
                            </code>
                            ,
                            <code className="dark:text-[#e9e9e9] dark:bg-[#171717] text-black bg-slate-300 rounded-sm p-1 px-2 mx-1">
                                --font-primary
                            </code>{" "}
                            and
                            <code className="dark:text-[#e9e9e9] dark:bg-[#171717] text-black bg-slate-300 rounded-sm p-1 px-2 mx-1">
                                --font-code
                            </code>
                            . The names should give you a clue about what they do. It is
                            important to note that if you want to add a new custom font you
                            either need it installed on your computer or imported (just like
                            in the first few lines) from some website. Also important to note
                            that you can do the same process but with the latest builds.
                            Download the source code and boom! You have the latest build. A
                            sad thing is that this method does not allow for automatic
                            updates.
                        </p>
                        <h2 className="text-2xl font-bold mt-4 mb-2" id="automatic">
                            Automicatic Installation
                        </h2>
                        <p>
                            If you don't care about changing settings and don't want to
                            manually update the theme every update (or want the latest builds)
                            follow these instructions 👇
                        </p>
                        <p>
                            On Vencord, go to{" "}
                            <code className="dark:text-[#e9e9e9] dark:bg-[#171717] text-black bg-slate-300 rounded-sm p-1 px-2 mx-1">
                                Settings {">"} Vencord {">"} Theme {">"} Online Themes
                            </code>
                            . There, paste this line:
                        </p>
                        <div className="flex relative">
                            <div className="mockup-code light:bg-white my-5 border-2 border-[#1f1f1f7e] dark:bg-[#171717] bg-slate-300 text-[#213547] rounded-xl relative w-full">
                                <pre className="px-5 dark:text-[#e9e9e9]">
                                    <code>
                                        https://raw.githubusercontent.com/guizinhomartinez/custom-discord-theme/refs/heads/main/theme.css
                                    </code>
                                </pre>
                            </div>
                            <CopyToClipboardFunc />
                        </div>
                        <p>
                            In the same moment, the theme should apply itself. That's it,
                            you're done!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

function CopyToClipboardFunc() {
    return (
        <div onClick={() => { copyToClipboard("https://raw.githubusercontent.com/guizinhomartinez/custom-discord-theme/refs/heads/main/theme.css"), toast("Copied to clipboard!"); }}>
            <Copy className="copy-to-clipboard text-black dark:text-white mx-auto w-fit" id="copy-to-clip" />
            <CopyCheck className="copy-to-clipboard text-green-600 dark:text-green-500 hidden mx-auto w-fit" id="copy-to-clip-check" />
            <Toaster />
        </div>
    );
}

function copyToClipboard(text = "") {
    navigator.clipboard.writeText(text);
    const copyToClip = document.getElementById("copy-to-clip");
    const copyCheck = document.getElementById("copy-to-clip-check");

    copyCheck && copyCheck.classList.remove("hidden");
    copyToClip && copyToClip.classList.add("hidden");

    setTimeout(() => {
        copyCheck && copyCheck.classList.add("hidden");
        copyToClip && copyToClip.classList.remove("hidden");
    }, 1500);
}

export default SubpageInstallation;