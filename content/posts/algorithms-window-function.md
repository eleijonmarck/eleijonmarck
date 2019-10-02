---
title: "Algorithms: Window Functions"
date: 2019-09-25
published: true
tags: ["leetcode", "algorithms"]
cover_image: ""
series: true
canonical_url: false
description: "Trick to help with reducing time complexity when interacting over multiple elements in array"
---
# Algorithms: Window Functions

A window function can be used to reduce complexity when one needs to interact over multiple elements in a array. Example here is [leetcode#424](https://leetcode.com/problems/longest-repeating-character-replacement/) where we need to calculate the longest repeating character over some array. Also we can add replacements of the array to make it longer, but this is really just an add on; the meat of the bone is the window function algorithm.

### Problem
Given a string s that consists of only uppercase English letters, you can perform at most `k` operations on that string.
In one operation, you can choose any character of the string and change it to any other uppercase English character.
Find the length of the longest sub-string containing all repeating letters you can get after performing the above operations.

```
Input:
s = "AABABBA", k = 1

Output:
4

Explanation:
Replace the one 'A' in the middle with 'B' and form "AABBBBA".
The substring "BBBB" has the longest repeating letters, which is 4.
```

### Solution

Creating a window that moves based on criteria and that stores the information we need.
```python
"""
window:
i - increment i once we have reached k replacements of the characters
j - increment j while we have replacements to make

A A B A B B A
i
  j

variables:
current_max_letter_count - current consecutive letters found
global_max_count - global count of the consecutive letters found
letter_count - hashmap of nb of occurenes currently in the window
"""
```

The code will then consist of two while loops where we traverse j until the end.

```python
max_letter_count = 0
global_max_count = 0
letter_count = {}

i = 0
j = 0
while j < len(s):

    # initialize the char key for each char meet
    if s[j] not in letter_count:
        letter_count[s[j]] = 0
    
    # increment seen characters
    letter_count[s[j]] += 1

    # max number of letters, checking from previous max letter to increased letter count
    # max_letter_count = max(max_letter_count, letter_count[s[j]])
    max_letter_count = max(max_letter_count, letter_count[s[j]])

    # characters_in_window = j - i + 1
    characters_in_window = j - i + 1
    # replaced_characters = (j - i + 1) - max_letter_count
    while characters_in_window - max_letter_count > k:
        letter_count[s[i]] -= 1
        i += 1
        
    global_max_count = max(global_max_count, characters_in_window)
    j += 1

return global_max_count
```

Video explanation coming shortly