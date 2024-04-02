"""This helper provides function for basic component operations."""

import subprocess
import platform
import sys
import json
import os


class Colors:
    """ANSI color escape codes."""

    HEADER = "\033[95m"
    BLUE = "\033[94m"
    GREEN = "\033[92m"
    YELLOW = "\033[93m"
    RED = "\033[91m"
    END = "\033[0m"


def start_component(commands, directory):
    """Starts a component."""
    if not os.path.exists(directory):
        print(
            Colors.YELLOW
            + f"Directory '{directory}' does not exist. Skipping component start."
            + Colors.END
        )
        return

    try:
        for command in commands:
            if platform.system() == "Windows":
                subprocess.Popen(f'start cmd /k "{command}"', shell=True, cwd=directory)
            elif platform.system() == "Darwin":  # macOS
                subprocess.Popen(["open", "-a", "Terminal", command], cwd=directory)
            elif platform.system() == "Linux":
                subprocess.Popen(
                    ["gnome-terminal", "--", "bash", "-c", f"{command}; exec bash"],
                    cwd=directory,
                )
            else:
                print("Unsupported operating system.")
                return

        print(
            Colors.GREEN + f"Started {' '.join(commands)} in {directory}" + Colors.END
        )
    except (FileNotFoundError, subprocess.CalledProcessError) as error:
        print(Colors.RED + f"Error starting {' '.join(commands)}: {error}" + Colors.END)


def is_component_active(component):
    """Checks if a component is active."""
    try:
        if platform.system() == "Windows":
            output = subprocess.run(
                f'tasklist /FI "IMAGENAME eq {component}"',
                shell=True,
                stdout=subprocess.PIPE,
                text=True,
                check=True,
            )
            return component.lower() in output.stdout.lower()
        elif platform.system() in ["Darwin", "Linux"]:
            output = subprocess.run(
                ["pgrep", "-f", component],
                stdout=subprocess.PIPE,
                text=True,
                check=True,
            )
            return len(output.stdout.strip()) > 0
        else:
            print("Unsupported operating system.")
            return False
    except subprocess.CalledProcessError:
        return False


def ask_yes_no(question):
    """Asks a yes/no question."""
    while True:
        response = input(question + " (yes/no): ").strip().lower()
        if response in ["y", "yes", ""]:
            return True
        elif response in ["n", "no"]:
            return False
        else:
            print("Please respond with 'yes', 'no', or leave the answer blank.")


def main_menu():
    """Displays the main menu."""
    while True:
        print("\nMenu:")
        print("")
        print("--------------------")
        print(Colors.BLUE + "1. Start Components")
        print("2. Build Components")
        print("3. Install Components")
        print("4. Test Components")
        print("5. Deploy Components")
        print("6. Exit" + Colors.END)
        print("--------------------")
        print("")
        choice = input("Enter your choice (1-6): ").strip().lower()

        try:
            if choice == "1" or choice == "":
                start_components()
            elif choice == "2":
                build_components()
            elif choice == "3":
                install_components()
            elif choice == "4":
                test_components()
            elif choice == "5":
                deploy_components()
            elif choice == "6" or choice == "e":
                print("Exiting...")
                sys.exit()
            else:
                print("Invalid choice. Please enter a number between 1 and 6.")
        except (FileNotFoundError, subprocess.CalledProcessError) as e:
            print(Colors.RED + f"Error: {e}" + Colors.END)


def start_components():
    """Starts all components."""
    for component_name, component in components.items():
        if not os.path.exists(component["directory"]):
            print(
                Colors.YELLOW
                + f"Directory '{component['directory']}' does not exist. Skipping..."
                + Colors.END
            )
            continue

        if is_component_active(component["run"]):
            print(Colors.YELLOW + f"{component_name} is already active." + Colors.END)
            continue

        if ask_yes_no(f"Start {component_name}?"):
            start_component(component["run"], component["directory"])


def build_components():
    """Builds all components."""
    for component_name, component in components.items():
        if not os.path.exists(component["directory"]):
            print(
                Colors.YELLOW
                + f"Directory '{component['directory']}' does not exist. Skipping..."
                + Colors.END
            )
            continue

        if ask_yes_no(f"Build {component_name}?"):
            if component["build"]:
                subprocess.run(
                    component["build"],
                    shell=True,
                    cwd=component["directory"],
                    check=True,
                )


def install_components():
    """Installs all components."""
    for component_name, component in components.items():
        if not os.path.exists(component["directory"]):
            print(
                Colors.YELLOW
                + f"Directory '{component['directory']}' does not exist. Skipping..."
                + Colors.END
            )
            continue

        if ask_yes_no(f"Install {component_name}?"):
            if component["install"]:
                if isinstance(component["install"], list):
                    for install_command in component["install"]:
                        subprocess.run(
                            install_command,
                            shell=True,
                            cwd=component["directory"],
                            check=True,
                        )
                else:
                    subprocess.run(
                        component["install"],
                        shell=True,
                        cwd=component["directory"],
                        check=True,
                    )


def test_components():
    """Tests all components."""
    for component_name, component in components.items():
        if not os.path.exists(component["directory"]):
            print(
                Colors.YELLOW
                + f"Directory '{component['directory']}' does not exist. Skipping..."
                + Colors.END
            )
            continue

        if ask_yes_no(f"Test {component_name}?"):
            subprocess.run(
                component["test"], shell=True, cwd=component["directory"], check=True
            )


def deploy_components():
    """Deploys all components."""
    for component_name, component in components.items():
        if not os.path.exists(component["directory"]):
            print(
                Colors.YELLOW
                + f"Directory '{component['directory']}' does not exist. Skipping..."
                + Colors.END
            )
            continue

        if ask_yes_no(f"Deploy {component_name}?"):
            subprocess.run(
                component["deploy"], shell=True, cwd=component["directory"], check=True
            )


# Load component configurations from JSON file
with open("helper/instructions.json", encoding="utf-8") as file:
    components = json.load(file)

if __name__ == "__main__":
    main_menu()
