import { motion, useDragControls, useMotionValue } from 'framer-motion';
import { createUseGesture, dragAction, pinchAction } from '@use-gesture/react';
import React, { useState, useRef } from 'react';

const useGesture = createUseGesture([dragAction, pinchAction]);

const Resizable = (props) => {
  const {
    onResize,
    minWidth,
    minHeight,
    maxWidth,
    maxHeight,
    children,
  } = props;

  const ref = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const mHeight = useMotionValue(200);
  const mWidth = useMotionValue(200);

  const mX = useMotionValue(200);
  const mY = useMotionValue(200);

  const handleDrag = React.useCallback((event, info) => {
    const newHeight = mHeight.get() + info.delta.y;
    const newWidth = mWidth.get() + info.delta.x;

    mHeight.set(newHeight);
    mWidth.set(newWidth);
  }, []);

  useGesture(
    {
      target: ref,
      pinch: { scaleBounds: { min: 0.5, max: 2 }, rubberband: true },
    },
  );

  const handlePosition = React.useCallback((event, info) => {
    const {
      x,
      y,
    } = info.point;
    console.log('pos', info);
    mX.set(x);
    mY.set(y);
  }, []);

  return (
    <div style={{ position: 'relative' }}>
      <motion.div
        ref={ref}
        drag
        dragConstraints={{ top: 0, left: 0, right: window.innerWidth - 300, bottom: window.innerHeight - 300 }}
        dragMomentum={0}
        onDrag={handlePosition}
        style={{
          backgroundColor: 'tomato',
          height: mHeight,
          width: mWidth,
          cursor: isDragging ? 'row-resize' : '',
        }}
        onDoubleClick={() => {
          console.log('Dbl click');
          mHeight.set(400);
          mWidth.set(400);
        }}
      >
        <motion.div
          style={{
            backgroundColor: 'powderblue',
            height: 20,
            width: 100,
            cursor: 'row-resize',
            textAlign: 'center',
            // position: 'absolute',
            // top: mX,
            // left: mY,
          }}
          drag
          // dragConstraints={{ top: 0, left: 0, right: 0 }}
          dragElastic={0}
          dragMomentum={false}
          onDrag={handleDrag}
          onDragEnd={() => {
            setIsDragging(false);
          }}
          onDragStart={() => {
            setIsDragging(true);
          }}
        >
          Handle
        </motion.div>
        <div>
          {children}
        </div>
      </motion.div>
    </div>
  );
};

Resizable.propTypes = {
};

Resizable.defaultProps = {
};

export default Resizable;
