import { Link } from "react-router-dom"

const PageNotFound = () => {
    return (
        <>
            <h1 className="text-4xl text-center m-auto w-fit flex place-content-center mt-32">Oops, looks like you went beyond what we have!</h1>
            <p className="text-2xl text-center m-auto w-fit flex place-content-center">Maybe try <Link to='/' className="ml-2 text-sky-500 dark:text-sky-400 hover:underline"> going back to our home page!</Link></p>
        </>
    )
}

export default PageNotFound