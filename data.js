const dsaData = {
    1: {
        name: "Arrays & Loops",
        description: "Master the fundamentals of arrays and iteration patterns",
        problems: [
            // Basic Traversal (5 problems)
            {
                title: "Find Maximum Element in Array",
                why: "Learn basic array traversal - the foundation of all array algorithms",
                future: "Used in sorting algorithms, optimization problems, and data analysis",
                hint: "Keep track of the largest number seen so far while going through each element",
                difficulty: "easy"
            },
            {
                title: "Find Minimum Element in Array", 
                why: "Practice array traversal with different comparison logic",
                future: "Essential for finding optimal solutions and boundary conditions",
                hint: "Similar to finding max, but compare for smaller values instead",
                difficulty: "easy"
            },
            {
                title: "Sum of All Elements",
                why: "Learn accumulation pattern - adding values as you iterate", 
                future: "Foundation for statistics, averaging, and aggregate operations",
                hint: "Start with sum = 0, then add each element to the sum",
                difficulty: "easy"
            },
            {
                title: "Count Even Numbers",
                why: "Learn conditional counting - a fundamental programming pattern",
                future: "Used in filtering data, statistics, and condition-based algorithms", 
                hint: "Use modulo operator (%) to check if number is divisible by 2",
                difficulty: "easy"
            },
            {
                title: "Find Average of Array",
                why: "Combine sum calculation with division - basic statistics",
                future: "Essential for data analysis, machine learning, and decision making",
                hint: "First find the sum, then divide by the number of elements", 
                difficulty: "easy"
            },

            // Searching Fundamentals (8 problems)
            {
                title: "Linear Search for Element",
                why: "Learn the most basic search algorithm - foundation of all searching",
                future: "Used when data isn't sorted, base for more complex searches",
                hint: "Go through each element one by one and compare with target",
                difficulty: "easy"
            },
            {
                title: "Find Index of Element",
                why: "Extend searching to return position information", 
                future: "Essential for locating data positions in databases and arrays",
                hint: "Same as linear search, but return the index instead of true/false",
                difficulty: "easy"
            },
            {
                title: "Count Occurrences of Element",
                why: "Learn to count how many times something appears",
                future: "Used in frequency analysis, statistics, and data processing", 
                hint: "Go through array and increment counter when you find the target",
                difficulty: "easy"
            },
            {
                title: "Find All Indices of Element",
                why: "Collect all positions where element appears",
                future: "Important for finding all matches in text processing and data analysis",
                hint: "Store each index where you find the target in a result array",
                difficulty: "medium"
            },
            {
                title: "Find First Occurrence",
                why: "Learn to stop searching once you find what you need", 
                future: "Optimization technique for early termination in algorithms",
                hint: "Return immediately when you find the first match",
                difficulty: "easy"
            },
            {
                title: "Find Last Occurrence", 
                why: "Practice searching from end or continuing through entire array",
                future: "Used in string processing and finding latest updates",
                hint: "Either search backwards or keep track of the last found index",
                difficulty: "medium"
            },
            {
                title: "Check if Element Exists",
                why: "Simple boolean search - fundamental for validation",
                future: "Used in membership testing and validation systems",
                hint: "Return true as soon as you find it, false if you reach the end",
                difficulty: "easy"
            },
            {
                title: "Binary Search in Sorted Array",
                why: "Learn logarithmic searching - much faster than linear",
                future: "Foundation for efficient algorithms, used everywhere in computing", 
                hint: "Check middle element, then search left or right half based on comparison",
                difficulty: "medium"
            },

            // Array Manipulations (8 problems)
            {
                title: "Reverse Array In-Place",
                why: "Learn to modify arrays without using extra space",
                future: "Memory-efficient technique used in many optimization problems",
                hint: "Swap elements from start and end, moving towards center", 
                difficulty: "medium"
            },
            {
                title: "Rotate Array Left by K Positions",
                why: "Learn array rotation - important for circular operations",
                future: "Used in scheduling, circular buffers, and image processing",
                hint: "Move elements K positions to the left, wrap around at the beginning",
                difficulty: "medium"
            },
            {
                title: "Rotate Array Right by K Positions", 
                why: "Practice rotation in opposite direction", 
                future: "Complements left rotation, used in different scenarios",
                hint: "Move elements K positions to the right, wrap around at the end",
                difficulty: "medium"
            },
            {
                title: "Remove Duplicates from Sorted Array",
                why: "Learn in-place array modification with sorted data",
                future: "Foundation for data cleaning and optimization algorithms",
                hint: "Keep track of unique elements and overwrite duplicates",
                difficulty: "medium"
            },
            {
                title: "Insert Element at Specific Position",
                why: "Learn to add elements while maintaining array structure", 
                future: "Foundation for dynamic data structures and insertions",
                hint: "Shift elements to the right to make space for new element",
                difficulty: "medium"
            },
            {
                title: "Delete Element at Specific Position",
                why: "Practice removing elements and closing gaps", 
                future: "Essential for dynamic arrays and list operations", 
                hint: "Shift elements to the left to fill the gap",
                difficulty: "medium"
            },
            {
                title: "Merge Two Sorted Arrays",
                why: "Learn to combine ordered data efficiently",
                future: "Core of merge sort and database join operations",
                hint: "Use two pointers, always pick the smaller element",
                difficulty: "medium"
            },
            {
                title: "Copy Array Elements",
                why: "Learn proper array copying techniques",
                future: "Essential for avoiding reference issues and data safety", 
                hint: "Create new array and copy each element individually",
                difficulty: "easy"
            },

            // Pattern Recognition (8 problems)
            {
                title: "Find Second Largest Element",
                why: "Build on max-finding with additional tracking logic",
                future: "Used in ranking systems, finding alternatives, and optimization",
                hint: "Keep track of both largest and second largest as you iterate",
                difficulty: "medium"
            },
            {
                title: "Find Pair with Given Sum",
                why: "Introduction to pair-finding problems",
                future: "Foundation for two-pointer technique and hash map usage", 
                hint: "Check every pair of elements to see if they sum to target",
                difficulty: "medium"
            },
            {
                title: "Check if Array is Sorted",
                why: "Learn to verify array properties - important for optimization",
                future: "Helps choose between different algorithms based on data state",
                hint: "Compare each element with the next one - all should be in order", 
                difficulty: "easy"
            },
            {
                title: "Find Missing Number in Range",
                why: "Learn to identify gaps in expected patterns",
                future: "Used in data validation and error detection",
                hint: "Calculate expected sum and subtract actual sum",
                difficulty: "medium"
            },
            {
                title: "Check for Duplicates",
                why: "Learn to detect repeated elements", 
                future: "Important for data integrity and cycle detection",
                hint: "Use extra space to track seen elements, or sort first",
                difficulty: "medium"
            },
            {
                title: "Find Majority Element",
                why: "Learn to find elements that appear more than n/2 times",
                future: "Used in voting algorithms and consensus problems", 
                hint: "Count occurrences of each element",
                difficulty: "medium"
            },
            {
                title: "Check if Array is Palindrome",
                why: "Apply palindrome concept to arrays",
                future: "Foundation for symmetry detection in various problems",
                hint: "Compare elements from start and end moving towards center",
                difficulty: "medium"
            },
            {
                title: "Find Three Numbers with Maximum Sum",
                why: "Introduction to selecting optimal combinations",
                future: "Foundation for optimization and selection problems",
                hint: "Find the three largest numbers in the array",
                difficulty: "medium"
            },

            // Advanced Patterns (8 problems)
            {
                title: "Move All Zeros to End",
                why: "Learn in-place array reorganization",
                future: "Foundation for partitioning and sorting algorithms",
                hint: "Keep a pointer for non-zero position and swap when needed",
                difficulty: "medium"
            },
            {
                title: "Separate Even and Odd Numbers",
                why: "Practice partitioning arrays based on conditions",
                future: "Used in quicksort partitioning and data organization",
                hint: "Use two pointers approach or separate into different sections",
                difficulty: "medium"
            },
            {
                title: "Find Leaders in Array",
                why: "Learn to identify elements greater than all elements to their right",
                future: "Used in stock price analysis and optimization problems", 
                hint: "Traverse from right to left and keep track of maximum seen so far",
                difficulty: "medium"
            },
            {
                title: "Rearrange Array Alternately",
                why: "Practice complex array rearrangement patterns",
                future: "Used in data organization and algorithm optimization",
                hint: "Alternate between smallest and largest remaining elements",
                difficulty: "medium"
            },
            {
                title: "Find Equilibrium Index",
                why: "Learn to find balance points in arrays",
                future: "Foundation for pivot finding and load balancing algorithms",
                hint: "Find index where sum of left elements equals sum of right elements",
                difficulty: "medium"
            },
            {
                title: "Maximum Subarray Sum (Kadane's Algorithm)",
                why: "Introduction to dynamic programming thinking",
                future: "Foundation for many optimization and DP problems",
                hint: "Keep track of maximum sum ending at current position",
                difficulty: "medium"
            },
            {
                title: "Find Peak Element",
                why: "Learn to find local maxima - important optimization concept", 
                future: "Foundation for hill-climbing algorithms and optimization",
                hint: "A peak is larger than both neighbors - handle edge cases",
                difficulty: "medium"
            },
            {
                title: "Spiral Matrix Traversal",
                why: "Learn complex traversal patterns for 2D thinking",
                future: "Foundation for matrix algorithms and 2D problem solving", 
                hint: "Traverse in spiral pattern: right, down, left, up, repeat",
                difficulty: "medium"
            },

            // Frequency and Counting (6 problems)
            {
                title: "Count Frequency of Each Element",
                why: "Learn to build frequency maps - fundamental for many algorithms",
                future: "Foundation for hashing, counting problems, and statistics",
                hint: "Use a hash map or object to count occurrences of each element",
                difficulty: "easy"
            },
            {
                title: "Find Most Frequent Element",
                why: "Build on frequency counting to find maximum",
                future: "Used in mode calculation and data analysis",
                hint: "Count frequencies first, then find the element with highest count", 
                difficulty: "medium"
            },
            {
                title: "Find Elements Appearing Exactly Once",
                why: "Practice filtering based on frequency conditions",
                future: "Used in data cleaning and uniqueness validation",
                hint: "Count frequencies, then filter elements with count = 1",
                difficulty: "medium"
            },
            {
                title: "Group Anagrams in Array",
                why: "Learn to group elements based on patterns",
                future: "Foundation for string algorithms and pattern matching",
                hint: "Sort characters of each string and group by sorted version",
                difficulty: "medium"
            },
            {
                title: "Find First Non-Repeating Element",
                why: "Combine frequency counting with order preservation",
                future: "Used in string processing and unique identifier problems",
                hint: "Count frequencies, then scan array for first element with count = 1",
                difficulty: "medium"
            },
            {
                title: "Check if Arrays are Equal",
                why: "Learn to compare data structures efficiently", 
                future: "Foundation for testing, validation, and comparison algorithms",
                hint: "Compare lengths first, then compare each element or use sorting",
                difficulty: "easy"
            },

            // Mathematical Operations (5 problems)
            {
                title: "Calculate Array Product Except Self",
                why: "Learn to compute related values without including current element",
                future: "Used in statistical analysis and mathematical computations",
                hint: "Calculate left products and right products separately, then combine",
                difficulty: "medium"
            },
            {
                title: "Find GCD of Array Elements", 
                why: "Apply mathematical concepts to arrays",
                future: "Used in number theory and mathematical algorithms",
                hint: "Find GCD of first two elements, then GCD of result with next element",
                difficulty: "medium"
            },
            {
                title: "Find LCM of Array Elements",
                why: "Practice mathematical operations on array data",
                future: "Used in scheduling and mathematical problem solving",
                hint: "Use the relationship: LCM(a,b) = (a*b)/GCD(a,b)",
                difficulty: "medium"
            },
            {
                title: "Check if Array Sum is Divisible by K",
                why: "Learn modular arithmetic with arrays",
                future: "Foundation for number theory and mathematical algorithms",
                hint: "Calculate total sum and check if sum % k == 0",
                difficulty: "easy"
            },
            {
                title: "Find Factorial of Array Elements",
                why: "Practice applying mathematical functions to array elements",
                future: "Used in combinatorics and mathematical computations",
                hint: "For each element, calculate its factorial using loops or recursion",
                difficulty: "medium"
            }
        ]
    },
    2: {
        name: "Two Pointers & Hashing",
        description: "Master efficient searching and optimization techniques",
        problems: [
            // Two Pointers Basics (15 problems)
            {
                title: "Two Sum in Sorted Array",
                why: "Learn the classic two-pointer technique - foundational optimization pattern",
                future: "Foundation for 3Sum, 4Sum, and countless optimization problems",
                hint: "Use left and right pointers, move based on sum comparison with target",
                difficulty: "easy"
            },
            {
                title: "Remove Duplicates from Sorted Array",
                why: "Practice in-place array modification with two pointers",
                future: "Used in data cleaning and array preprocessing algorithms",
                hint: "Keep one pointer for unique elements, another to scan through array",
                difficulty: "easy"
            },
            {
                title: "Move Zeros to End",
                why: "Learn partitioning with two pointers - separating elements by condition",
                future: "Foundation for quicksort partitioning and array reorganization",
                hint: "One pointer tracks position for non-zero elements, other scans array",
                difficulty: "easy"
            },
            {
                title: "Merge Two Sorted Arrays In-Place",
                why: "Combine two-pointer technique with in-place modification",
                future: "Core technique in merge sort and database operations",
                hint: "Start from the end and work backwards to avoid overwriting",
                difficulty: "medium"
            },
            {
                title: "Container With Most Water",
                why: "Learn to optimize area/volume problems with two pointers",
                future: "Used in geometry problems and optimization challenges",
                hint: "Start with widest container, move pointer from shorter side",
                difficulty: "medium"
            },
            {
                title: "Valid Palindrome",
                why: "Apply two pointers to string validation problems",
                future: "Foundation for string algorithms and pattern matching",
                hint: "Use two pointers from start and end, skip non-alphanumeric characters",
                difficulty: "easy"
            },
            {
                title: "Reverse String In-Place",
                why: "Practice basic two-pointer manipulation on strings",
                future: "Used in string processing and text manipulation algorithms",
                hint: "Swap characters from both ends moving towards center",
                difficulty: "easy"
            },
            {
                title: "Sort Colors (Dutch Flag)",
                why: "Learn three-way partitioning with multiple pointers",
                future: "Advanced partitioning technique used in sorting algorithms",
                hint: "Use three pointers to partition into three sections",
                difficulty: "medium"
            },
            {
                title: "3Sum Problem",
                why: "Extend two-sum to triplet finding with optimization",
                future: "Pattern for k-sum problems and constraint satisfaction",
                hint: "Fix one element, use two pointers for remaining two",
                difficulty: "medium"
            },
            {
                title: "3Sum Closest",
                why: "Practice optimization with two pointers under constraints",
                future: "Used in approximation algorithms and optimization problems",
                hint: "Track closest sum seen so far while using two pointers",
                difficulty: "medium"
            },
            {
                title: "4Sum Problem",
                why: "Scale up to quadruplet finding - complex optimization",
                future: "Advanced pattern for multi-variable optimization",
                hint: "Fix two elements, use two pointers for remaining two",
                difficulty: "medium"
            },
            {
                title: "Trapping Rain Water",
                why: "Apply two pointers to complex geometric problems",
                future: "Used in computational geometry and optimization",
                hint: "Use two pointers, move from side with smaller height",
                difficulty: "medium"
            },
            {
                title: "Remove Nth Node from End",
                why: "Learn two-pointer technique for linked list problems",
                future: "Foundation for linked list manipulation and optimization",
                hint: "Use fast and slow pointers with N gap between them",
                difficulty: "medium"
            },
            {
                title: "Squares of Sorted Array",
                why: "Practice merging with two pointers from both ends",
                future: "Used in array processing and merge operations",
                hint: "Compare absolute values from both ends, place larger square at end",
                difficulty: "easy"
            },
            {
                title: "Backspace String Compare",
                why: "Apply two pointers with complex state tracking",
                future: "Used in text processing and string manipulation",
                hint: "Process strings from end, handle backspaces by skipping characters",
                difficulty: "medium"
            },

            // Sliding Window Techniques (15 problems)
            {
                title: "Maximum Sum Subarray of Size K",
                why: "Learn sliding window technique - efficient subarray processing",
                future: "Foundation for many optimization and pattern matching problems",
                hint: "Calculate sum of first K elements, then slide window by removing first and adding next",
                difficulty: "easy"
            },
            {
                title: "First Negative in Every Window of Size K",
                why: "Practice maintaining window properties while sliding",
                future: "Used in stream processing and real-time analytics",
                hint: "Use a queue to track negative numbers in current window",
                difficulty: "easy"
            },
            {
                title: "Count Occurrences of Anagrams",
                why: "Combine sliding window with character frequency matching",
                future: "Foundation for pattern matching in strings",
                hint: "Use sliding window and compare character frequencies",
                difficulty: "medium"
            },
            {
                title: "Longest Substring Without Repeating Characters",
                why: "Learn variable-size sliding window with constraint checking",
                future: "Pattern for many string and array optimization problems",
                hint: "Expand window until duplicate found, then shrink from left",
                difficulty: "medium"
            },
            {
                title: "Minimum Window Substring",
                why: "Master complex sliding window with multiple constraints",
                future: "Advanced pattern for string matching and optimization",
                hint: "Expand to meet criteria, then contract to find minimum",
                difficulty: "hard"
            },
            {
                title: "Sliding Window Maximum",
                why: "Learn to maintain maximum in sliding window efficiently",
                future: "Used in time series analysis and optimization problems",
                hint: "Use deque to maintain elements in decreasing order",
                difficulty: "hard"
            },
            {
                title: "Longest Subarray with Sum ≤ K",
                why: "Practice variable window with inequality constraints",
                future: "Used in resource allocation and constraint problems",
                hint: "Expand window while sum ≤ K, shrink when sum > K",
                difficulty: "medium"
            },
            {
                title: "Fruit Into Baskets",
                why: "Apply sliding window to counting distinct elements",
                future: "Pattern for constraint-based optimization problems",
                hint: "Maintain window with at most 2 distinct fruit types",
                difficulty: "medium"
            },
            {
                title: "Longest Substring with At Most K Distinct",
                why: "Practice constraint-based sliding window",
                future: "Used in string processing and pattern analysis",
                hint: "Use hash map to track distinct characters in window",
                difficulty: "medium"
            },
            {
                title: "Subarrays with K Different Integers",
                why: "Advanced sliding window with exact counting",
                future: "Complex pattern for precise constraint satisfaction",
                hint: "Count subarrays with at most K minus at most K-1",
                difficulty: "hard"
            },
            {
                title: "Permutation in String",
                why: "Combine sliding window with permutation checking",
                future: "Foundation for advanced string matching algorithms",
                hint: "Use sliding window and compare character frequencies",
                difficulty: "medium"
            },
            {
                title: "Minimum Window with All Characters",
                why: "Master complex window problems with coverage requirements",
                future: "Advanced optimization pattern for string processing",
                hint: "Track character counts and adjust window size",
                difficulty: "hard"
            },
            {
                title: "Longest Repeating Character Replacement",
                why: "Learn window optimization with character replacement",
                future: "Used in string transformation and optimization",
                hint: "Track max frequency and check if window size - max_freq ≤ k",
                difficulty: "medium"
            },
            {
                title: "Max Consecutive Ones III",
                why: "Practice sliding window with flip constraints",
                future: "Pattern for binary array optimization problems",
                hint: "Count zeros in window, shrink when zeros > k",
                difficulty: "medium"
            },
            {
                title: "Substring with Concatenation of All Words",
                why: "Complex sliding window with multiple word matching",
                future: "Advanced pattern for multi-string matching",
                hint: "Use sliding window with word-level frequency matching",
                difficulty: "hard"
            },

            // Hash Map Fundamentals (20 problems)
            {
                title: "Two Sum (Unsorted Array)",
                why: "Learn hash map for O(1) lookups - fundamental optimization",
                future: "Foundation for countless optimization and lookup problems",
                hint: "Store numbers in hash map, check if complement exists",
                difficulty: "easy"
            },
            {
                title: "First Non-Repeating Character",
                why: "Use hash map for frequency counting and quick lookups",
                future: "Pattern for character/element frequency problems",
                hint: "Count frequencies, then find first character with count = 1",
                difficulty: "easy"
            },
            {
                title: "Group Anagrams",
                why: "Learn to use hash map with custom keys for grouping",
                future: "Foundation for grouping and categorization problems",
                hint: "Sort each string to create key, group strings with same key",
                difficulty: "medium"
            },
            {
                title: "Valid Anagram",
                why: "Practice character frequency comparison with hash maps",
                future: "Foundation for string comparison and validation",
                hint: "Count character frequencies in both strings and compare",
                difficulty: "easy"
            },
            {
                title: "Intersection of Two Arrays",
                why: "Use hash set for efficient membership testing",
                future: "Foundation for set operations and data analysis",
                hint: "Put one array in hash set, check membership for second array",
                difficulty: "easy"
            },
            {
                title: "Intersection of Two Arrays II",
                why: "Handle duplicates with frequency counting",
                future: "Advanced set operations with multiplicity",
                hint: "Count frequencies, then take minimum count for each element",
                difficulty: "easy"
            },
            {
                title: "Happy Number",
                why: "Use hash set for cycle detection in sequences",
                future: "Pattern for cycle detection in mathematical sequences",
                hint: "Track seen numbers to detect cycles",
                difficulty: "easy"
            },
            {
                title: "Isomorphic Strings",
                why: "Learn character mapping validation with hash maps",
                future: "Foundation for pattern matching and string analysis",
                hint: "Create bidirectional mapping between characters",
                difficulty: "easy"
            },
            {
                title: "Word Pattern",
                why: "Extend character mapping to word-level patterns",
                future: "Used in natural language processing and pattern recognition",
                hint: "Map each character to a word and ensure consistency",
                difficulty: "easy"
            },
            {
                title: "Contains Duplicate",
                why: "Basic duplicate detection with hash sets",
                future: "Foundation for uniqueness checking and validation",
                hint: "Add elements to set, return true if element already exists",
                difficulty: "easy"
            },
            {
                title: "Contains Duplicate II",
                why: "Add distance constraint to duplicate detection",
                future: "Pattern for proximity-based duplicate checking",
                hint: "Use hash map to store element indices and check distance",
                difficulty: "easy"
            },
            {
                title: "Contains Duplicate III",
                why: "Complex duplicate detection with value and distance constraints",
                future: "Advanced pattern for range-based duplicate detection",
                hint: "Use sliding window with balanced binary search tree",
                difficulty: "medium"
            },
            {
                title: "Longest Consecutive Sequence",
                why: "Use hash set to check sequence continuity efficiently",
                future: "Pattern for sequence analysis and optimization",
                hint: "Use hash set, for each number check if it starts a sequence",
                difficulty: "medium"
            },
            {
                title: "Subarray Sum Equals K",
                why: "Combine prefix sum with hash map for subarray problems",
                future: "Advanced pattern for subarray analysis and counting",
                hint: "Use prefix sum and hash map to track sum differences",
                difficulty: "medium"
            },
            {
                title: "Maximum Size Subarray Sum Equals K",
                why: "Find longest subarray with target sum",
                future: "Optimization pattern for subarray problems",
                hint: "Use prefix sum with hash map to track first occurrence of each sum",
                difficulty: "medium"
            },
            {
                title: "Top K Frequent Elements",
                why: "Combine frequency counting with selection algorithms",
                future: "Used in data analysis, recommendation systems, trending",
                hint: "Count frequencies, then use heap or bucket sort to get top K",
                difficulty: "medium"
            },
            {
                title: "Top K Frequent Words",
                why: "Extend frequency problems to lexicographical ordering",
                future: "Advanced pattern for text analysis and ranking",
                hint: "Count frequencies, then sort by frequency and lexicographical order",
                difficulty: "medium"
            },
            {
                title: "Design HashMap",
                why: "Understand hash map implementation from scratch",
                future: "Foundation for understanding hash-based data structures",
                hint: "Use array of buckets, handle collisions with chaining",
                difficulty: "easy"
            },
            {
                title: "Design HashSet",
                why: "Build hash set understanding collision handling",
                future: "Foundation for set-based operations and algorithms",
                hint: "Similar to HashMap but only store keys without values",
                difficulty: "easy"
            },
            {
                title: "Jewels and Stones",
                why: "Practice set membership for counting problems",
                future: "Pattern for filtering and counting with sets",
                hint: "Put jewels in set, count stones that are in the set",
                difficulty: "easy"
            }
        ]
    },
    3: {
        name: "Linked Lists & Stacks",
        description: "Master dynamic data structures and LIFO operations",
        problems: [
            // Linked List Basics (15 problems)
            {
                title: "Create and Display Linked List",
                why: "Learn the fundamental structure of linked lists - nodes and pointers",
                future: "Foundation for all linked list operations and dynamic data structures",
                hint: "Create nodes with data and next pointer, traverse using while loop",
                difficulty: "easy"
            },
            {
                title: "Insert at Beginning of Linked List",
                why: "Learn dynamic insertion - adding elements without fixed size",
                future: "Used in implementing stacks, queues, and dynamic collections",
                hint: "Create new node, point it to current head, update head pointer",
                difficulty: "easy"
            },
            {
                title: "Insert at End of Linked List",
                why: "Practice traversal to find insertion point",
                future: "Foundation for append operations in dynamic structures",
                hint: "Traverse to last node (next = null), create new node and link",
                difficulty: "easy"
            },
            {
                title: "Insert at Specific Position",
                why: "Learn position-based insertion with boundary handling",
                future: "Used in text editors, databases, and ordered collections",
                hint: "Traverse to position-1, adjust pointers to insert new node",
                difficulty: "medium"
            },
            {
                title: "Delete First Node",
                why: "Learn pointer manipulation for removal operations",
                future: "Foundation for stack pop operations and list management",
                hint: "Update head to point to second node, handle empty list case",
                difficulty: "easy"
            },
            {
                title: "Delete Last Node", 
                why: "Practice traversal for deletion with edge cases",
                future: "Used in queue operations and list maintenance",
                hint: "Find second-to-last node, set its next to null",
                difficulty: "medium"
            },
            {
                title: "Delete Node by Value",
                why: "Learn search-and-delete operations",
                future: "Foundation for data removal in dynamic structures",
                hint: "Traverse to find node, adjust previous node's next pointer",
                difficulty: "medium"
            },
            {
                title: "Delete Node at Position",
                why: "Combine position finding with deletion logic",
                future: "Used in array-like operations on linked structures",
                hint: "Traverse to position, adjust pointers to skip the node",
                difficulty: "medium"
            },
            {
                title: "Find Length of Linked List",
                why: "Learn to measure dynamic data structures",
                future: "Used in algorithms that need size information",
                hint: "Traverse entire list while counting nodes",
                difficulty: "easy"
            },
            {
                title: "Search Element in Linked List",
                why: "Apply search algorithms to dynamic structures",
                future: "Foundation for membership testing in linked data",
                hint: "Traverse list comparing each node's data with target",
                difficulty: "easy"
            },
            {
                title: "Find Middle Element of Linked List",
                why: "Learn the classic two-pointer technique for linked lists",
                future: "Foundation for advanced linked list algorithms",
                hint: "Use slow and fast pointers - slow moves 1, fast moves 2",
                difficulty: "medium"
            },
            {
                title: "Reverse a Linked List",
                why: "Master pointer manipulation - most important linked list skill",
                future: "Used in countless algorithms and data structure operations",
                hint: "Keep track of previous, current, and next nodes while reversing links",
                difficulty: "medium"
            },
            {
                title: "Check if Linked List has Cycle",
                why: "Learn cycle detection using Floyd's algorithm",
                future: "Foundation for detecting infinite loops in any pointer structure",
                hint: "Use two pointers with different speeds, they'll meet if cycle exists",
                difficulty: "medium"
            },
            {
                title: "Find Cycle Start in Linked List",
                why: "Extend cycle detection to find exact starting point",
                future: "Used in memory management and debugging circular references",
                hint: "After detecting cycle, use mathematical properties to find start",
                difficulty: "medium"
            },
            {
                title: "Remove Duplicates from Sorted Linked List",
                why: "Learn in-place modification of linked structures",
                future: "Foundation for data cleaning in dynamic structures",
                hint: "Compare current node with next, skip duplicates by adjusting pointers",
                difficulty: "medium"
            },

            // Advanced Linked List Operations (12 problems)
            {
                title: "Merge Two Sorted Linked Lists",
                why: "Apply merge technique to linked structures",
                future: "Core operation in merge sort and database joins",
                hint: "Use two pointers, always pick smaller element and advance that pointer",
                difficulty: "medium"
            },
            {
                title: "Remove Nth Node from End",
                why: "Combine two-pointer technique with deletion",
                future: "Advanced pattern for position-based operations",
                hint: "Use two pointers with N gap, when fast reaches end, delete slow's next",
                difficulty: "medium"
            },
            {
                title: "Palindrome Linked List",
                why: "Combine reversal with comparison algorithms",
                future: "Pattern for symmetry checking in dynamic structures",
                hint: "Find middle, reverse second half, compare with first half",
                difficulty: "medium"
            },
            {
                title: "Intersection of Two Linked Lists",
                why: "Learn to find common nodes in different lists",
                future: "Used in graph algorithms and data relationship analysis",
                hint: "Calculate lengths, align lists, then traverse together",
                difficulty: "medium"
            },
            {
                title: "Add Two Numbers as Linked Lists",
                why: "Apply arithmetic operations to linked number representation",
                future: "Foundation for big number arithmetic and mathematical computing",
                hint: "Traverse both lists, handle carry, create result list digit by digit",
                difficulty: "medium"
            },
            {
                title: "Clone Linked List with Random Pointers",
                why: "Learn deep copying of complex pointer structures",
                future: "Foundation for copying complex data structures and graphs",
                hint: "Create nodes first, then establish next and random pointers separately",
                difficulty: "hard"
            },
            {
                title: "Flatten Multilevel Linked List",
                why: "Handle complex nested pointer structures",
                future: "Used in tree-to-list conversions and data serialization",
                hint: "Use stack or recursion to handle branching and merging",
                difficulty: "hard"
            },
            {
                title: "Rotate Linked List",
                why: "Apply rotation concept to dynamic structures",
                future: "Used in circular buffer implementations and data reorganization",
                hint: "Find the rotation point, break and reconnect the list",
                difficulty: "medium"
            },
            {
                title: "Sort Linked List",
                why: "Apply sorting algorithms to dynamic structures",
                future: "Foundation for ordered data maintenance in dynamic collections",
                hint: "Use merge sort approach - divide, sort, and merge",
                difficulty: "hard"
            },
            {
                title: "Reverse Nodes in K Groups",
                why: "Combine reversal with group processing",
                future: "Advanced pattern for batch processing in linked structures",
                hint: "Process K nodes at a time, reverse each group, connect groups",
                difficulty: "hard"
            },
            {
                title: "Swap Nodes in Pairs",
                why: "Learn pairwise operations on linked structures",
                future: "Foundation for pair-based algorithms and data reorganization",
                hint: "Track pairs of nodes and swap their positions using pointer manipulation",
                difficulty: "medium"
            },
            {
                title: "Remove Duplicates from Unsorted Linked List",
                why: "Extend duplicate removal to unsorted data",
                future: "Used in data cleaning without sorting overhead",
                hint: "Use hash set to track seen values while traversing",
                difficulty: "medium"
            },

            // Stack Fundamentals (10 problems)
            {
                title: "Implement Stack using Array",
                why: "Learn LIFO principle - Last In, First Out operations",
                future: "Foundation for function calls, undo operations, and parsing",
                hint: "Use array with top pointer, increment for push, decrement for pop",
                difficulty: "easy"
            },
            {
                title: "Implement Stack using Linked List",
                why: "Apply linked list concepts to create dynamic stack",
                future: "Memory-efficient stack without size limitations",
                hint: "Head of list acts as top of stack, insert/delete at beginning",
                difficulty: "easy"
            },
            {
                title: "Check Balanced Parentheses",
                why: "Classic stack application - matching opening/closing symbols",
                future: "Foundation for parsing, compilers, and syntax validation",
                hint: "Push opening brackets, pop and match with closing brackets",
                difficulty: "easy"
            },
            {
                title: "Evaluate Postfix Expression",
                why: "Apply stack to mathematical expression evaluation",
                future: "Used in calculators, compilers, and mathematical processors",
                hint: "Push operands, pop two operands for each operator, push result",
                difficulty: "medium"
            },
            {
                title: "Convert Infix to Postfix",
                why: "Learn expression conversion using operator precedence",
                future: "Foundation for compiler design and expression parsing",
                hint: "Use stack for operators, output operands immediately, handle precedence",
                difficulty: "medium"
            },
            {
                title: "Next Greater Element",
                why: "Classic stack problem for finding patterns in arrays",
                future: "Used in stock price analysis, weather data, and optimization",
                hint: "Use stack to track decreasing elements, pop when greater found",
                difficulty: "medium"
            },
            {
                title: "Previous Greater Element",
                why: "Reverse application of stack pattern matching",
                future: "Complements next greater, used in range analysis",
                hint: "Similar to next greater but process array from left to right",
                difficulty: "medium"
            },
            {
                title: "Largest Rectangle in Histogram",
                why: "Advanced stack application for area optimization",
                future: "Used in computer graphics, image processing, and optimization",
                hint: "Use stack to track increasing heights, calculate area when decreasing",
                difficulty: "hard"
            },
            {
                title: "Valid Parentheses with Multiple Types",
                why: "Extend basic parentheses to handle multiple bracket types",
                future: "Used in code parsing, XML validation, and syntax checking",
                hint: "Use stack with mapping between opening and closing brackets",
                difficulty: "medium"
            },
            {
                title: "Min Stack Implementation",
                why: "Learn to maintain additional information efficiently",
                future: "Pattern for auxiliary data maintenance in data structures",
                hint: "Use auxiliary stack to track minimum at each level",
                difficulty: "medium"
            },

            // Stack Applications (8 problems)
            {
                title: "Stock Span Problem",
                why: "Apply stack to financial data analysis",
                future: "Used in trading algorithms and trend analysis",
                hint: "Use stack to track previous higher prices, count consecutive smaller",
                difficulty: "medium"
            },
            {
                title: "Sliding Window Maximum using Stack",
                why: "Combine sliding window with stack for optimization",
                future: "Advanced pattern for window-based maximum tracking",
                hint: "Use deque (double-ended queue) to maintain maximum efficiently",
                difficulty: "hard"
            },
            {
                title: "Remove K Digits to Make Smallest",
                why: "Apply greedy approach with stack for optimization",
                future: "Used in number optimization and string manipulation",
                hint: "Use stack to build result, remove larger digits when possible",
                difficulty: "medium"
            },
            {
                title: "Decode String using Stack",
                why: "Handle nested structures with stack processing",
                future: "Used in data decompression and nested parsing",
                hint: "Use stack to handle nested brackets and repetition counts",
                difficulty: "medium"
            },
            {
                title: "Baseball Game Score Tracking",
                why: "Apply stack to sequential operation processing",
                future: "Pattern for undo/redo operations and state management",
                hint: "Use stack to track scores, handle special operations like cancel/double",
                difficulty: "easy"
            },
            {
                title: "Daily Temperatures",
                why: "Apply next greater element pattern to real-world data",
                future: "Used in weather analysis and time series processing",
                hint: "Use stack to track indices, find next warmer day for each",
                difficulty: "medium"
            },
            {
                title: "Simplify Unix Path",
                why: "Apply stack to path processing and navigation",
                future: "Used in file systems and URL processing",
                hint: "Use stack to handle directory navigation, .. goes back, . stays",
                difficulty: "medium"
            },
            {
                title: "Asteroid Collision",
                why: "Simulate collision detection using stack",
                future: "Used in game development and physics simulations",
                hint: "Use stack to track moving asteroids, handle collisions based on direction",
                difficulty: "medium"
            },

            // Advanced Stack Problems (8 problems)
            {
                title: "Maximum Frequency Stack",
                why: "Combine frequency tracking with stack operations",
                future: "Advanced data structure for priority-based operations",
                hint: "Use hash map for frequencies and stack for each frequency level",
                difficulty: "hard"
            },
            {
                title: "Basic Calculator",
                why: "Implement calculator using stack for expression evaluation",
                future: "Foundation for mathematical processors and compilers",
                hint: "Use stack to handle parentheses and operator precedence",
                difficulty: "hard"
            },
            {
                title: "Reverse Polish Notation Calculator",
                why: "Evaluate postfix expressions with error handling",
                future: "Used in stack-based calculators and mathematical processors",
                hint: "Process tokens, use stack for operands, apply operators immediately",
                difficulty: "medium"
            },
            {
                title: "Validate Stack Sequences",
                why: "Check if given sequences represent valid stack operations",
                future: "Used in sequence validation and algorithm verification",
                hint: "Simulate push/pop operations and check if pop sequence is achievable",
                difficulty: "medium"
            },
            {
                title: "Exclusive Time of Functions",
                why: "Use stack to track nested function call timing",
                future: "Used in profiling, debugging, and performance analysis",
                hint: "Use stack to track function starts, calculate exclusive time on ends",
                difficulty: "medium"
            },
            {
                title: "Car Fleet Problem",
                why: "Apply stack to trajectory analysis and grouping",
                future: "Used in traffic analysis and movement simulation",
                hint: "Sort by position, use stack to track fleets based on arrival times",
                difficulty: "medium"
            },
            {
                title: "Longest Valid Parentheses",
                why: "Find longest valid parentheses substring using stack",
                future: "Advanced string processing and pattern validation",
                hint: "Use stack to track indices of unmatched parentheses",
                difficulty: "hard"
            },
            {
                title: "Remove Duplicate Letters",
                why: "Use stack with greedy approach for lexicographically smallest result",
                future: "Advanced string processing and optimization techniques",
                hint: "Use stack with frequency counting and greedy removal strategy",
                difficulty: "medium"
            }
        ]
    },
    4: {
        name: "Strings & Recursion", 
        description: "Master text processing and divide-and-conquer thinking",
        problems: [
            // String Basics (12 problems)
            {
                title: "Find Length of String",
                why: "Learn basic string traversal - foundation of all string operations",
                future: "Used in validation, memory allocation, and processing decisions",
                hint: "Traverse character by character until null terminator or use built-in length",
                difficulty: "easy"
            },
            {
                title: "Reverse a String",
                why: "Practice character manipulation and two-pointer technique",
                future: "Foundation for palindrome checking and string transformations",
                hint: "Swap characters from both ends moving towards center",
                difficulty: "easy"
            },
            {
                title: "Check if String is Palindrome",
                why: "Learn symmetry checking - important pattern in many algorithms",
                future: "Used in DNA analysis, cryptography, and pattern recognition",
                hint: "Compare characters from start and end, ignore case and spaces",
                difficulty: "easy"
            },
            {
                title: "Count Vowels and Consonants",
                why: "Practice conditional counting with character classification",
                future: "Foundation for text analysis and natural language processing",
                hint: "Check each character against vowel set, count accordingly",
                difficulty: "easy"
            },
            {
                title: "Convert Case (Upper/Lower)",
                why: "Learn character manipulation and ASCII operations",
                future: "Used in text normalization and user input processing",
                hint: "Use ASCII values or built-in functions to convert character cases",
                difficulty: "easy"
            },
            {
                title: "Count Frequency of Each Character",
                why: "Build frequency maps for strings - fundamental for many algorithms",
                future: "Foundation for anagram detection, compression, and analysis",
                hint: "Use hash map or array to count occurrences of each character",
                difficulty: "easy"
            },
            {
                title: "Find First Non-Repeating Character",
                why: "Combine frequency counting with order preservation",
                future: "Used in unique identifier generation and data validation",
                hint: "Count frequencies first, then scan string for first character with count 1",
                difficulty: "medium"
            },
            {
                title: "Remove Duplicates from String",
                why: "Learn in-place string modification techniques",
                future: "Used in data cleaning and string optimization",
                hint: "Use hash set to track seen characters, build result string",
                difficulty: "medium"
            },
            {
                title: "Check if Two Strings are Anagrams",
                why: "Apply frequency counting for string comparison",
                future: "Used in word games, cryptography, and text analysis",
                hint: "Count character frequencies in both strings and compare",
                difficulty: "easy"
            },
            {
                title: "Find All Anagrams in String",
                why: "Combine sliding window with anagram detection",
                future: "Advanced pattern for substring matching and text search",
                hint: "Use sliding window with character frequency comparison",
                difficulty: "medium"
            },
            {
                title: "Longest Substring Without Repeating Characters",
                why: "Apply sliding window to character uniqueness constraint",
                future: "Pattern for many optimization problems with constraints",
                hint: "Use sliding window, expand until duplicate found, then shrink",
                difficulty: "medium"
            },
            {
                title: "String Compression",
                why: "Learn basic compression algorithms and string building",
                future: "Foundation for data compression and efficient storage",
                hint: "Count consecutive characters and build compressed representation",
                difficulty: "medium"
            },

            // String Searching & Matching (10 problems)
            {
                title: "Find Substring in String (Naive)",
                why: "Learn basic pattern matching - foundation of search algorithms",
                future: "Understanding before learning advanced algorithms like KMP",
                hint: "Check every position in main string for pattern match",
                difficulty: "easy"
            },
            {
                title: "Find All Occurrences of Pattern",
                why: "Extend single search to find all matches",
                future: "Used in text processing, search engines, and data mining",
                hint: "Continue searching after each match, store all starting positions",
                difficulty: "medium"
            },
            {
                title: "Count Occurrences of Pattern",
                why: "Apply counting to pattern matching",
                future: "Used in frequency analysis and text statistics",
                hint: "Similar to finding all, but just increment counter",
                difficulty: "easy"
            },
            {
                title: "Check if String Contains Only Digits",
                why: "Learn character validation and classification",
                future: "Used in input validation and data type checking",
                hint: "Check each character against digit range (0-9)",
                difficulty: "easy"
            },
            {
                title: "Validate Email Format",
                why: "Apply pattern matching to real-world validation",
                future: "Foundation for input validation and data sanitization",
                hint: "Check for @ symbol, valid characters, and basic email structure",
                difficulty: "medium"
            },
            {
                title: "Find Longest Common Prefix",
                why: "Learn prefix matching across multiple strings",
                future: "Used in autocomplete, file systems, and data organization",
                hint: "Compare characters position by position across all strings",
                difficulty: "easy"
            },
            {
                title: "Find Longest Common Substring",
                why: "Extend prefix concept to any substring position",
                future: "Used in DNA analysis, plagiarism detection, and text comparison",
                hint: "Check all possible substrings of first string in others",
                difficulty: "medium"
            },
            {
                title: "Word Break Problem",
                why: "Check if string can be segmented using dictionary words",
                future: "Used in natural language processing and text parsing",
                hint: "Use dynamic programming or recursion with memoization",
                difficulty: "medium"
            },
            {
                title: "Minimum Edit Distance",
                why: "Calculate minimum operations to transform one string to another",
                future: "Used in spell checkers, DNA analysis, and text similarity",
                hint: "Use dynamic programming with insertion, deletion, substitution costs",
                difficulty: "hard"
            },
            {
                title: "Wildcard Pattern Matching",
                why: "Handle patterns with * and ? wildcards",
                future: "Used in file systems, regular expressions, and search",
                hint: "Use dynamic programming or recursion to handle wildcard cases",
                difficulty: "hard"
            },

            // Recursion Fundamentals (12 problems)
            {
                title: "Calculate Factorial using Recursion",
                why: "Learn basic recursion - calling function within itself",
                future: "Foundation for divide-and-conquer and mathematical algorithms",
                hint: "Base case: factorial(0) = 1, recursive: n * factorial(n-1)",
                difficulty: "easy"
            },
            {
                title: "Calculate Fibonacci using Recursion",
                why: "Practice recursion with multiple recursive calls",
                future: "Foundation for understanding recursion tree and optimization",
                hint: "Base cases: fib(0)=0, fib(1)=1, recursive: fib(n-1) + fib(n-2)",
                difficulty: "easy"
            },
            {
                title: "Find Sum of Digits using Recursion",
                why: "Apply recursion to number processing",
                future: "Pattern for recursive number manipulation",
                hint: "Base case: single digit, recursive: last digit + sum of remaining",
                difficulty: "easy"
            },
            {
                title: "Reverse String using Recursion",
                why: "Apply recursion to string manipulation",
                future: "Understanding recursive string processing",
                hint: "Base case: empty/single char, recursive: last char + reverse of rest",
                difficulty: "easy"
            },
            {
                title: "Check Palindrome using Recursion",
                why: "Combine recursion with string comparison",
                future: "Pattern for recursive validation algorithms",
                hint: "Base case: single/empty string, recursive: first==last && middle is palindrome",
                difficulty: "medium"
            },
            {
                title: "Binary Search using Recursion",
                why: "Apply divide-and-conquer to search problems",
                future: "Foundation for many efficient algorithms",
                hint: "Base case: element found/not found, recursive: search half based on comparison",
                difficulty: "medium"
            },
            {
                title: "Generate All Subsets (Power Set)",
                why: "Learn recursive generation of all possibilities",
                future: "Foundation for backtracking and combinatorial algorithms",
                hint: "For each element: include in subset or exclude, recursively generate rest",
                difficulty: "medium"
            },
            {
                title: "Generate All Permutations",
                why: "Master recursive arrangement generation",
                future: "Used in optimization, scheduling, and arrangement problems",
                hint: "For each position: try each unused element, recursively fill remaining",
                difficulty: "medium"
            },
            {
                title: "Tower of Hanoi",
                why: "Classic recursion problem with multiple subproblems",
                future: "Foundation for understanding complex recursive relationships",
                hint: "Move n-1 disks to auxiliary, move largest, move n-1 from auxiliary to destination",
                difficulty: "medium"
            },
            {
                title: "Count Paths in Grid",
                why: "Apply recursion to pathfinding problems",
                future: "Foundation for dynamic programming and graph algorithms",
                hint: "Base case: reached destination, recursive: paths from right + paths from down",
                difficulty: "medium"
            },
            {
                title: "Merge Sort using Recursion",
                why: "Implement classic divide-and-conquer sorting",
                future: "Foundation for efficient sorting and merging algorithms",
                hint: "Divide array in half, recursively sort both halves, merge sorted halves",
                difficulty: "medium"
            },
            {
                title: "Quick Sort using Recursion",
                why: "Master partitioning with recursive sorting",
                future: "One of most important sorting algorithms in practice",
                hint: "Choose pivot, partition around pivot, recursively sort left and right parts",
                difficulty: "medium"
            },

            // Advanced String Problems (10 problems)
            {
                title: "Longest Palindromic Substring",
                why: "Find longest palindrome within a string",
                future: "Used in DNA analysis and pattern recognition",
                hint: "Expand around each center (both odd and even length palindromes)",
                difficulty: "medium"
            },
            {
                title: "String to Integer (atoi)",
                why: "Handle string to number conversion with edge cases",
                future: "Foundation for input parsing and data conversion",
                hint: "Handle whitespace, signs, digits, and overflow cases",
                difficulty: "medium"
            },
            {
                title: "Integer to Roman Numeral",
                why: "Apply mapping and greedy approach to number systems",
                future: "Understanding different number representations",
                hint: "Use greedy approach with largest values first",
                difficulty: "medium"
            },
            {
                title: "Roman to Integer",
                why: "Parse complex number format with rules",
                future: "Pattern for parsing structured formats",
                hint: "Process right to left, subtract if current < next, otherwise add",
                difficulty: "easy"
            },
            {
                title: "Group Anagrams Together",
                why: "Apply grouping with custom key generation",
                future: "Pattern for categorization and organization problems",
                hint: "Sort characters of each string as key, group by sorted version",
                difficulty: "medium"
            },
            {
                title: "Decode Ways",
                why: "Count number of ways to decode string with rules",
                future: "Foundation for dynamic programming counting problems",
                hint: "Use dynamic programming, consider single digit and double digit decodings",
                difficulty: "medium"
            },
            {
                title: "Word Ladder",
                why: "Find shortest transformation path between words",
                future: "Graph algorithms applied to string transformation",
                hint: "Use BFS to find shortest path, each word is a node",
                difficulty: "hard"
            },
            {
                title: "Regular Expression Matching",
                why: "Implement pattern matching with * and . operators",
                future: "Foundation for advanced pattern matching and parsing",
                hint: "Use dynamic programming or recursion with memoization",
                difficulty: "hard"
            },
            {
                title: "Text Justification",
                why: "Format text with proper spacing and alignment",
                future: "Used in text processors and document formatting",
                hint: "Calculate spaces needed, distribute evenly, handle last line",
                difficulty: "hard"
            },
            {
                title: "Multiply Strings",
                why: "Perform arithmetic on number strings without conversion",
                future: "Used for big number arithmetic and mathematical computing",
                hint: "Simulate multiplication digit by digit, handle carries properly",
                difficulty: "medium"
            }
        ]
    },
    5: {
        name: "Trees & Graphs",
        description: "Master hierarchical data structures and graph algorithms",
        problems: [
            // Binary Tree Basics (15 problems)
            {
                title: "Create and Display Binary Tree",
                why: "Learn tree structure - nodes with left and right children",
                future: "Foundation for all tree operations and hierarchical data",
                hint: "Create nodes with data, left, and right pointers, use recursion for traversal",
                difficulty: "easy"
            },
            {
                title: "Tree Traversal - Inorder (Left, Root, Right)",
                why: "Learn systematic tree exploration - most important tree skill",
                future: "Used in expression evaluation, sorting, and tree processing",
                hint: "Recursively visit left subtree, process root, then right subtree",
                difficulty: "easy"
            },
            {
                title: "Tree Traversal - Preorder (Root, Left, Right)",
                why: "Master different traversal patterns for various use cases",
                future: "Used in tree copying, prefix expressions, and tree serialization",
                hint: "Process root first, then recursively visit left and right subtrees",
                difficulty: "easy"
            },
            {
                title: "Tree Traversal - Postorder (Left, Right, Root)",
                why: "Learn bottom-up processing pattern",
                future: "Used in calculating tree properties, deletion, and cleanup operations",
                hint: "Recursively visit left and right subtrees, then process root",
                difficulty: "easy"
            },
            {
                title: "Level Order Traversal (BFS)",
                why: "Learn breadth-first exploration using queue",
                future: "Foundation for BFS in graphs, level-wise processing, and shortest paths",
                hint: "Use queue to process nodes level by level from left to right",
                difficulty: "medium"
            },
            {
                title: "Find Height/Depth of Binary Tree",
                why: "Learn to calculate tree properties recursively",
                future: "Used in balancing algorithms and complexity analysis",
                hint: "Height = 1 + max(height of left, height of right), base case: null = 0",
                difficulty: "easy"
            },
            {
                title: "Count Total Nodes in Tree",
                why: "Practice recursive counting on tree structures",
                future: "Used in memory analysis and tree statistics",
                hint: "Count = 1 + count(left) + count(right), base case: null = 0",
                difficulty: "easy"
            },
            {
                title: "Count Leaf Nodes",
                why: "Learn to identify and count specific node types",
                future: "Used in tree analysis and decision tree algorithms",
                hint: "Leaf has no children, count recursively in left and right subtrees",
                difficulty: "easy"
            },
            {
                title: "Search Element in Binary Tree",
                why: "Apply search algorithms to tree structures",
                future: "Foundation for tree-based searching and membership testing",
                hint: "Check current node, then recursively search left and right subtrees",
                difficulty: "easy"
            },
            {
                title: "Find Maximum Element in Tree",
                why: "Learn recursive optimization on trees",
                future: "Used in tree analysis and finding optimal values",
                hint: "Max = maximum of (root, max in left, max in right)",
                difficulty: "easy"
            },
            {
                title: "Find Minimum Element in Tree",
                why: "Practice recursive min-finding with tree structures",
                future: "Complement to max-finding, used in tree analysis",
                hint: "Min = minimum of (root, min in left, min in right)",
                difficulty: "easy"
            },
            {
                title: "Check if Trees are Identical",
                why: "Learn structural comparison of trees",
                future: "Used in version control, tree equality, and pattern matching",
                hint: "Compare roots and recursively check if left and right subtrees are identical",
                difficulty: "medium"
            },
            {
                title: "Mirror/Invert Binary Tree",
                why: "Learn tree transformation by swapping subtrees",
                future: "Used in graphics, image processing, and tree manipulation",
                hint: "Swap left and right children, then recursively mirror both subtrees",
                difficulty: "medium"
            },
            {
                title: "Check if Tree is Symmetric",
                why: "Combine mirroring concept with tree comparison",
                future: "Used in pattern recognition and tree validation",
                hint: "Check if left subtree is mirror image of right subtree",
                difficulty: "medium"
            },
            {
                title: "Diameter of Binary Tree",
                why: "Find longest path between any two nodes",
                future: "Used in network analysis and tree optimization",
                hint: "Diameter through root = height(left) + height(right) + 1, check all nodes",
                difficulty: "medium"
            },

            // Binary Search Tree (12 problems)
            {
                title: "Insert in Binary Search Tree",
                why: "Learn ordered insertion maintaining BST property",
                future: "Foundation for dynamic sorted data structures",
                hint: "Compare with root, go left if smaller, right if larger, insert at empty spot",
                difficulty: "medium"
            },
            {
                title: "Search in Binary Search Tree",
                why: "Master efficient O(log n) searching in sorted tree",
                future: "Used in databases, file systems, and fast lookups",
                hint: "Compare with root, go left if target smaller, right if larger",
                difficulty: "easy"
            },
            {
                title: "Delete Node from BST",
                why: "Learn complex deletion while maintaining BST property",
                future: "Essential for dynamic data maintenance in sorted structures",
                hint: "Three cases: no children, one child, two children (find inorder successor)",
                difficulty: "hard"
            },
            {
                title: "Find Minimum in BST",
                why: "Utilize BST property for efficient min-finding",
                future: "Used in priority queues and ordered data retrieval",
                hint: "Keep going left until you reach leftmost node",
                difficulty: "easy"
            },
            {
                title: "Find Maximum in BST",
                why: "Apply BST property for efficient max-finding",
                future: "Complement to min-finding in ordered structures",
                hint: "Keep going right until you reach rightmost node",
                difficulty: "easy"
            },
            {
                title: "Validate Binary Search Tree",
                why: "Verify BST property is maintained throughout tree",
                future: "Used in data integrity checking and tree validation",
                hint: "For each node, check if it's within valid range based on ancestors",
                difficulty: "medium"
            },
            {
                title: "Find Kth Smallest Element in BST",
                why: "Combine BST property with order statistics",
                future: "Used in databases for ORDER BY queries and ranking",
                hint: "Use inorder traversal and count nodes until you reach kth",
                difficulty: "medium"
            },
            {
                title: "Find Kth Largest Element in BST",
                why: "Apply reverse order traversal for largest elements",
                future: "Used in top-K queries and ranking systems",
                hint: "Use reverse inorder traversal (right, root, left) and count",
                difficulty: "medium"
            },
            {
                title: "Lowest Common Ancestor in BST",
                why: "Find nearest common parent using BST property",
                future: "Used in hierarchical queries and tree analysis",
                hint: "Use BST property: LCA is first node where paths to both nodes diverge",
                difficulty: "medium"
            },
            {
                title: "Convert Sorted Array to BST",
                why: "Build balanced BST from sorted input",
                future: "Used in database indexing and balanced tree construction",
                hint: "Use middle element as root, recursively build left and right subtrees",
                difficulty: "medium"
            },
            {
                title: "Range Sum Query in BST",
                why: "Efficiently find sum of nodes within a range",
                future: "Used in database range queries and analytics",
                hint: "Use inorder traversal and sum nodes within the given range",
                difficulty: "medium"
            },
            {
                title: "Trim BST to Range",
                why: "Remove nodes outside given range while maintaining BST",
                future: "Used in data filtering and range-based operations",
                hint: "Recursively trim based on range constraints",
                difficulty: "medium"
            },

            // Advanced Tree Problems (10 problems)
            {
                title: "Lowest Common Ancestor in Binary Tree",
                why: "Find LCA without BST property - more complex algorithm",
                future: "Used in general tree queries and hierarchical analysis",
                hint: "Use recursion to find nodes, LCA is where paths converge",
                diameter: "medium"
            },
            {
                title: "Vertical Order Traversal",
                why: "Traverse tree by vertical columns",
                future: "Used in tree visualization and column-based processing",
                hint: "Assign horizontal distance to each node, group by distance",
                difficulty: "medium"
            },
            {
                title: "Top View of Binary Tree",
                why: "Find nodes visible from top view",
                future: "Used in tree visualization and rendering",
                hint: "Use vertical traversal and keep first node at each horizontal distance",
                difficulty: "medium"
            },
            {
                title: "Bottom View of Binary Tree",
                why: "Find nodes visible from bottom view",
                future: "Complement to top view in tree visualization",
                hint: "Use vertical traversal and keep last node at each horizontal distance",
                difficulty: "medium"
            },
            {
                title: "Right View of Binary Tree",
                why: "Find rightmost nodes at each level",
                future: "Used in tree visualization and level-based analysis",
                hint: "Use level order traversal and track rightmost node at each level",
                difficulty: "medium"
            },
            {
                title: "Left View of Binary Tree",
                why: "Find leftmost nodes at each level",
                future: "Complement to right view in tree processing",
                hint: "Use level order traversal and track leftmost node at each level",
                difficulty: "medium"
            },
            {
                title: "Serialize and Deserialize Binary Tree",
                why: "Convert tree to string and back - important for storage",
                future: "Used in data persistence, caching, and tree transmission",
                hint: "Use preorder traversal for serialization, reverse for deserialization",
                difficulty: "hard"
            },
            {
                title: "Binary Tree from Inorder and Preorder",
                why: "Reconstruct tree from traversal sequences",
                future: "Used in tree reconstruction and parsing",
                hint: "Preorder gives root, find root in inorder to split left/right subtrees",
                difficulty: "hard"
            },
            {
                title: "Binary Tree Maximum Path Sum",
                why: "Find path with maximum sum between any two nodes",
                future: "Used in optimization and pathfinding algorithms",
                hint: "For each node, consider path through it connecting left and right subtrees",
                difficulty: "hard"
            },
            {
                title: "Flatten Binary Tree to Linked List",
                why: "Convert tree to linear structure while preserving relationships",
                future: "Used in tree linearization and data structure conversion",
                hint: "Use morris traversal or modify tree in-place using right pointers",
                difficulty: "medium"
            },

            // Graph Representation (8 problems)
            {
                title: "Represent Graph using Adjacency Matrix",
                why: "Learn 2D array representation of graph connections",
                future: "Used when graph is dense and quick edge lookup is needed",
                hint: "Use 2D array where matrix[i][j] = 1 if edge exists from i to j",
                difficulty: "easy"
            },
            {
                title: "Represent Graph using Adjacency List",
                why: "Learn efficient representation for sparse graphs",
                future: "Most common graph representation in real applications",
                hint: "Use array of lists where each index stores neighbors of that vertex",
                difficulty: "easy"
            },
            {
                title: "Add Edge to Graph",
                why: "Learn dynamic graph modification",
                future: "Used in building graphs and dynamic network updates",
                hint: "For undirected: add both directions, for directed: add one direction",
                difficulty: "easy"
            },
            {
                title: "Remove Edge from Graph",
                why: "Practice graph modification and edge removal",
                future: "Used in network maintenance and graph updates",
                hint: "Remove edge from adjacency list or set matrix entry to 0",
                difficulty: "easy"
            },
            {
                title: "Check if Edge Exists",
                why: "Learn efficient edge lookup in different representations",
                future: "Used in graph queries and pathfinding algorithms",
                hint: "Check adjacency matrix entry or search in adjacency list",
                difficulty: "easy"
            },
            {
                title: "Find All Neighbors of Vertex",
                why: "Basic operation for graph traversal algorithms",
                future: "Foundation for BFS, DFS, and graph exploration",
                hint: "Return adjacency list for vertex or scan matrix row for 1s",
                difficulty: "easy"
            },
            {
                title: "Count Vertices and Edges",
                why: "Learn to analyze graph size and connectivity",
                future: "Used in graph analysis and algorithm complexity estimation",
                hint: "Count vertices directly, count edges by scanning representation",
                difficulty: "easy"
            },
            {
                title: "Check if Graph is Connected",
                why: "Determine if all vertices are reachable from any vertex",
                future: "Used in network analysis and connectivity checking",
                hint: "Use DFS or BFS from any vertex and check if all vertices visited",
                difficulty: "medium"
            },

            // Graph Traversal (8 problems)
            {
                title: "Depth First Search (DFS) Recursive",
                why: "Master fundamental graph exploration using recursion",
                future: "Foundation for topological sort, cycle detection, and pathfinding",
                hint: "Mark vertex visited, recursively visit all unvisited neighbors",
                difficulty: "medium"
            },
            {
                title: "Depth First Search (DFS) Iterative",
                why: "Implement DFS using stack to avoid recursion limits",
                future: "Used when recursion depth might be problematic",
                hint: "Use stack to track vertices to visit, push neighbors and pop to process",
                difficulty: "medium"
            },
            {
                title: "Breadth First Search (BFS)",
                why: "Learn level-wise exploration using queue",
                future: "Foundation for shortest path algorithms and level-based processing",
                hint: "Use queue to process vertices level by level, mark visited to avoid cycles",
                difficulty: "medium"
            },
            {
                title: "Find All Paths Between Two Vertices",
                why: "Enumerate all possible routes in graph",
                future: "Used in route planning and path analysis",
                hint: "Use DFS with backtracking, maintain current path and explore all branches",
                difficulty: "medium"
            },
            {
                title: "Shortest Path in Unweighted Graph",
                why: "Find minimum number of edges between vertices",
                future: "Foundation for shortest path algorithms",
                hint: "Use BFS and track distance from source to each vertex",
                difficulty: "medium"
            },
            {
                title: "Detect Cycle in Undirected Graph",
                why: "Important for validating graph properties",
                future: "Used in deadlock detection and graph validation",
                hint: "Use DFS and check if you visit a vertex that's not parent",
                difficulty: "medium"
            },
            {
                title: "Detect Cycle in Directed Graph",
                why: "More complex cycle detection with directed edges",
                future: "Used in dependency analysis and topological sorting",
                hint: "Use DFS with recursion stack to detect back edges",
                difficulty: "medium"
            },
            {
                title: "Topological Sort",
                why: "Order vertices such that all edges go from earlier to later",
                future: "Used in task scheduling, dependency resolution, and build systems",
                hint: "Use DFS and add vertices to result in reverse order of finishing time",
                difficulty: "medium"
            },

            // Advanced Graph Algorithms (7 problems)
            {
                title: "Find Connected Components",
                why: "Identify separate groups of connected vertices",
                future: "Used in clustering, network analysis, and image processing",
                hint: "Run DFS from each unvisited vertex to find each component",
                difficulty: "medium"
            },
            {
                title: "Check if Graph is Bipartite",
                why: "Determine if vertices can be colored with two colors",
                future: "Used in matching problems and graph coloring",
                hint: "Use BFS/DFS and try to color graph with two colors",
                difficulty: "medium"
            },
            {
                title: "Find Bridges in Graph",
                why: "Identify edges whose removal increases connected components",
                future: "Used in network reliability and critical path analysis",
                hint: "Use DFS with low-link values to identify bridges",
                difficulty: "hard"
            },
            {
                title: "Find Articulation Points",
                why: "Identify vertices whose removal increases connected components",
                future: "Used in network vulnerability analysis",
                hint: "Use DFS with discovery and low values to find cut vertices",
                difficulty: "hard"
            },
            {
                title: "Dijkstra's Shortest Path",
                why: "Find shortest path in weighted graph with non-negative weights",
                future: "Used in GPS navigation, network routing, and optimization",
                hint: "Use priority queue and relax edges to find minimum distances",
                difficulty: "hard"
            },
            {
                title: "Bellman-Ford Algorithm",
                why: "Find shortest path allowing negative weights",
                future: "Used when negative weights exist and cycle detection needed",
                hint: "Relax all edges V-1 times, check for negative cycles",
                difficulty: "hard"
            },
            {
                title: "Floyd-Warshall All-Pairs Shortest Path",
                why: "Find shortest paths between all pairs of vertices",
                future: "Used in network analysis and when all-pairs distances needed",
                hint: "Use dynamic programming with intermediate vertices",
                difficulty: "hard"
            }
        ]
    },
    6: {
        name: "Dynamic Programming",
        description: "Master optimization through memoization and optimal substructure",
        problems: [
            // DP Fundamentals (12 problems)
            {
                title: "Fibonacci with Memoization",
                why: "Learn to optimize recursive solutions by storing computed results",
                future: "Foundation for all dynamic programming and optimization problems",
                hint: "Store results in array/map to avoid recomputing same subproblems",
                difficulty: "easy"
            },
            {
                title: "Climbing Stairs",
                why: "Classic DP problem - count ways to reach destination",
                future: "Pattern for counting problems and path enumeration",
                hint: "Ways to reach step n = ways to reach (n-1) + ways to reach (n-2)",
                difficulty: "easy"
            },
            {
                title: "Min Cost Climbing Stairs",
                why: "Extend stair climbing to optimization with costs",
                future: "Foundation for cost-based optimization problems",
                hint: "Choose minimum cost between coming from previous or two steps back",
                difficulty: "easy"
            },
            {
                title: "House Robber",
                why: "Learn optimization with constraints (can't rob adjacent houses)",
                future: "Pattern for constraint-based optimization problems",
                hint: "For each house: max(rob this + max from 2 houses back, don't rob)",
                difficulty: "medium"
            },
            {
                title: "House Robber II (Circular)",
                why: "Extend linear DP to circular arrays",
                future: "Advanced pattern for circular constraint problems",
                hint: "Run house robber twice: include first house, exclude last; exclude first",
                difficulty: "medium"
            },
            {
                title: "Maximum Subarray Sum (Kadane's DP)",
                why: "Find contiguous subarray with maximum sum",
                future: "Foundation for many array optimization problems",
                hint: "At each position: extend previous subarray or start new one",
                difficulty: "medium"
            },
            {
                title: "Maximum Product Subarray",
                why: "Handle negative numbers in product optimization",
                future: "Advanced array optimization with sign considerations",
                hint: "Track both maximum and minimum products ending at each position",
                difficulty: "medium"
            },
            {
                title: "Coin Change - Minimum Coins",
                why: "Classic DP problem for making change with minimum coins",
                future: "Foundation for resource optimization and greedy vs DP comparison",
                hint: "For each amount: try each coin and take minimum coins needed",
                difficulty: "medium"
            },
            {
                title: "Coin Change - Count Ways",
                why: "Count number of ways to make change",
                future: "Pattern for counting combinations and arrangements",
                hint: "For each coin and amount: include coin + exclude coin",
                difficulty: "medium"
            },
            {
                title: "Target Sum",
                why: "Assign +/- signs to reach target sum",
                future: "Pattern for assignment and partitioning problems",
                hint: "Convert to subset sum: find subset with sum = (total + target) / 2",
                difficulty: "medium"
            },
            {
                title: "Partition Equal Subset Sum",
                why: "Check if array can be partitioned into two equal sum subsets",
                future: "Foundation for partitioning and subset problems",
                hint: "Find if subset exists with sum = total_sum / 2",
                difficulty: "medium"
            },
            {
                title: "Perfect Squares",
                why: "Find minimum perfect squares that sum to n",
                future: "Pattern for decomposition and mathematical DP",
                hint: "For each number: try all perfect squares less than it",
                difficulty: "medium"
            },

            // String DP (10 problems)
            {
                title: "Longest Common Subsequence",
                why: "Find longest subsequence common to two strings",
                future: "Foundation for sequence alignment and diff algorithms",
                hint: "If characters match: 1 + LCS of remaining, else max of two options",
                difficulty: "medium"
            },
            {
                title: "Longest Common Substring",
                why: "Find longest contiguous substring common to two strings",
                future: "Used in plagiarism detection and string similarity",
                hint: "Track length of common substring ending at each position",
                difficulty: "medium"
            },
            {
                title: "Edit Distance (Levenshtein)",
                why: "Minimum operations to convert one string to another",
                future: "Used in spell checkers, DNA analysis, and text comparison",
                hint: "Three operations: insert, delete, substitute - take minimum cost",
                difficulty: "hard"
            },
            {
                title: "Longest Palindromic Subsequence",
                why: "Find longest palindromic subsequence in string",
                future: "Pattern for palindrome optimization problems",
                hint: "If ends match: 2 + LPS of middle, else max of removing either end",
                difficulty: "medium"
            },
            {
                title: "Palindrome Partitioning",
                why: "Find minimum cuts to partition string into palindromes",
                future: "Used in string processing and partitioning problems",
                hint: "For each position: try all possible palindromes starting there",
                difficulty: "hard"
            },
            {
                title: "Word Break",
                why: "Check if string can be segmented using dictionary words",
                future: "Foundation for natural language processing",
                hint: "For each position: check if any dictionary word ends here",
                difficulty: "medium"
            },
            {
                title: "Word Break II",
                why: "Return all possible word break combinations",
                future: "Advanced string segmentation with enumeration",
                hint: "Use memoization to store all possible breaks from each position",
                difficulty: "hard"
            },
            {
                title: "Longest Increasing Subsequence",
                why: "Find longest subsequence with increasing elements",
                future: "Pattern for sequence optimization and ordering",
                hint: "For each element: find longest increasing subsequence ending here",
                difficulty: "medium"
            },
            {
                title: "Distinct Subsequences",
                why: "Count distinct subsequences of one string in another",
                future: "Advanced counting problem for string analysis",
                hint: "If characters match: include + exclude, else only exclude",
                difficulty: "hard"
            },
            {
                title: "Interleaving String",
                why: "Check if string is interleaving of two other strings",
                future: "Pattern for string merging and validation",
                hint: "Use 2D DP tracking positions in both source strings",
                difficulty: "medium"
            },

            // 2D DP Problems (8 problems)
            {
                title: "Unique Paths in Grid",
                why: "Count paths from top-left to bottom-right",
                future: "Foundation for pathfinding and grid-based problems",
                hint: "Paths to cell = paths from above + paths from left",
                difficulty: "medium"
            },
            {
                title: "Unique Paths with Obstacles",
                why: "Extend path counting with blocked cells",
                future: "Real-world pathfinding with constraints",
                hint: "If obstacle: paths = 0, else paths = from above + from left",
                difficulty: "medium"
            },
            {
                title: "Minimum Path Sum",
                why: "Find path from top-left to bottom-right with minimum sum",
                future: "Foundation for cost-based pathfinding",
                hint: "Min sum to cell = current value + min(from above, from left)",
                difficulty: "medium"
            },
            {
                title: "Maximum Path Sum in Triangle",
                why: "Find path with maximum sum in triangular grid",
                future: "Pattern for irregular grid optimization",
                hint: "Work bottom-up: each cell takes max of two possible parents",
                difficulty: "medium"
            },
            {
                title: "Maximal Square",
                why: "Find largest square of 1s in binary matrix",
                future: "Used in image processing and area optimization",
                hint: "Square size at cell = 1 + min of three neighbors if current is 1",
                difficulty: "medium"
            },
            {
                title: "Maximal Rectangle",
                why: "Find largest rectangle of 1s in binary matrix",
                future: "Advanced area optimization combining multiple techniques",
                hint: "For each row: calculate largest rectangle in histogram",
                difficulty: "hard"
            },
            {
                title: "Edit Distance 2D",
                why: "Solve edit distance with full 2D table approach",
                future: "Classic 2D DP pattern for string transformation",
                hint: "Build table where dp[i][j] = edit distance between first i and j characters",
                difficulty: "medium"
            },
            {
                title: "Wildcard Pattern Matching",
                why: "Match string with pattern containing * and ? wildcards",
                future: "Advanced pattern matching with dynamic programming",
                hint: "Handle * wildcard by considering match 0 or more characters",
                difficulty: "hard"
            },

            // Knapsack Problems (8 problems)
            {
                title: "0/1 Knapsack",
                why: "Classic optimization problem - include or exclude items",
                future: "Foundation for resource allocation and optimization problems",
                hint: "For each item and weight: max(include item, exclude item)",
                difficulty: "medium"
            },
            {
                title: "Unbounded Knapsack",
                why: "Knapsack where items can be used multiple times",
                future: "Pattern for unlimited resource problems",
                hint: "For each weight: try including each item multiple times",
                difficulty: "medium"
            },
            {
                title: "Subset Sum",
                why: "Check if subset exists with given sum",
                future: "Foundation for partitioning and subset problems",
                hint: "For each number and sum: include number or exclude number",
                difficulty: "medium"
            },
            {
                title: "Rod Cutting",
                why: "Cut rod to maximize profit from selling pieces",
                future: "Pattern for optimal cutting and division problems",
                hint: "For each length: try all possible first cuts and recurse",
                difficulty: "medium"
            },
            {
                title: "Minimum Subset Sum Difference",
                why: "Partition array to minimize difference between subset sums",
                future: "Advanced partitioning optimization",
                hint: "Find all possible subset sums, then minimize |S1 - S2|",
                difficulty: "medium"
            },
            {
                title: "Count Subset Sum",
                why: "Count number of subsets with given sum",
                future: "Counting variant of subset sum problem",
                hint: "For each number and sum: count ways including + count ways excluding",
                difficulty: "medium"
            },
            {
                title: "Combination Sum IV",
                why: "Count ways to reach target using unlimited numbers",
                future: "Advanced counting with order mattering",
                hint: "For each target: sum up ways using each number as last element",
                difficulty: "medium"
            },
            {
                title: "Integer Break",
                why: "Break integer to maximize product of parts",
                future: "Mathematical optimization with dynamic programming",
                hint: "For each number: try all possible first breaks and recurse",
                difficulty: "medium"
            },

            // Advanced DP (12 problems)
            {
                title: "Longest Arithmetic Subsequence",
                why: "Find longest subsequence with constant difference",
                future: "Pattern for arithmetic sequence optimization",
                hint: "For each pair: track length of arithmetic sequence ending here",
                difficulty: "medium"
            },
            {
                title: "Longest Geometric Subsequence",
                why: "Find longest subsequence with constant ratio",
                future: "Extension of arithmetic subsequence concept",
                hint: "Similar to arithmetic but track ratio instead of difference",
                difficulty: "medium"
            },
            {
                title: "Maximum Length Chain",
                why: "Find longest chain where second of each pair > first of next",
                future: "Pattern for chaining and sequencing problems",
                hint: "Sort pairs by second element, then find longest increasing subsequence",
                difficulty: "medium"
            },
            {
                title: "Russian Doll Envelopes",
                why: "Find maximum nested envelopes (2D version of LIS)",
                future: "Advanced sequencing in multiple dimensions",
                hint: "Sort by width, then find LIS by height",
                difficulty: "hard"
            },
            {
                title: "Best Time to Buy/Sell Stock",
                why: "Find maximum profit from one transaction",
                future: "Foundation for trading and profit optimization",
                hint: "Track minimum price seen so far and maximum profit at each day",
                difficulty: "easy"
            },
            {
                title: "Best Time to Buy/Sell Stock II",
                why: "Multiple transactions allowed",
                future: "Advanced trading optimization",
                hint: "Add profit for every profitable consecutive day pair",
                difficulty: "easy"
            },
            {
                title: "Best Time to Buy/Sell Stock with Cooldown",
                why: "Trading with one day cooldown after selling",
                future: "Advanced constraint-based optimization",
                hint: "Track states: holding stock, sold (cooldown), not holding",
                difficulty: "medium"
            },
            {
                title: "Best Time to Buy/Sell Stock with Fee",
                why: "Trading with transaction fee",
                future: "Cost-based trading optimization",
                hint: "Similar to basic version but subtract fee from profit",
                difficulty: "medium"
            },
            {
                title: "Decode Ways",
                why: "Count ways to decode string where A=1, B=2, ..., Z=26",
                future: "Pattern for encoding/decoding problems",
                hint: "For each position: ways to decode as single digit + as double digit",
                difficulty: "medium"
            },
            {
                title: "Cherry Pickup",
                why: "Maximum cherries collected in grid traversal",
                future: "Advanced grid optimization with multiple paths",
                hint: "Model as two people going from start to end simultaneously",
                difficulty: "hard"
            },
            {
                title: "Stone Game",
                why: "Optimal strategy game where players pick from ends",
                future: "Game theory and adversarial optimization",
                hint: "Each player plays optimally: max(pick left - opponent's best, pick right - opponent's best)",
                difficulty: "medium"
            },
            {
                title: "Burst Balloons",
                why: "Maximum coins from bursting balloons optimally",
                future: "Advanced interval DP and optimal ordering",
                hint: "Think of which balloon to burst last in each interval",
                difficulty: "hard"
            }
        ]
    },
    7: {
        name: "Heaps & Sorting",
        description: "Master priority queues and efficient ordering algorithms",
        problems: [
            // Heap Fundamentals (12 problems)
            {
                title: "Implement Min Heap",
                why: "Learn the complete binary tree structure for priority queues",
                future: "Foundation for priority queues, scheduling, and optimization algorithms",
                hint: "Use array representation, parent at i/2, children at 2i and 2i+1",
                difficulty: "medium"
            },
            {
                title: "Implement Max Heap",
                why: "Master the opposite priority structure - largest element first",
                future: "Used in heap sort and finding maximum elements efficiently",
                hint: "Similar to min heap but parent is larger than children",
                difficulty: "medium"
            },
            {
                title: "Insert Element in Heap",
                why: "Learn to maintain heap property during insertion",
                future: "Core operation for dynamic priority queue maintenance",
                hint: "Add at end, then bubble up by comparing with parent",
                difficulty: "medium"
            },
            {
                title: "Delete Root from Heap",
                why: "Master removing highest priority element while maintaining structure",
                future: "Essential for priority queue pop operations",
                hint: "Replace root with last element, then bubble down to maintain heap property",
                difficulty: "medium"
            },
            {
                title: "Heapify Array",
                why: "Convert arbitrary array into heap structure efficiently",
                future: "Foundation for heap sort and building heaps from existing data",
                hint: "Start from last non-leaf node, bubble down each element",
                difficulty: "medium"
            },
            {
                title: "Find Kth Largest Element",
                why: "Use heap for efficient order statistics",
                future: "Used in data analysis, ranking, and selection algorithms",
                hint: "Use min heap of size K, replace root if new element is larger",
                difficulty: "medium"
            },
            {
                title: "Find Kth Smallest Element",
                why: "Apply heap concept for finding smallest elements",
                future: "Complement to Kth largest, used in selection problems",
                hint: "Use max heap of size K, replace root if new element is smaller",
                difficulty: "medium"
            },
            {
                title: "Merge K Sorted Arrays",
                why: "Apply heap to efficiently merge multiple sorted sequences",
                future: "Used in external sorting and merging large datasets",
                hint: "Use min heap to track smallest element from each array",
                difficulty: "medium"
            },
            {
                title: "Top K Frequent Elements",
                why: "Combine frequency counting with heap-based selection",
                future: "Used in trending analysis and recommendation systems",
                hint: "Count frequencies, then use heap to find K most frequent",
                difficulty: "medium"
            },
            {
                title: "Sliding Window Maximum",
                why: "Use specialized heap structure for window-based optimization",
                future: "Advanced pattern for real-time data processing",
                hint: "Use deque to maintain maximum in each window efficiently",
                difficulty: "hard"
            },
            {
                title: "Meeting Rooms II",
                why: "Apply heap to interval scheduling problems",
                future: "Used in resource allocation and scheduling algorithms",
                hint: "Use min heap to track meeting end times",
                difficulty: "medium"
            },
            {
                title: "Median from Data Stream",
                why: "Maintain median efficiently using two heaps",
                future: "Used in streaming analytics and real-time statistics",
                hint: "Use max heap for smaller half, min heap for larger half",
                difficulty: "hard"
            },

            // Basic Sorting Algorithms (8 problems)
            {
                title: "Bubble Sort",
                why: "Learn the simplest sorting algorithm - foundation of comparison sorting",
                future: "Understanding basis for all comparison-based sorting algorithms",
                hint: "Compare adjacent elements, swap if out of order, repeat until no swaps",
                difficulty: "easy"
            },
            {
                title: "Selection Sort",
                why: "Master finding minimum and placing in correct position",
                future: "Pattern for selection-based algorithms and optimization",
                hint: "Find minimum in unsorted portion, swap with first unsorted element",
                difficulty: "easy"
            },
            {
                title: "Insertion Sort",
                why: "Learn incremental sorting - building sorted portion one element at a time",
                future: "Efficient for small arrays and nearly sorted data",
                hint: "Take next unsorted element, insert into correct position in sorted portion",
                difficulty: "easy"
            },
            {
                title: "Merge Sort",
                why: "Master divide-and-conquer sorting with guaranteed O(n log n)",
                future: "Foundation for stable sorting and external sorting algorithms",
                hint: "Divide array in half, recursively sort, then merge sorted halves",
                difficulty: "medium"
            },
            {
                title: "Quick Sort",
                why: "Learn partitioning-based sorting - most widely used algorithm",
                future: "Foundation for efficient sorting and partitioning techniques",
                hint: "Choose pivot, partition array, recursively sort both parts",
                difficulty: "medium"
            },
            {
                title: "Heap Sort",
                why: "Apply heap data structure to create efficient sorting algorithm",
                future: "In-place sorting with guaranteed O(n log n) performance",
                hint: "Build max heap, repeatedly extract maximum and place at end",
                difficulty: "medium"
            },
            {
                title: "Counting Sort",
                why: "Learn non-comparison based sorting for limited range integers",
                future: "Foundation for radix sort and when range is small",
                hint: "Count frequency of each element, then place in output based on counts",
                difficulty: "medium"
            },
            {
                title: "Radix Sort",
                why: "Master digit-by-digit sorting for integers",
                future: "Efficient for sorting large integers and strings",
                hint: "Sort by each digit position using stable counting sort",
                difficulty: "medium"
            },

            // Advanced Sorting Problems (10 problems)
            {
                title: "Sort Colors (Dutch Flag)",
                why: "Three-way partitioning - sorting with three distinct values",
                future: "Advanced partitioning pattern for multi-way sorting",
                hint: "Use three pointers to partition into three regions",
                difficulty: "medium"
            },
            {
                title: "Merge Intervals",
                why: "Sort intervals and merge overlapping ones",
                future: "Used in calendar applications and interval processing",
                hint: "Sort by start time, merge if current overlaps with previous",
                difficulty: "medium"
            },
            {
                title: "Non-overlapping Intervals",
                why: "Find minimum intervals to remove to make non-overlapping",
                future: "Optimization problem using greedy approach with sorting",
                hint: "Sort by end time, greedily select non-overlapping intervals",
                difficulty: "medium"
            },
            {
                title: "Largest Number",
                why: "Custom comparator to arrange numbers for largest possible number",
                future: "Advanced sorting with custom comparison logic",
                hint: "Sort using custom comparator: a+b vs b+a lexicographically",
                difficulty: "medium"
            },
            {
                title: "Sort Array by Increasing Frequency",
                why: "Multiple sorting criteria - frequency then value",
                future: "Pattern for complex sorting requirements",
                hint: "Count frequencies, sort by frequency ascending, then by value descending",
                difficulty: "easy"
            },
            {
                title: "Custom Sort String",
                why: "Sort string based on custom character ordering",
                future: "Used in internationalization and custom ordering requirements",
                hint: "Create mapping for custom order, sort using this mapping",
                difficulty: "medium"
            },
            {
                title: "Wiggle Sort",
                why: "Arrange array so nums[0] < nums[1] > nums[2] < nums[3]...",
                future: "Pattern for arranging data with alternating constraints",
                hint: "Sort array, then place elements alternately from both ends",
                difficulty: "medium"
            },
            {
                title: "Sort Transformed Array",
                why: "Sort array after applying quadratic transformation",
                future: "Optimization using properties of mathematical functions",
                hint: "Use two pointers based on parabola properties",
                difficulty: "medium"
            },
            {
                title: "Find Right Interval",
                why: "For each interval, find the interval with smallest start that's >= its end",
                future: "Binary search combined with sorting for interval problems",
                hint: "Sort intervals, use binary search to find right interval for each",
                difficulty: "medium"
            },
            {
                title: "Car Fleet",
                why: "Sort cars by position and calculate fleet formation",
                future: "Real-world simulation using sorting and analysis",
                hint: "Sort by position, calculate time to reach target for each car",
                difficulty: "medium"
            },

            // Priority Queue Applications (8 problems)
            {
                title: "Task Scheduler",
                why: "Schedule tasks with cooldown constraints using priority queue",
                future: "Used in CPU scheduling and resource management",
                hint: "Use max heap for task frequencies, simulate scheduling with cooldown",
                difficulty: "medium"
            },
            {
                title: "Reorganize String",
                why: "Rearrange string so no two adjacent characters are same",
                future: "Pattern for arrangement problems with constraints",
                hint: "Use max heap for character frequencies, greedily place most frequent",
                difficulty: "medium"
            },
            {
                title: "Ugly Number II",
                why: "Find nth ugly number using multiple sorted sequences",
                future: "Pattern for generating sequences with multiple sources",
                hint: "Use min heap to generate ugly numbers in order",
                difficulty: "medium"
            },
            {
                title: "Super Ugly Number",
                why: "Generalize ugly numbers to arbitrary prime factors",
                future: "Advanced sequence generation with multiple constraints",
                hint: "Use min heap with pointers for each prime factor",
                difficulty: "medium"
            },
            {
                title: "Find K Pairs with Smallest Sums",
                why: "Use heap to efficiently find smallest sum pairs",
                future: "Pattern for finding optimal combinations",
                hint: "Use min heap, start with pairs using first element of each array",
                difficulty: "medium"
            },
            {
                title: "IPO (Maximum Capital)",
                why: "Maximize capital by selecting projects optimally",
                future: "Greedy optimization using multiple priority queues",
                hint: "Use min heap for projects by capital, max heap for available profits",
                difficulty: "hard"
            },
            {
                title: "Twitter News Feed",
                why: "Merge multiple sorted feeds to create combined timeline",
                future: "Real-world social media feed generation",
                hint: "Use min heap to merge K sorted lists of tweets",
                difficulty: "medium"
            },
            {
                title: "Smallest Range Covering K Lists",
                why: "Find smallest range that includes at least one element from each list",
                future: "Advanced optimization using heap for multiple constraints",
                hint: "Use min heap to track current minimum across all lists",
                difficulty: "hard"
            },

            // Sorting Analysis and Optimization (7 problems)
            {
                title: "Count Inversions in Array",
                why: "Count pairs where left element is greater than right element",
                future: "Used in ranking correlation and sorting analysis",
                hint: "Use modified merge sort to count inversions during merging",
                difficulty: "medium"
            },
            {
                title: "Pancake Sorting",
                why: "Sort array using only flip operation (reverse prefix)",
                future: "Pattern for constrained sorting with limited operations",
                hint: "Repeatedly flip largest element to front, then to correct position",
                difficulty: "medium"
            },
            {
                title: "Sort List (Linked List)",
                why: "Apply merge sort to linked list structure",
                future: "Sorting without random access - important for linked structures",
                hint: "Use merge sort with slow/fast pointers to find middle",
                difficulty: "medium"
            },
            {
                title: "Sort Matrix Diagonally",
                why: "Sort each diagonal of matrix independently",
                future: "Matrix processing with constrained sorting",
                hint: "Extract each diagonal, sort it, then put back",
                difficulty: "medium"
            },
            {
                title: "Minimum Number of Arrows",
                why: "Find minimum arrows to burst all balloons (intervals)",
                future: "Interval optimization using sorting and greedy approach",
                hint: "Sort intervals by end point, greedily place arrows",
                difficulty: "medium"
            },
            {
                title: "Queue Reconstruction by Height",
                why: "Reconstruct queue based on height and count constraints",
                future: "Complex reconstruction problem using sorting strategy",
                hint: "Sort by height descending, then by count ascending, insert by count",
                difficulty: "medium"
            },
            {
                title: "Relative Sort Array",
                why: "Sort array based on relative order defined by another array",
                future: "Custom sorting with external ordering requirements",
                hint: "Count frequencies, output in order of relative array, then remaining sorted",
                difficulty: "easy"
            }
        ]
    },
    8: {
        name: "Advanced Topics",
        description: "Master complex algorithms and competitive programming patterns",
        problems: [
            // Backtracking (12 problems)
            {
                title: "Generate All Subsets",
                why: "Learn systematic exploration of all possibilities using backtracking",
                future: "Foundation for combinatorial search and optimization problems",
                hint: "For each element: include it in subset or exclude it, backtrack",
                difficulty: "medium"
            },
            {
                title: "Generate All Permutations",
                why: "Master arrangement generation with backtracking",
                future: "Used in scheduling, arrangement problems, and optimization",
                hint: "Try each unused element at current position, backtrack when done",
                difficulty: "medium"
            },
            {
                title: "Combination Sum",
                why: "Find all combinations that sum to target",
                future: "Pattern for constrained combination problems",
                hint: "Try including current number (can reuse), or skip to next number",
                difficulty: "medium"
            },
            {
                title: "N-Queens Problem",
                why: "Classic backtracking problem - place N queens on NxN board",
                future: "Foundation for constraint satisfaction problems",
                hint: "Place queen in each row, check if position is safe, backtrack if not",
                difficulty: "hard"
            },
            {
                title: "Sudoku Solver",
                why: "Solve 9x9 Sudoku puzzle using constraint satisfaction",
                future: "Advanced backtracking with multiple constraints",
                hint: "Try numbers 1-9 in empty cell, check if valid, backtrack if stuck",
                difficulty: "hard"
            },
            {
                title: "Word Search in Grid",
                why: "Search for word in 2D grid using backtracking",
                future: "Pattern for path finding with constraints",
                hint: "Try each direction from current cell, mark visited, backtrack",
                difficulty: "medium"
            },
            {
                title: "Letter Combinations of Phone Number",
                why: "Generate all possible letter combinations from phone number",
                future: "Combinatorial generation with mapping",
                hint: "For each digit, try each mapped letter, recurse for remaining digits",
                difficulty: "medium"
            },
            {
                title: "Palindrome Partitioning",
                why: "Find all ways to partition string into palindromes",
                future: "String partitioning with constraints",
                hint: "Try each possible palindrome starting at current position, recurse",
                difficulty: "medium"
            },
            {
                title: "Generate Parentheses",
                why: "Generate all valid combinations of n pairs of parentheses",
                future: "Pattern for generating valid sequences with rules",
                hint: "Add opening bracket if count < n, add closing if closing < opening",
                difficulty: "medium"
            },
            {
                title: "Restore IP Addresses",
                why: "Find all valid IP addresses from string of digits",
                future: "String partitioning with validation constraints",
                hint: "Try 1, 2, or 3 digits for each IP part, validate each part",
                difficulty: "medium"
            },
            {
                title: "Word Break II",
                why: "Find all possible word break combinations",
                future: "Advanced string segmentation with enumeration",
                hint: "Try each dictionary word at current position, recurse for remaining",
                difficulty: "hard"
            },
            {
                title: "Beautiful Arrangement",
                why: "Count arrangements where number at position i is divisible by i or vice versa",
                future: "Constraint satisfaction with mathematical conditions",
                hint: "Try each unused number at current position, check divisibility constraint",
                difficulty: "medium"
            },

            // Bit Manipulation (10 problems)
            {
                title: "Count Set Bits (1s) in Number",
                why: "Learn basic bit counting - foundation of bit manipulation",
                future: "Used in optimization, cryptography, and low-level programming",
                hint: "Use n & (n-1) to remove rightmost set bit, count iterations",
                difficulty: "easy"
            },
            {
                title: "Check if Number is Power of 2",
                why: "Apply bit tricks for mathematical property checking",
                future: "Used in memory allocation and binary tree problems",
                hint: "Power of 2 has exactly one bit set: n & (n-1) == 0",
                difficulty: "easy"
            },
            {
                title: "Find Single Number (XOR)",
                why: "Use XOR properties to find unique element",
                future: "Pattern for finding unique elements without extra space",
                hint: "XOR all numbers, duplicates cancel out, unique number remains",
                difficulty: "easy"
            },
            {
                title: "Find Two Single Numbers",
                why: "Extend single number problem to two unique elements",
                future: "Advanced bit manipulation for multiple unique elements",
                hint: "XOR all, find any set bit in result, partition by this bit",
                difficulty: "medium"
            },
            {
                title: "Reverse Bits",
                why: "Learn bit-level reversal techniques",
                future: "Used in bit-level data processing and algorithms",
                hint: "Extract rightmost bit, shift result left, shift input right",
                difficulty: "easy"
            },
            {
                title: "Number of 1 Bits",
                why: "Efficiently count set bits using bit manipulation tricks",
                future: "Optimization technique for bit counting operations",
                hint: "Use Brian Kernighan's algorithm: n = n & (n-1)",
                difficulty: "easy"
            },
            {
                title: "Bitwise AND of Numbers Range",
                why: "Find AND of all numbers in a range efficiently",
                future: "Pattern for range-based bit operations",
                hint: "Find common prefix of left and right boundaries",
                difficulty: "medium"
            },
            {
                title: "Maximum XOR of Two Numbers",
                why: "Find pair with maximum XOR using trie or bit manipulation",
                future: "Advanced optimization using bit properties",
                hint: "Build trie of binary representations, find complement for each number",
                difficulty: "hard"
            },
            {
                title: "Sum of Two Integers without + operator",
                why: "Implement addition using only bit operations",
                future: "Low-level programming and understanding binary arithmetic",
                hint: "Use XOR for sum, AND with left shift for carry, repeat until no carry",
                difficulty: "medium"
            },
            {
                title: "Counting Bits",
                why: "Count set bits for all numbers from 0 to n efficiently",
                future: "Dynamic programming with bit manipulation",
                hint: "dp[i] = dp[i >> 1] + (i & 1) - use previously computed results",
                difficulty: "medium"
            },

            // Mathematical Algorithms (8 problems)
            {
                title: "Greatest Common Divisor (GCD)",
                why: "Learn Euclidean algorithm - fundamental mathematical technique",
                future: "Used in cryptography, number theory, and fraction operations",
                hint: "GCD(a,b) = GCD(b, a%b), base case: GCD(a,0) = a",
                difficulty: "easy"
            },
            {
                title: "Least Common Multiple (LCM)",
                why: "Apply relationship between GCD and LCM",
                future: "Used in scheduling and mathematical computations",
                hint: "LCM(a,b) = (a*b) / GCD(a,b)",
                difficulty: "easy"
            },
            {
                title: "Prime Number Check",
                why: "Efficient primality testing for number theory",
                future: "Foundation for cryptography and mathematical algorithms",
                hint: "Check divisibility up to sqrt(n), optimize for 2 and odd numbers",
                difficulty: "easy"
            },
            {
                title: "Sieve of Eratosthenes",
                why: "Generate all primes up to n efficiently",
                future: "Used in number theory and prime-based algorithms",
                hint: "Mark multiples of each prime starting from prime^2",
                difficulty: "medium"
            },
            {
                title: "Fast Exponentiation",
                why: "Compute a^b mod m efficiently in O(log b) time",
                future: "Used in cryptography and large number computations",
                hint: "Use binary representation of exponent, square and multiply",
                difficulty: "medium"
            },
            {
                title: "Fibonacci Sequence Optimization",
                why: "Compute Fibonacci numbers efficiently using matrix exponentiation",
                future: "Advanced technique for linear recurrence relations",
                hint: "Use matrix [[1,1],[1,0]] and fast exponentiation",
                difficulty: "hard"
            },
            {
                title: "Extended Euclidean Algorithm",
                why: "Find coefficients x, y such that ax + by = gcd(a,b)",
                future: "Used in cryptography and modular arithmetic",
                hint: "Extend GCD algorithm to track coefficients through recursion",
                difficulty: "hard"
            },
            {
                title: "Chinese Remainder Theorem",
                why: "Solve system of modular equations",
                future: "Advanced number theory for cryptography and distributed systems",
                hint: "Combine solutions using modular arithmetic and inverse elements",
                difficulty: "hard"
            },

            // Advanced Data Structures (8 problems)
            {
                title: "Implement Trie (Prefix Tree)",
                why: "Build tree structure for efficient string prefix operations",
                future: "Used in autocomplete, spell checkers, and IP routing",
                hint: "Each node has children array for each character, track end of word",
                difficulty: "medium"
            },
            {
                title: "Word Search II (Trie)",
                why: "Optimize multiple word search using trie structure",
                future: "Advanced pattern for multiple pattern matching",
                hint: "Build trie of all words, DFS on board while traversing trie",
                difficulty: "hard"
            },
            {
                title: "Design LRU Cache",
                why: "Implement Least Recently Used cache with O(1) operations",
                future: "Used in caching systems and memory management",
                hint: "Combine hash map with doubly linked list",
                difficulty: "medium"
            },
            {
                title: "Design LFU Cache",
                why: "Implement Least Frequently Used cache with O(1) operations",
                future: "Advanced caching strategy for frequency-based eviction",
                hint: "Use nested hash maps to track frequency and recency",
                difficulty: "hard"
            },
            {
                title: "Union-Find (Disjoint Set)",
                why: "Implement efficient data structure for connectivity queries",
                future: "Used in graph algorithms, clustering, and network connectivity",
                hint: "Use path compression and union by rank for optimization",
                difficulty: "medium"
            },
            {
                title: "Segment Tree",
                why: "Build tree for efficient range queries and updates",
                future: "Used in competitive programming and range-based operations",
                hint: "Each node represents range, leaf nodes are single elements",
                difficulty: "hard"
            },
            {
                title: "Fenwick Tree (Binary Indexed Tree)",
                why: "Efficient data structure for prefix sum queries and updates",
                future: "Space-efficient alternative to segment tree for sum queries",
                hint: "Use bit manipulation to navigate tree structure",
                difficulty: "hard"
            },
            {
                title: "Skip List",
                why: "Probabilistic data structure for sorted data with O(log n) operations",
                future: "Alternative to balanced trees with simpler implementation",
                hint: "Multiple levels of linked lists with probabilistic connections",
                difficulty: "hard"
            },

            // Game Theory & Logic (6 problems)
            {
                title: "Nim Game",
                why: "Learn basic game theory - optimal strategy in two-player games",
                future: "Foundation for game AI and competitive strategy",
                hint: "Losing position when stones % 4 == 0",
                difficulty: "easy"
            },
            {
                title: "Stone Game",
                why: "Dynamic programming approach to optimal game strategy",
                future: "Advanced game theory with complex state spaces",
                hint: "Each player chooses optimally to maximize their advantage",
                difficulty: "medium"
            },
            {
                title: "Predict the Winner",
                why: "Determine winner when both players play optimally",
                future: "Game theory with minimax strategy",
                hint: "Use recursion with memoization to find optimal moves",
                difficulty: "medium"
            },
            {
                title: "Can I Win",
                why: "Determine if current player can force a win",
                future: "Game theory with state space exploration",
                hint: "Use bitmask to represent available numbers, memoize game states",
                difficulty: "medium"
            },
            {
                title: "Optimal Strategy for a Game",
                why: "Find maximum difference achievable by optimal play",
                future: "Advanced game theory optimization",
                hint: "For each range, player takes max(left - opponent's best, right - opponent's best)",
                difficulty: "medium"
            },
            {
                title: "Cats and Mouse Game",
                why: "Complex game theory problem with multiple players and positions",
                future: "Advanced state space search in game theory",
                hint: "Use minimax with states representing positions of cat and mouse",
                difficulty: "hard"
            },

            // Pattern Matching & String Algorithms (6 problems)
            {
                title: "KMP String Matching",
                why: "Implement Knuth-Morris-Pratt algorithm for efficient pattern matching",
                future: "Advanced string searching with O(n+m) complexity",
                hint: "Build failure function, use it to skip characters efficiently",
                difficulty: "hard"
            },
            {
                title: "Rabin-Karp Rolling Hash",
                why: "Use hashing for efficient string pattern matching",
                future: "Used in plagiarism detection and duplicate finding",
                hint: "Use polynomial rolling hash, handle hash collisions",
                difficulty: "hard"
            },
            {
                title: "Z Algorithm",
                why: "Find all occurrences of pattern in text using Z-array",
                future: "Alternative to KMP with different preprocessing",
                hint: "Build Z-array that stores length of longest substring starting from i",
                difficulty: "hard"
            },
            {
                title: "Manacher's Algorithm",
                why: "Find all palindromic substrings in linear time",
                future: "Optimal algorithm for palindrome detection",
                hint: "Use symmetry properties to avoid redundant comparisons",
                difficulty: "hard"
            },
            {
                title: "Aho-Corasick Algorithm",
                why: "Multiple pattern matching using automaton",
                future: "Used in antivirus software and text processing",
                hint: "Build trie with failure links for efficient multiple pattern search",
                difficulty: "hard"
            },
            {
                title: "Suffix Array",
                why: "Build sorted array of all suffixes for string processing",
                future: "Advanced string algorithms and text indexing",
                hint: "Use counting sort with suffix comparison optimization",
                difficulty: "hard"
            }
        ]
    },
};

// Make sure dsaData is available globally
window.dsaData = dsaData;