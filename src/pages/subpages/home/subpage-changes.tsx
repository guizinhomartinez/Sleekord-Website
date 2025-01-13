function SubpageChanges() {
    return (
        <section
            className="flex flex-col gap-2 p-10 -mx-10 mt-10 mb-0"
            id="changes"
        >
            <div className="mb-3">
                <h1 className="text-4xl font-bold text-center">Changes</h1>
                <p className="text-xl font-medium text-center">
                    What the theme changes from the default Discord experience
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center w-fit mx-auto justify-center">
                <div
                    className="gap-2 items-center justify-center w-fit mx-auto p-10"
                    id="boxes"
                >
                    <h3 className="text-2xl font-bold mb-2">
                        Rounded Corners on Everything
                    </h3>
                    <p className="mb-4">
                        Now all the pointy corners are rounded and easy on the eyes.
                    </p>
                </div>
                <div
                    className="gap-2 items-center justify-center w-fit mx-auto p-10"
                    id="boxes"
                >
                    <h3 className="text-2xl font-bold mb-2">
                        Full White Theme Compatibility
                    </h3>
                    <p className="mb-4">
                        You can use Discord while blinding your eyes with no worries.
                    </p>
                </div>
                <div
                    className="gap-2 items-center justify-center w-fit mx-auto p-10"
                    id="boxes"
                >
                    <div className="relative w-full duration-5" id="ping">
                        <p className="absolute rounded-full duration-5 transition-opacity size-6 -right-12 -top-12 animate-ping bg-green-300 dark:bg-green-500/50"></p>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">
                        New Animations, Better Experience
                    </h3>
                    <p className="mb-4">
                        Little animations to make the experience more smooth and enjoyable.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default SubpageChanges;