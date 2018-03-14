console.log(process.argv.reduce((a, x, i) => {
  return i > 1? a + parseInt(x): a;
}, 0));

