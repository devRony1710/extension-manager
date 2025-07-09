import { jsx as _jsx } from "react/jsx-runtime";
import { MainLayout } from "@/layouts";
import { Home } from "@/pages";
function App() {
    return (_jsx(MainLayout, { children: _jsx(Home, {}) }));
}
export default App;
