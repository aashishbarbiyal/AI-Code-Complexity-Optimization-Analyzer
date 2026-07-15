document.getElementById('analyze-btn').addEventListener('click', async () => {
    const code = document.getElementById('code-input').value;
    
    if (!code.trim()) {
        alert("Please paste some code to analyze.");
        return;
    }

    const analyzeBtn = document.getElementById('analyze-btn');

    // Set loading state
    analyzeBtn.disabled = true;
    analyzeBtn.textContent = 'Analyzing...';

    // A lean prompt since the API now knows we want JSON
    const promptText = `Analyze the complexity of this code. 
    Return a JSON object with these exact keys: "timeComplexity", "spaceComplexity", and an array of 2 short "refactoringTips".
    
    Code:
    ${code}`;

    try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash:generateContent?key=${CONFIG.GEMINI_API_KEY}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{ parts: [{ text: promptText }] }],
                generationConfig: {
                    temperature: 0.1,
                    responseMimeType: "application/json" 
                }
            })
        });

        const data = await response.json();
        
        if (data.error) {
            throw new Error(data.error.message);
        }

        // Because of responseMimeType, we don't need to clean the text anymore!
        const responseText = data.candidates[0].content.parts[0].text;
        const analysis = JSON.parse(responseText);

        // Populate the UI
        document.getElementById('time-complexity').textContent = analysis.timeComplexity;
        document.getElementById('space-complexity').textContent = analysis.spaceComplexity;
        
        const tipsList = document.getElementById('tips-list');
        tipsList.innerHTML = analysis.refactoringTips.map(tip => `<li>${tip}</li>`).join('');

    } catch (error) {
        console.error("Analysis failed:", error);
        alert("An error occurred during analysis. Please check your API key and the console for details.");
    } finally {
        // Reset button state
        analyzeBtn.disabled = false;
        analyzeBtn.textContent = 'Analyze Code';
    }
});