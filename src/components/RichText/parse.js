import slate from 'remark-slate';
import unified from 'unified';
import markdown from 'remark-parse';

const parse = (value) => {
  return unified()
    .use(markdown)
    .use(slate)
    .process(value)
    .then(({ result }) => result);
};

export default parse;
