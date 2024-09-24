



# useThrottle Hook 

## 1- initialise State

Create a state to hold the throttled value using useState.

## 2- Track last Execution Time
useRef to keep track of the last time the function was executed
## 3- useEffect for Throttling

A- Setup a time (using setTimeout) to handle the logic

B- Inside Time

-  Check the timer elapsed since last execution 

- If the elapsed time is greater than or equal to the specified delay , update the throttled value and the last execution time.

C- Calculate the remaining time for next execution (if any)

D- Return CleanUp function to clear the timer

E- Return the throttled value from the hook
