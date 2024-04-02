"""Helps to manage the components of a project."""

import subprocess
import platform
import sys
import json
import os


def main_menu(components):
    """Displays the main menu."""
    while True:
        print("\nMenu:")
        print("--------------------")
        print("1. Start Components")
        print("2. Build Components")
        print("3. Install Components")
        print("4. Update Components")
        print("5. Test Components")
        print("6. Start Components")
        print("7. Exit")
        print("--------------------")
        choice = input("Enter your choice (1-7): ").strip().lower()

        try:
            if choice == "1":
                execute_menu_option(components, "run")
            elif choice == "2":
                execute_menu_option(components, "build")
            elif choice == "3":
                execute_menu_option(components, "install")
            elif choice == "4":
                execute_menu_option(components, "update")
            elif choice == "5":
                execute_menu_option(components, "test")
            elif choice == "6":
                execute_menu_option(components, "start")
            elif choice == "7" or choice == "e":
                print("Exiting...")
                sys.exit()
            else:
                print("Invalid choice. Please enter a number between 1 and 7.")

        except (FileNotFoundError, subprocess.CalledProcessError) as e:
            print(f"Error: {e}")

        except Exception as e:  # pylint: disable=broad-except
            print(f"An unexpected error occurred: {e}")


def execute_menu_option(components, option):
    """Executes the selected menu option for each component."""
    for component in components:
        if ask_yes_no(f"Do you want to {option} {component}?"):
            execute_component_command(components, component, option)


def execute_component_command(components, component, option):
    """Executes commands for a component."""
    cwd = os.path.abspath(components[component]["directory"])
    if platform.system().lower() == "windows":
        # Write commands to a temporary batch script
        script_path = os.path.join(cwd, "temp_script.bat")
        with open(script_path, "w", encoding="utf-8") as script_file:
            for command in components[component][option][0]["windows"]:
                script_file.write(command + "\n")
            script_file.write("pause")
        # Open a new terminal window and execute the batch script
        subprocess.Popen(["start", "cmd", "/K", script_path], cwd=cwd, shell=True)
    else:
        # For non-Windows platforms, execute commands sequentially in a single terminal window
        all_commands = "; ".join(components[component][option][0]["linux"])
        subprocess.Popen(
            [
                "gnome-terminal",
                "--",
                "bash",
                "-c",
                f"source venv/bin/activate && {all_commands}; read -p 'Press Enter to continue'",
            ]
        )


def ask_yes_no(question):
    """Asks a yes/no question."""
    while True:
        response = input(question + " (yes/no): ").strip().lower()
        if response in ["y", "yes"]:
            return True
        elif response in ["n", "no", ""]:
            return False
        else:
            print("Please respond with 'yes', 'no', or leave the answer blank.")


if __name__ == "__main__":
    with open("helper/instructions.json", encoding="utf-8") as f:
        components_instructions = json.load(f)

    main_menu(components_instructions)
