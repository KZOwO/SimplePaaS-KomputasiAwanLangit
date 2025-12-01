function calculate() {
    const input = document.getElementById("calcInput").value;

    try {
        const result = math.evaluate(input);
        document.getElementById("result").textContent = result;
    } catch (error) {
        document.getElementById("result").textContent = "Error";
    }
}
