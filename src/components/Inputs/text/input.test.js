import { fireEvent, render, screen } from "@testing-library/react";
import Text from ".";
import masks from "../../../utils/masks";

describe("<Input/>", () => {
  it("Quando tiver error, mostrar a mensagem de erro", () => {
    render(<Text error />);

    const errorMessage = screen.getByTestId("input-error-message");

    expect(errorMessage).toBeInTheDocument();
  });

  it("Quando não tiver error, não mostrar a mensagem de erro", () => {
    render(<Text />);

    const errorMessage = screen.queryByTestId("input-error-message");

    expect(errorMessage).toBeNull();
  });

  it("Quando passar uma máscara, retornar o valor devidamente formatado", () => {
    render(<Text mask={masks.cpf} />);

    const input = screen.queryByTestId("input-text");

    fireEvent.change(input, {target: {value: '12312'}})
    expect(input.value).toBe('123.12')
  });

  it("Quando passar uma máscara, retornar o valor devidamente formatado, sem caracteres especiais ou letras", () => {
    render(<Text mask={masks.cpf} />);

    const input = screen.queryByTestId("input-text");

    fireEvent.change(input, {target: {value: 'abc!@#$%¨&*()-_=+[{]}´`´?/;:,.<>12312'}})
    expect(input.value).toBe('123.12')
  });
});
