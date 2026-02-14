import { describe, it, expect } from "vitest";
import { screen } from "@testing-library/react";
import { render } from "../../test/utils/test-utils";
import PageNotFound from "./PageNotFound";

describe("PageNotFound Page", () => {
    it("should render 404 message", () => {
        render(<PageNotFound />);
        expect(
            screen.getByRole("heading", { name: /404 - page not found/i }),
        ).toBeInTheDocument();
    });
});
