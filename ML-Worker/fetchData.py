import pandas as pd
def filterDataSpeedAndNPD():
    # Load the CSV file
    df = pd.read_csv("output.csv")

    # Filter rows where license_plate_text or speed_kmh are missing
    df_filtered = df.dropna(subset=['license_plate_text', 'speed_kmh'])

    # Remove duplicates, keeping the last occurrence for each license plate
    df_unique = df_filtered.drop_duplicates(subset=['license_plate_text'], keep='last')

    # Select only the license_plate_text and speed_kmh columns
    df_selected = df_unique[['license_plate_text', 'speed_kmh']]

    # Get the first 5 rows
    df_first_five = df_selected.head(5)

    # Convert to JSON format
    json_output = df_first_five.to_dict(orient="records")

    # Print JSON output
    print(json_output)

    # Save the first 5 rows of the filtered DataFrame to a new CSV file
    df_first_five.to_csv("filtered_data_for_challan.csv", index=False)
