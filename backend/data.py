from datetime import datetime

class SignInData:
    def __init__(self, first_name: str, last_name: str, timestamp: int, additional_notes: str):
        self.first_name = first_name
        self.last_name = last_name
        self.time_string = datetime.fromtimestamp(timestamp).strftime("%m/%d/%Y, %H:%M:%S")
        self.additional_notes = additional_notes

    def __str__(self):
        return f"{self.first_name} {self.last_name} | {self.time_string} | {self.additional_notes}"