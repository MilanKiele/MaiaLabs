# Python Virtual Environment Setup

Ensure you have Python installed on your system. You can download Python from [python.org](https://www.python.org/downloads/).

## Commands:

### Virtual Environment Setup:

#### For Windows:

```bash
python -m venv venv
```

#### For Linux/Mac:

```bash
python3 -m venv venv
```

### Activate the Virtual Environment:

#### For Windows:

```bash
venv\Scripts\activate
```

#### For macOS/Linux:

```bash
source venv/bin/activate
```

## Updating the Virtual Environment

Ensure the virtual environment is activated.

```bash
pip install --upgrade pip
```

To install project dependencies:

```bash
pip install -r requirements.txt
```

To update `requirements.txt` with currently installed packages:

```bash
pip freeze > requirements.txt
```

---
