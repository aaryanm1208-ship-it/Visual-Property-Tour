// Get references to the DOM elements
const component = document.getElementById('my-component');
const description = document.getElementById('tour-description');

/**
 * Applies the styles and description for a specific tour step.
 * @param {number} stepNumber - The step to apply (1 or 2).
 */
function applyStep(stepNumber) {
    // 1. Reset all previous step styles
    component.className = 'ui-component';

    // 2. Apply the styles and update the description for the current step
    if (stepNumber === 1) {
        component.classList.add('step-1-style');
        description.innerHTML = '✅ **CSS Change:** Applied `background-color: #e6f7ff;`. This change makes the component visually distinct to signify a new feature.';
    } else if (stepNumber === 2) {
        component.classList.add('step-2-style');
        description.innerHTML = '✅ **CSS Change:** Applied `border-style: dashed;` and `border-color: #ff4d4f;`. This update highlights a temporary or experimental state.';
    }
}

/**
 * Resets the UI component and the tour guide description.
 */
function resetTour() {
    component.className = 'ui-component'; // Resets to the base style
    description.innerHTML = 'Click a step to see the corresponding visual property change and its description.';
}
