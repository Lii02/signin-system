from datetime import datetime
from dataclasses import dataclass

@dataclass
class SignInData:
	first_name: str
	last_name: str
	timestamp: int
	additional_notes: str

	def get_time_string(self):
		return datetime.fromtimestamp(self.timestamp / 1000).strftime("%m/%d/%Y, %H:%M:%S")