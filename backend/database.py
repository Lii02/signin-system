import sqlite3

DB_NAME = "signin.db"

class Database:
    def __init__(self):
        self.handle = sqlite3.connect(DB_NAME)
        if not self.check_table():
            self.handle.execute(open("init.sql", "r").read())
        self.handle.commit()

    def close(self):
        self.handle.close()

    def check_table(self):
        c = self.handle.cursor()
        c.execute(open("check.sql", "r").read())
        return c.fetchone()

    def add(self, first_name: str, last_name: str, timestamp: int, additional_notes: str):
        self.handle.execute(f"INSERT INTO SignIns (firstName, lastName, timestamp, additionalNotes) VALUES ('{first_name}', '{last_name}', '{timestamp}', '{additional_notes}')")
        self.handle.commit()
        print(f"Added sign in [{first_name} {last_name} | {timestamp} | {additional_notes}]")