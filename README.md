# Employee Code Sorting Script

This script is designed to read a list of employee codes from an input file, apply a custom sorting algorithm, and then write the sorted employee codes to an output file. The sorting criteria include sorting primarily by the first character, then by the last character in case of a tie, and finally, by the numerical values between the first and last characters when both the first and last characters are the same.

## How it Works

1. **Input File**: The employee codes are read from an input file specified in the script (`data.txt` by default).

2. **Sorting Algorithm**: The script uses a custom sorting algorithm that compares the first and last characters of each employee code, along with the numerical values between the first and last characters when needed.

3. **Output File**: The sorted employee codes are then written to an output file specified in the script (`output.txt` by default).

## Usage

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/amine1999henchi/Sorted_Employees.git
