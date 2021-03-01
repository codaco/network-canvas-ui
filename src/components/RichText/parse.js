import slate from 'remark-slate';
import unified from 'unified';
import markdown from 'remark-parse';

const parse = (value) => {
  const data = unified()
    .use(markdown)
    .use(slate)
    .parse(value);

  return data;
};

export default parse;
