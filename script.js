1 //Iterating with Async/Await
async function iterateWithAsyncAwait(values) {
    for (const value of values) {
        await new Promise(resolve => setTimeout(resolve, 1000)); // Wait for 1 second
        console.log(value);
    }
}

iterateWithAsyncAwait([1, 2, 3, 4, 5]);


2 //Awaiting a Call
async function awaitCall() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Failed to fetch data:', error.message);
    }
}

awaitCall();



3 //Handling Errors with Async/Await
async function awaitCall() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Failed to fetch data:', error.message);
    }
}

awaitCall();





4 //Awaiting Concurrent Requests
async function concurrentRequests() {
    try {
        const [response1, response2] = await Promise.all([
            fetch('https://jsonplaceholder.typicode.com/posts/1'),
            fetch('https://jsonplaceholder.typicode.com/posts/2')
        ]);

        if (!response1.ok || !response2.ok) {
            throw new Error('Failed to fetch data');
        }

        const data1 = await response1.json();
        const data2 = await response2.json();
        
        console.log('Data from first API call:', data1);
        console.log('Data from second API call:', data2);
    } catch (error) {
        console.error('Failed to fetch data:', error.message);
    }
}

concurrentRequests();



5 //Awaiting Parallel Calls

async function parallelCalls(urls) {
    try {
        const promises = urls.map(url => fetch(url).then(response => response.json()));
        const results = await Promise.all(promises);
        
        console.log('All responses:', results);
    } catch (error) {
        console.error('Failed to fetch data:', error.message);
    }
}

// Example usage:
parallelCalls([
    'https://jsonplaceholder.typicode.com/posts/1',
    'https://jsonplaceholder.typicode.com/posts/2',
    'https://jsonplaceholder.typicode.com/posts/3'
]);


