import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { MemoryRouter } from "react-router-dom";
import quizReducer from "../../features/quiz/quizSlice";
import gemgenaiReducer from "../../features/gemgenai/gemgenaiSlice";

/**
 * Custom render function that wraps components with necessary providers
 * @param {React.Component} ui - Component to render
 * @param {Object} options - Render options
 * @param {Object} options.preloadedState - Initial Redux state
 * @param {Array} options.initialEntries - Initial router entries
 * @param {Object} options.store - Custom store (optional)
 * @returns {Object} - Render result with store
 */
export function renderWithProviders(
    ui,
    {
        preloadedState = {},
        initialEntries = ["/"],
        store = configureStore({
            reducer: {
                quiz: quizReducer,
                gemgenai: gemgenaiReducer,
            },
            preloadedState,
        }),
        ...renderOptions
    } = {},
) {
    function Wrapper({ children }) {
        return (
            <Provider store={store}>
                <MemoryRouter initialEntries={initialEntries}>{children}</MemoryRouter>
            </Provider>
        );
    }

    return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}

// Re-export everything from React Testing Library
export * from "@testing-library/react";
export { renderWithProviders as render };
