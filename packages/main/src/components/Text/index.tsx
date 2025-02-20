import { createUseStyles } from 'react-jss';
import React, { forwardRef, ReactNode, Ref } from 'react';
import { CommonProps } from '../../interfaces/CommonProps';
import { useDeprecationNoticeForTooltip } from '../../internal/useDeprecationNotiveForTooltip';
import { TextStyles } from './Text.jss';
import clsx from 'clsx';

export interface TextPropTypes extends CommonProps {
  /**
   * Pass the text as direct child of Text
   */
  children: string | JSX.Element | ReactNode;
  /**
   * Defines how white-space inside <code>Text</code> is handled. If set to true, sequences of white space are preserved.
   */
  renderWhitespace?: boolean;
  /**
   * Defines whether the text wraps when there is not enough space.
   */
  wrapping?: boolean;
}

const useStyles = createUseStyles(TextStyles, { name: 'Text' });
/**
 * The `Text` component can be used for embedding text into your app. You can hyphenate the text with the use of the `wrapping` prop.
 * <br />__Note:__ Line breaks will always be visualized except when the wrapping property is set to false. In addition, tabs and whitespace can be preserved by setting the renderWhitespace property to true.
 */
const Text = forwardRef((props: TextPropTypes, ref: Ref<HTMLSpanElement>) => {
  const { children, renderWhitespace, wrapping, className, style, tooltip, slot, ...rest } = props;

  useDeprecationNoticeForTooltip('Text', props.tooltip);

  const classes = useStyles();
  const classNameString = clsx(
    classes.text,
    wrapping === false && classes.noWrap,
    renderWhitespace && classes.renderWhitespace,
    className
  );

  return (
    <span ref={ref} style={style} className={classNameString} title={tooltip} slot={slot} {...rest}>
      {children}
    </span>
  );
});

Text.defaultProps = {
  renderWhitespace: false,
  wrapping: true
};

Text.displayName = 'Text';

export { Text };
