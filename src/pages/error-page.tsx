import { useRouteError } from "react-router-dom";


type ErrorType = {
    statusText?: string;
    message?: string;
};

export default function ErrorPage() {
    const error: ErrorType = useRouteError() as ErrorType;;
    console.error(error);

    return (
        <div id="error-page">
            <dialog open>
                <article>
                    <header>
                        <hgroup>
                            <h1>Oops!</h1>
                            <p>Sorry, an unexpected error has occurred.</p>
                        </hgroup>
                    </header>
                    <p className="p1">
                        <i>{error.statusText || error.message}</i>
                    </p>

                </article>
            </dialog>
        </div>
    );
}