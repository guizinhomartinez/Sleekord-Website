function SubpageFuture() {
    return (
        <section className="flex flex-col gap-2 p-10 -mx-10" id="future">
            <div className="mb-3">
                <h1 className="text-4xl font-bold text-center">Future</h1>
                <p className="text-xl font-medium text-center">
                    What you can be sure about this theme
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center w-fit mx-auto justify-center">
                <div
                    className="gap-2 items-center justify-center w-fit mx-auto p-8"
                    id="boxes"
                >
                    <h3 className="text-2xl font-bold mb-2">Open source and free</h3>
                    <p className="mb-4">
                        This theme is open source and free to use, modify and distribute.
                    </p>
                </div>
                <div
                    className="gap-2 items-center justify-center w-fit mx-auto p-8"
                    id="boxes"
                >
                    <h3 className="text-2xl font-bold mb-2">Constant Bug Fixes</h3>
                    <p className="mb-4">
                        No bugs or broken elements like other Discord themes.
                    </p>
                </div>
                <div
                    className="gap-2 items-center justify-center w-fit mx-auto p-8"
                    id="boxes"
                >
                    <h3 className="text-2xl font-bold mb-2">New Feature Drops Weekly</h3>
                    <p className="mb-4">
                        New features are added every week, so you can be sure to have the
                        latest and greatest.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default SubpageFuture;