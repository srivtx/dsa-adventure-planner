// Enhanced Code Editor and Practice System
class CodeEditor {
    constructor(gameInstance) {
        this.game = gameInstance;
        this.currentProblem = null;
        this.editor = null;
        this.testCases = [];
        this.initializeCodeEditor();
    }

    initializeCodeEditor() {
        // Initialize code editor functionality
        this.setupCodeEditor();
        this.setupTestRunner();
        this.setupHintSystem();
    }

    setupCodeEditor() {
        // Create enhanced code editor with syntax highlighting simulation
        const editorContainer = document.createElement('div');
        editorContainer.innerHTML = `
            <div class="code-editor-container">
                <div class="editor-header">
                    <div class="editor-tabs">
                        <button class="editor-tab active" data-language="javascript">JavaScript</button>
                        <button class="editor-tab" data-language="python">Python</button>
                        <button class="editor-tab" data-language="java">Java</button>
                    </div>
                    <div class="editor-actions">
                        <button class="btn-icon" id="format-code" title="Format Code">⚡</button>
                        <button class="btn-icon" id="reset-code" title="Reset Code">🔄</button>
                    </div>
                </div>
                <div class="editor-main">
                    <div class="line-numbers" id="line-numbers"></div>
                    <textarea class="code-editor" id="code-editor" placeholder="// Write your solution here...
function twoSum(nums, target) {
    // Your code here
    
}"></textarea>
                </div>
                <div class="editor-footer">
                    <div class="editor-status">
                        <span class="status-item">Line: <span id="cursor-line">1</span></span>
                        <span class="status-item">Col: <span id="cursor-col">1</span></span>
                        <span class="status-item">Lang: <span id="current-lang">JavaScript</span></span>
                    </div>
                </div>
            </div>
        `;
        return editorContainer;
    }

    setupTestRunner() {
        const testContainer = document.createElement('div');
        testContainer.innerHTML = `
            <div class="test-runner">
                <div class="test-header">
                    <h4>🧪 Test Cases</h4>
                    <div class="test-actions">
                        <button class="btn btn-primary" id="run-tests">▶️ Run Tests</button>
                        <button class="btn btn-secondary" id="run-custom">🔧 Custom Test</button>
                    </div>
                </div>
                <div class="test-cases" id="test-cases">
                    <!-- Test cases will be populated here -->
                </div>
                <div class="test-output" id="test-output">
                    <div class="output-header">📊 Test Results</div>
                    <div class="output-content" id="output-content">
                        Click "Run Tests" to see results...
                    </div>
                </div>
            </div>
        `;
        return testContainer;
    }

    setupHintSystem() {
        const hintContainer = document.createElement('div');
        hintContainer.innerHTML = `
            <div class="hint-system">
                <div class="hint-header">
                    <h4>💡 Hints & Analysis</h4>
                    <div class="hint-actions">
                        <button class="btn btn-secondary" id="get-hint">💡 Get Hint</button>
                        <button class="btn btn-secondary" id="time-complexity">⏱️ Complexity</button>
                        <button class="btn btn-warning" id="show-solution">🔓 Solution</button>
                    </div>
                </div>
                <div class="hint-content" id="hint-content">
                    <div class="hint-placeholder">
                        💭 Click "Get Hint" for step-by-step guidance
                    </div>
                </div>
                <div class="complexity-analysis" id="complexity-analysis" style="display: none;">
                    <h5>📈 Complexity Analysis</h5>
                    <div class="complexity-grid">
                        <div class="complexity-item">
                            <span class="complexity-label">Time:</span>
                            <span class="complexity-value" id="time-complexity-value">O(?)</span>
                        </div>
                        <div class="complexity-item">
                            <span class="complexity-label">Space:</span>
                            <span class="complexity-value" id="space-complexity-value">O(?)</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
        return hintContainer;
    }

    openCodeEditor(problemId) {
        const [level, index] = problemId.split('-').map(Number);
        const problem = window.dsaData && window.dsaData[level] ? window.dsaData[level].problems[index] : null;
        
        if (!problem) {
            console.error('Problem not found:', problemId);
            return;
        }

        this.currentProblem = problem;
        this.showCodeModal(problem);
    }

    showCodeModal(problem) {
        const modal = document.getElementById('problem-modal');
        const modalTitle = document.getElementById('modal-title');
        const modalContent = document.getElementById('modal-content');

        modalTitle.textContent = '💻 Code Practice: ' + problem.title;
        
        const modalHTML = `
            <div class="code-practice-container">
                <div class="problem-description">
                    <div class="problem-summary">
                        <h4>🎯 Problem</h4>
                        <p>${problem.description || 'Solve this algorithmic challenge!'}</p>
                        <div class="problem-meta">
                            <span class="difficulty-tag difficulty-${problem.difficulty}">${problem.difficulty}</span>
                            <span class="topic-tag">${problem.category || 'Algorithm'}</span>
                        </div>
                    </div>
                    <div class="problem-examples">
                        <h5>📝 Examples</h5>
                        <div class="example-list" id="example-list">
                            ${this.generateExamples(problem)}
                        </div>
                    </div>
                </div>
                
                <div class="code-workspace">
                    <div class="workspace-tabs">
                        <button class="workspace-tab active" data-tab="editor">💻 Code Editor</button>
                        <button class="workspace-tab" data-tab="tests">🧪 Test Cases</button>
                        <button class="workspace-tab" data-tab="hints">💡 Hints</button>
                    </div>
                    
                    <div class="workspace-content">
                        <div class="workspace-panel active" id="editor-panel">
                            ${this.setupCodeEditor().innerHTML}
                        </div>
                        
                        <div class="workspace-panel" id="tests-panel">
                            ${this.setupTestRunner().innerHTML}
                        </div>
                        
                        <div class="workspace-panel" id="hints-panel">
                            ${this.setupHintSystem().innerHTML}
                        </div>
                    </div>
                </div>
            </div>
        `;

        modalContent.innerHTML = modalHTML;
        modal.style.display = 'block';

        // Initialize event listeners
        this.initializeCodeEditorEvents(problem);
    }

    generateExamples(problem) {
        // Generate sample test cases based on problem type
        const examples = this.getExamplesForProblem(problem);
        
        return examples.map((example, index) => `
            <div class="example-case">
                <div class="example-header">Example ${index + 1}:</div>
                <div class="example-io">
                    <div class="example-input">
                        <strong>Input:</strong> <code>${example.input}</code>
                    </div>
                    <div class="example-output">
                        <strong>Output:</strong> <code>${example.output}</code>
                    </div>
                    ${example.explanation ? `<div class="example-explanation"><strong>Explanation:</strong> ${example.explanation}</div>` : ''}
                </div>
            </div>
        `).join('');
    }

    getExamplesForProblem(problem) {
        // Generate contextual examples based on problem title/type
        const title = problem.title.toLowerCase();
        
        if (title.includes('two sum')) {
            return [
                {
                    input: 'nums = [2,7,11,15], target = 9',
                    output: '[0,1]',
                    explanation: 'Because nums[0] + nums[1] == 9, we return [0, 1].'
                },
                {
                    input: 'nums = [3,2,4], target = 6',
                    output: '[1,2]',
                    explanation: 'Because nums[1] + nums[2] == 6, we return [1, 2].'
                }
            ];
        } else if (title.includes('binary search')) {
            return [
                {
                    input: 'nums = [-1,0,3,5,9,12], target = 9',
                    output: '4',
                    explanation: '9 exists in nums and its index is 4'
                },
                {
                    input: 'nums = [-1,0,3,5,9,12], target = 2',
                    output: '-1',
                    explanation: '2 does not exist in nums so return -1'
                }
            ];
        } else {
            return [
                {
                    input: 'Sample input for ' + problem.title,
                    output: 'Expected output',
                    explanation: 'Work through this example step by step'
                }
            ];
        }
    }

    initializeCodeEditorEvents(problem) {
        // Workspace tab switching
        document.querySelectorAll('.workspace-tab').forEach(tab => {
            tab.addEventListener('click', () => {
                const targetTab = tab.dataset.tab;
                this.switchWorkspaceTab(targetTab);
            });
        });

        // Language switching
        document.querySelectorAll('.editor-tab').forEach(tab => {
            tab.addEventListener('click', () => {
                this.switchLanguage(tab.dataset.language);
            });
        });

        // Code editor events
        const codeEditor = document.getElementById('code-editor');
        if (codeEditor) {
            codeEditor.addEventListener('input', () => this.updateLineNumbers());
            codeEditor.addEventListener('scroll', () => this.syncLineNumbers());
            codeEditor.addEventListener('keydown', (e) => this.handleKeyDown(e));
        }

        // Button events
        const runTestsBtn = document.getElementById('run-tests');
        if (runTestsBtn) {
            runTestsBtn.addEventListener('click', () => this.runTests(problem));
        }

        const getHintBtn = document.getElementById('get-hint');
        if (getHintBtn) {
            getHintBtn.addEventListener('click', () => this.showHint(problem));
        }

        const showSolutionBtn = document.getElementById('show-solution');
        if (showSolutionBtn) {
            showSolutionBtn.addEventListener('click', () => this.showSolution(problem));
        }

        // Initialize line numbers
        this.updateLineNumbers();
        this.loadProblemTemplate(problem);
    }

    switchWorkspaceTab(tabName) {
        // Hide all panels
        document.querySelectorAll('.workspace-panel').forEach(panel => {
            panel.classList.remove('active');
        });
        
        // Show target panel
        document.getElementById(tabName + '-panel').classList.add('active');
        
        // Update tab appearance
        document.querySelectorAll('.workspace-tab').forEach(tab => {
            tab.classList.remove('active');
        });
        document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');
    }

    switchLanguage(language) {
        document.querySelectorAll('.editor-tab').forEach(tab => {
            tab.classList.remove('active');
        });
        document.querySelector(`[data-language="${language}"]`).classList.add('active');
        document.getElementById('current-lang').textContent = language.charAt(0).toUpperCase() + language.slice(1);
        
        // Load language-specific template
        this.loadLanguageTemplate(language);
    }

    loadLanguageTemplate(language) {
        const codeEditor = document.getElementById('code-editor');
        const templates = {
            javascript: `// JavaScript Solution
function solve(input) {
    // Write your solution here
    
    return result;
}`,
            python: `# Python Solution
def solve(input):
    # Write your solution here
    
    return result`,
            java: `// Java Solution
public class Solution {
    public int solve(int[] input) {
        // Write your solution here
        
        return result;
    }
}`
        };
        
        if (codeEditor && templates[language]) {
            codeEditor.value = templates[language];
            this.updateLineNumbers();
        }
    }

    loadProblemTemplate(problem) {
        const title = problem.title.toLowerCase();
        let template = '';
        
        if (title.includes('two sum')) {
            template = `// Two Sum Solution
function twoSum(nums, target) {
    // Approach 1: Brute Force - O(n²)
    // Approach 2: Hash Map - O(n)
    
    const map = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        
        map.set(nums[i], i);
    }
    
    return []; // No solution found
}`;
        } else if (title.includes('binary search')) {
            template = `// Binary Search Solution
function binarySearch(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return -1; // Target not found
}`;
        } else {
            template = `// ${problem.title} Solution
function solve() {
    // TODO: Implement your solution
    
    
    return result;
}`;
        }
        
        const codeEditor = document.getElementById('code-editor');
        if (codeEditor) {
            codeEditor.value = template;
            this.updateLineNumbers();
        }
    }

    updateLineNumbers() {
        const codeEditor = document.getElementById('code-editor');
        const lineNumbers = document.getElementById('line-numbers');
        
        if (!codeEditor || !lineNumbers) return;
        
        const lines = codeEditor.value.split('\n');
        const lineNumbersText = lines.map((_, index) => index + 1).join('\n');
        lineNumbers.textContent = lineNumbersText;
        
        // Update cursor position
        const cursorPos = codeEditor.selectionStart;
        const textBeforeCursor = codeEditor.value.substring(0, cursorPos);
        const lineNumber = textBeforeCursor.split('\n').length;
        const columnNumber = textBeforeCursor.split('\n').pop().length + 1;
        
        document.getElementById('cursor-line').textContent = lineNumber;
        document.getElementById('cursor-col').textContent = columnNumber;
    }

    syncLineNumbers() {
        const codeEditor = document.getElementById('code-editor');
        const lineNumbers = document.getElementById('line-numbers');
        
        if (codeEditor && lineNumbers) {
            lineNumbers.scrollTop = codeEditor.scrollTop;
        }
    }

    handleKeyDown(e) {
        // Add auto-indentation and other editor features
        if (e.key === 'Tab') {
            e.preventDefault();
            const codeEditor = e.target;
            const start = codeEditor.selectionStart;
            const end = codeEditor.selectionEnd;
            
            codeEditor.value = codeEditor.value.substring(0, start) + '    ' + codeEditor.value.substring(end);
            codeEditor.selectionStart = codeEditor.selectionEnd = start + 4;
            this.updateLineNumbers();
        }
    }

    runTests(problem) {
        const codeEditor = document.getElementById('code-editor');
        const outputContent = document.getElementById('output-content');
        
        if (!codeEditor || !outputContent) return;
        
        const code = codeEditor.value;
        const testResults = this.executeTests(code, problem);
        
        outputContent.innerHTML = this.formatTestResults(testResults);
    }

    executeTests(code, problem) {
        // Simulate test execution (in a real implementation, this would use a sandboxed environment)
        try {
            const results = [];
            const testCases = this.getTestCases(problem);
            
            // Mock test execution
            testCases.forEach((testCase, index) => {
                const passed = Math.random() > 0.3; // Simulate some tests passing
                results.push({
                    index: index + 1,
                    input: testCase.input,
                    expected: testCase.expected,
                    actual: passed ? testCase.expected : 'Incorrect output',
                    passed: passed,
                    executionTime: Math.floor(Math.random() * 100) + 'ms'
                });
            });
            
            return {
                success: true,
                results: results,
                totalTests: testCases.length,
                passedTests: results.filter(r => r.passed).length
            };
        } catch (error) {
            return {
                success: false,
                error: error.message,
                results: []
            };
        }
    }

    getTestCases(problem) {
        // Generate test cases based on problem type
        const title = problem.title.toLowerCase();
        
        if (title.includes('two sum')) {
            return [
                { input: '[2,7,11,15], 9', expected: '[0,1]' },
                { input: '[3,2,4], 6', expected: '[1,2]' },
                { input: '[3,3], 6', expected: '[0,1]' }
            ];
        } else {
            return [
                { input: 'Sample input 1', expected: 'Expected output 1' },
                { input: 'Sample input 2', expected: 'Expected output 2' }
            ];
        }
    }

    formatTestResults(testResults) {
        if (!testResults.success) {
            return `
                <div class="test-error">
                    <div class="error-header">❌ Compilation Error</div>
                    <div class="error-message">${testResults.error}</div>
                </div>
            `;
        }
        
        const { results, totalTests, passedTests } = testResults;
        const allPassed = passedTests === totalTests;
        
        let html = `
            <div class="test-summary ${allPassed ? 'all-passed' : 'some-failed'}">
                <div class="summary-header">
                    ${allPassed ? '✅' : '⚠️'} ${passedTests}/${totalTests} tests passed
                </div>
                ${allPassed ? '<div class="success-message">🎉 All tests passed! Great job!</div>' : ''}
            </div>
        `;
        
        results.forEach(result => {
            html += `
                <div class="test-case ${result.passed ? 'passed' : 'failed'}">
                    <div class="test-header">
                        <span class="test-status">${result.passed ? '✅' : '❌'}</span>
                        <span class="test-title">Test Case ${result.index}</span>
                        <span class="test-time">${result.executionTime}</span>
                    </div>
                    <div class="test-details">
                        <div class="test-input">Input: <code>${result.input}</code></div>
                        <div class="test-expected">Expected: <code>${result.expected}</code></div>
                        <div class="test-actual">Your Output: <code>${result.actual}</code></div>
                    </div>
                </div>
            `;
        });
        
        return html;
    }

    showHint(problem) {
        const hintContent = document.getElementById('hint-content');
        const hints = this.getHintsForProblem(problem);
        
        if (this.currentHintIndex === undefined) {
            this.currentHintIndex = 0;
        } else {
            this.currentHintIndex = Math.min(this.currentHintIndex + 1, hints.length - 1);
        }
        
        const hint = hints[this.currentHintIndex];
        
        hintContent.innerHTML = `
            <div class="hint-item">
                <div class="hint-header">💡 Hint ${this.currentHintIndex + 1}/${hints.length}</div>
                <div class="hint-text">${hint}</div>
                ${this.currentHintIndex < hints.length - 1 ? 
                    '<button class="btn btn-secondary" onclick="codeEditor.showHint(codeEditor.currentProblem)">Next Hint →</button>' : 
                    '<div class="hint-complete">🌟 You\'ve seen all hints! Try implementing the solution.</div>'
                }
            </div>
        `;
    }

    getHintsForProblem(problem) {
        const title = problem.title.toLowerCase();
        
        if (title.includes('two sum')) {
            return [
                "🤔 Think about what information you need to store as you iterate through the array.",
                "💭 For each number, what value would you need to find to reach the target sum?",
                "🗃️ Consider using a hash map to store values you've already seen.",
                "⚡ You can solve this in O(n) time with a single pass through the array!"
            ];
        } else if (title.includes('binary search')) {
            return [
                "🎯 The key insight is that the array is sorted - take advantage of this!",
                "📍 Think about how you can eliminate half of the search space in each step.",
                "🔄 Use two pointers: left and right boundaries of your search space.",
                "🎪 Calculate the middle point and compare it with your target."
            ];
        } else {
            return [
                "🤔 Break down the problem into smaller subproblems.",
                "📝 Consider the input constraints and edge cases.",
                "🔄 Think about different approaches: brute force vs optimized.",
                "⚡ Consider the time and space complexity of your solution."
            ];
        }
    }

    showSolution(problem) {
        const hintContent = document.getElementById('hint-content');
        const solution = this.getSolutionForProblem(problem);
        
        hintContent.innerHTML = `
            <div class="solution-container">
                <div class="solution-header">🔓 Complete Solution</div>
                <div class="solution-approach">
                    <h5>💭 Approach:</h5>
                    <p>${solution.approach}</p>
                </div>
                <div class="solution-code">
                    <h5>💻 Implementation:</h5>
                    <pre><code>${solution.code}</code></pre>
                </div>
                <div class="solution-complexity">
                    <h5>📊 Complexity Analysis:</h5>
                    <div class="complexity-grid">
                        <div class="complexity-item">
                            <span class="complexity-label">Time Complexity:</span>
                            <span class="complexity-value">${solution.timeComplexity}</span>
                        </div>
                        <div class="complexity-item">
                            <span class="complexity-label">Space Complexity:</span>
                            <span class="complexity-value">${solution.spaceComplexity}</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        document.getElementById('complexity-analysis').style.display = 'block';
        document.getElementById('time-complexity-value').textContent = solution.timeComplexity;
        document.getElementById('space-complexity-value').textContent = solution.spaceComplexity;
    }

    getSolutionForProblem(problem) {
        const title = problem.title.toLowerCase();
        
        if (title.includes('two sum')) {
            return {
                approach: "Use a hash map to store each number and its index as we iterate. For each number, check if its complement (target - current number) exists in the hash map.",
                code: `function twoSum(nums, target) {
    const map = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        
        map.set(nums[i], i);
    }
    
    return [];
}`,
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)"
            };
        } else {
            return {
                approach: "This is a sample solution approach for the given problem.",
                code: `function solve() {
    // Implementation here
    return result;
}`,
                timeComplexity: "O(n)",
                spaceComplexity: "O(1)"
            };
        }
    }
}

// Initialize the code editor when the page loads
let codeEditor;
document.addEventListener('DOMContentLoaded', () => {
    // Initialize after the game is loaded
    setTimeout(() => {
        if (window.game) {
            codeEditor = new CodeEditor(window.game);
            window.codeEditor = codeEditor; // Make it globally accessible
        }
    }, 1000);
});
