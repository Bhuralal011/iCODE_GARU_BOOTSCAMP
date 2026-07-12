assignment 1

python project1_student_management
1. Add Student
2. View All Students
3. Search Student
4. Update Student Information
5. Delete Student
6. Exit


    Features
Add students with automatic grade calculation
View all students in a clean table format
Search by Student ID or Name
Update any field — leave blank to keep old value
Delete with confirmation prompt to prevent accidents
Input validation — rejects invalid marks and duplicate IDs
Runs continuously until user selects Exit


 assignment 2 — Daily Digest CLI

Objective
A command-line app that fetches live weather data from a free public API, displays it in the terminal, and saves a formatted daily report to a text file.

API Used
Open-Meteo — https://api.open-meteo.com

Completely free
No API key required
No signup needed
Returns live weather data in JSON format

Step 1 → Sends HTTP GET request to Open-Meteo API
Step 2 → Receives JSON response with weather data
Step 3 → Converts JSON to Python dictionary
Step 4 → Displays weather info in the terminal
Step 5 → Saves a formatted report to daily_report.txt

Features:
Fetches real-time weather data with zero setup
Converts JSON API response to Python objects
Displays data in readable terminal format
Auto-generates daily_report.txt with date and time
Handles all common network and file errors gracefully
Clean function-based code structure

Concepts Covered:
Functions and Modules
HTTP Requests (requests library)
APIs and JSON parsing
File Handling (open, write)
Error Handling (try/except)
Python datetime module
