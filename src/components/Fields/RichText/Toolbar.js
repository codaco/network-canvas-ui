import React from 'react';
import PropTypes from 'prop-types';
import { includes } from 'lodash';
import { MarkButton, BlockButton, ToolbarButton } from './ToolbarButton';
import { TOOLBAR_ITEMS } from './lib/options';

const Toolbar = ({ editor }) => {
  const { disallowedTypes } = editor;
  const filteredItems = TOOLBAR_ITEMS.filter((item) => !disallowedTypes.includes(item));

  return (
    <div className="rich-text__toolbar">
      { includes(filteredItems, 'bold') && <MarkButton format="bold" icon="bold" tooltip="Bold" /> }
      { includes(filteredItems, 'italic') && <MarkButton format="italic" icon="italic" tooltip="Italic" /> }
      { includes(filteredItems, 'headings') && (
        <>
          <div className="toolbar-spacer" />
          <BlockButton format="heading_one" icon="h1" tooltip="Heading One" />
          <BlockButton format="heading_two" icon="h2" tooltip="Heading Two" />
          <BlockButton format="heading_three" icon="h3" tooltip="Heading Three" />
          <BlockButton format="heading_four" icon="h4" tooltip="Heading Four" />
        </>
      )}
      { includes(filteredItems, 'quote') && (
        <>
          <div className="toolbar-spacer" />
          <BlockButton format="block_quote" icon="quote" tooltip="Quote" />
        </>
      )}
      { includes(filteredItems, 'lists') && (
        <>
          <div className="toolbar-spacer" />
          <BlockButton format="ol_list" icon="ol" tooltip="Numbered List" />
          <BlockButton format="ul_list" icon="ul" tooltip="Bulleted List" />
        </>
      )}
      { includes(filteredItems, 'history') && (
        <>
          <div className="toolbar-spacer" />
          <ToolbarButton
            icon="undo"
            tooltip="Undo"
            action={editor.undo}
          />
          <ToolbarButton
            icon="redo"
            tooltip="Redo"
            action={editor.redo}
          />
        </>
      )}
    </div>
  );
};

Toolbar.propTypes = {
  editor: PropTypes.object.isRequired,
};

export default Toolbar;
