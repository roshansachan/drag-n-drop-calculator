export default function (symbol) {
    switch (symbol) {
        case '/':
            return '÷';
        case '*':
            return '×';
        default:
            return symbol;
    }
}