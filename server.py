import random
import time
import json

FILENAME = "test.json"

data = {
        "value": 0
        }

def save_data(random_value):
    data["value"] = random_value
    with open(FILENAME,"w") as outfile:
        json.dump(data,outfile)
    return data

def randomize():
    print("entering loop")
    value = random.randint(0,9)
    print("leaving loop")
    return value

if __name__ == '__main__':
    
    # Initialize values
    with open(FILENAME,"w") as outfile:
        json.dump(data,outfile)

    # Main Control Loop
    while True:
        random_integer = randomize()
        print(f"Random Integer: {random_integer}")
        print(f"Data Saved: {save_data(random_integer)}")
        time.sleep(1)
