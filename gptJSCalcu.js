<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Binary to Decimal Converter</title>
    <script>
        function convertBinaryToDecimal() {
            const binaryInput = document.getElementById("binaryInput").value;
            const decimalOutput = parseInt(binaryInput, 2);
            if (isNaN(decimalOutput)) {
                document.getElementById("decimalOutput").innerText = "Invalid binary number!";
            } else {
                document.getElementById("decimalOutput").innerText = decimalOutput;
            }
        }
    </script>
</head>
<body>
    <h1>Binary to Decimal Converter</h1>
    <label for="binaryInput">Enter a binary number:</label>
    <input type="text" id="binaryInput" placeholder="e.g., 1010">
    <button onclick="convertBinaryToDecimal()">Convert</button>
    <h2>Decimal Output: <span id="decimalOutput"></span></h2>
</body>
</html>
