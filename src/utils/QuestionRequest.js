export async function getQuestion() {
  const sleep = ms => new Promise(
    resolve => setTimeout(resolve, ms));

  let data = {
    question: 'Is this thing turned on?',
    answers: [
      {label: 'Answer 1', isCorrect: true},
      {label: 'Answer 2'},
      {label: 'Answer 3'},
      {label: 'Answer 4'}
    ],
  };

  if (true) {
    await sleep(500);
    return data;
  } else {
    // Sometimes the API will fail!
    throw new Error('Request failed');
  }
}