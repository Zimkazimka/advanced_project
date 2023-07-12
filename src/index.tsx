import {someFn} from "test";
import App from "./app/App";
import {BrowserRouter} from "react-router-dom";
import {createRoot} from "react-dom/client";
import ThemeProvider from "./app/providers/ThemeProvider/ui/ThemeProvider";

someFn(12)

const root = createRoot(document.getElementById('root')!)

root.render(
    <BrowserRouter>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </BrowserRouter>
)
