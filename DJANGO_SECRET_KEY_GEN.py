import secrets
import string

KEY = "".join(secrets.choice(string.digits + string.ascii_letters + string.punctuation) for i in range(100))

print(KEY)