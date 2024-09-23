function greetUser(input) {
    if (typeof input === 'string' && input.trim() !== '') {
        console.log(`Hello, ${input.trim()}!`);
    } else {
        console.log('Please enter a valid name.');
    }
}

// Example usage:
greetUser('Miles');  // Output: Hello, Miles!
greetUser('');       // Output: Please enter a valid name.
greetUser('   ');    // Output: Please enter a valid name.
