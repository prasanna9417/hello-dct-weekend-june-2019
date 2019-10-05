// This is created by priyanka

def hello():
  print("Hello World") 
  return("hello")


# Define `plus()`
def plus(a,b):
  sum = a + b
  return (sum, a)

# Call `plus()` and unpack variables 
sum, a = plus(3,4)

# Print `sum()`
print(sum)