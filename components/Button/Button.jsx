import { forwardRef } from 'react';
import Link from 'next/link';
import { FaSpinner } from 'react-icons/fa';
import { Icon } from '../Icon';

const BUTTON_TYPES = ['button', 'submit'];

const Button = forwardRef(
  (
    {
      id,
      className,
      type,
      primary,
      outline,
      alert,
      url,
      external,
      role,
      disabled,
      children,
      onClick,
      onFocus,
      onBlur,
      onKeyUp,
      unstyled,
      loading,
      ariaLabel,
      ariaControls,
      ariaChecked,
      ariaExpanded,
      ariaDescribedBy,
      ariaPressed,
    },
    ref
  ) => {
    const coreProps = {
      id,
      className: unstyled ? 'btn-unstyled' : 'btn',
      type: BUTTON_TYPES.includes(type) ? type : 'button',
      role: role ? role + ' button' : 'button',
      disabled,
      ref,
    };

    coreProps.className += primary
      ? ' btn-primary py-3 px-6 md:px-3 lg:px-6 text-sm font-bold text-theme-accent-2 rounded-3xl border border-theme-accent-2 hover:bg-theme-accent-2 hover:text-white transition-colors'
      : '';
    coreProps.className += outline ? ' btn-outline' : '';
    coreProps.className += alert ? ' btn-alert' : '';
    coreProps.className += disabled ? ' btn-disabled' : '';
    coreProps.className += className ? ` ${className}` : '';

    const interactiveProps = {
      onFocus,
      onBlur,
      onClick,
      onKeyUp,
    };

    const linkProps = {
      rel: url && Boolean(external) ? 'noreferrer' : undefined,
      target: url && Boolean(external) ? '_blank' : undefined,
      href: url,
    };

    const loadingMarkup = loading ? <Icon src={FaSpinner} size="2x" /> : null;

    const accessibilityProps = {
      'aria-disabled': disabled ? true : undefined,
      'aria-busy': loading ? true : undefined,
      'aria-label': ariaLabel,
      'aria-controls': ariaControls,
      'aria-describedby': ariaDescribedBy,
      'aria-pressed': ariaPressed,
      'aria-checked': ariaChecked,
      'aria-expanded': ariaExpanded,
    };

    const Element = url ? (external ? 'a' : Link) : 'button';

    return (
      <Element
        {...coreProps}
        {...interactiveProps}
        {...accessibilityProps}
        {...linkProps}
      >
        {loadingMarkup}
        <span className="JS-ButtonText">{children}</span>
      </Element>
    );
  }
);

Button.displayName = 'Button';
export { Button };
