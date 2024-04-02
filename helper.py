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

        except (FileNotFoundError, subprocess.CalledProcessError) as error:
            print(f"Error: {error}")

        except Exception as er:  # pylint: disable=broad-except
            print(f"An unexpected error occurred: {er}")


def execute_menu_option(components, option):
    """Executes the selected menu option for each component."""
    for component in components:
        if ask_yes_no(f"Do you want to {option} {component}?"):
            execute_component_command(components, component, option)


def execute_component_command(components, component, option):
    """Executes commands for a component."""
    cwd = os.path.abspath(components[component]["directory"])
    commands = components[component][option][0][platform.system().lower()]

    # Concatenate all commands into a single string
    all_commands = " && ".join(commands)

    if platform.system() == "Windows":
        # On Windows, use 'start cmd /k' to keep the terminal window open after execution
        subprocess.Popen(f'start cmd /k "{all_commands}"', cwd=cwd, shell=True)
    elif platform.system() == "Linux":
        # On Linux, use 'x-terminal-emulator -e' to open a new terminal window
        subprocess.Popen(["x-terminal-emulator", "-e", all_commands], cwd=cwd)


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
        try:
            components_instructions = json.load(f)
        except json.JSONDecodeError as e:
            print(f"JSON decoding error: {e}")
            # Print the line and column where the error occurred
            print(f"Error occurred at line {e.lineno}, column {e.colno}.")
            sys.exit(1)

    main_menu(components_instructions)
