export const emailTemplate = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Email Title</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        header {
            background-color: #007bff;
            color: #ffffff;
            text-align: center;
            padding: 20px 0;
        }
        header h1 {
            margin: 0;
            font-size: 24px;
        }
        main {
            padding: 20px;
        }
        footer {
            background-color: #007bff;
            color: #ffffff;
            text-align: center;
            padding: 10px 0;
        }
        footer p {
            margin: 0;
            font-size: 14px;
        }
        a {
            color: #007bff;
            text-decoration: none;
        }
        a:hover {
            text-decoration: underline;
        }
    </style>
</head>
<body>
    <div class="container">
        <header>
            <h1>MaiaLabs</h1>
        </header>
        <main>{content}</main>
        <footer>
            <p>&copy; 2024 MaiaLabs. All rights reserved.</p>
        </footer>
    </div>
</body>
</html>
`;
