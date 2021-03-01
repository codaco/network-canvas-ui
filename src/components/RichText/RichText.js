import React, { Fragment, useCallback, useState, useEffect, useMemo } from 'react';
import { Editable, withReact, Slate } from 'slate-react';
import { createEditor } from 'slate';
import { withHistory } from 'slate-history';
import { includes, noop } from 'lodash';
import { MarkButton, BlockButton } from './buttons';
import { Element, Leaf } from './renderers';
import serialize from './serialize';
import parse from './parse';

const types = [
  'bold',
  'italic',
  'underline',
  'code',
  'quote',
  'headings',
  'lists',
];

const initialValue = [{
  children: [
    { text: '' },
  ],
}];

const parseValue = (value) => {
  if (!value || value === '') { return initialValue; }

  return parse(value);
};

const Toolbar = ({ controls }) => (
  <div className="rich-text__toolbar">
    { includes(controls, 'bold') && <MarkButton format="bold" icon="format_bold" /> }
    { includes(controls, 'italic') && <MarkButton format="italic" icon="format_italic" /> }
    { includes(controls, 'underline') && <MarkButton format="underline" icon="format_underlined" /> }
    { includes(controls, 'code') && <MarkButton format="code" icon="code" /> }
    { includes(controls, 'headings') && (
      <Fragment>
        <BlockButton format="heading_one" icon="looks_one" />
        <BlockButton format="heading_two" icon="looks_two" />
      </Fragment>
    )}
    { includes(controls, 'quote') &&
      <BlockButton format="block-quote" icon="format_quote" />
    }
    { includes(controls, 'list') && (
      <Fragment>
        <BlockButton format="numbered_list" icon="format_list_numbered" />
        <BlockButton format="bulleted_list" icon="format_list_bulleted" />
      </Fragment>
    )}
  </div>
);

const RichText = ({ allow, ...props }) => {
  const [value, setValue] = useState(initialValue);
  const renderElement = useCallback(props => <Element {...props} />, []);
  const renderLeaf = useCallback(props => <Leaf {...props} />, []);
  const editor = useMemo(() => withHistory(withReact(createEditor())), []);

  useEffect(() => {
    console.log('onchange', { value, serialized: serialize(value) });
    props.onChange(serialize(value));
  }, [JSON.stringify(value)]);

  useEffect(() => {
    parseValue(props.value)
      .then((result) => {
        console.log({ parse: result });
        setValue(result);
      });
  }, []);

  const handleChange = (value) => {
    console.log({ value });
    setValue(value);
  };

  return (
    <Slate editor={editor} value={value} onChange={handleChange}>
      <div className="rich-text">
        <Toolbar controls={allow} />
        <div className="rich-text__editable">
          <Editable
            renderElement={renderElement}
            renderLeaf={renderLeaf}
            placeholder=""
            spellCheck
            autoFocus
          />
        </div>
      </div>
    </Slate>
  );
};

RichText.defaultProps = {
  value: [],
  onChange: noop,
  allow: types,
};

export default RichText;
