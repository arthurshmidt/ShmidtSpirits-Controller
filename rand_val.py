# Python code to demonstrate the working of
# choice() and randrange()

# importing "random" for random operations
import random

# using randrange() to generate in range from 0
# to 100. The last parameter 3 is step size to skip
# three numbers when selecting.
# print("A random number from range is : ", end="")
# print(random.randrange(0, 100))

def random_value(low=0, high=100):
    value = random.randrange(0,100)

    return value
