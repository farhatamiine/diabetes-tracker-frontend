import {useRouteError} from "react-router-dom";

type ErrorType =  {
    statusText:String,
    message:String
}

export default function ErrorPage() {
    // @ts-ignore
    const error:ErrorType = useRouteError();
    console.error(error);

    return (
        <div id="error-page" className="flex justify-center align-center h-full flex-col">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
}