let chart;

function plotGraph() {
    const expr = document.getElementById("graphInput").value;
    const xValues = [];
    const yValues = [];

    for (let x = -20; x <= 20; x += 0.1) {
        try {
            const scope = { x: x };
            const y = math.evaluate(expr, scope);
            xValues.push(x);
            yValues.push(y);
        } catch (e) {
            alert("Invalid function");
            return;
        }
    }

    if (chart) chart.destroy();

    const ctx = document.getElementById("graphCanvas");
    chart = new Chart(ctx, {
        type: "line",
        data: {
            labels: xValues,
            datasets: [{
                label: `f(x) = ${expr}`,
                data: yValues,
                borderWidth: 1
            }]
        },
        options: {
            scales: { x: { display: false } }
        }
    });
}
