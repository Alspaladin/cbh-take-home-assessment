# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here

First, I've checked that length of string created by used hashing function is always 128
This leads to undestanding that length check in the end will be useful only in some of the conditions, so I moved it to the proper place
Then I simplified nested IF checks to make code flat, because it makes it easier to understand
Then I've reordered IF checks in such a manner that one can easily see on which state we go deep in the logic and put that state in the end (of course not breaking initial logic)
In result, one can clearly see on which conditions function uses input data and on which conditions function creates hashed value
