## Coding Challenge FactoredAI

### Run the project:

1. **Clone this repository**
    - Download the project by clicking the green "Code" button and then select "Download ZIP".
    - Once downloaded, extract the contents to a location you can easily access, such as your desktop.

2. **Go to the project directory**
    - Open the extracted folder containing the project.

3. **Build the project**
    - Use Docker to set up the project. Follow these steps:
        - Open the Terminal or Command Prompt on your computer.
        - Type: `docker build -t coding_challenge_front .`
        - Press "Enter". It might take a few minutes to finish.

4. **Run the project**
    - Run the project by following these steps:
        - In the Terminal or Command Prompt, type: `docker run -d -p 5173:5173 --name frontend_coding_challenge coding_challenge_front`
        - Press "Enter".
        - After a short while, the project will start running in the background.

After completing these steps, the project should be up and running. Open a web browser and go to `http://localhost:5173` to see the project in action.


