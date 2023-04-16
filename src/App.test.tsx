import { describe, test, expect } from "vitest";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; // add this import
import App from "./App";

describe("<App />", () => {
  test("Validando titulos", () => {
    const wrapper = render(<App />);
    expect(wrapper).toBeTruthy();

    // Get by h1
    const h1 = wrapper.container.querySelector("h1");
    expect(h1?.textContent).toBe("Datos estadísticos del mercado");

    // Get by h5
    const h5 = wrapper.container.querySelector("h5");
    expect(h5?.textContent).toBe("Seleccionar para filtrar la información");
  });
  test("Validar que los botones para filtrar esten visibles", () => {
    const wrapper = render(<App />);
    const button = wrapper.container.querySelector(
      "button"
    ) as HTMLButtonElement;
    expect(button).toBeVisible();
  });
});
